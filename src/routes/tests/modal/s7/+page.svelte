<script>
	// @ts-nocheck
	// div.modalOverlay test: step 7 of 25: add input Name.
	// Markup below is copied verbatim from src/routes/os/+page.svelte; only the script is reduced/stubbed.

	import Filler from '$lib/utils/filler.svelte';
	import '$lib/style/os.css';
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	// Kept from original: option lists used by the advanced panel.
	const proxies = [
		{ value: 'prism', label: 'SJ2' },
		{ value: 'polygon', label: 'SJ' },
		{ value: 'glass', label: 'UV' }
	];
	const transports = [
		{ value: 'libcurl', label: 'Libcurl' },
		{ value: 'epoxy', label: 'Epoxy' }
	];

	// STUB: original addOpen starts false and is set true by openAddApp() from the dock context menu.
	// Opened on mount (client only, like the original) so the modal renders without interaction.
	let addOpen = $state(false);
	onMount(() => {
		addOpen = true;
	});
	// STUB: original advancedOpen starts false (toggled by the Advanced button). Forced true so the advanced panel renders.
	let advancedOpen = $state(true);
	// STUB: original addError is null until addApp() fails validation. Forced to that message so the error line renders.
	let addError = $state('Name and URL are required');
	// Kept from original: local form state bound to the inputs.
	let newName = $state('');
	let newUrl = $state('');
	let newIcon = $state('');
	let newProxy = $state('prism');
	let newTransport = $state('libcurl');
	let newWisp = $state('');
	let newNotif = $state('');

	// STUB: original closeAddApp() sets addOpen = false. No-op here so the modal stays rendered.
	function closeAddApp() {}
	// STUB: original addApp() validates, builds a /launch URL, pushes into customApps and saves the setting. No-op here.
	function addApp() {}
</script>

{#if addOpen}
	<div class="modalOverlay" onclick={closeAddApp}>
		<div
			class="modal"
			onclick={(e) => e.stopPropagation()}
			{@attach (node) => {
				gsap.fromTo(
					node,
					{ y: 12, opacity: 0, scale: 0.97 },
					{ y: 0, opacity: 1, scale: 1, duration: 0.25, ease: 'power2.out' }
				);
			}}
		>
			<p class="modalTitle">Add App</p>

			<p class="modalLabel">URL</p>
			<input
				class="modalInput"
				type="text"
				placeholder="example.com"
				bind:value={newUrl}
				oninput={() => (addError = null)}
				onkeydown={(e) => e.key === 'Enter' && addApp()}
			/>

			<p class="modalLabel">Name</p>
			<input
				class="modalInput"
				type="text"
				placeholder="Example"
				bind:value={newName}
				oninput={() => (addError = null)}
				onkeydown={(e) => e.key === 'Enter' && addApp()}
			/>
		</div>
	</div>
{/if}
