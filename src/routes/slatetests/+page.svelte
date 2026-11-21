<script>
	// Index panel for the slate rebuild tests. Its own route, not a layout: nothing here reaches the test pages.
	import TestPanel from '$lib/tests/TestPanel.svelte';
	import { groups } from './routes.js';
</script>

<TestPanel title="Slate rebuild tests" storageKey="slateTests.opened.v1" {groups} />
