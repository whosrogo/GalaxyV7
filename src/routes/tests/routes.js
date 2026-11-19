// Generated: cumulative rebuild of src/routes/os/+page.svelte, one element per step, in file order.
export const groups = [
	{
		"id": "start",
		"title": "Start",
		"note": "The original <script> only, no markup.",
		"links": [
			{
				"href": "/tests/s00",
				"tag": "s00",
				"label": "Original script, no markup"
			}
		]
	},
	{
		"id": "topnav",
		"title": "div.topNav",
		"note": "Top bar.",
		"links": [
			{
				"href": "/tests/s01",
				"tag": "s01",
				"label": "Add div.topNav (empty)"
			},
			{
				"href": "/tests/s02",
				"tag": "s02",
				"label": "Add div.topLeft (empty)"
			},
			{
				"href": "/tests/s03",
				"tag": "s03",
				"label": "Add p.topNavText (site title, with Fillers)"
			},
			{
				"href": "/tests/s04",
				"tag": "s04",
				"label": "Add div.topMiddle"
			},
			{
				"href": "/tests/s05",
				"tag": "s05",
				"label": "Add div.topRight (empty)"
			},
			{
				"href": "/tests/s06",
				"tag": "s06",
				"label": "Add div.topButton (switch mode, empty)"
			},
			{
				"href": "/tests/s07",
				"tag": "s07",
				"label": "Add img swap icon"
			},
			{
				"href": "/tests/s08",
				"tag": "s08",
				"label": "Add div.topButton (links, empty)"
			},
			{
				"href": "/tests/s09",
				"tag": "s09",
				"label": "Add img link icon"
			},
			{
				"href": "/tests/s10",
				"tag": "s10",
				"label": "Add p clock"
			}
		]
	},
	{
		"id": "notifications",
		"title": "<Notifications />",
		"note": "Notification component (not a div in this file).",
		"links": [
			{
				"href": "/tests/s11",
				"tag": "s11",
				"label": "Add <Notifications />"
			}
		]
	},
	{
		"id": "window-events",
		"title": "<svelte:window>",
		"note": "Window click / Escape handlers (not a div).",
		"links": [
			{
				"href": "/tests/s12",
				"tag": "s12",
				"label": "Add <svelte:window> handlers"
			}
		]
	},
	{
		"id": "background",
		"title": "div.background",
		"note": "Background image. No child elements.",
		"links": [
			{
				"href": "/tests/s13",
				"tag": "s13",
				"label": "Add div.background"
			}
		]
	},
	{
		"id": "contextmenu",
		"title": "div.contextMenu",
		"note": "Hidden on load in the original (opens only after interaction), so these steps change markup but not the initial render.",
		"links": [
			{
				"href": "/tests/s14",
				"tag": "s14",
				"label": "Add div.contextMenu (empty)"
			},
			{
				"href": "/tests/s15",
				"tag": "s15",
				"label": "Add button \"Open New Window\""
			},
			{
				"href": "/tests/s16",
				"tag": "s16",
				"label": "Add button \"Remove App\""
			},
			{
				"href": "/tests/s17",
				"tag": "s17",
				"label": "Add button \"Add New App\""
			}
		]
	},
	{
		"id": "modal",
		"title": "div.modalOverlay",
		"note": "Hidden on load in the original (opens only after interaction), so these steps change markup but not the initial render.",
		"links": [
			{
				"href": "/tests/s18",
				"tag": "s18",
				"label": "Add div.modalOverlay (empty)"
			},
			{
				"href": "/tests/s19",
				"tag": "s19",
				"label": "Add div.modal (empty, with entrance animation)"
			},
			{
				"href": "/tests/s20",
				"tag": "s20",
				"label": "Add p.modalTitle \"Add App\""
			},
			{
				"href": "/tests/s21",
				"tag": "s21",
				"label": "Add p.modalLabel \"URL\""
			},
			{
				"href": "/tests/s22",
				"tag": "s22",
				"label": "Add input URL"
			},
			{
				"href": "/tests/s23",
				"tag": "s23",
				"label": "Add p.modalLabel \"Name\""
			},
			{
				"href": "/tests/s24",
				"tag": "s24",
				"label": "Add input Name"
			},
			{
				"href": "/tests/s25",
				"tag": "s25",
				"label": "Add p.modalLabel \"Icon\""
			},
			{
				"href": "/tests/s26",
				"tag": "s26",
				"label": "Add input Icon"
			},
			{
				"href": "/tests/s27",
				"tag": "s27",
				"label": "Add button.advancedToggle (with arrow span)"
			},
			{
				"href": "/tests/s28",
				"tag": "s28",
				"label": "Add div.advancedPanel (empty, with animation)"
			},
			{
				"href": "/tests/s29",
				"tag": "s29",
				"label": "Add p.modalLabel (1st advanced label, with Fillers)"
			},
			{
				"href": "/tests/s30",
				"tag": "s30",
				"label": "Add div.modalOptions (1st option row, empty)"
			},
			{
				"href": "/tests/s31",
				"tag": "s31",
				"label": "Add button.modalOption per option (1st row)"
			},
			{
				"href": "/tests/s32",
				"tag": "s32",
				"label": "Add p.modalLabel (2nd advanced label, with Fillers)"
			},
			{
				"href": "/tests/s33",
				"tag": "s33",
				"label": "Add div.modalOptions (2nd option row, empty)"
			},
			{
				"href": "/tests/s34",
				"tag": "s34",
				"label": "Add button.modalOption per option (2nd row)"
			},
			{
				"href": "/tests/s35",
				"tag": "s35",
				"label": "Add p.modalLabel (3rd advanced label, with Filler)"
			},
			{
				"href": "/tests/s36",
				"tag": "s36",
				"label": "Add input (3rd advanced field)"
			},
			{
				"href": "/tests/s37",
				"tag": "s37",
				"label": "Add p.modalLabel \"Open Notification\""
			},
			{
				"href": "/tests/s38",
				"tag": "s38",
				"label": "Add input Open Notification"
			},
			{
				"href": "/tests/s39",
				"tag": "s39",
				"label": "Add p.modalError"
			},
			{
				"href": "/tests/s40",
				"tag": "s40",
				"label": "Add div.modalActions (empty)"
			},
			{
				"href": "/tests/s41",
				"tag": "s41",
				"label": "Add button \"Cancel\""
			},
			{
				"href": "/tests/s42",
				"tag": "s42",
				"label": "Add button \"Add\""
			}
		]
	},
	{
		"id": "preview",
		"title": "div#previewPanel",
		"note": "Hidden on load in the original (opens only after interaction), so these steps change markup but not the initial render.",
		"links": [
			{
				"href": "/tests/s43",
				"tag": "s43",
				"label": "Add div#previewPanel (empty, with animation and mouse handlers)"
			},
			{
				"href": "/tests/s44",
				"tag": "s44",
				"label": "Add button.previewCard per window (empty)"
			},
			{
				"href": "/tests/s45",
				"tag": "s45",
				"label": "Add p {name}"
			}
		]
	},
	{
		"id": "nav",
		"title": "div.nav",
		"note": "Dock.",
		"links": [
			{
				"href": "/tests/s46",
				"tag": "s46",
				"label": "Add div.nav (empty, with height style)"
			},
			{
				"href": "/tests/s47",
				"tag": "s47",
				"label": "Add div.navResize"
			},
			{
				"href": "/tests/s48",
				"tag": "s48",
				"label": "Add div.navStuff (empty, with context-menu handler)"
			},
			{
				"href": "/tests/s49",
				"tag": "s49",
				"label": "Add button.navButton per app (empty, all attributes)"
			},
			{
				"href": "/tests/s50",
				"tag": "s50",
				"label": "Add img.navIcon"
			}
		]
	},
	{
		"id": "windows",
		"title": "<Window> list",
		"note": "Renders one <Window> per open window; empty on load (not a div in this file).",
		"links": [
			{
				"href": "/tests/s51",
				"tag": "s51",
				"label": "Add {#each $windowList} <Window> list"
			}
		]
	}
];
