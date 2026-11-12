<script>
	import favicon from '$lib/assets/favicon.ico';
	import '$lib/style/variables.css';
	import '$lib/style/themes.css';
	import '$lib/style/assets.css';
	import { initTheme } from '$lib/utils/theme.js';
	import { onMount } from 'svelte';
	let { children } = $props();
	onMount(initTheme);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Quill.org | Interactive Writing and Grammar</title>
</svelte:head>

{@render children()}
