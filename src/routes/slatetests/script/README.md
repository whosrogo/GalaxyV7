# slatetests/script: s00 script zoom-in

Panel: `/slatetests/script`. Open each route with a full page load and record the initial result.

Every step is built from lines of `slatetests/s00` (the slate page's original `<script>`, no markup), kept in their original order. Each of the 379 lines belongs to exactly one step, so each step adds a few lines and nothing else changes. `s00` is an empty `<script></script>`; `s28` is byte-identical to `slatetests/s00`.

Order: imports first (importing a module fetches it and runs its top-level code), then setup (state, the in-memory tab, saved settings), then the onMount engine chain one action at a time, then the functions nothing calls on load.

| Route | Adds | Lines added |
| --- | --- | --- |
| `/slatetests/script/s00` | Empty <script>, nothing loaded | 2 |
| `/slatetests/script/s01` | Add import of browser.css | 1 |
| `/slatetests/script/s02` | Add icon image imports (7 icons) | 7 |
| `/slatetests/script/s03` | Add Filler component import | 1 |
| `/slatetests/script/s04` | Add Tab component import | 1 |
| `/slatetests/script/s05` | Add Iframe component import | 1 |
| `/slatetests/script/s06` | Add Home component import | 1 |
| `/slatetests/script/s07` | Add localspace, stores, svelte and settings-channel imports | 14 |
| `/slatetests/script/s08` | Add engine helper imports (loader, search, car, poly, prism) | 5 |
| `/slatetests/script/s09` | Add reflux import (creates a RefluxAPI on import) | 1 |
| `/slatetests/script/s10` | Add state declarations and effects (logs the current frame URL) | 61 |
| `/slatetests/script/s11` | Add addTab() on mount (tab created in memory, no markup) | 32 |
| `/slatetests/script/s12` | Add reading saved settings (7 loadSetting calls) | 21 |
| `/slatetests/script/s13` | Add writing settings back (save effect) | 11 |
| `/slatetests/script/s14` | Add settings channel subscription (BroadcastChannel) | 9 |
| `/slatetests/script/s15` | Add ?preview guard and inject /charon/index.js (BareMux) | 9 |
| `/slatetests/script/s16` | Add inject /glass/glass.bundle.js | 1 |
| `/slatetests/script/s17` | Add inject /glass/glass.config.js | 1 |
| `/slatetests/script/s18` | Add inject /poly/polygon.all.js | 1 |
| `/slatetests/script/s19` | Add createCinnabarController() | 1 |
| `/slatetests/script/s20` | Add createConnection() (BareMux shared worker) | 1 |
| `/slatetests/script/s21` | Add setCar() (sets the transport) | 1 |
| `/slatetests/script/s22` | Add enablePopupInterceptor() (windowOpen plugin) | 1 |
| `/slatetests/script/s23` | Add ready = true and the transport effect (sets the transport again) | 9 |
| `/slatetests/script/s24` | Add registerSW() (service worker registration; not called on load) | 14 |
| `/slatetests/script/s25` | Add navigation functions (navigate, open in new tab, submit) | 67 |
| `/slatetests/script/s26` | Add tab and toolbar handlers (move tab, back/forward/reload, menus, full screen) | 56 |
| `/slatetests/script/s27` | Add bookmark functions | 37 |
| `/slatetests/script/s28` | Add openInspector() (loads eruda from jsDelivr when used) | 12 |
