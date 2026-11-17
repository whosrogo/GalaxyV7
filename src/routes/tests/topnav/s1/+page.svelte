<script>
	// @ts-nocheck
	// div.topNav test: step 1 of 10: div.topNav (empty).
	// Markup below is copied verbatim from src/routes/os/+page.svelte; only the script is reduced/stubbed.

	import Filler from '$lib/utils/filler.svelte';
	import '$lib/style/os.css';
	import { onMount } from 'svelte';
	import y from '$lib/img/icons/swap.png';
	import lk from '$lib/img/icons/link.png';

	let timeString = $state(null);

	// STUB: original openWindow() checks localStorage/notif, builds a window entry and pushes it into
	// the windowList store (rendered by <Window>). No-op here so no window markup is involved.
	function openWindow(url, name, height, width, top, left, appId, bottom, right) {}

	// STUB: original switchMode() flips localStorage 'mode' between 'os'/'website' and reloads '/'. No-op here.
	function switchMode() {}

	// Kept from original: local clock that fills timeString (no stores involved).
	function updateTime() {
		const now = new Date();
		timeString = now.toLocaleTimeString();
	}
	onMount(() => {
		updateTime();
		const interval = setInterval(updateTime, 1000);
		return () => clearInterval(interval);
	});
</script>

<div class="topNav noSelect">
</div>
