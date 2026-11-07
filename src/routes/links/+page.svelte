<script lang="ts">
	import { onDestroy } from 'svelte';

	type Destination = { title: string; url: string };
	type Category = { name: string; links: (string | Destination)[] };
	const discordLink: Destination = {
		title: 'Join Discord server',
		url: 'https://tinyurl.com/galaxyiscool'
	};
	// Edit this list to add, remove, or reorder destinations.
	const linkCategories: Category[] = [
		{
			name: 'GoGuardian',
			links: [
				'http://vxukxnfbnr.indiaguru.com/',
				'http://rfzoeoefqd.mundra.com/',
				'http://fsgmtzxibg.9dejulio.gob.ar/',
				'http://vdpliutfea.electricalone.com/',
				'http://ryifaghswp.kinemasot.cl/',
				'http://matjizwxjz.networkindia.com/',
				'http://ilgsgcrmyr.blueprintdigital.ca/',
				'http://hgsyhjzsrw.vivocolor.cl/',
				'http://ewvoejtymz.tejidosdedignidad.org/',
				'http://tqfnlyerxf.mounthoodlodge.info/',
				'http://ocrkzmbzdj.moonstar.com.np/',
				'http://cbfxlxsymj.rymconstrucciones.cl/',
				'http://izomdtzdwb.alalalal.com/',
				'http://owelzukxrp.pulsaudio.ro/',
				'http://kmehbsozhu.gasppi.com.ar/',
				'http://uurcfgmobs.jyotsnapandey.com.np/'
			]
		},
		{
			name: 'Palo Alto',
			links: [
				'https://aura.extremewheeler.com/',
				'https://aura.ez4u2nvme.com/',
				'https://aura.ez4u2nvme.org/',
				'https://aura.ezwebsites.com/',
				'https://aura.fabricatmanual.ro/'
			]
		},
		{
			name: 'iBoss',
			links: [
				'https://aura.actsministries.org/',
				'https://aura.garethmusic.com/',
				'https://aura.kinesaludlaserena.cl/',
				'https://aura.mutsuura.com/',
				'https://aura.propertyshots.net/'
			]
		},
		{
			name: 'Content Keeper',
			links: [
				'https://aura.11thcircle.com/',
				'https://aura.akm-s.ru/',
				'https://aura.dd.msk.su/',
				'https://aura.dineshbala.com.np/',
				'https://aura.sesaech.gob.mx/'
			]
		},
		{
			name: 'Linewize',
			links: [
				'https://aura.elmirador360.com/',
				'https://aura.emtbiceland.is/',
				'https://aura.screenclip.net/',
				'https://aura.sdao.me/',
				'https://aura.sia-tec.org/'
			]
		},
		{
			name: 'Other',
			links: [discordLink]
		}
	];
	const categories = linkCategories.map((category) => ({
		...category,
		links: category.links.map(
			(link): Destination =>
				typeof link === 'string' ? { title: new URL(link).hostname, url: link } : link
		)
	}));
	let query = $state('');
	const term = $derived(query.trim().toLowerCase());
	const filteredCategories = $derived(
		categories
			.map((category) => ({
				...category,
				links:
					!term || category.name.toLowerCase().includes(term)
						? category.links
						: category.links.filter(
								(link) =>
									link.title.toLowerCase().includes(term) || link.url.toLowerCase().includes(term)
							)
			}))
			.filter((category) => category.links.length > 0)
	);
	let dialog: HTMLDialogElement;
	let selectedLink = $state<Destination | null>(null);
	let copied = $state(false);
	let copyStatus = $state('');
	let copyTimer: ReturnType<typeof setTimeout> | undefined;

	function resetCopy() {
		clearTimeout(copyTimer);
		copied = false;
		copyStatus = '';
	}
	function launchModal(link: Destination) {
		selectedLink = link;
		resetCopy();
		dialog.showModal();
	}
	function resetModal() {
		selectedLink = null;
		resetCopy();
	}
	function closeModal() {
		dialog.close();
	}
	function closeOnBackdrop(event: MouseEvent) {
		const bounds = dialog.getBoundingClientRect();
		if (
			event.target === dialog &&
			(event.clientX < bounds.left ||
				event.clientX > bounds.right ||
				event.clientY < bounds.top ||
				event.clientY > bounds.bottom)
		)
			closeModal();
	}
	async function copyLink() {
		const link = selectedLink;
		if (!link) return;
		try {
			await navigator.clipboard.writeText(link.url);
			if (selectedLink !== link || !dialog.open) return;
			clearTimeout(copyTimer);
			copied = true;
			copyTimer = setTimeout(resetCopy, 1500);
		} catch {
			if (selectedLink !== link || !dialog.open) return;
			copyStatus = 'Could not copy. Select and copy the address above.';
		}
	}
	function continueToSite() {
		if (!selectedLink) return;
		window.open(selectedLink.url, '_blank', 'noopener');
		closeModal();
	}
	onDestroy(() => clearTimeout(copyTimer));
</script>

{#snippet fillerText(text: string)}
	{#each text.split(/(\s+)/) as word}
		{@const parts = word.match(/.{1,3}/gu) ?? []}
		{#each parts as part, index}{part}{#if index < parts.length - 1}<span
					class="filler"
					aria-hidden="true">ha67</span
				>{/if}{/each}
	{/each}
{/snippet}

<main>
	<div class="page-header">
		<h1>Links</h1>
		<button type="button" class="actionBtn" onclick={() => launchModal(discordLink)}>
			<span class="destination">{@render fillerText(discordLink.title)}</span>
			<span class="external-icon" aria-hidden="true">↗</span>
		</button>
	</div>
	<input
		class="search"
		id="search"
		type="search"
		placeholder="Search categories or destinations..."
		aria-label="Search directory"
		bind:value={query}
	/>
	<section id="categories" aria-label="Directory categories">
		{#each filteredCategories as category (category.name)}
			{#key term}
				<details class="category" open={Boolean(term)}>
					<summary>
						<span class="category-name">{@render fillerText(category.name)}</span>
						<span class="count"
							>{category.links.length}
							{@render fillerText(category.links.length === 1 ? 'link' : 'links')}</span
						>
					</summary>
					<ul class="link-list">
						{#each category.links as link (link.url)}
							<li>
								<button type="button" class="actionBtn" onclick={() => launchModal(link)}>
									<span class="destination">{@render fillerText(link.title)}</span>
									<span class="external-icon" aria-hidden="true">↗</span>
								</button>
							</li>
						{/each}
					</ul>
				</details>
			{/key}
		{/each}
	</section>
	{#if filteredCategories.length === 0}
		<p class="desc" id="empty" role="status">No matching categories or destinations.</p>
	{/if}
</main>
<dialog
	class="modal directory-modal"
	bind:this={dialog}
	aria-labelledby="modal-title"
	aria-describedby="modal-description modal-url"
	onclick={closeOnBackdrop}
	onclose={resetModal}
>
	<div class="modalBox">
		<h2 class="modalTitle" id="modal-title">Leaving GalaxyV7</h2>
		<p class="desc" id="modal-description">
			You're about to open <strong
				>{#if selectedLink}{@render fillerText(selectedLink.title)}{/if}</strong
			>:
		</p>
		<p class="modalUrl" id="modal-url">{selectedLink?.url ?? ''}</p>
		<p class="desc" id="copy-status" role="status">{copyStatus}</p>
		<div class="buttons">
			<button class="toggleBtn" type="button" onclick={closeModal}>Cancel</button>
			<button class="actionBtn" type="button" onclick={copyLink}
				>{copied ? 'Copied!' : 'Copy link'}</button
			>
			<button class="actionBtn active" type="button" onclick={continueToSite}
				>Continue to site</button
			>
		</div>
	</div>
</dialog>

<style>
	* {
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
	}
	:global(body) {
		margin: 0;
	}
	main {
		max-width: 960px;
		margin: 0 auto;
		padding: 48px 32px 64px;
	}
	h1 {
		margin: 0 0 12px;
		font-family: var(--font-family-heading);
		font-size: 2rem;
	}
	.page-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		flex-wrap: wrap;
	}
	.page-header h1 {
		margin: 0;
	}
	.desc {
		margin: 0;
		color: var(--color-text-muted);
		font-size: 15px;
		line-height: 1.5;
	}

	.search {
		width: 100%;
		margin: 28px 0;
		padding: 12px 16px;
		color: var(--color-text);
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: 8px;
		font: 0.95rem var(--font-family-body);
	}
	.search::placeholder {
		color: var(--color-text-subtle);
	}
	.search:focus {
		background: var(--color-surface-2);
		border-color: var(--color-border-strong);
	}
	:focus-visible {
		outline: 2px solid var(--color-text-muted);
		outline-offset: 4px;
	}
	#categories {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	.category {
		background: var(--color-surface-2);
		border: 1px solid var(--color-border);
		border-radius: 16px;
		box-shadow: 0 0 30px rgba(0, 0, 0, 0.61);
	}
	summary {
		display: flex;
		align-items: center;
		gap: 14px;
		padding: 22px 24px;
		cursor: pointer;
		list-style: none;
		user-select: none;
		border-radius: 16px;
	}
	summary:hover {
		background: var(--overlay-hover);
	}
	summary::-webkit-details-marker {
		display: none;
	}
	summary::after {
		content: '';
		width: 8px;
		height: 8px;
		margin-left: auto;
		border-right: 1px solid var(--color-text-muted);
		border-bottom: 1px solid var(--color-text-muted);
		transform: rotate(45deg);
		flex-shrink: 0;
	}
	details[open] > summary::after {
		transform: rotate(225deg);
	}
	.category-name {
		font: 23px var(--font-family-heading);
	}
	.count {
		padding: 4px 10px;
		border: 1px solid var(--color-border-strong);
		border-radius: 20px;
		color: var(--color-text-muted);
		font: 13px var(--font-family-heading);
		white-space: nowrap;
	}
	.link-list {
		display: flex;
		flex-direction: column;
		gap: 10px;
		list-style: none;
		margin: 0;
		padding: 6px 24px 24px;
	}
	.actionBtn {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 8px 18px;
		color: var(--color-text-muted);
		background: var(--overlay-hover);
		border: 0;
		border-radius: 8px;
		font: 900 0.95rem var(--font-family-heading);
		cursor: pointer;
		transition:
			background 0.2s,
			color 0.2s,
			transform 0.2s;
	}
	.actionBtn:hover {
		background: var(--overlay-hover-strong);
		color: var(--color-text);
		transform: translateY(-3px);
	}
	.actionBtn:active {
		background: var(--overlay-active);
	}
	.actionBtn.active {
		background: var(--color-pin);
		color: var(--color-text-dark);
	}
	.page-header .actionBtn {
		border: 1px solid var(--color-border-strong);
		background: var(--overlay-hover-strong);
		color: var(--color-text);
	}
	.page-header .actionBtn:hover {
		border-color: var(--color-text-muted);
	}
	.page-header .actionBtn:active {
		background: var(--overlay-active);
	}
	.destination {
		min-width: 0;
		overflow-wrap: anywhere;
		text-align: left;
	}
	.link-list .actionBtn {
		width: 100%;
		min-height: 46px;
		padding: 12px 16px;
	}
	.external-icon {
		margin-left: auto;
		font-size: 18px;
		flex-shrink: 0;
	}
	#empty {
		margin-top: 28px;
	}

	.modal {
		width: min(460px, calc(100% - 32px));
		max-height: calc(100% - 48px);
		padding: 26px;
		color: var(--color-text);
		background: var(--color-surface-2);
		border: 1px solid var(--color-border);
		border-radius: 16px;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.55);
		overflow-y: auto;
	}
	.modal::backdrop {
		background: rgba(0, 0, 0, 0.55);
		backdrop-filter: blur(4px);
	}
	.modalBox {
		display: flex;
		flex-direction: column;
		gap: 14px;
	}
	.modalTitle {
		margin: 0;
		font: 20px var(--font-family-heading);
	}
	.modalUrl {
		margin: 0;
		padding: 10px 14px;
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: 8px;
		color: var(--color-text-muted);
		font-size: 13px;
		overflow-wrap: anywhere;
	}
	.buttons {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 10px;
		flex-wrap: wrap;
	}
	.toggleBtn {
		padding: 8px 20px;
		color: var(--color-text-muted);
		border: 1px solid var(--color-border-strong);
		border-radius: 20px;
		background: transparent;
		font: 900 0.95rem var(--font-family-heading);
		cursor: pointer;
	}
	.toggleBtn:hover {
		border-color: var(--color-border-hover);
		color: var(--color-text);
	}
	#copy-status:empty {
		display: none;
	}
	:global(body:has(.directory-modal[open])) {
		overflow: hidden;
	}
	@media (max-width: 540px) {
		main {
			padding: 32px 16px 48px;
		}
		summary {
			padding: 20px 16px;
			gap: 10px;
		}
		.category-name {
			font-size: 21px;
		}
		.link-list {
			padding: 4px 16px 20px;
		}
		.modal {
			padding: 20px;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		* {
			transition: none !important;
		}
		.actionBtn:hover {
			transform: none;
		}
	}
</style>
