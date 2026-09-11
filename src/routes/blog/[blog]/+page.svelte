<script lang="ts">
	import { MetaTags } from "$lib/components";

	let { data } = $props();
	let { content: Content, title, description, date } = $derived(data);
</script>

<MetaTags {title} {description} />

<article>
	<h1>{title}</h1>
	<p>Published: {date}</p>
	<Content />
</article>
