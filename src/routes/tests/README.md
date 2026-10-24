# Navbar test stages

Open each route directly and record the initial result before clicking or hovering over the dock. Use the same saved apps, background, and dock height for every stage. A full page load avoids carrying open windows between routes through client-side navigation.

All versioned pages share the same script and surrounding markup. Starting at v5, each successive version changes one dock feature.

| Route | Change from the previous stage |
| --- | --- |
| `/tests/v1` | Baseline page without the dock. |
| `/tests/v2` | Add the empty `.nav` wrapper and its height. |
| `/tests/v3` | Add the resize handle and its mouse handler. |
| `/tests/v4` | Add the inner dock container and its context-menu handler. |
| `/tests/v5` | Add empty `.navButton` elements, one per app. They retain the shared CSS `opacity: 0`. |
| `/tests/v6` | Set the empty buttons to `opacity: 1`. |
| `/tests/v7` | Add the same browser icon to every button, with empty alt text. |
| `/tests/v8` | Replace the shared icon with each app's own icon. |
| `/tests/v9` | Set each icon's alt text to the app name. |
| `/tests/v10` | Add the active-state class binding. |
| `/tests/v11` | Attach the button entrance animation. |
| `/tests/v12` | Add the minimized/open-window indicator class binding. |
| `/tests/v13` | Add the button click handler. |
| `/tests/v14` | Add the button context-menu handler. |
| `/tests/v15` | Add the button mouse-enter handler. |
| `/tests/v16` | Add the button mouse-leave handler. |
| `/tests/v17` | Remove the test-only inline opacity override, restoring the original dock markup. |

The inline opacity override stays in v6 through v16 so adding animation does not also require a separate visibility change. The animation itself temporarily changes opacity and position when it attaches.

v6 and v7 have been redefined. Results from their previous contents are not results for these stages. If the browser returns a cached detection verdict, use fresh test paths or a clean authorized test session and confirm that a new scan occurs before comparing versions. Clearing this website's storage alone does not clear an extension's verdict cache.

The earlier `/tests/control` route remains unchanged; v1 is the shared baseline for this navbar sequence.
