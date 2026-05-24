<script lang="ts">
	import { MetaTags } from "svelte-meta-tags";

	let { data } = $props();
	let { pdf } = $derived(data);

	const pdfSrc = () => `data:application/pdf;base64,${pdf}`;
</script>

<MetaTags title="Resume" description="Resume" />

<h1>Resume goes here</h1>

<embed type="application/pdf" src={pdfSrc()} />

<style lang="scss">
	embed {
		width: 100%;
		height: 100%;
	}
</style>
