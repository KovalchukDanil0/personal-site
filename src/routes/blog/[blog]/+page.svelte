<script>
	let { data } = $props();
	const { content: Content, title, description, date } = $derived(data);
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="description" content={description} />
</svelte:head>

<article>
	<h1>{title}</h1>
	<p>Published: {date}</p>
	<Content />
</article>
