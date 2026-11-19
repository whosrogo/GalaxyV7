# books page rebuild tests

Panel: `/booktests`. Open each route with a full page load and record the initial result.

`s00` is `src/routes/books/+page.svelte` with its leading comment, original `<script>` and original `<style>`, and no markup. Each later step adds one element (with all of its attributes and text) between the script and the style block, in file order. `s12` is byte-identical to the original file.

Every step folder also has an unchanged copy of `books/+page.ts`, the loader that fetches the catalog (`ssr = false`), because the script reads `data` from it. Nothing is stubbed. The toolbar, card and overlay components are single steps (their markup lives in `src/lib/books/`). The favorites section, empty message and load-more row render under the same conditions as on the real page.

| Route | Adds | Section |
| --- | --- | --- |
| `/booktests/s00` | Original script and style only | Start |
| `/booktests/s01` | toolbar component (search, tags, filter, random) | Toolbar component |
| `/booktests/s02` | div.section-header "Favorites" | Favorites section |
| `/booktests/s03` | div.grid (favorites, empty) | Favorites section |
| `/booktests/s04` | card component per favorite (up to 12) | Favorites section |
| `/booktests/s05` | div.section-header (count) | div.section-header |
| `/booktests/s06` | p.empty | Results |
| `/booktests/s07` | div.grid (results, empty) | Results |
| `/booktests/s08` | card component per result (first 60) | Results |
| `/booktests/s09` | div.load-more-row (empty) | Load more |
| `/booktests/s10` | button.load-more | Load more |
| `/booktests/s11` | div with use:intersect (auto load more) | Load more |
| `/booktests/s12` | overlay component (book viewer) | Overlay component |
