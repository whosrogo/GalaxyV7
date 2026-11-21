# booktests/grid: card zoom-in

Panel: `/booktests/grid`. Open each route with a full page load and record the initial result.

Every step has the same `+page.svelte`: `booktests/s08` (toolbar, favorites section, count header, empty-state branch and the grid loop) except the grid loop renders `./Card.svelte` instead of `$lib/books/bookCard.svelte`. The favorites section still uses the real card. Each step folder also has the unchanged `books/+page.ts` loader.

`Card.svelte` is the step: `s00` has the card's original script and style and no markup. Each later step adds exactly one thing in source order: a bare element, one attribute, or one `<FillerName>` (whole name or tags, filler included). `s40`'s card matches `bookCard.svelte` except its four import paths point at `$lib/books/...` instead of `./...`, so it renders the same as `booktests/s08`.

The fallback title only renders for books without a working thumbnail, the tags line only for books with tags, and the favorite button and name/tags stay invisible until hover via the card CSS, as on the real page.

| Route | Adds | Section |
| --- | --- | --- |
| `/booktests/grid/s00` | Card script and style only | Start |
| `/booktests/grid/s01` | <div> card root (bare) | Card root div |
| `/booktests/grid/s02` | class="bookDiv" | Card root div |
| `/booktests/grid/s03` | role="button" | Card root div |
| `/booktests/grid/s04` | tabindex="0" | Card root div |
| `/booktests/grid/s05` | onclick={open} | Card root div |
| `/booktests/grid/s06` | onkeydown (Enter / Space opens) | Card root div |
| `/booktests/grid/s07` | <button> favorite button (bare) | Favorite button |
| `/booktests/grid/s08` | class="favBtn" | Favorite button |
| `/booktests/grid/s09` | class:favorited | Favorite button |
| `/booktests/grid/s10` | title (Favorite / Unfavorite) | Favorite button |
| `/booktests/grid/s11` | aria-label | Favorite button |
| `/booktests/grid/s12` | onclick (toggle favorite) | Favorite button |
| `/booktests/grid/s13` | <svg> heart icon (bare) | Heart icon |
| `/booktests/grid/s14` | viewBox | Heart icon |
| `/booktests/grid/s15` | width | Heart icon |
| `/booktests/grid/s16` | height | Heart icon |
| `/booktests/grid/s17` | fill | Heart icon |
| `/booktests/grid/s18` | stroke | Heart icon |
| `/booktests/grid/s19` | stroke-width | Heart icon |
| `/booktests/grid/s20` | stroke-linecap | Heart icon |
| `/booktests/grid/s21` | stroke-linejoin | Heart icon |
| `/booktests/grid/s22` | <path> (bare) | Heart icon |
| `/booktests/grid/s23` | d (heart shape) | Heart icon |
| `/booktests/grid/s24` | <div> fallback title (bare; only for books without a working thumbnail) | Thumbnail |
| `/booktests/grid/s25` | class="fallback" | Thumbnail |
| `/booktests/grid/s26` | FillerName with the book name | Thumbnail |
| `/booktests/grid/s27` | <img /> thumbnail (bare) | Thumbnail |
| `/booktests/grid/s28` | src (thumbnail URL) | Thumbnail |
| `/booktests/grid/s29` | class="bookImg" | Thumbnail |
| `/booktests/grid/s30` | loading="lazy" | Thumbnail |
| `/booktests/grid/s31` | decoding="async" | Thumbnail |
| `/booktests/grid/s32` | onerror (switch to fallback) | Thumbnail |
| `/booktests/grid/s33` | <div> meta (bare) | Name and tags |
| `/booktests/grid/s34` | class="bookMeta" | Name and tags |
| `/booktests/grid/s35` | <span> name (bare) | Name and tags |
| `/booktests/grid/s36` | class="bookName" | Name and tags |
| `/booktests/grid/s37` | FillerName with the book name | Name and tags |
| `/booktests/grid/s38` | <span> tags (bare; only for books with tags) | Name and tags |
| `/booktests/grid/s39` | class="bookTag" | Name and tags |
| `/booktests/grid/s40` | FillerName with up to 3 tags | Name and tags |
