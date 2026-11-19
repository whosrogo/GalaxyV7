# slate page rebuild tests

Panel: `/slatetests`. Open each route with a full page load and record the initial result.

`s00` is `src/routes/slate/+page.svelte` with its original `<script>` and no markup. Each later step adds one element (with all of its attributes and text) on top of the previous step, in file order. `s80` is byte-identical to the original file.

Nothing is stubbed: every route runs the original script, including loading the engines on mount. `<Tab>`, `<Iframe>` and `<Home>` are added as single steps (their markup lives in `src/lib/utils/browser/`). The bookmark popup, extensions popup and menu dropdown only render after interaction, and the bookmarks bar only when bookmarks are saved, as on the real page.

| Route | Adds | Section |
| --- | --- | --- |
| `/slatetests/s00` | Original script only | Start |
| `/slatetests/s01` | div.tab-bar (empty) | div.tab-bar |
| `/slatetests/s02` | <Tab> per tab | div.tab-bar |
| `/slatetests/s03` | div.newtb (empty, new-tab handler) | div.tab-bar |
| `/slatetests/s04` | p.plus "+" | div.tab-bar |
| `/slatetests/s05` | div.tool-bar (empty) | div.tool-bar |
| `/slatetests/s06` | div.nav-left (empty) | div.nav-left |
| `/slatetests/s07` | div.button (back, empty) | div.nav-left |
| `/slatetests/s08` | img back icon | div.nav-left |
| `/slatetests/s09` | div.button (forward, empty) | div.nav-left |
| `/slatetests/s10` | img forward icon | div.nav-left |
| `/slatetests/s11` | div.button (reload, empty) | div.nav-left |
| `/slatetests/s12` | img reload icon | div.nav-left |
| `/slatetests/s13` | div.nav-middle (empty) | div.nav-middle |
| `/slatetests/s14` | form (empty, submit handler) | div.nav-middle |
| `/slatetests/s15` | img search icon | div.nav-middle |
| `/slatetests/s16` | input address bar (all attributes) | div.nav-middle |
| `/slatetests/s17` | div.star (empty, bookmark handler) | div.nav-middle |
| `/slatetests/s18` | img star icon | div.nav-middle |
| `/slatetests/s19` | div.settings-overlay (bookmark popup) | Bookmark popup |
| `/slatetests/s20` | div.bookmarkContainer (empty) | Bookmark popup |
| `/slatetests/s21` | p.bookmarkTitle | Bookmark popup |
| `/slatetests/s22` | span.bookmarkLabel "Name" | Bookmark popup |
| `/slatetests/s23` | input bookmark name | Bookmark popup |
| `/slatetests/s24` | span.bookmarkLabel "URL" | Bookmark popup |
| `/slatetests/s25` | input bookmark URL | Bookmark popup |
| `/slatetests/s26` | div.flex (empty) | Bookmark popup |
| `/slatetests/s27` | p.randomthing hint | Bookmark popup |
| `/slatetests/s28` | button.bookmarkDone "Done" | Bookmark popup |
| `/slatetests/s29` | div.nav-right (empty) | div.nav-right |
| `/slatetests/s30` | div.button (extensions, empty) | div.nav-right |
| `/slatetests/s31` | img extensions icon | div.nav-right |
| `/slatetests/s32` | div.settings-overlay (extensions popup) | Extensions popup |
| `/slatetests/s33` | div.extensionContainer (empty) | Extensions popup |
| `/slatetests/s34` | div.extensionBlock (empty) | Extensions popup |
| `/slatetests/s35` | div.aboutExtension (empty) | Extensions popup |
| `/slatetests/s36` | p.extensionName | Extensions popup |
| `/slatetests/s37` | p.extensionDesc | Extensions popup |
| `/slatetests/s38` | button.extensionToggle (empty, all attributes) | Extensions popup |
| `/slatetests/s39` | span.toggleKnob | Extensions popup |
| `/slatetests/s40` | div.button (menu, empty) | div.nav-right |
| `/slatetests/s41` | img menu icon | div.nav-right |
| `/slatetests/s42` | div.settings-overlay (menu) | Menu dropdown |
| `/slatetests/s43` | div.settings-dropdown (empty) | Menu dropdown |
| `/slatetests/s44` | button.menuBtn "New Tab" | Menu dropdown |
| `/slatetests/s45` | button.menuBtn "Bookmark Site" | Menu dropdown |
| `/slatetests/s46` | div.break | Menu dropdown |
| `/slatetests/s47` | p 1st setting label (with Filler) | Menu dropdown |
| `/slatetests/s48` | select 1st setting (empty) | Menu dropdown |
| `/slatetests/s49` | option 1 of 3 | Menu dropdown |
| `/slatetests/s50` | option 2 of 3 | Menu dropdown |
| `/slatetests/s51` | option 3 of 3 | Menu dropdown |
| `/slatetests/s52` | p 2nd setting label (with Filler) | Menu dropdown |
| `/slatetests/s53` | select 2nd setting (empty) | Menu dropdown |
| `/slatetests/s54` | option 1 of 2 | Menu dropdown |
| `/slatetests/s55` | option 2 of 2 | Menu dropdown |
| `/slatetests/s56` | p 3rd setting label (with Filler) | Menu dropdown |
| `/slatetests/s57` | input 3rd setting | Menu dropdown |
| `/slatetests/s58` | p 4th setting label (with Filler) | Menu dropdown |
| `/slatetests/s59` | select 4th setting (empty) | Menu dropdown |
| `/slatetests/s60` | option 1 of 9 | Menu dropdown |
| `/slatetests/s61` | option 2 of 9 | Menu dropdown |
| `/slatetests/s62` | option 3 of 9 | Menu dropdown |
| `/slatetests/s63` | option 4 of 9 | Menu dropdown |
| `/slatetests/s64` | option 5 of 9 | Menu dropdown |
| `/slatetests/s65` | option 6 of 9 | Menu dropdown |
| `/slatetests/s66` | option 7 of 9 | Menu dropdown |
| `/slatetests/s67` | option 8 of 9 | Menu dropdown |
| `/slatetests/s68` | option 9 of 9 | Menu dropdown |
| `/slatetests/s69` | div.break | Menu dropdown |
| `/slatetests/s70` | button "Open in new tab" | Menu dropdown |
| `/slatetests/s71` | div.break | Menu dropdown |
| `/slatetests/s72` | button "Full Screen" | Menu dropdown |
| `/slatetests/s73` | button "Inspect Element" | Menu dropdown |
| `/slatetests/s74` | div.mark (empty, click / right-click handlers) | {#snippet mark} |
| `/slatetests/s75` | p.markName | {#snippet mark} |
| `/slatetests/s76` | div.bookmarks (empty) | div.bookmarks |
| `/slatetests/s77` | {@render mark} per bookmark | div.bookmarks |
| `/slatetests/s78` | div.fcontainer (empty) | div.fcontainer |
| `/slatetests/s79` | <Iframe> per frame | div.fcontainer |
| `/slatetests/s80` | <Home> start page (active tab with no URL) | div.fcontainer |
