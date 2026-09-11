<script lang="ts">
	import { resolve } from "$app/paths";
	import { Link, MetaTags, Summary } from "$lib/components";

	let { data } = $props();
	let { postsWithYear } = $derived(data);
</script>

<MetaTags title="Blog overview" description="Blog overview description" />

<div class="posts-overview">
	{#each Object.entries(postsWithYear) as [year, posts] (year)}
		<details open>
			<Summary>
				{year}
			</Summary>
			<div class="posts">
				{#each posts as { metadata: { title, date }, blog } (blog)}
					<h2>{title}</h2>
					<p>{date}</p>
					<Link href={resolve("/blog/[blog]", { blog })}>See more</Link>
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
