// Generated: cumulative rebuild of src/routes/slate/+page.svelte, one element per step, in file order.
export const groups = [
	{
		"id": "start",
		"title": "Start",
		"note": "The original <script> only, no markup. Loads the engines on mount like the real page.",
		"links": [
			{
				"href": "/slatetests/s00",
				"tag": "s00",
				"label": "Original script, no markup"
			}
		]
	},
	{
		"id": "tabbar",
		"title": "div.tab-bar",
		"note": "Tab strip. The script adds one tab on mount.",
		"links": [
			{
				"href": "/slatetests/s01",
				"tag": "s01",
				"label": "Add div.tab-bar (empty)"
			},
			{
				"href": "/slatetests/s02",
				"tag": "s02",
				"label": "Add <Tab> per tab"
			},
			{
				"href": "/slatetests/s03",
				"tag": "s03",
				"label": "Add div.newtb (empty, new-tab handler)"
			},
			{
				"href": "/slatetests/s04",
				"tag": "s04",
				"label": "Add p.plus \"+\""
			}
		]
	},
	{
		"id": "toolbar",
		"title": "div.tool-bar",
		"note": "Toolbar container.",
		"links": [
			{
				"href": "/slatetests/s05",
				"tag": "s05",
				"label": "Add div.tool-bar (empty)"
			}
		]
	},
	{
		"id": "navleft",
		"title": "div.nav-left",
		"note": "Back / forward / reload buttons.",
		"links": [
			{
				"href": "/slatetests/s06",
				"tag": "s06",
				"label": "Add div.nav-left (empty)"
			},
			{
				"href": "/slatetests/s07",
				"tag": "s07",
				"label": "Add div.button (back, empty)"
			},
			{
				"href": "/slatetests/s08",
				"tag": "s08",
				"label": "Add img back icon"
			},
			{
				"href": "/slatetests/s09",
				"tag": "s09",
				"label": "Add div.button (forward, empty)"
			},
			{
				"href": "/slatetests/s10",
				"tag": "s10",
				"label": "Add img forward icon"
			},
			{
				"href": "/slatetests/s11",
				"tag": "s11",
				"label": "Add div.button (reload, empty)"
			},
			{
				"href": "/slatetests/s12",
				"tag": "s12",
				"label": "Add img reload icon"
			}
		]
	},
	{
		"id": "navmiddle",
		"title": "div.nav-middle",
		"note": "Address bar and bookmark star.",
		"links": [
			{
				"href": "/slatetests/s13",
				"tag": "s13",
				"label": "Add div.nav-middle (empty)"
			},
			{
				"href": "/slatetests/s14",
				"tag": "s14",
				"label": "Add form (empty, submit handler)"
			},
			{
				"href": "/slatetests/s15",
				"tag": "s15",
				"label": "Add img search icon"
			},
			{
				"href": "/slatetests/s16",
				"tag": "s16",
				"label": "Add input address bar (all attributes)"
			},
			{
				"href": "/slatetests/s17",
				"tag": "s17",
				"label": "Add div.star (empty, bookmark handler)"
			},
			{
				"href": "/slatetests/s18",
				"tag": "s18",
				"label": "Add img star icon"
			}
		]
	},
	{
		"id": "bookmarkmenu",
		"title": "Bookmark popup",
		"note": "Hidden on load in the original (opens from the star or the menu), so these steps change markup but not the initial render.",
		"links": [
			{
				"href": "/slatetests/s19",
				"tag": "s19",
				"label": "Add div.settings-overlay (bookmark popup)"
			},
			{
				"href": "/slatetests/s20",
				"tag": "s20",
				"label": "Add div.bookmarkContainer (empty)"
			},
			{
				"href": "/slatetests/s21",
				"tag": "s21",
				"label": "Add p.bookmarkTitle"
			},
			{
				"href": "/slatetests/s22",
				"tag": "s22",
				"label": "Add span.bookmarkLabel \"Name\""
			},
			{
				"href": "/slatetests/s23",
				"tag": "s23",
				"label": "Add input bookmark name"
			},
			{
				"href": "/slatetests/s24",
				"tag": "s24",
				"label": "Add span.bookmarkLabel \"URL\""
			},
			{
				"href": "/slatetests/s25",
				"tag": "s25",
				"label": "Add input bookmark URL"
			},
			{
				"href": "/slatetests/s26",
				"tag": "s26",
				"label": "Add div.flex (empty)"
			},
			{
				"href": "/slatetests/s27",
				"tag": "s27",
				"label": "Add p.randomthing hint"
			},
			{
				"href": "/slatetests/s28",
				"tag": "s28",
				"label": "Add button.bookmarkDone \"Done\""
			}
		]
	},
	{
		"id": "navright",
		"title": "div.nav-right",
		"note": "Extensions and menu buttons.",
		"links": [
			{
				"href": "/slatetests/s29",
				"tag": "s29",
				"label": "Add div.nav-right (empty)"
			},
			{
				"href": "/slatetests/s30",
				"tag": "s30",
				"label": "Add div.button (extensions, empty)"
			},
			{
				"href": "/slatetests/s31",
				"tag": "s31",
				"label": "Add img extensions icon"
			}
		]
	},
	{
		"id": "extmenu",
		"title": "Extensions popup",
		"note": "Hidden on load in the original (opens from the puzzle button), so these steps change markup but not the initial render.",
		"links": [
			{
				"href": "/slatetests/s32",
				"tag": "s32",
				"label": "Add div.settings-overlay (extensions popup)"
			},
			{
				"href": "/slatetests/s33",
				"tag": "s33",
				"label": "Add div.extensionContainer (empty)"
			},
			{
				"href": "/slatetests/s34",
				"tag": "s34",
				"label": "Add div.extensionBlock (empty)"
			},
			{
				"href": "/slatetests/s35",
				"tag": "s35",
				"label": "Add div.aboutExtension (empty)"
			},
			{
				"href": "/slatetests/s36",
				"tag": "s36",
				"label": "Add p.extensionName"
			},
			{
				"href": "/slatetests/s37",
				"tag": "s37",
				"label": "Add p.extensionDesc"
			},
			{
				"href": "/slatetests/s38",
				"tag": "s38",
				"label": "Add button.extensionToggle (empty, all attributes)"
			},
			{
				"href": "/slatetests/s39",
				"tag": "s39",
				"label": "Add span.toggleKnob"
			}
		]
	},
	{
		"id": "navright-2",
		"title": "div.nav-right (cont.)",
		"note": "Extensions and menu buttons.",
		"links": [
			{
				"href": "/slatetests/s40",
				"tag": "s40",
				"label": "Add div.button (menu, empty)"
			},
			{
				"href": "/slatetests/s41",
				"tag": "s41",
				"label": "Add img menu icon"
			}
		]
	},
	{
		"id": "settingsmenu",
		"title": "Menu dropdown",
		"note": "Hidden on load in the original (opens from the menu button), so these steps change markup but not the initial render.",
		"links": [
			{
				"href": "/slatetests/s42",
				"tag": "s42",
				"label": "Add div.settings-overlay (menu)"
			},
			{
				"href": "/slatetests/s43",
				"tag": "s43",
				"label": "Add div.settings-dropdown (empty)"
			},
			{
				"href": "/slatetests/s44",
				"tag": "s44",
				"label": "Add button.menuBtn \"New Tab\""
			},
			{
				"href": "/slatetests/s45",
				"tag": "s45",
				"label": "Add button.menuBtn \"Bookmark Site\""
			},
			{
				"href": "/slatetests/s46",
				"tag": "s46",
				"label": "Add div.break"
			},
			{
				"href": "/slatetests/s47",
				"tag": "s47",
				"label": "Add p 1st setting label (with Filler)"
			},
			{
				"href": "/slatetests/s48",
				"tag": "s48",
				"label": "Add select 1st setting (empty)"
			},
			{
				"href": "/slatetests/s49",
				"tag": "s49",
				"label": "Add option 1 of 3"
			},
			{
				"href": "/slatetests/s50",
				"tag": "s50",
				"label": "Add option 2 of 3"
			},
			{
				"href": "/slatetests/s51",
				"tag": "s51",
				"label": "Add option 3 of 3"
			},
			{
				"href": "/slatetests/s52",
				"tag": "s52",
				"label": "Add p 2nd setting label (with Filler)"
			},
			{
				"href": "/slatetests/s53",
				"tag": "s53",
				"label": "Add select 2nd setting (empty)"
			},
			{
				"href": "/slatetests/s54",
				"tag": "s54",
				"label": "Add option 1 of 2"
			},
			{
				"href": "/slatetests/s55",
				"tag": "s55",
				"label": "Add option 2 of 2"
			},
			{
				"href": "/slatetests/s56",
				"tag": "s56",
				"label": "Add p 3rd setting label (with Filler)"
			},
			{
				"href": "/slatetests/s57",
				"tag": "s57",
				"label": "Add input 3rd setting"
			},
			{
				"href": "/slatetests/s58",
				"tag": "s58",
				"label": "Add p 4th setting label (with Filler)"
			},
			{
				"href": "/slatetests/s59",
				"tag": "s59",
				"label": "Add select 4th setting (empty)"
			},
			{
				"href": "/slatetests/s60",
				"tag": "s60",
				"label": "Add option 1 of 9"
			},
			{
				"href": "/slatetests/s61",
				"tag": "s61",
				"label": "Add option 2 of 9"
			},
			{
				"href": "/slatetests/s62",
				"tag": "s62",
				"label": "Add option 3 of 9"
			},
			{
				"href": "/slatetests/s63",
				"tag": "s63",
				"label": "Add option 4 of 9"
			},
			{
				"href": "/slatetests/s64",
				"tag": "s64",
				"label": "Add option 5 of 9"
			},
			{
				"href": "/slatetests/s65",
				"tag": "s65",
				"label": "Add option 6 of 9"
			},
			{
				"href": "/slatetests/s66",
				"tag": "s66",
				"label": "Add option 7 of 9"
			},
			{
				"href": "/slatetests/s67",
				"tag": "s67",
				"label": "Add option 8 of 9"
			},
			{
				"href": "/slatetests/s68",
				"tag": "s68",
				"label": "Add option 9 of 9"
			},
			{
				"href": "/slatetests/s69",
				"tag": "s69",
				"label": "Add div.break"
			},
			{
				"href": "/slatetests/s70",
				"tag": "s70",
				"label": "Add button \"Open in new tab\""
			},
			{
				"href": "/slatetests/s71",
				"tag": "s71",
				"label": "Add div.break"
			},
			{
				"href": "/slatetests/s72",
				"tag": "s72",
				"label": "Add button \"Full Screen\""
			},
			{
				"href": "/slatetests/s73",
				"tag": "s73",
				"label": "Add button \"Inspect Element\""
			}
		]
	},
	{
		"id": "snippet",
		"title": "{#snippet mark}",
		"note": "Bookmark item template. Renders nothing until the bookmarks bar uses it.",
		"links": [
			{
				"href": "/slatetests/s74",
				"tag": "s74",
				"label": "Add div.mark (empty, click / right-click handlers)"
			},
			{
				"href": "/slatetests/s75",
				"tag": "s75",
				"label": "Add p.markName"
			}
		]
	},
	{
		"id": "bookmarks",
		"title": "div.bookmarks",
		"note": "Bookmarks bar. Only renders if you have saved bookmarks.",
		"links": [
			{
				"href": "/slatetests/s76",
				"tag": "s76",
				"label": "Add div.bookmarks (empty)"
			},
			{
				"href": "/slatetests/s77",
				"tag": "s77",
				"label": "Add {@render mark} per bookmark"
			}
		]
	},
	{
		"id": "fcontainer",
		"title": "div.fcontainer",
		"note": "Page frames and the new-tab start page.",
		"links": [
			{
				"href": "/slatetests/s78",
				"tag": "s78",
				"label": "Add div.fcontainer (empty)"
			},
			{
				"href": "/slatetests/s79",
				"tag": "s79",
				"label": "Add <Iframe> per frame"
			},
			{
				"href": "/slatetests/s80",
				"tag": "s80",
				"label": "Add <Home> start page (active tab with no URL)"
			}
		]
	}
];
