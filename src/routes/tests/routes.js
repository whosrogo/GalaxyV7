// Generated: test routes in the order their parent divs appear in src/routes/os/+page.svelte.
export const groups = [
	{
		"id": "baseline",
		"title": "Baseline",
		"note": "os.css only, no markup from the os page.",
		"links": [
			{
				"href": "/tests/baseline",
				"tag": "baseline",
				"label": "Empty page with os.css"
			}
		]
	},
	{
		"id": "topnav",
		"title": "div.topNav",
		"note": "Top bar. Handlers stubbed; clock kept live.",
		"links": [
			{
				"href": "/tests/topnav/control",
				"tag": "control",
				"label": "Whole parent div"
			},
			{
				"href": "/tests/topnav/s1",
				"tag": "s1",
				"label": "div.topNav (empty)"
			},
			{
				"href": "/tests/topnav/s2",
				"tag": "s2",
				"label": "Add div.topLeft (empty)"
			},
			{
				"href": "/tests/topnav/s3",
				"tag": "s3",
				"label": "Add p.topNavText (site title, with Fillers)"
			},
			{
				"href": "/tests/topnav/s4",
				"tag": "s4",
				"label": "Add div.topMiddle"
			},
			{
				"href": "/tests/topnav/s5",
				"tag": "s5",
				"label": "Add div.topRight (empty)"
			},
			{
				"href": "/tests/topnav/s6",
				"tag": "s6",
				"label": "Add div.topButton (switch mode, empty)"
			},
			{
				"href": "/tests/topnav/s7",
				"tag": "s7",
				"label": "Add img swap icon"
			},
			{
				"href": "/tests/topnav/s8",
				"tag": "s8",
				"label": "Add div.topButton (links, empty)"
			},
			{
				"href": "/tests/topnav/s9",
				"tag": "s9",
				"label": "Add img link icon"
			},
			{
				"href": "/tests/topnav/s10",
				"tag": "s10",
				"label": "Add p clock"
			}
		]
	},
	{
		"id": "background",
		"title": "div.background",
		"note": "Leaf div. s1 drops the background image.",
		"links": [
			{
				"href": "/tests/background/control",
				"tag": "control",
				"label": "Whole parent div"
			},
			{
				"href": "/tests/background/s1",
				"tag": "s1",
				"label": "div.background with class only (no background image)"
			},
			{
				"href": "/tests/background/s2",
				"tag": "s2",
				"label": "Add style background-image (original)"
			}
		]
	},
	{
		"id": "contextmenu",
		"title": "div.contextMenu",
		"note": "Opens on load (normally right-click only). Shows the app branch; nav-branch shows the other one.",
		"links": [
			{
				"href": "/tests/contextmenu/control",
				"tag": "control",
				"label": "Whole parent div"
			},
			{
				"href": "/tests/contextmenu/s1",
				"tag": "s1",
				"label": "div.contextMenu (empty)"
			},
			{
				"href": "/tests/contextmenu/s2",
				"tag": "s2",
				"label": "Add button \"Open New Window\" (app branch)"
			},
			{
				"href": "/tests/contextmenu/s3",
				"tag": "s3",
				"label": "Add button \"Remove App\" (app branch, custom apps)"
			},
			{
				"href": "/tests/contextmenu/s4",
				"tag": "s4",
				"label": "Add button \"Add New App\" (nav branch; markup only, does not render while menuType is 'app')"
			},
			{
				"href": "/tests/contextmenu/nav-branch",
				"tag": "nav-branch",
				"label": "Control with menuType = 'nav' (renders the Add New App branch)"
			}
		]
	},
	{
		"id": "modal",
		"title": "div.modalOverlay",
		"note": "Opens on load with the advanced panel and error line shown.",
		"links": [
			{
				"href": "/tests/modal/control",
				"tag": "control",
				"label": "Whole parent div"
			},
			{
				"href": "/tests/modal/s1",
				"tag": "s1",
				"label": "div.modalOverlay (empty)"
			},
			{
				"href": "/tests/modal/s2",
				"tag": "s2",
				"label": "Add div.modal (empty, with entrance animation)"
			},
			{
				"href": "/tests/modal/s3",
				"tag": "s3",
				"label": "Add p.modalTitle \"Add App\""
			},
			{
				"href": "/tests/modal/s4",
				"tag": "s4",
				"label": "Add p.modalLabel \"URL\""
			},
			{
				"href": "/tests/modal/s5",
				"tag": "s5",
				"label": "Add input URL"
			},
			{
				"href": "/tests/modal/s6",
				"tag": "s6",
				"label": "Add p.modalLabel \"Name\""
			},
			{
				"href": "/tests/modal/s7",
				"tag": "s7",
				"label": "Add input Name"
			},
			{
				"href": "/tests/modal/s8",
				"tag": "s8",
				"label": "Add p.modalLabel \"Icon\""
			},
			{
				"href": "/tests/modal/s9",
				"tag": "s9",
				"label": "Add input Icon"
			},
			{
				"href": "/tests/modal/s10",
				"tag": "s10",
				"label": "Add button.advancedToggle \"Advanced\" (with arrow span)"
			},
			{
				"href": "/tests/modal/s11",
				"tag": "s11",
				"label": "Add div.advancedPanel (empty, with animation)"
			},
			{
				"href": "/tests/modal/s12",
				"tag": "s12",
				"label": "Add p.modalLabel (1st advanced label, with Fillers)"
			},
			{
				"href": "/tests/modal/s13",
				"tag": "s13",
				"label": "Add div.modalOptions (1st option row, empty)"
			},
			{
				"href": "/tests/modal/s14",
				"tag": "s14",
				"label": "Add button.modalOption per option (1st row)"
			},
			{
				"href": "/tests/modal/s15",
				"tag": "s15",
				"label": "Add p.modalLabel (2nd advanced label, with Fillers)"
			},
			{
				"href": "/tests/modal/s16",
				"tag": "s16",
				"label": "Add div.modalOptions (2nd option row, empty)"
			},
			{
				"href": "/tests/modal/s17",
				"tag": "s17",
				"label": "Add button.modalOption per option (2nd row)"
			},
			{
				"href": "/tests/modal/s18",
				"tag": "s18",
				"label": "Add p.modalLabel (3rd advanced label, with Filler)"
			},
			{
				"href": "/tests/modal/s19",
				"tag": "s19",
				"label": "Add input (3rd advanced field)"
			},
			{
				"href": "/tests/modal/s20",
				"tag": "s20",
				"label": "Add p.modalLabel \"Open Notification\""
			},
			{
				"href": "/tests/modal/s21",
				"tag": "s21",
				"label": "Add input Open Notification"
			},
			{
				"href": "/tests/modal/s22",
				"tag": "s22",
				"label": "Add p.modalError"
			},
			{
				"href": "/tests/modal/s23",
				"tag": "s23",
				"label": "Add div.modalActions (empty)"
			},
			{
				"href": "/tests/modal/s24",
				"tag": "s24",
				"label": "Add button \"Cancel\""
			},
			{
				"href": "/tests/modal/s25",
				"tag": "s25",
				"label": "Add button \"Add\""
			}
		]
	},
	{
		"id": "preview",
		"title": "div#previewPanel",
		"note": "Opens on load with two stub windows.",
		"links": [
			{
				"href": "/tests/preview/control",
				"tag": "control",
				"label": "Whole parent div"
			},
			{
				"href": "/tests/preview/s1",
				"tag": "s1",
				"label": "div#previewPanel (empty, with animation and mouse handlers)"
			},
			{
				"href": "/tests/preview/s2",
				"tag": "s2",
				"label": "Add button.previewCard per window (empty)"
			},
			{
				"href": "/tests/preview/s3",
				"tag": "s3",
				"label": "Add p {name}"
			}
		]
	},
	{
		"id": "nav",
		"title": "div.nav",
		"note": "Dock. Buttons fade in via the original gsap animation.",
		"links": [
			{
				"href": "/tests/nav/control",
				"tag": "control",
				"label": "Whole parent div"
			},
			{
				"href": "/tests/nav/s1",
				"tag": "s1",
				"label": "div.nav (empty, with height style)"
			},
			{
				"href": "/tests/nav/s2",
				"tag": "s2",
				"label": "Add div.navResize"
			},
			{
				"href": "/tests/nav/s3",
				"tag": "s3",
				"label": "Add div.navStuff (empty, with context-menu handler)"
			},
			{
				"href": "/tests/nav/s4",
				"tag": "s4",
				"label": "Add button.navButton per app (empty, all attributes)"
			},
			{
				"href": "/tests/nav/s5",
				"tag": "s5",
				"label": "Add img.navIcon"
			}
		]
	}
];
