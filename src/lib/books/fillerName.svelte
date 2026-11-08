<script lang="ts">
	import Filler from '$lib/utils/filler.svelte';
	let { text }: { text: string } = $props();

	type Segment = { chunk: string; filler: string | null };

	const segments = $derived.by<Segment[]>(() => {
		const out: Segment[] = [];
		for (let i = 0; i < text.length; i += 2) {
			const last = i + 2 >= text.length;
			out.push({
				chunk: text.slice(i, i + 2),
				filler: last ? null : Math.random().toString(36).slice(2, 6)
			});
		}
		return out;
	});
</script>

{#each segments as s, i (i)}{s.chunk}{#if s.filler}<Filler text={s.filler} />{/if}{/each}
