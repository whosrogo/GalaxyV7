# os page parent-div tests

Index: `/tests`. Open each route with a full page load and record the initial result.

Each parent div of `src/routes/os/+page.svelte` gets its own folder. `control` is the whole parent div in isolation. Steps are cumulative: `s1` is the parent div with no children, and each later step adds one child element with all of its attributes. The last step has the same markup as `control`, which is copied verbatim from the original file.

The test pages leave out the other parent divs, `<Notifications />`, `<svelte:window>`, the `<Window>` list, and the page-level startup calls (`applyStartupSettings`, `launchAds`). No parent div needs another parent div to render. Stores, settings and handlers are replaced with stubs marked `// STUB:`. The context menu, modal and preview panel open in `onMount` (client only), because the original page renders them only after user interaction. `/tests/baseline` loads `os.css` with no markup.

## div.topNav

| Route | Change |
| --- | --- |
| `/tests/topnav/control` | Whole parent div (same markup as the last step). |
| `/tests/topnav/s1` | div.topNav (empty) |
| `/tests/topnav/s2` | add div.topLeft (empty) |
| `/tests/topnav/s3` | add p.topNavText (site title, with Fillers) |
| `/tests/topnav/s4` | add div.topMiddle |
| `/tests/topnav/s5` | add div.topRight (empty) |
| `/tests/topnav/s6` | add div.topButton (switch mode, empty) |
| `/tests/topnav/s7` | add img swap icon |
| `/tests/topnav/s8` | add div.topButton (links, empty) |
| `/tests/topnav/s9` | add img link icon |
| `/tests/topnav/s10` | add p clock |

## div.background

| Route | Change |
| --- | --- |
| `/tests/background/control` | Whole parent div (same markup as the last step). |
| `/tests/background/s1` | div.background with class only (no background image) |
| `/tests/background/s2` | add style background-image (original) |

## div.contextMenu

| Route | Change |
| --- | --- |
| `/tests/contextmenu/control` | Whole parent div (same markup as the last step). |
| `/tests/contextmenu/s1` | div.contextMenu (empty) |
| `/tests/contextmenu/s2` | add button "Open New Window" (app branch) |
| `/tests/contextmenu/s3` | add button "Remove App" (app branch, custom apps) |
| `/tests/contextmenu/s4` | add button "Add New App" (nav branch; markup only, does not render while menuType is 'app') |
| `/tests/contextmenu/nav-branch` | control with menuType = 'nav' (renders the Add New App branch) |

## div.modalOverlay

| Route | Change |
| --- | --- |
| `/tests/modal/control` | Whole parent div (same markup as the last step). |
| `/tests/modal/s1` | div.modalOverlay (empty) |
| `/tests/modal/s2` | add div.modal (empty, with entrance animation) |
| `/tests/modal/s3` | add p.modalTitle "Add App" |
| `/tests/modal/s4` | add p.modalLabel "URL" |
| `/tests/modal/s5` | add input URL |
| `/tests/modal/s6` | add p.modalLabel "Name" |
| `/tests/modal/s7` | add input Name |
| `/tests/modal/s8` | add p.modalLabel "Icon" |
| `/tests/modal/s9` | add input Icon |
| `/tests/modal/s10` | add button.advancedToggle "Advanced" (with arrow span) |
| `/tests/modal/s11` | add div.advancedPanel (empty, with animation) |
| `/tests/modal/s12` | add p.modalLabel (1st advanced label, with Fillers) |
| `/tests/modal/s13` | add div.modalOptions (1st option row, empty) |
| `/tests/modal/s14` | add button.modalOption per option (1st row) |
| `/tests/modal/s15` | add p.modalLabel (2nd advanced label, with Fillers) |
| `/tests/modal/s16` | add div.modalOptions (2nd option row, empty) |
| `/tests/modal/s17` | add button.modalOption per option (2nd row) |
| `/tests/modal/s18` | add p.modalLabel (3rd advanced label, with Filler) |
| `/tests/modal/s19` | add input (3rd advanced field) |
| `/tests/modal/s20` | add p.modalLabel "Open Notification" |
| `/tests/modal/s21` | add input Open Notification |
| `/tests/modal/s22` | add p.modalError |
| `/tests/modal/s23` | add div.modalActions (empty) |
| `/tests/modal/s24` | add button "Cancel" |
| `/tests/modal/s25` | add button "Add" |

## div#previewPanel

| Route | Change |
| --- | --- |
| `/tests/preview/control` | Whole parent div (same markup as the last step). |
| `/tests/preview/s1` | div#previewPanel (empty, with animation and mouse handlers) |
| `/tests/preview/s2` | add button.previewCard per window (empty) |
| `/tests/preview/s3` | add p {name} |

## div.nav

| Route | Change |
| --- | --- |
| `/tests/nav/control` | Whole parent div (same markup as the last step). |
| `/tests/nav/s1` | div.nav (empty, with height style) |
| `/tests/nav/s2` | add div.navResize |
| `/tests/nav/s3` | add div.navStuff (empty, with context-menu handler) |
| `/tests/nav/s4` | add button.navButton per app (empty, all attributes) |
| `/tests/nav/s5` | add img.navIcon |
