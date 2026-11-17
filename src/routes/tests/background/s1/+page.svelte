<script>
	// @ts-nocheck
	// div.background test: step 1 of 2: div.background with class only (no background image).
	// Markup below is copied verbatim from src/routes/os/+page.svelte; only the script is reduced/stubbed.

	import '$lib/style/os.css';
	import mainBG from '$lib/img/bg/default.jpg';

	// STUB: original loads bgURL with loadSetting('bg', mainBG) on mount and follows onSettingChange('bg').
	// Pinned to the default background image here.
	let bgURL = $state(mainBG);
</script>

<div class="background"></div>
