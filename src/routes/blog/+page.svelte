<script lang="ts">
	import { resolve } from "$app/paths";
	import { Link, MetaTags, Summary } from "$lib/components";
	import type { Test } from "./index";

	let { data }: { data: { blogsSorted: Test } } = $props();
	let { blogsSorted } = $derived(data);
</script>

<MetaTags title="Blog overview" description="Blog overview description" />

<div class="posts-overview">
	{#each Object.entries(blogsSorted) as [year, blogs]}
		<details open>
			<Summary>
				{year}
			</Summary>
			<div class="posts">
				{#each blogs as { title, created_at, slug, id } (id)}
					<h2>{title}</h2>
					<p>{created_at}</p>
					<Link href={resolve("/blog/[blog]", { blog: slug })}>See more</Link>
				{/each}
			</div>
		</details>
	{/each}
</div>

<style lang="scss">
	.posts-overview {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		.posts {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}
	}
</style>
