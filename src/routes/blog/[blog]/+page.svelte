<script lang="ts">
	import { resolve } from "$app/paths";
	import { Link, MetaTags } from "$lib/components";
	import type { Tables } from "$lib/supabase/database.types";

	interface Props {
		data: { blog: Tables<"blogs"> };
	}

	let { data }: Props = $props();
	let { title, description, created_at, content } = $derived(data.blog);
</script>

<Link href={resolve("/blog")}>Back</Link>

<MetaTags {title} {description} />

<article>
	<h1>{title}</h1>
	<p>Published: {created_at}</p>

	{@html content}
</article>
