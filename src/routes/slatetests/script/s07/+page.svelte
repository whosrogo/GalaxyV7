<script>
	import Filler from '$lib/utils/filler.svelte';
	import '$lib/style/browser.css';
	import back from '$lib/img/icons/left-arrow.png';
	import reload from '$lib/img/icons/reload.png';
	import forward from '$lib/img/icons/right-arrow.png';
	import setting from '$lib/img/icons/more.png';
	import Tab from '$lib/utils/browser/tab.svelte';
	import Iframe from '$lib/utils/browser/iframe.svelte';
	import Home from '$lib/utils/browser/home.svelte';
	import { loadSetting, saveSetting } from '$lib/utils/localspace.js';
	import star from '$lib/img/icons/star.png';
	import searchIcon from '$lib/img/icons/search.png';
	import extensions from '$lib/img/icons/puzzle.png';
	import {
		deleteTab,
		activeTab,
		reloadSignal,
		goBackSignal,
		goForwardSignal,
		slotsDragged,
		draggedOverLeft,
		draggedOverRight,
		isTabDragging
	} from '$lib/stores/index.js';
	import { onMount, tick } from 'svelte';
	import { subscribeSettings } from '$lib/utils/settingsSync.js';
</script>
