# os page rebuild tests

Panel: `/tests`. Open each route with a full page load and record the initial result.

`s00` is `src/routes/os/+page.svelte` with its original `<script>` and no markup. Each later step adds one element (with all of its attributes and text) on top of the previous step, in the order it appears in the file. `s51` is byte-identical to the original file.

Nothing is stubbed: every route runs the original script unchanged. The context menu, Add App modal and preview panel only render after user interaction, as on the real page, so their steps change the markup but not what renders on load.

| Route | Adds |
| --- | --- |
| `/tests/s00` | Original script only |
| `/tests/s01` | div.topNav (empty) (div.topNav) |
| `/tests/s02` | div.topLeft (empty) (div.topNav) |
| `/tests/s03` | p.topNavText (site title, with Fillers) (div.topNav) |
| `/tests/s04` | div.topMiddle (div.topNav) |
| `/tests/s05` | div.topRight (empty) (div.topNav) |
| `/tests/s06` | div.topButton (switch mode, empty) (div.topNav) |
| `/tests/s07` | img swap icon (div.topNav) |
| `/tests/s08` | div.topButton (links, empty) (div.topNav) |
| `/tests/s09` | img link icon (div.topNav) |
| `/tests/s10` | p clock (div.topNav) |
| `/tests/s11` | <Notifications /> (<Notifications />) |
| `/tests/s12` | <svelte:window> handlers (<svelte:window>) |
| `/tests/s13` | div.background (div.background) |
| `/tests/s14` | div.contextMenu (empty) (div.contextMenu) |
| `/tests/s15` | button "Open New Window" (div.contextMenu) |
| `/tests/s16` | button "Remove App" (div.contextMenu) |
| `/tests/s17` | button "Add New App" (div.contextMenu) |
| `/tests/s18` | div.modalOverlay (empty) (div.modalOverlay) |
| `/tests/s19` | div.modal (empty, with entrance animation) (div.modalOverlay) |
| `/tests/s20` | p.modalTitle "Add App" (div.modalOverlay) |
| `/tests/s21` | p.modalLabel "URL" (div.modalOverlay) |
| `/tests/s22` | input URL (div.modalOverlay) |
| `/tests/s23` | p.modalLabel "Name" (div.modalOverlay) |
| `/tests/s24` | input Name (div.modalOverlay) |
| `/tests/s25` | p.modalLabel "Icon" (div.modalOverlay) |
| `/tests/s26` | input Icon (div.modalOverlay) |
| `/tests/s27` | button.advancedToggle (with arrow span) (div.modalOverlay) |
| `/tests/s28` | div.advancedPanel (empty, with animation) (div.modalOverlay) |
| `/tests/s29` | p.modalLabel (1st advanced label, with Fillers) (div.modalOverlay) |
| `/tests/s30` | div.modalOptions (1st option row, empty) (div.modalOverlay) |
| `/tests/s31` | button.modalOption per option (1st row) (div.modalOverlay) |
| `/tests/s32` | p.modalLabel (2nd advanced label, with Fillers) (div.modalOverlay) |
| `/tests/s33` | div.modalOptions (2nd option row, empty) (div.modalOverlay) |
| `/tests/s34` | button.modalOption per option (2nd row) (div.modalOverlay) |
| `/tests/s35` | p.modalLabel (3rd advanced label, with Filler) (div.modalOverlay) |
| `/tests/s36` | input (3rd advanced field) (div.modalOverlay) |
| `/tests/s37` | p.modalLabel "Open Notification" (div.modalOverlay) |
| `/tests/s38` | input Open Notification (div.modalOverlay) |
| `/tests/s39` | p.modalError (div.modalOverlay) |
| `/tests/s40` | div.modalActions (empty) (div.modalOverlay) |
| `/tests/s41` | button "Cancel" (div.modalOverlay) |
| `/tests/s42` | button "Add" (div.modalOverlay) |
| `/tests/s43` | div#previewPanel (empty, with animation and mouse handlers) (div#previewPanel) |
| `/tests/s44` | button.previewCard per window (empty) (div#previewPanel) |
| `/tests/s45` | p {name} (div#previewPanel) |
| `/tests/s46` | div.nav (empty, with height style) (div.nav) |
| `/tests/s47` | div.navResize (div.nav) |
| `/tests/s48` | div.navStuff (empty, with context-menu handler) (div.nav) |
| `/tests/s49` | button.navButton per app (empty, all attributes) (div.nav) |
| `/tests/s50` | img.navIcon (div.nav) |
| `/tests/s51` | {#each $windowList} <Window> list (<Window> list) |
