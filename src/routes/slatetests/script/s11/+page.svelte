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
	import { loadScript, loadScriptsSequential } from '$lib/lethe/loader';
	import { search } from '$lib/lethe/search';
	import { createConnection, setCar } from '$lib/lethe/car';
	import { createCinnabarController } from '$lib/lethe/poly';
	import { createPrismController, setPrismTransport, getPrismController } from '$lib/lethe/prism';
	import { enablePopupInterceptor } from '$lib/lethe/reflux';
	import { subscribeSettings } from '$lib/utils/settingsSync.js';
	let tabs = $state([]);
	let frames = $state([]);
	let query = $state('');
	let inputEl;
	let tabCounter = 0;
	let inputFocused = $state(false);
	let hydrated = $state(false);
	let letheEngine = $state('sj2');
	let ready = $state(false);
	let polygon;
	let prismController;
	let sjFrame;
	let customWisp = $state('');
	let searchEngine = $state('default');
	let car = $state('libcurl');
	let bookmarks = $state([]);
	let connection;
	let activeFrame = $derived(frames.find((frame) => frame.id === $activeTab));
	let draggedTab = null;
	let tabID = null;
	let LastPopupIntState = $state(true);

	$effect(() => {
		if ($deleteTab) {
			tabs = tabs.filter((tab) => tab.id !== $deleteTab);
			frames = frames.filter((frame) => frame.id !== $deleteTab);
			if ($deleteTab == $activeTab && tabs.length > 0) {
				const lastTab = tabs[tabs.length - 1];
				$activeTab = lastTab.id;
				$deleteTab = null;
			} else {
				$deleteTab = null;
			}
		}
		if ($activeTab) {
			tabID = $activeTab;
		}
	});

	function addTab() {
		// @ts-ignore
		tabID = Date.now();
		// @ts-ignore
		$activeTab = tabID;
		const newTab = {
			id: tabID
		};
		const newFrame = {
			id: tabID,
			url: null,
			displayUrl: '',
			title: 'New Tab'
		};
		let updatedTabs = [];
		let updatedFrames = [];
		for (let i = 0; i < tabs.length; i++) {
			let existingTab = tabs[i];
			let existingFrame = frames[i];
			updatedFrames.push(existingFrame);
			updatedTabs.push(existingTab);
		}
		updatedTabs.push(newTab);
		updatedFrames.push(newFrame);
		tabs = updatedTabs;
		frames = updatedFrames;
		tabCounter++;
	}
	onMount(async () => {
		LastPopupIntState = popupInterceptor;
		addTab();
	});
	$effect(() => {
		let current = $state(activeFrame?.displayUrl ?? '');
		console.log('current frameURL is: ' + current);
		if (!inputFocused) {
			query = current;
		}
	});
	let activeIndex;
	$effect(() => {
		if ($isTabDragging) {
			activeIndex = tabs.findIndex((tab) => tab.id === $activeTab);
			if (activeIndex > activeIndex + $slotsDragged) {
				$draggedOverRight = tabs[activeIndex + $slotsDragged].id;
			} else if (activeIndex < activeIndex + $slotsDragged) {
				$draggedOverLeft = tabs[activeIndex + $slotsDragged].id;
			}
		}
	});

	let settingsOpen = $state(false);
	let extensionsOpen = $state(false);
	let popupInterceptor = $state(true); // hydrated from localspace in onMount
</script>
