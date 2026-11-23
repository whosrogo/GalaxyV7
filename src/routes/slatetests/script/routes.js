// Generated: zoom into the slatetests/s00 script, one load action per step.
export const groups = [
	{
		"id": "start",
		"title": "Start",
		"note": "Empty script block: nothing loads.",
		"links": [
			{
				"href": "/slatetests/script/s00",
				"tag": "s00",
				"label": "Empty <script>, nothing loaded"
			}
		]
	},
	{
		"id": "imports",
		"title": "Imports",
		"note": "Imports only, no other code. Importing a module fetches it and runs its top-level code.",
		"links": [
			{
				"href": "/slatetests/script/s01",
				"tag": "s01",
				"label": "Add import of browser.css"
			},
			{
				"href": "/slatetests/script/s02",
				"tag": "s02",
				"label": "Add icon image imports (7 icons)"
			},
			{
				"href": "/slatetests/script/s03",
				"tag": "s03",
				"label": "Add Filler component import"
			},
			{
				"href": "/slatetests/script/s04",
				"tag": "s04",
				"label": "Add Tab component import"
			},
			{
				"href": "/slatetests/script/s05",
				"tag": "s05",
				"label": "Add Iframe component import"
			},
			{
				"href": "/slatetests/script/s06",
				"tag": "s06",
				"label": "Add Home component import"
			},
			{
				"href": "/slatetests/script/s07",
				"tag": "s07",
				"label": "Add localspace, stores, svelte and settings-channel imports"
			},
			{
				"href": "/slatetests/script/s08",
				"tag": "s08",
				"label": "Add engine helper imports (loader, search, car, poly, prism)"
			},
			{
				"href": "/slatetests/script/s09",
				"tag": "s09",
				"label": "Add reflux import (creates a RefluxAPI on import)"
			}
		]
	},
	{
		"id": "setup",
		"title": "Setup",
		"note": "State, the in-memory tab, and saved settings.",
		"links": [
			{
				"href": "/slatetests/script/s10",
				"tag": "s10",
				"label": "Add state declarations and effects (logs the current frame URL)"
			},
			{
				"href": "/slatetests/script/s11",
				"tag": "s11",
				"label": "Add addTab() on mount (tab created in memory, no markup)"
			},
			{
				"href": "/slatetests/script/s12",
				"tag": "s12",
				"label": "Add reading saved settings (7 loadSetting calls)"
			},
			{
				"href": "/slatetests/script/s13",
				"tag": "s13",
				"label": "Add writing settings back (save effect)"
			},
			{
				"href": "/slatetests/script/s14",
				"tag": "s14",
				"label": "Add settings channel subscription (BroadcastChannel)"
			}
		]
	},
	{
		"id": "engines",
		"title": "Engine loading",
		"note": "The onMount engine chain, one action per step.",
		"links": [
			{
				"href": "/slatetests/script/s15",
				"tag": "s15",
				"label": "Add ?preview guard and inject /charon/index.js (BareMux)"
			},
			{
				"href": "/slatetests/script/s16",
				"tag": "s16",
				"label": "Add inject /glass/glass.bundle.js"
			},
			{
				"href": "/slatetests/script/s17",
				"tag": "s17",
				"label": "Add inject /glass/glass.config.js"
			},
			{
				"href": "/slatetests/script/s18",
				"tag": "s18",
				"label": "Add inject /poly/polygon.all.js"
			},
			{
				"href": "/slatetests/script/s19",
				"tag": "s19",
				"label": "Add createCinnabarController()"
			},
			{
				"href": "/slatetests/script/s20",
				"tag": "s20",
				"label": "Add createConnection() (BareMux shared worker)"
			},
			{
				"href": "/slatetests/script/s21",
				"tag": "s21",
				"label": "Add setCar() (sets the transport)"
			},
			{
				"href": "/slatetests/script/s22",
				"tag": "s22",
				"label": "Add enablePopupInterceptor() (windowOpen plugin)"
			},
			{
				"href": "/slatetests/script/s23",
				"tag": "s23",
				"label": "Add ready = true and the transport effect (sets the transport again)"
			}
		]
	},
	{
		"id": "rest",
		"title": "Code not run on load",
		"note": "Functions only used by the markup or on demand. Present in the JS, but nothing calls them on load.",
		"links": [
			{
				"href": "/slatetests/script/s24",
				"tag": "s24",
				"label": "Add registerSW() (service worker registration; not called on load)"
			},
			{
				"href": "/slatetests/script/s25",
				"tag": "s25",
				"label": "Add navigation functions (navigate, open in new tab, submit)"
			},
			{
				"href": "/slatetests/script/s26",
				"tag": "s26",
				"label": "Add tab and toolbar handlers (move tab, back/forward/reload, menus, full screen)"
			},
			{
				"href": "/slatetests/script/s27",
				"tag": "s27",
				"label": "Add bookmark functions"
			},
			{
				"href": "/slatetests/script/s28",
				"tag": "s28",
				"label": "Add openInspector() (loads eruda from jsDelivr when used)"
			}
		]
	}
];
