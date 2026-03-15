<script lang="ts">
	let { data } = $props();
	let { pdf } = $derived(data);

	const pdfSrc = `data:application/pdf;base64,${pdf}`;
</script>

<svelte:head>
	<title>Resume</title>
	<meta property="description" content="Resume" />
</svelte:head>

<h1>Resume goes here</h1>

<embed type="application/pdf" src={pdfSrc} />

<style lang="scss">
	embed {
		width: 100%;
		height: 100%;
	}
</style>
