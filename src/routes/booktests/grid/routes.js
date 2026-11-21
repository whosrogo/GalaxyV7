// Generated: zoom into the book grid's card, one element / attribute / FillerName per step.
export const groups = [
	{
		"id": "start",
		"title": "Start",
		"note": "Toolbar, favorites and header as in booktests/s07, plus the grid loop. Each card runs its script and style but has no markup yet.",
		"links": [
			{
				"href": "/booktests/grid/s00",
				"tag": "s00",
				"label": "Card script and style only, no markup"
			}
		]
	},
	{
		"id": "root",
		"title": "Card root div",
		"note": "The clickable card container.",
		"links": [
			{
				"href": "/booktests/grid/s01",
				"tag": "s01",
				"label": "Add <div> card root (bare)"
			},
			{
				"href": "/booktests/grid/s02",
				"tag": "s02",
				"label": "Add class=\"bookDiv\""
			},
			{
				"href": "/booktests/grid/s03",
				"tag": "s03",
				"label": "Add role=\"button\""
			},
			{
				"href": "/booktests/grid/s04",
				"tag": "s04",
				"label": "Add tabindex=\"0\""
			},
			{
				"href": "/booktests/grid/s05",
				"tag": "s05",
				"label": "Add onclick={open}"
			},
			{
				"href": "/booktests/grid/s06",
				"tag": "s06",
				"label": "Add onkeydown (Enter / Space opens)"
			}
		]
	},
	{
		"id": "fav",
		"title": "Favorite button",
		"note": "Heart button in the corner (CSS keeps it hidden until hover).",
		"links": [
			{
				"href": "/booktests/grid/s07",
				"tag": "s07",
				"label": "Add <button> favorite button (bare)"
			},
			{
				"href": "/booktests/grid/s08",
				"tag": "s08",
				"label": "Add class=\"favBtn\""
			},
			{
				"href": "/booktests/grid/s09",
				"tag": "s09",
				"label": "Add class:favorited"
			},
			{
				"href": "/booktests/grid/s10",
				"tag": "s10",
				"label": "Add title (Favorite / Unfavorite)"
			},
			{
				"href": "/booktests/grid/s11",
				"tag": "s11",
				"label": "Add aria-label"
			},
			{
				"href": "/booktests/grid/s12",
				"tag": "s12",
				"label": "Add onclick (toggle favorite)"
			}
		]
	},
	{
		"id": "svg",
		"title": "Heart icon",
		"note": "The SVG inside the favorite button.",
		"links": [
			{
				"href": "/booktests/grid/s13",
				"tag": "s13",
				"label": "Add <svg> heart icon (bare)"
			},
			{
				"href": "/booktests/grid/s14",
				"tag": "s14",
				"label": "Add viewBox"
			},
			{
				"href": "/booktests/grid/s15",
				"tag": "s15",
				"label": "Add width"
			},
			{
				"href": "/booktests/grid/s16",
				"tag": "s16",
				"label": "Add height"
			},
			{
				"href": "/booktests/grid/s17",
				"tag": "s17",
				"label": "Add fill"
			},
			{
				"href": "/booktests/grid/s18",
				"tag": "s18",
				"label": "Add stroke"
			},
			{
				"href": "/booktests/grid/s19",
				"tag": "s19",
				"label": "Add stroke-width"
			},
			{
				"href": "/booktests/grid/s20",
				"tag": "s20",
				"label": "Add stroke-linecap"
			},
			{
				"href": "/booktests/grid/s21",
				"tag": "s21",
				"label": "Add stroke-linejoin"
			},
			{
				"href": "/booktests/grid/s22",
				"tag": "s22",
				"label": "Add <path> (bare)"
			},
			{
				"href": "/booktests/grid/s23",
				"tag": "s23",
				"label": "Add d (heart shape)"
			}
		]
	},
	{
		"id": "thumb",
		"title": "Thumbnail",
		"note": "Fallback title shows only when a book has no thumbnail or it fails to load; otherwise the img renders.",
		"links": [
			{
				"href": "/booktests/grid/s24",
				"tag": "s24",
				"label": "Add <div> fallback title (bare; only for books without a working thumbnail)"
			},
			{
				"href": "/booktests/grid/s25",
				"tag": "s25",
				"label": "Add class=\"fallback\""
			},
			{
				"href": "/booktests/grid/s26",
				"tag": "s26",
				"label": "Add FillerName with the book name"
			},
			{
				"href": "/booktests/grid/s27",
				"tag": "s27",
				"label": "Add <img /> thumbnail (bare)"
			},
			{
				"href": "/booktests/grid/s28",
				"tag": "s28",
				"label": "Add src (thumbnail URL)"
			},
			{
				"href": "/booktests/grid/s29",
				"tag": "s29",
				"label": "Add class=\"bookImg\""
			},
			{
				"href": "/booktests/grid/s30",
				"tag": "s30",
				"label": "Add loading=\"lazy\""
			},
			{
				"href": "/booktests/grid/s31",
				"tag": "s31",
				"label": "Add decoding=\"async\""
			},
			{
				"href": "/booktests/grid/s32",
				"tag": "s32",
				"label": "Add onerror (switch to fallback)"
			}
		]
	},
	{
		"id": "meta",
		"title": "Name and tags",
		"note": "Overlay text at the bottom of the card (CSS keeps it hidden until hover).",
		"links": [
			{
				"href": "/booktests/grid/s33",
				"tag": "s33",
				"label": "Add <div> meta (bare)"
			},
			{
				"href": "/booktests/grid/s34",
				"tag": "s34",
				"label": "Add class=\"bookMeta\""
			},
			{
				"href": "/booktests/grid/s35",
				"tag": "s35",
				"label": "Add <span> name (bare)"
			},
			{
				"href": "/booktests/grid/s36",
				"tag": "s36",
				"label": "Add class=\"bookName\""
			},
			{
				"href": "/booktests/grid/s37",
				"tag": "s37",
				"label": "Add FillerName with the book name"
			},
			{
				"href": "/booktests/grid/s38",
				"tag": "s38",
				"label": "Add <span> tags (bare; only for books with tags)"
			},
			{
				"href": "/booktests/grid/s39",
				"tag": "s39",
				"label": "Add class=\"bookTag\""
			},
			{
				"href": "/booktests/grid/s40",
				"tag": "s40",
				"label": "Add FillerName with up to 3 tags"
			}
		]
	}
];
