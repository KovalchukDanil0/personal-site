<script lang="ts">
	import { resolve } from "$app/paths";
	import { Link } from "$lib/components";

	let { data } = $props();
	const { postsWithYear } = $derived(data);
</script>

<svelte:head>
	<title>Blog overview</title>
	<meta property="description" content="Blog overview description" />
</svelte:head>

<div class="posts-overview">
	{#each Object.entries(postsWithYear) as [year, posts] (year)}
		<details open>
			<summary>
				{year}
			</summary>
			<div class="posts">
				{#each posts as { metadata: { title, date }, blog }}
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
