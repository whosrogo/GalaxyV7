<script>
	// Index panel for the books rebuild tests (copy of /tests panel). Its own route, not a layout:
	// nothing here reaches the test pages. Opened state lives in this browser's localStorage only.
	import { onMount } from 'svelte';
	import { groups } from './routes.js';

	// Separate key from /tests and /slatetests so each panel tracks progress independently.
	const KEY = 'bookTests.opened.v1';
	const all = groups.flatMap((g) => g.links);

	let opened = $state({}); // href -> timestamp of last open
	let lastHref = $state(null);
	let filter = $state('all');
	let now = $state(Date.now());
	let confirmReset = $state(false);
	let resetTimer = null;

	function load() {
		try {
			const data = JSON.parse(localStorage.getItem(KEY) ?? '{}');
			opened = data.opened ?? {};
			lastHref = data.last ?? null;
		} catch {
			opened = {};
			lastHref = null;
		}
	}
	function save() {
		try {
			localStorage.setItem(KEY, JSON.stringify({ opened, last: lastHref }));
		} catch {}
	}

	function markOpened(href) {
		opened[href] = Date.now();
		lastHref = href;
		save();
	}
	function toggle(href) {
		if (opened[href]) {
			delete opened[href];
			if (lastHref === href) lastHref = null;
		} else {
			opened[href] = Date.now();
		}
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
		const onStorage = (e) => e.key === KEY && load();
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

<div class="page">
	<nav class="side noSelect">
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
			<h1>Books rebuild tests</h1>

			<div class="progress">
				<div class="bar"><div class="fill" style="width: {(openedCount / all.length) * 100}%"></div></div>
				<span class="progressText">{openedCount} of {all.length} opened</span>
			</div>

			<div class="toolbar noSelect">
				<button class="actionBtn primary" onclick={openNext} disabled={!nextLink}>
					{#if nextLink}
						Open next <span class="nextTag">{nextLink.tag}</span>
						<span class="nextGroup">{groups.find((g) => g.links.includes(nextLink)).title}</span>
					{:else}
						All opened
					{/if}
				</button>
				<div class="pills">
					{#each [['all', 'All'], ['unopened', 'Unopened'], ['opened', 'Opened']] as [value, label]}
						<button class="pill" class:active={filter === value} onclick={() => (filter = value)}
							>{label}</button
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
							<p class="groupNote">{g.note}</p>
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
									<button
										class="check"
										aria-label={opened[l.href] ? `Mark ${l.tag} as not opened` : `Mark ${l.tag} as opened`}
										aria-pressed={!!opened[l.href]}
										onclick={() => toggle(l.href)}
									>
										{#if opened[l.href]}
											<svg viewBox="0 0 16 16" aria-hidden="true"
												><path d="M3.5 8.5l3 3 6-7" /></svg
											>
										{/if}
									</button>
									<a
										class="rowLink"
										href={l.href}
										target="_blank"
										rel="noopener"
										onclick={() => markOpened(l.href)}
										onauxclick={(e) => e.button === 1 && markOpened(l.href)}
									>
										<span class="tag" class:control={l.tag === 's00'}>{l.tag}</span>
										<span class="label">{l.label}</span>
										<span class="meta">
											{#if lastHref === l.href}<span class="lastBadge">last opened</span>{/if}
											{#if opened[l.href]}{ago(opened[l.href])}{/if}
										</span>
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
	/* Scoped to this index route only. Mirrors settings.css / apps.css conventions and tokens. */
	.page {
		position: fixed;
		inset: 0;
		overflow-y: auto;
		background: var(--color-bg);
		color: var(--color-text);
		font-family: var(--font-family-body);
	}

	/* Side nav: same shape as the settings .nav / .navBtn */
	.side {
		position: fixed;
		top: 16px;
		left: 16px;
		width: 180px;
		z-index: 10;
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding: 12px;
		border-radius: 14px;
		backdrop-filter: blur(var(--blur-normal));
	}
	.sideBtn {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 8px;
		padding: 8px 12px 8px 8px;
		color: var(--color-text-muted);
		border: 0;
		border-radius: 8px;
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
		max-width: 920px;
		padding: 48px 48px 96px 236px;
	}

	.head h1 {
		margin: 0;
		font-family: var(--font-family-heading);
		font-size: 2.2rem;
		font-weight: 400;
	}

	.progress {
		display: flex;
		align-items: center;
		gap: 14px;
		margin-top: 24px;
	}
	.bar,
	.groupBar {
		flex: 1;
		height: 6px;
		border-radius: 999px;
		background: var(--overlay-hover);
		overflow: hidden;
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
		gap: 12px;
		margin-top: 20px;
	}

	/* Buttons: settings .actionBtn */
	.actionBtn {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 8px 18px;
		color: var(--color-text-muted);
		border: 0;
		border-radius: 8px;
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
	.actionBtn.primary {
		background: var(--color-white);
		color: var(--color-black);
	}
	.actionBtn.primary:hover:not(:disabled) {
		background: var(--color-white);
		color: var(--color-black);
	}
	.nextTag {
		padding: 1px 8px;
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
		padding: 7px 16px;
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
		gap: 20px;
		margin-top: 32px;
	}

	/* Cards: settings .subGroup */
	.group {
		scroll-margin-top: 16px;
		padding: 18px 10px 14px;
		background-color: var(--color-surface-2);
		border-radius: 16px;
		box-shadow: 0 0 30px rgba(0, 0, 0, 0.61);
	}
	.groupHead {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 16px;
		padding: 0 10px;
	}
	.groupTitle {
		margin: 0;
		font-family: var(--font-family-heading);
		font-size: 23px;
		font-weight: 400;
	}
	.groupNote {
		margin: 6px 0 0;
		color: var(--color-text-muted);
		font-size: 14px;
		line-height: 20px;
	}
	.groupCount {
		flex-shrink: 0;
		padding: 4px 12px;
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
		flex: none;
		height: 4px;
		margin: 14px 10px 8px;
	}

	.rows {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.row {
		display: flex;
		align-items: center;
		gap: 4px;
		border-radius: 10px;
		transition: background 0.2s ease;
	}
	.row:hover {
		background: var(--overlay-hover);
	}
	.row.last {
		background: var(--overlay-hover);
		box-shadow: inset 0 0 0 1px var(--color-border-strong);
	}

	.check {
		flex-shrink: 0;
		display: grid;
		place-items: center;
		width: 22px;
		height: 22px;
		margin: 0 4px 0 10px;
		padding: 0;
		border: 1px solid var(--color-border-strong);
		border-radius: 50%;
		background: transparent;
		cursor: pointer;
		transition: all 0.2s ease;
	}
	.check:hover {
		border-color: var(--color-text-muted);
		background: var(--overlay-hover-strong);
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
		flex: 1;
		min-width: 0;
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 10px 12px 10px 6px;
		color: var(--color-text);
		text-decoration: none;
		border-radius: 10px;
	}
	.rowLink:focus-visible,
	.check:focus-visible,
	.actionBtn:focus-visible,
	.pill:focus-visible,
	.sideBtn:focus-visible {
		outline: 2px solid var(--color-border-strong);
		outline-offset: 2px;
	}
	.tag {
		flex-shrink: 0;
		min-width: 54px;
		padding: 2px 8px;
		border-radius: 999px;
		background: var(--overlay-hover-strong);
		color: var(--color-text-muted);
		font-size: 12px;
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
		font-size: 15px;
		overflow-wrap: anywhere;
	}
	.row.opened .label {
		color: var(--color-text-subtle);
	}
	.meta {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		gap: 8px;
		color: var(--color-text-subtle);
		font-size: 13px;
	}
	.lastBadge {
		padding: 2px 8px;
		border-radius: 999px;
		border: 1px solid var(--color-border-strong);
		color: var(--color-text-muted);
		font-size: 12px;
	}
	.empty {
		margin: 4px 20px 6px;
		color: var(--color-text-subtle);
		font-size: 14px;
	}

	@media (max-width: 760px) {
		.side {
			display: none;
		}
		.main {
			padding: 28px 16px 64px;
		}
		.actionBtn.reset {
			margin-left: 0;
		}
		.meta {
			display: none;
		}
	}
</style>
