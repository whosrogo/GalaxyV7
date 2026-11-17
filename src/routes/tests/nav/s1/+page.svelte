<script>
	// @ts-nocheck
	// div.nav test: step 1 of 5: div.nav (empty, with height style).
	// Markup below is copied verbatim from src/routes/os/+page.svelte; only the script is reduced/stubbed.

	import '$lib/style/os.css';
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import browser from '$lib/img/icons/earthWhite.png';
	import g from '$lib/img/icons/controller.png';
	import a from '$lib/img/icons/apps.png';
	import s from '$lib/img/icons/settings.png';
	import p from '$lib/img/icons/pyrite.png';
	import sp from '$lib/img/icons/nvidia.png';
	import rp from '$lib/img/icons/ripple.png';

	// STUB: original navSizeMulti is loaded from the 'navbarsize' setting and changed by dragging the resize handle.
	let navSizeMulti = $state(0);
	// STUB: original hostname is location.hostname (blank on localhost), set on mount. Only used inside app URLs.
	let hostname = $state('');
	const proApi = '/launch?resource={url}&type=prism&car=libbyRaw&autoSW=false';
	const baseApps = $derived([
		{
			id: 1,
			url: '/slate',
			name: 'Browser',
			icon: browser,
			height: '50%',
			width: '50%',
			top: 100,
			left: 60
		},
		{
			id: 6,
			url: '/launch?resource=https://tinyurl.com/ys54n4xe/&type=prism&autoSW=false',
			name: 'GeForce',
			icon: sp,
			height: '50%',
			width: '50%',
			top: 50,
			left: 210
		},
		{
			id: 2,
			url: '/books',
			name: 'Books',
			icon: g,
			height: '50%',
			width: '50%',
			top: 120,
			left: 110
		},
		{
			id: 3,
			url: `https://${hostname}/pyrite/?api=https%3A%2F%2F${hostname}${proApi}`,
			name: 'Pyrite',
			icon: p,
			height: '50%',
			width: '50%',
			top: 30,
			left: 110
		},
		{
			id: 7,
			url: `https://${hostname}/ripple/`,
			name: 'Ripple',
			icon: rp,
			height: '50%',
			width: '50%',
			top: 20,
			left: 200
		},
		{
			id: 4,
			url: '/apps',
			name: 'Apps',
			icon: a,
			height: '50%',
			width: '50%',
			top: 90,
			left: 160
		},
		{
			id: 5,
			url: '/settings',
			name: 'Settings',
			icon: s,
			height: '80%',
			width: '80%',
			top: 0,
			left: 0,
			center: true
		}
	]);
	// STUB: original customApps is loaded from the 'customApps' setting. Empty here.
	let customApps = $state([]);
	const apps = $derived([...baseApps, ...customApps]);

	// Kept from original: dock button entrance animation (the CSS starts .navButton at opacity 0).
	let navMounted = false;
	let navIndex = 0;
	function animateNavButton(node) {
		const delay = navMounted ? 0 : 0.1 + navIndex++ * 0.09;
		gsap.fromTo(
			node,
			{
				opacity: 0,
				y: 50
			},
			{
				opacity: 1,
				y: 0,
				delay
			}
		);
	}
	onMount(() => {
		navMounted = true;
	});

	// STUB: original starts pointer-locked dragging to resize the dock. No-op here.
	function startNavResize(e) {}
	// STUB: original opens the context menu (separate parent div). No-op here.
	function openMenu(e, type, appId, url, name, height, width, top, left) {}
	// STUB: original pushes a window into the windowList store (rendered by <Window>). No-op here.
	function openWindow(url, name, height, width, top, left, appId, bottom, right) {}
	// STUB: original opens the preview panel (separate parent div) after a 400ms hover. No-op here.
	function hoverStart(e, appId) {}
	// STUB: original schedules closing the preview panel. No-op here.
	function hoverEnd() {}
	// STUB: original compares against the activeSignal store and windowList. Always false here.
	function isAppActive(appId) {
		return false;
	}
	// STUB: original checks the windowList store for minimized windows. Always false here.
	function hasMinimizedWindow(appId) {
		return false;
	}
	// STUB: original filters the windowList store for the app's windows. Always empty here.
	function getAppWindows(appId) {
		return [];
	}
</script>

<div
	class="nav"
	style="	height: {40 + navSizeMulti}px; 
	
"
>
</div>
