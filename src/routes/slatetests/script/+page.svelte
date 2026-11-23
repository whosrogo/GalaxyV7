<script>
	// Index panel for the slate s00 script zoom-in tests. Its own route, not a layout: nothing here reaches the test pages.
	import TestPanel from '$lib/tests/TestPanel.svelte';
	import { groups } from './routes.js';
</script>

<TestPanel title="Slate script tests" storageKey="slateScriptTests.opened.v1" {groups} />
