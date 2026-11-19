// Generated: cumulative rebuild of src/routes/books/+page.svelte, one element per step, in file order.
export const groups = [
	{
		"id": "start",
		"title": "Start",
		"note": "The original script and style block only, no markup. The catalog still loads via +page.ts.",
		"links": [
			{
				"href": "/booktests/s00",
				"tag": "s00",
				"label": "Original script and style, no markup"
			}
		]
	},
	{
		"id": "toolbar",
		"title": "Toolbar component",
		"note": "Search, tag and filter bar. One step; its markup lives in src/lib/books/.",
		"links": [
			{
				"href": "/booktests/s01",
				"tag": "s01",
				"label": "Add toolbar component (search, tags, filter, random)"
			}
		]
	},
	{
		"id": "favorites",
		"title": "Favorites section",
		"note": "Only renders if you have favorites and the filter is not set to Favorites.",
		"links": [
			{
				"href": "/booktests/s02",
				"tag": "s02",
				"label": "Add div.section-header \"Favorites\""
			},
			{
				"href": "/booktests/s03",
				"tag": "s03",
				"label": "Add div.grid (favorites, empty)"
			},
			{
				"href": "/booktests/s04",
				"tag": "s04",
				"label": "Add card component per favorite (up to 12)"
			}
		]
	},
	{
		"id": "header",
		"title": "div.section-header",
		"note": "Heading with the current count.",
		"links": [
			{
				"href": "/booktests/s05",
				"tag": "s05",
				"label": "Add div.section-header (count)"
			}
		]
	},
	{
		"id": "results",
		"title": "Results",
		"note": "p.empty only shows when nothing matches, so with the catalog loaded the results grid renders instead.",
		"links": [
			{
				"href": "/booktests/s06",
				"tag": "s06",
				"label": "Add p.empty"
			},
			{
				"href": "/booktests/s07",
				"tag": "s07",
				"label": "Add div.grid (results, empty)"
			},
			{
				"href": "/booktests/s08",
				"tag": "s08",
				"label": "Add card component per result (first 60)"
			}
		]
	},
	{
		"id": "loadmore",
		"title": "Load more",
		"note": "Only renders when more results remain than are shown.",
		"links": [
			{
				"href": "/booktests/s09",
				"tag": "s09",
				"label": "Add div.load-more-row (empty)"
			},
			{
				"href": "/booktests/s10",
				"tag": "s10",
				"label": "Add button.load-more"
			},
			{
				"href": "/booktests/s11",
				"tag": "s11",
				"label": "Add div with use:intersect (auto load more)"
			}
		]
	},
	{
		"id": "overlay",
		"title": "Overlay component",
		"note": "Book viewer. Opens when a book is clicked.",
		"links": [
			{
				"href": "/booktests/s12",
				"tag": "s12",
				"label": "Add overlay component (book viewer)"
			}
		]
	}
];
