<script lang="ts">
let { text = 'ha67' }: { text?: string } = $props();
</script>

<span class="filler" aria-hidden="true"><span>{text}</span></span>

<style>
	.filler {
		position: absolute;
		opacity: 0.3;
		font-size: 2px;
	}
</style>
