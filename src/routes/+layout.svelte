<script lang="ts">
	import { page } from "$app/state";
	import favicon from "$lib/assets/favicon.svg";
	import { Header, Link } from "$lib/components";
	import "$lib/styles/main.scss";
	import { parentRoute } from "$lib/utils";

	let { children, data } = $props();
	let theme = $derived(data.theme);

	const parentUrl = $derived(parentRoute(page.url.pathname));
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header {theme} />

<main>
	{#if parentUrl}
		<Link variant="link-back" href={parentUrl.url}>
			Back
			{#if parentUrl.name}
				to {parentUrl.name}
			{/if}
		</Link>
	{/if}

	<!-- eslint-disable-next-line @typescript-eslint/no-unsafe-call -->
	{@render children()}
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 0.5rem;
	}
</style>
