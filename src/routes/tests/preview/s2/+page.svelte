<script>
	// @ts-nocheck
	// div#previewPanel test: step 2 of 3: add button.previewCard per window (empty).
	// Markup below is copied verbatim from src/routes/os/+page.svelte; only the script is reduced/stubbed.

	import '$lib/style/os.css';
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	// STUB: original previewOpen starts false and is set true by openWindow()/hoverStart() when an app
	// has open windows. Opened on mount (client only, like the original) so the panel renders without
	// interaction. It must not render during SSR: {name} below is the browser global window.name.
	let previewOpen = $state(false);
	onMount(() => {
		previewOpen = true;
	});
	// STUB: original previewApp is the hovered/clicked app id.
	let previewApp = $state(null);
	// STUB: original menuX is the hovered dock button's clientX (set by hoverStart()).
	let menuX = $state(0);
	// STUB: original closeTimeout is the pending timer from hoverEnd().
	let closeTimeout = null;

	// STUB: original filters the windowList store for previewApp's windows. Returns two fake windows so cards render.
	function getPreviewWindows() {
		return [{ sender: 'stub-1' }, { sender: 'stub-2' }];
	}
	// STUB: original sets the focusWindowTop store and closes the panel. No-op here.
	function focusWindow(sender) {}
	// Note: {name} in the card markup is not declared in the original script either; it resolves to the global window.name.
</script>

{#if previewOpen}
	<div
		style="left:{menuX}px"
		id="previewPanel"
		class="previewPanel"
		onclick={(e) => e.stopPropagation()}
		{@attach (node) => {
			gsap.fromTo(
				node,
				{ y: 20, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 0.3,
					ease: 'power2.out'
				}
			);
		}}
		onmouseenter={() => clearTimeout(closeTimeout)}
		onmouseleave={() => {
			previewOpen = false;
			previewApp = null;
		}}
	>
		{#each getPreviewWindows() as win}
			<button class="previewCard noSelect" onclick={() => focusWindow(win.sender)}>
			</button>
		{/each}
	</div>
{/if}
