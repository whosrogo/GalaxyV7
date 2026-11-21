<script>
	// Shared index panel for the rebuild test folders (/tests, /slatetests, /booktests, /booktests/grid).
	// Used only by those index routes; the test pages themselves never import it.
	// Opened state lives in this browser's localStorage only, under `storageKey`.
	import { onMount } from 'svelte';

	/** @type {{ title: string, storageKey: string, groups: { id: string, title: string, note?: string, links: { href: string, tag: string, label: string }[] }[] }} */
	let { title, storageKey, groups } = $props();

	const all = $derived(groups.flatMap((g) => g.links));

	let opened = $state({}); // href -> timestamp of last open
	let lastHref = $state(null);
	let filter = $state('all');
	let now = $state(Date.now());
	let confirmReset = $state(false);
	let resetTimer = null;

	function load() {
		try {
			const data = JSON.parse(localStorage.getItem(storageKey) ?? '{}');
			opened = data.opened ?? {};
			lastHref = data.last ?? null;
		} catch {
			opened = {};
			lastHref = null;
		}
	}
	function save() {
		try {
			localStorage.setItem(storageKey, JSON.stringify({ opened, last: lastHref }));
		} catch {}
	}

	function markOpened(href) {
		opened[href] = Date.now();
		lastHref = href;
		save();
	}
	function resetAll() {
		if (!confirmReset) {
			confirmReset = true;
			clearTimeout(resetTimer);
			resetTimer = setTimeout(() => (confirmReset = false), 3000);
			return;
		}
		clearTimeout(resetTimer);
		confirmReset = false;
		opened = {};
		lastHref = null;
		save();
	}

	const nextLink = $derived(all.find((l) => !opened[l.href]) ?? null);
	const nextGroup = $derived(nextLink ? groups.find((g) => g.links.includes(nextLink)) : null);
	const openedCount = $derived(all.filter((l) => opened[l.href]).length);
	const groupCount = (g) => g.links.filter((l) => opened[l.href]).length;
	const visible = (l) =>
		filter === 'all' || (filter === 'opened' ? !!opened[l.href] : !opened[l.href]);

	function openNext() {
		if (!nextLink) return;
		// Capture first: marking it opened recomputes nextLink.
		const { href } = nextLink;
		markOpened(href);
		window.open(href, '_blank', 'noopener');
	}

	function ago(ts) {
		const s = Math.max(0, Math.round((now - ts) / 1000));
		if (s < 60) return 'just now';
		const m = Math.round(s / 60);
		if (m < 60) return `${m}m ago`;
		const h = Math.round(m / 60);
		if (h < 24) return `${h}h ago`;
		return `${Math.round(h / 24)}d ago`;
	}

	onMount(() => {
		load();
		const tick = setInterval(() => (now = Date.now()), 30000);
		const onStorage = (e) => e.key === storageKey && load();
		// Tests open in new tabs; re-read state if this page is restored from the back/forward cache.
		const onShow = () => {
			load();
			now = Date.now();
		};
		addEventListener('storage', onStorage);
		addEventListener('pageshow', onShow);
		return () => {
			clearInterval(tick);
			removeEventListener('storage', onStorage);
			removeEventListener('pageshow', onShow);
		};
	});
</script>

{#snippet popIcon()}
	<svg class="popIcon" viewBox="0 0 16 16" aria-hidden="true">
		<path d="M9.5 2.5h4v4" />
		<path d="M13.5 2.5 7.5 8.5" />
		<path d="M12 9.5v3a1 1 0 0 1-1 1H3.5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3" />
	</svg>
{/snippet}

<div class="page">
	<nav class="side noSelect" aria-label="Sections">
		{#each groups as g}
			<button
				class="sideBtn"
				onclick={() => document.getElementById(g.id)?.scrollIntoView({ behavior: 'smooth' })}
			>
				<span class="sideName">{g.title}</span>
				<span class="sideCount" class:done={groupCount(g) === g.links.length}
					>{groupCount(g)}/{g.links.length}</span
				>
			</button>
		{/each}
	</nav>

	<main class="main">
		<header class="head">
			<h1>{title}</h1>

			<div class="progress">
				<div class="bar"><div class="fill" style="width: {(openedCount / all.length) * 100}%"></div></div>
				<span class="progressText">{openedCount} of {all.length} opened</span>
			</div>

			<div class="toolbar noSelect">
				<button
					class="actionBtn primary"
					onclick={openNext}
					disabled={!nextLink}
					title={nextLink ? `Opens ${nextLink.tag} in a new tab` : undefined}
				>
					{#if nextLink}
						Open next <span class="nextTag">{nextLink.tag}</span>
						<span class="nextGroup">{nextGroup?.title}</span>
						{@render popIcon()}
					{:else}
						All opened
					{/if}
				</button>
				<div class="pills" role="group" aria-label="Filter">
					{#each [['all', 'All'], ['unopened', 'Unopened'], ['opened', 'Opened']] as [value, label]}
						<button
							class="pill"
							class:active={filter === value}
							aria-pressed={filter === value}
							onclick={() => (filter = value)}>{label}</button
						>
					{/each}
				</div>
				<button class="actionBtn reset" class:confirm={confirmReset} onclick={resetAll}>
					{confirmReset ? 'Click again to reset' : 'Reset'}
				</button>
			</div>
		</header>

		<div class="groups">
			{#each groups as g}
				{@const shown = g.links.filter(visible)}
				<section class="group" id={g.id}>
					<div class="groupHead">
						<div>
							<h2 class="groupTitle">{g.title}</h2>
							{#if g.note}<p class="groupNote">{g.note}</p>{/if}
						</div>
						<span class="groupCount" class:done={groupCount(g) === g.links.length}
							>{groupCount(g)}/{g.links.length}</span
						>
					</div>
					<div class="groupBar">
						<div class="fill" style="width: {(groupCount(g) / g.links.length) * 100}%"></div>
					</div>

					{#if shown.length}
						<ul class="rows">
							{#each shown as l (l.href)}
								<li class="row" class:opened={!!opened[l.href]} class:last={lastHref === l.href}>
									<!-- Status only: not a control. Steps are marked when their link is opened. -->
									<span class="check" aria-hidden="true">
										{#if opened[l.href]}
											<svg viewBox="0 0 16 16"><path d="M3.5 8.5l3 3 6-7" /></svg>
										{/if}
									</span>
									<a
										class="rowLink"
										href={l.href}
										target="_blank"
										rel="noopener"
										title="Opens {l.tag} in a new tab"
										onclick={() => markOpened(l.href)}
										onauxclick={(e) => e.button === 1 && markOpened(l.href)}
									>
										<span class="tag" class:control={l.tag === 's00'}>{l.tag}</span>
										<span class="label">{l.label}</span>
										<span class="meta">
											{#if lastHref === l.href}<span class="lastBadge">last opened</span>{/if}
											{#if opened[l.href]}<span class="when">{ago(opened[l.href])}</span>{/if}
										</span>
										{@render popIcon()}
										<span class="srOnly"
											>{opened[l.href] ? ', opened' : ', not opened'}, opens in a new tab</span
										>
									</a>
								</li>
							{/each}
						</ul>
					{:else}
						<p class="empty">Nothing {filter} here.</p>
					{/if}
				</section>
			{/each}
		</div>
	</main>
</div>

<style>
	/* Scoped to this panel. Mirrors settings.css / apps.css conventions and tokens. */
	.page {
		position: fixed;
		inset: 0;
		overflow-y: auto;
		background: var(--color-bg);
		color: var(--color-text);
		font-family: var(--font-family-body);
	}

	/* Side nav: settings .nav / .navBtn */
	.side {
		position: fixed;
		top: 24px;
		left: 24px;
		width: 200px;
		max-height: calc(100vh - 48px);
		overflow-y: auto;
		z-index: 10;
		display: flex;
		flex-direction: column;
		gap: 6px;
		padding: 14px;
		box-sizing: border-box;
		border-radius: 16px;
		backdrop-filter: blur(var(--blur-normal));
	}
	.sideBtn {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 10px;
		padding: 10px 12px;
		color: var(--color-text-muted);
		border: 0;
		border-radius: 10px;
		background: transparent;
		font-family: var(--font-family-heading);
		font-size: 0.95rem;
		text-align: left;
		cursor: pointer;
		transition: all 0.2s ease;
	}
	.sideBtn:hover {
		background: var(--overlay-hover-strong);
		color: var(--color-text);
		transform: translateX(5px);
	}
	.sideBtn:active {
		background: var(--overlay-active);
	}
	.sideName {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.sideCount {
		flex-shrink: 0;
		font-size: 0.8rem;
		color: var(--color-text-subtle);
		font-variant-numeric: tabular-nums;
	}
	.sideCount.done {
		color: var(--color-text);
	}

	.main {
		max-width: 1000px;
		padding: 0 56px 120px 280px;
	}

	/* Sticky header keeps progress and actions in view while scrolling */
	.head {
		position: sticky;
		top: 0;
		z-index: 5;
		padding: 44px 0 22px;
		background: color-mix(in srgb, var(--color-bg) 86%, transparent);
		backdrop-filter: blur(var(--blur-normal));
		border-bottom: 1px solid var(--color-border);
	}
	.head h1 {
		margin: 0;
		font-family: var(--font-family-heading);
		font-size: 2.4rem;
		font-weight: 400;
		letter-spacing: 0.01em;
	}

	.progress {
		display: flex;
		align-items: center;
		gap: 16px;
		margin-top: 22px;
	}
	.bar,
	.groupBar {
		height: 8px;
		border-radius: 999px;
		background: var(--overlay-hover);
		overflow: hidden;
	}
	.bar {
		flex: 1;
	}
	.fill {
		height: 100%;
		border-radius: inherit;
		background: var(--color-text);
		transition: width 0.3s ease;
	}
	.progressText {
		flex-shrink: 0;
		font-size: 14px;
		color: var(--color-text-muted);
		font-variant-numeric: tabular-nums;
	}

	.toolbar {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 14px;
		margin-top: 22px;
	}

	/* Buttons: settings .actionBtn */
	.actionBtn {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 10px 20px;
		color: var(--color-text-muted);
		border: 0;
		border-radius: 10px;
		background: var(--overlay-hover);
		font-family: var(--font-family-heading);
		font-size: 0.95rem;
		font-weight: 900;
		cursor: pointer;
		transition: all 0.2s ease;
	}
	.actionBtn:hover:not(:disabled) {
		background: var(--overlay-hover-strong);
		color: var(--color-text);
		transform: translateY(-3px);
	}
	.actionBtn:active:not(:disabled) {
		background: var(--overlay-active);
	}
	.actionBtn:disabled {
		cursor: default;
		opacity: 0.6;
	}
	.actionBtn.primary,
	.actionBtn.primary:hover:not(:disabled) {
		background: var(--color-white);
		color: var(--color-black);
	}
	.nextTag {
		padding: 2px 9px;
		border-radius: 999px;
		background: var(--color-black);
		color: var(--color-white);
		font-family: var(--font-family-body);
		font-size: 12px;
		font-weight: 400;
	}
	.nextGroup {
		font-family: var(--font-family-body);
		font-size: 13px;
		font-weight: 400;
		opacity: 0.7;
	}
	.actionBtn.reset {
		margin-left: auto;
	}
	.actionBtn.reset.confirm {
		background: var(--color-danger);
		color: var(--color-white);
	}

	/* Filter pills: apps .pill */
	.pills {
		display: flex;
		gap: 8px;
	}
	.pill {
		padding: 8px 18px;
		background: var(--overlay-hover);
		border: 1px solid var(--color-border);
		border-radius: 999px;
		color: var(--color-text-muted);
		font-family: var(--font-family-body);
		font-size: 14px;
		cursor: pointer;
		transition:
			background 0.2s,
			color 0.2s;
	}
	.pill:hover {
		background: var(--overlay-hover-strong);
		color: var(--color-text);
	}
	.pill.active {
		background: var(--color-white);
		color: var(--color-black);
		border-color: var(--color-white);
	}

	.groups {
		display: flex;
		flex-direction: column;
		gap: 32px;
		margin-top: 32px;
	}

	/* Cards: settings .subGroup */
	.group {
		scroll-margin-top: 220px;
		padding: 26px 22px 22px;
		background-color: var(--color-surface-2);
		border-radius: 18px;
		box-shadow: 0 0 30px rgba(0, 0, 0, 0.61);
	}
	.groupHead {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 20px;
		padding: 0 6px;
	}
	.groupTitle {
		margin: 0;
		font-family: var(--font-family-heading);
		font-size: 24px;
		font-weight: 400;
	}
	.groupNote {
		margin: 8px 0 0;
		max-width: 70ch;
		color: var(--color-text-muted);
		font-size: 14px;
		line-height: 22px;
	}
	.groupCount {
		flex-shrink: 0;
		padding: 5px 14px;
		border-radius: 999px;
		border: 1px solid var(--color-border-strong);
		color: var(--color-text-muted);
		font-size: 13px;
		font-variant-numeric: tabular-nums;
	}
	.groupCount.done {
		background: var(--color-pin);
		border-color: var(--color-pin);
		color: var(--color-text-dark);
	}
	.groupBar {
		height: 4px;
		margin: 18px 6px 18px;
	}

	/* Rows: one spaced tile per step; the link fills the tile */
	.rows {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.row {
		display: flex;
		align-items: center;
		border: 1px solid var(--color-border);
		border-radius: 12px;
		background: var(--color-surface);
		transition:
			background 0.2s ease,
			border-color 0.2s ease;
	}
	.row:hover {
		background: var(--overlay-hover);
		border-color: var(--color-border-hover);
	}
	.row.last {
		border-color: var(--color-border-strong);
	}

	/* Status mark: not interactive (no pointer events, not focusable, no handler). It sits beside the
	   link, not over it, so a click on it lands on the row background and does nothing. */
	.check {
		flex-shrink: 0;
		margin-left: 16px;
		display: grid;
		place-items: center;
		width: 22px;
		height: 22px;
		box-sizing: border-box;
		border: 1px solid var(--color-border-strong);
		border-radius: 50%;
		pointer-events: none;
		user-select: none;
	}
	.row.opened .check {
		background: var(--color-text);
		border-color: var(--color-text);
	}
	.check svg {
		width: 14px;
		height: 14px;
		fill: none;
		stroke: var(--color-bg);
		stroke-width: 2;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.rowLink {
		position: relative;
		flex: 1;
		min-width: 0;
		min-height: 56px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		gap: 16px;
		padding: 14px 18px 14px 16px;
		color: var(--color-text);
		text-decoration: none;
		border-radius: 12px;
	}
	.rowLink:focus-visible,
	.actionBtn:focus-visible,
	.pill:focus-visible,
	.sideBtn:focus-visible {
		outline: 2px solid var(--color-border-strong);
		outline-offset: 2px;
	}
	.tag {
		flex-shrink: 0;
		min-width: 60px;
		padding: 3px 10px;
		box-sizing: border-box;
		border-radius: 999px;
		background: var(--overlay-hover-strong);
		color: var(--color-text-muted);
		font-size: 12.5px;
		text-align: center;
		font-variant-numeric: tabular-nums;
	}
	.tag.control {
		background: var(--color-pin);
		color: var(--color-text-dark);
	}
	.label {
		flex: 1;
		min-width: 0;
		font-size: 15.5px;
		line-height: 1.45;
		overflow-wrap: anywhere;
	}
	.row.opened .label {
		color: var(--color-text-subtle);
	}
	.meta {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		gap: 10px;
		color: var(--color-text-subtle);
		font-size: 13px;
	}
	.lastBadge {
		padding: 3px 10px;
		border-radius: 999px;
		border: 1px solid var(--color-border-strong);
		color: var(--color-text-muted);
		font-size: 12px;
	}

	/* "Opens in a new tab" icon */
	.popIcon {
		flex-shrink: 0;
		width: 16px;
		height: 16px;
		fill: none;
		stroke: currentColor;
		stroke-width: 1.5;
		stroke-linecap: round;
		stroke-linejoin: round;
		transition:
			transform 0.2s ease,
			opacity 0.2s ease;
	}
	.rowLink .popIcon {
		color: var(--color-text-muted);
		opacity: 0.7;
	}
	.rowLink:hover .popIcon,
	.rowLink:focus-visible .popIcon {
		opacity: 1;
		color: var(--color-text);
		transform: translate(2px, -2px);
	}

	.srOnly {
		position: absolute;
		width: 1px;
		height: 1px;
		margin: -1px;
		padding: 0;
		overflow: hidden;
		clip: rect(0 0 0 0);
		white-space: nowrap;
		border: 0;
	}

	.empty {
		margin: 6px 8px;
		color: var(--color-text-subtle);
		font-size: 14px;
	}

	@media (max-width: 860px) {
		.side {
			display: none;
		}
		.main {
			padding: 0 16px 72px;
		}
		.head {
			/* On a phone the header would cover half the screen if it stayed pinned */
			position: static;
			padding-top: 28px;
		}
		.group {
			scroll-margin-top: 16px;
		}
		.actionBtn.reset {
			margin-left: 0;
		}
		.meta .when {
			display: none;
		}
		.group {
			padding: 20px 14px 16px;
		}
	}
</style>
