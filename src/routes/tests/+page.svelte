<script>
	// Index panel for the os rebuild tests. Its own route, not a layout: nothing here reaches the test pages.
	import TestPanel from '$lib/tests/TestPanel.svelte';
	import { groups } from './routes.js';
</script>

<!-- v2 key: cumulative rebuild routes (s00..); v1 tracked the old per-div routes. -->
<TestPanel title="Rebuild tests" storageKey="divTests.opened.v2" {groups} />
