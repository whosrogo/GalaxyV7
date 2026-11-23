<script>
	// Index panel for the books overlay zoom-in tests. Its own route, not a layout: nothing here reaches the test pages.
	import TestPanel from '$lib/tests/TestPanel.svelte';
	import { groups } from './routes.js';
</script>

<TestPanel title="Book overlay tests" storageKey="bookOverlayTests.opened.v1" {groups} />
