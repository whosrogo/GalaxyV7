# booktests/overlay: overlay zoom-in

Panel: `/booktests/overlay`. Open each route with a full page load and record the initial result.

Every step has the same `+page.svelte`: only the overlay, opened on load with Crossy Road (its `static/books/gmes.json` entry run through the catalog's `normalize`, so the URLs match the real page). `+page.ts` only sets `ssr = false`, like the books page; the catalog isn't fetched. The frame starts in direct mode, the original default.

`Overlay.svelte` is the step: `s00` has the overlay's original script and style and no markup. Each later step adds exactly one thing in source order: a bare element, one attribute, or one text / `<FillerName>` child. `s70`'s overlay matches `bookOverlay.svelte` except its two import paths point at `$lib/books/...` instead of `./...`.

Note: the book files are not in this repo (`static/books/` has no `gmes/` folder), so on the local dev server the frame gets a 404 for `/books/gmes/crossy-road/index.html`. It loads wherever those files are served.

| Route | Adds | Section |
| --- | --- | --- |
| `/booktests/overlay/s00` | Overlay script and style only | Start |
| `/booktests/overlay/s01` | <svelte:window /> (bare) | Window key handler |
| `/booktests/overlay/s02` | {onkeydown} (Escape closes) | Window key handler |
| `/booktests/overlay/s03` | <div> overlay container (bare) | Overlay container |
| `/booktests/overlay/s04` | class="overlay" | Overlay container |
| `/booktests/overlay/s05` | <div> toolbar (bare) | Toolbar |
| `/booktests/overlay/s06` | class="toolbar" | Toolbar |
| `/booktests/overlay/s07` | <button> back (bare) | Back button |
| `/booktests/overlay/s08` | class="tbtn" | Back button |
| `/booktests/overlay/s09` | onclick={onclose} | Back button |
| `/booktests/overlay/s10` | <svg> back arrow (bare) | Back button |
| `/booktests/overlay/s11` | viewBox | Back button |
| `/booktests/overlay/s12` | width | Back button |
| `/booktests/overlay/s13` | height | Back button |
| `/booktests/overlay/s14` | fill | Back button |
| `/booktests/overlay/s15` | stroke | Back button |
| `/booktests/overlay/s16` | stroke-width | Back button |
| `/booktests/overlay/s17` | stroke-linecap | Back button |
| `/booktests/overlay/s18` | stroke-linejoin | Back button |
| `/booktests/overlay/s19` | <path /> (bare) | Back button |
| `/booktests/overlay/s20` | d (arrow shape) | Back button |
| `/booktests/overlay/s21` | text "Back" | Back button |
| `/booktests/overlay/s22` | <span> title (bare) | Title |
| `/booktests/overlay/s23` | class="title" | Title |
| `/booktests/overlay/s24` | FillerName with the book name | Title |
| `/booktests/overlay/s25` | <button> mode toggle (bare) | Mode toggle button |
| `/booktests/overlay/s26` | class="tbtn" | Mode toggle button |
| `/booktests/overlay/s27` | class:active={routed} | Mode toggle button |
| `/booktests/overlay/s28` | onclick (toggle mode) | Mode toggle button |
| `/booktests/overlay/s29` | <svg> globe (bare) | Mode toggle button |
| `/booktests/overlay/s30` | viewBox | Mode toggle button |
| `/booktests/overlay/s31` | width | Mode toggle button |
| `/booktests/overlay/s32` | height | Mode toggle button |
| `/booktests/overlay/s33` | fill | Mode toggle button |
| `/booktests/overlay/s34` | stroke | Mode toggle button |
| `/booktests/overlay/s35` | stroke-width | Mode toggle button |
| `/booktests/overlay/s36` | stroke-linecap | Mode toggle button |
| `/booktests/overlay/s37` | stroke-linejoin | Mode toggle button |
| `/booktests/overlay/s38` | <circle /> (bare) | Mode toggle button |
| `/booktests/overlay/s39` | cx | Mode toggle button |
| `/booktests/overlay/s40` | cy | Mode toggle button |
| `/booktests/overlay/s41` | r | Mode toggle button |
| `/booktests/overlay/s42` | <path /> (bare) | Mode toggle button |
| `/booktests/overlay/s43` | d (globe lines) | Mode toggle button |
| `/booktests/overlay/s44` | <span> label part 1 (bare) | Mode toggle button |
| `/booktests/overlay/s45` | class="" | Mode toggle button |
| `/booktests/overlay/s46` | label text part 1 | Mode toggle button |
| `/booktests/overlay/s47` | <span> label part 2 (bare) | Mode toggle button |
| `/booktests/overlay/s48` | class="none" | Mode toggle button |
| `/booktests/overlay/s49` | label text part 2 | Mode toggle button |
| `/booktests/overlay/s50` | <button> fullscreen (bare) | Fullscreen button |
| `/booktests/overlay/s51` | class="tbtn" | Fullscreen button |
| `/booktests/overlay/s52` | onclick={requestFullscreen} | Fullscreen button |
| `/booktests/overlay/s53` | aria-label="Fullscreen" | Fullscreen button |
| `/booktests/overlay/s54` | <svg> expand icon (bare) | Fullscreen button |
| `/booktests/overlay/s55` | viewBox | Fullscreen button |
| `/booktests/overlay/s56` | width | Fullscreen button |
| `/booktests/overlay/s57` | height | Fullscreen button |
| `/booktests/overlay/s58` | fill | Fullscreen button |
| `/booktests/overlay/s59` | stroke | Fullscreen button |
| `/booktests/overlay/s60` | stroke-width | Fullscreen button |
| `/booktests/overlay/s61` | stroke-linecap | Fullscreen button |
| `/booktests/overlay/s62` | stroke-linejoin | Fullscreen button |
| `/booktests/overlay/s63` | <path /> (bare) | Fullscreen button |
| `/booktests/overlay/s64` | d (expand arrows) | Fullscreen button |
| `/booktests/overlay/s65` | <iframe> (bare, blank) | Frame |
| `/booktests/overlay/s66` | bind:this={frame} | Frame |
| `/booktests/overlay/s67` | {src} (book URL) | Frame |
| `/booktests/overlay/s68` | title="" | Frame |
| `/booktests/overlay/s69` | sandbox (direct mode restrictions) | Frame |
| `/booktests/overlay/s70` | allow (autoplay, fullscreen, controllers) | Frame |
