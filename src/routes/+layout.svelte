<script lang="ts">
	import { page } from "$app/state";
	import favicon from "$lib/assets/favicon.svg";
	import { Footer, Header, Link } from "$lib/components";
	import "$lib/styles/_index.scss";
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

<div class="gg">
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
</div>

<Footer {currentYear} />

<style lang="scss">
	.gg {
		display: flex;
		flex-direction: row;
		flex-grow: 1;
		align-items: start;
		justify-content: center;

		@media screen and (width < 900px) {
			flex-direction: column;
		}
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 0.5rem;

		@media screen and (width >= 900px) {
			padding-left: 1rem;
		}
	}
</style>
