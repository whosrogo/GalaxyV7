<script>
	// Index panel for the book grid card zoom-in tests. Its own route, not a layout: nothing here reaches the test pages.
	import TestPanel from '$lib/tests/TestPanel.svelte';
	import { groups } from './routes.js';
</script>

<TestPanel title="Book grid tests" storageKey="bookGridTests.opened.v1" {groups} />
