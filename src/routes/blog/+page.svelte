<script>
	import { resolve } from "$app/paths";
	import { Link } from "$lib/components";

	let { data } = $props();
	const { posts } = $derived(data);
</script>

<svelte:head>
	<title>Blog overview</title>
	<meta property="description" content="Blog overview description" />
</svelte:head>

<div class="posts">
	{#each posts as { metadata: { title, date }, blog } (blog)}
		<Link href={resolve("/blog/[blog]", { blog })}>{title} {date}</Link>
	{/each}
</div>

<style lang="scss">
	div.posts {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
</style>
