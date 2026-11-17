<script>
	// @ts-nocheck
	// div.contextMenu test: control (whole parent div in isolation).
	// Markup below is copied verbatim from src/routes/os/+page.svelte; only the script is reduced/stubbed.

	import '$lib/style/os.css';
	import { onMount } from 'svelte';

	// STUB: original menuOpen starts false and is set true by openMenu() on right-click.
	// Opened on mount (client only, like the original) so the menu renders without interaction.
	let menuOpen = $state(false);
	onMount(() => {
		menuOpen = true;
	});
	// STUB: original openMenuX is the right-click clientX.
	let openMenuX = $state(0);
	// STUB: original menuType is 'app' (dock button right-click) or 'nav' (dock background right-click).
	// Set to 'app' so the app branch renders.
	let menuType = $state('app');
	// STUB: original menuSender is the right-clicked app's config (set by openMenu()). Uses the Browser app's values.
	let menuSender = $state({
		appId: 1,
		url: '/slate',
		name: 'Browser',
		height: '50%',
		width: '50%',
		top: 100,
		left: 60
	});

	// STUB: original openNewWindow() pushes a new entry into the windowList store and closes the menu. No-op here.
	function openNewWindow(url, name, height, width, top, left, appId) {}
	// STUB: original isCustomApp() checks customApps (loaded from settings). Forced true so "Remove App" renders.
	function isCustomApp(appId) {
		return true;
	}
	// STUB: original removeApp() removes the app from customApps and saves the setting. No-op here.
	function removeApp(appId) {}
	// STUB: original openAddApp() closes the menu and opens the Add App modal. No-op here.
	function openAddApp() {}
</script>

{#if menuOpen}
	<div class="contextMenu" style="left: {openMenuX}px;" onclick={(e) => e.stopPropagation()}>
		{#if menuType == 'app'}
			<button
				class="menuOption"
				onclick={() =>
					openNewWindow(
						menuSender.url,
						menuSender.name,
						menuSender.height,
						menuSender.width,
						menuSender.top,
						menuSender.left,
						menuSender.appId
					)}
			>
				Open New Window
			</button>
			{#if isCustomApp(menuSender.appId)}
				<button class="menuOption danger" onclick={() => removeApp(menuSender.appId)}>
					Remove App
				</button>
			{/if}
		{:else if menuType == 'nav'}
			<button class="menuOption" onclick={openAddApp}> Add New App </button>
		{/if}
	</div>
{/if}
