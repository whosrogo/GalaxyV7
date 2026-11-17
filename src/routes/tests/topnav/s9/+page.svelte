<script>
	// @ts-nocheck
	// div.topNav test: step 9 of 10: add img link icon.
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
	<div class="topLeft">
		<p
			onclick={() =>
				openWindow('/changelog', 'Changelogs', '50%', '600px', '25', '0', `win-${Date.now()}`)}
			class="topNavText topNavHover"
		>
			Ga<Filler />la<Filler />xyV7
		</p>
	</div>
	<div class="topMiddle"></div>
	<div class="topRight">
		<div class="topButton" onclick={switchMode}>
			<img src={y} />
		</div>
		<div
			class="topButton"
			onclick={() =>
				openWindow('/links', 'Links', '45%', '20%', 25, null, `win-${Date.now()}`, null, 0)}
		>
			<img src={lk} />
		</div>
	</div>
</div>
