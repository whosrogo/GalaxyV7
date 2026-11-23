<script lang="ts">
	// booktests/overlay step: the books overlay alone, opened on load with Crossy Road.
	import Overlay from './Overlay.svelte'; // per-step copy of $lib/books/bookOverlay.svelte
	import { normalize } from '$lib/books/catalog';
	import type { Game } from '$lib/books/types';

	// Crossy Road's entry from static/books/gmes.json, normalized exactly like the catalog loader does.
	const example = normalize([
		{ file_name: 'crossy-road/index.html', title: 'Crossy Road', thumb: 'thumbs/crossy-road.webp', tags: ['arcade'] }
	])[0];

	// Same wiring as the books page: the overlay is open while a book is active; Back / Escape clears it.
	let activeGame = $state<Game | null>(example);
</script>

<Overlay game={activeGame} onclose={() => (activeGame = null)} />
