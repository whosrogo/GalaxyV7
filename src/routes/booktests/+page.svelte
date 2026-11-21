<script>
	// Index panel for the books rebuild tests. Its own route, not a layout: nothing here reaches the test pages.
	import TestPanel from '$lib/tests/TestPanel.svelte';
	import { groups } from './routes.js';
</script>

<TestPanel title="Books rebuild tests" storageKey="bookTests.opened.v1" {groups} />
