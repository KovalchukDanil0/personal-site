<script>
	import { MetaTags } from "svelte-meta-tags";

	let { data } = $props();
	const { content: Content, title, description, date } = $derived(data);
</script>

<MetaTags {title} {description} />

<article>
	<h1>{title}</h1>
	<p>Published: {date}</p>
	<Content />
</article>
