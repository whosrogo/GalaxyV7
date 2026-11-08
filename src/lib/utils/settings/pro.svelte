<script>
	import Filler from '$lib/utils/filler.svelte';
	import '$lib/style/settings.css';
	import { loadSetting } from '$lib/utils/localspace.js';
	import { saveSettingShared } from '$lib/utils/settingsSync.js';
	import { onMount } from 'svelte';

	let lethe = $state('sj2');
	let searchEngine = $state('default');
	let car = $state('libcurl');
	let customWisp = $state('');

	onMount(async () => {
		const [savedLethe, savedSearch, savedCar, savedWisp] = await Promise.all([
			loadSetting('lethe', 'sj2'),
			loadSetting('searchEngine', 'default'),
			loadSetting('car', 'libcurl'),
			loadSetting('customWisp', '')
		]);
		lethe = savedLethe;
		searchEngine = savedSearch;
		car = savedCar;
		customWisp = savedWisp;
	});

	function selectProxy(value) {
		lethe = value;
		saveSettingShared('lethe', value);
	}
	function selectSearch(value) {
		searchEngine = value;
		saveSettingShared('searchEngine', value);
	}
	function selectTransport(value) {
		car = value;
		saveSettingShared('car', value);
	}
	function updateWisp(value) {
		customWisp = value;
		saveSettingShared('customWisp', value);
	}

	const proxies = [
		{ value: 'sj2', label: 'SJ2' },
		{ value: 'sj', label: 'SJ' },
		{ value: 'uv', label: 'UV' }
	];
	const searchEngines = [
		{ value: 'default', label: 'Default' },
		{ value: 'google', label: 'Google' },
		{ value: 'ddg', label: 'DuckDuckGo' },
		{ value: 'ecosia', label: 'Ecosia' },
		{ value: 'brave', label: 'Brave' },
		{ value: 'yahoo', label: 'Yahoo' },
		{ value: 'yep', label: 'Yep' },
		{ value: 'startpage', label: 'Startpage' },
		{ value: 'bing', label: 'Bing' }
	];
	const transports = [
		{ value: 'libcurl', label: 'Lib', labeltwo: 'curl' },
		{ value: 'epoxy', label: 'Ep', labeltwo: 'oxy' }
	];
</script>

<div class="group">
	<div class="subGroup">
		<p class="subHeading">Pr<Filler />oxy</p>
		<p class="desc">
			Change the bro<Filler />wser's back<Filler />end engi<Filler />ne; The default is Scra<Filler
			/>mjet V2 and supports most sites
		</p>

		<div class="content">
			{#each proxies as proxy}
				<button
					class="toggleBtn"
					class:active={lethe === proxy.value}
					onclick={() => selectProxy(proxy.value)}>{proxy.label}</button
				>
			{/each}
		</div>
	</div>
	<div class="subGroup">
		<p class="subHeading">Sea<Filler />rch</p>
		<p class="desc">Change the brow<Filler />ser's search engine</p>
		<div class="content">
			{#each searchEngines as engine}
				<button
					class="toggleBtn"
					class:active={searchEngine === engine.value}
					onclick={() => selectSearch(engine.value)}>{engine.label}</button
				>
			{/each}
		</div>
	</div>
</div>
<div class="group">
	<div class="subGroup">
		<p class="subHeading">Tran<Filler />sport</p>
		<p class="desc">
			The thing that retrieves website data. Lib<Filler />curl has better site support while Ep<Filler
			/>oxy is faster with less site support.
		</p>
		<div class="content">
			{#each transports as transport}
				<button
					class="toggleBtn"
					class:active={car === transport.value}
					onclick={() => selectTransport(transport.value)}
					>{transport.label}<Filler />{transport.labeltwo}</button
				>
			{/each}
		</div>
	</div>
	<div class="subGroup">
		<p class="subHeading">Wi<Filler />sp</p>
		<p class="desc">
			Backe<Filler />nd ser<Filler />ver used to rel<Filler />ay connections
		</p>
		<input
			class="textInput"
			type="text"
			placeholder="keep blank for default"
			bind:value={customWisp}
			oninput={(e) => updateWisp(e.currentTarget.value)}
		/>
	</div>
</div>
