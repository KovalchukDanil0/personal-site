<script lang="ts">
	import { MetaTags } from "$lib/components";
	import type { PageProps } from "./$types";

	let { data }: PageProps = $props();
	const { content: Content, title, description, date } = $derived(data);
</script>

<MetaTags {title} {description} />

<article>
	<h1>{title}</h1>
	<p>Published: {date}</p>
	<Content />
</article>
