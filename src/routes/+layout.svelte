<script lang="ts">
	import { page } from "$app/state";
	import favicon from "$lib/assets/favicon.svg";
	import { Footer, Header, Link } from "$lib/components";
	import "$lib/styles/main.scss";
	import { setThemeCookie } from "$lib/themes";
	import { parentRoute } from "$lib/utils";
	import { posthog } from "posthog-js";
	import { onMount } from "svelte";
	import { MediaQuery } from "svelte/reactivity";

	let { children, data } = $props();
	let { theme, currentYear } = $derived(data);

	posthog.init("TOKEN", {
		api_host: "https://us.i.posthog.com",
		defaults: "2025-11-30",
	});

	onMount(() => {
		if (!theme) {
			const userThemeDark = new MediaQuery("prefers-color-scheme: dark").current;
			theme = setThemeCookie(userThemeDark ? "dark" : "light");
		}
	});

	const parentUrl = $derived(parentRoute(page.url.pathname));
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header {theme} />

<div class="content">
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

	<Footer {currentYear} />
</div>

<style lang="scss">
	.content {
		width: 100%;
		height: 100%;

		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 0.5rem;
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 0.5rem;
	}
</style>
