<script>
	import Filler from '$lib/utils/filler.svelte';
	import '$lib/style/settings.css';
	import { loadSetting, saveSetting } from '$lib/utils/localspace.js';
	import { openAboutBlank, openBlob, saveTabPreset, setAntiClose } from '$lib/utils/cloak.js';
	import { onMount } from 'svelte';
	let localAutoAB = $state(false);
	let localAutoBlob = $state(false);
	let localAntiClose = $state(false);
	let hydrated = $state(false);
	let name = $state();
	let icon = $state();
	onMount(async () => {
		const [autoAB, autoBlob, antiClose, tabNameIcon] = await Promise.all([
			loadSetting('autoAB', false),
			loadSetting('autoBlob', false),
			loadSetting('antiClose', false),
			loadSetting('tabPreset', null)
		]);
		localAutoAB = autoAB;
		localAutoBlob = autoBlob;
		localAntiClose = antiClose;
		// @ts-ignore
		name = tabNameIcon?.name;
		// @ts-ignore
		icon = tabNameIcon?.icon;
		hydrated = true;
	});
	$effect(() => {
		if (!hydrated) return;
		saveSetting('autoAB', localAutoAB);
		saveSetting('autoBlob', localAutoBlob);
		saveSetting('antiClose', localAntiClose);
		saveTabPreset(name, icon);
		setAntiClose(localAntiClose);
	});
	function toggleAB() {
		localAutoAB = !localAutoAB;
		if (localAutoAB) localAutoBlob = false;
	}

	function toggleBlob() {
		localAutoBlob = !localAutoBlob;
		if (localAutoBlob) localAutoAB = false;
	}

	function toggleAntiClose() {
		localAntiClose = !localAntiClose;
	}

	const tabPresets = [
		{
			label: 'Canva',
			name: 'Home - Canva',
			icon: 'https://static.canva.com/domain-assets/canva/static/images/favicon-1.ico'
		},
		{
			label: 'Classroom',
			name: 'Home - Classroom',
			icon: 'https://ssl.gstatic.com/classroom/favicon.png'
		},
		{ label: 'Classlink', name: 'My Apps', icon: 'https://myapps.classlink.com/favicon.ico' },
		{
			label: 'Clever',
			name: 'Clever | Log in with Clever',
			icon: 'https://assets.clever.com/oauth/5dd5251fd7cf103e27c52d1b51f20683994400de/favicon.ico?1'
		},
		{
			label: 'Drive',
			name: 'Home - Google Drive',
			icon: 'https://ssl.gstatic.com/docs/doclist/images/drive_favicon_2026_32dp.png'
		},
		{
			label: 'Google',
			name: 'Google',
			icon: 'https://www.gstatic.com/images/branding/searchlogo/ico/favicon.ico'
		},
		{
			label: 'Gmail',
			name: 'Inbox',
			icon: 'https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico'
		}
	];
</script>

<h1>Preferences</h1>
<div class="group">
	<div class="subGroup">
		<p class="subHeading">
			Ab<Filler />out Bl<Filler />ank
		</p>
		<p class="desc">
			Makes the tab invi<Filler />sible to teachers and your bro<Filler />wsing hist<Filler />ory
		</p>

		<div class="content">
			<button class="actionBtn" onclick={openAboutBlank}>Launch</button>
			<button class="toggleBtn" class:active={localAutoAB} onclick={toggleAB}>Auto AB</button>
		</div>
	</div>
	<div class="subGroup">
		<p class="subHeading">B<Filler />lob</p>
		<p class="desc">
			Doesn't hi<Filler />de the tab but does pre<Filler />vent the site from appearing in your his<Filler
			/>tory
		</p>
		<div class="content">
			<button class="actionBtn" onclick={openBlob}>Launch</button>
			<button class="toggleBtn" class:active={localAutoBlob} onclick={toggleBlob}
				>Au<Filler />to Blob</button
			>
		</div>
	</div>
</div>
<div class="divider"></div>
<div class="subGroup">
	<p class="subHeading">
		An<Filler />ti-Clos<Filler />e
	</p>
	<p class="desc">
		Preve<Filler />nts teach<Filler />ers from closing your tab by lau<Filler />nching the
		<code> `Changes you made may not be saved`</code> prompt
	</p>
	<div class="content">
		<button class="toggleBtn" class:active={localAntiClose} onclick={toggleAntiClose}>Toggle</button
		>
	</div>
</div>
<div class="divider"></div>
<div class="subGroup">
	<p class="subHeading">Tab Pres<Filler />ets</p>
	<div class="content">
		{#each tabPresets as preset}
			<button class="actionBtn" onclick={() => saveTabPreset(preset.name, preset.icon)}>
				<img class="icons" src={preset.icon} />
				{preset.label}
			</button>
		{/each}
	</div>
	<p class="subHeading">Cus<Filler />tom Tab</p>
	<input class="textInput" type="text" placeholder="Tab name" bind:value={name} />
	<input class="textInput" type="text" placeholder="Icon link" bind:value={icon} />
</div>
