<script lang="ts">
	import { MetaTags } from "$lib/components";
	import type { Tables } from "$lib/supabase/database.types";

	let { data }: { data: { blog: Tables<"blogs"> } } = $props();
	let { title, description, created_at, content } = $derived(data.blog);
</script>

<MetaTags {title} {description} />

<article>
	<h1>{title}</h1>
	<p>Published: {created_at}</p>

	{@html content}
</article>
