<script lang="ts">
	import { onNavigate } from "$app/navigation";
	import { page } from "$app/state";
	import favicon from "$lib/assets/favicon.svg";
	import { Footer, Header, Link, MetaTags } from "$lib/components";
	import Navigation from "$lib/components/Header/Navigation.svelte";
	import { onDrag } from "$lib/dragMe.js";
	import { siteName } from "$lib/info";
	import "$lib/styles/_index.scss";
	import { parentRoute } from "$lib/utils";
	import { posthog } from "posthog-js";
	import { onMount, setContext } from "svelte";
	import { MediaQuery } from "svelte/reactivity";

	const largeScreen = new MediaQuery("min-width: 800px");

	let { children, data } = $props();
	let { currentYear, theme } = $derived(data);

	setContext("currentYear", currentYear);
	setContext("theme", theme);

	posthog.init("TOKEN", {
		api_host: "https://us.i.posthog.com",
		defaults: "2025-11-30",
	});

	const parentUrl = $derived(parentRoute(page.url.pathname));

	let initTitle = $state<string>();
	let title = $state<string>();

	let initialWidth = 256;
	let resizeWidth = $state(initialWidth);

	onMount(() => {
		initTitle = document.title.replace(new RegExp(`\\s+-\\s+${siteName}`, "u"), "");
		console.log(initTitle);
	});

	onNavigate(({ complete }) => {
		if (!document.startViewTransition) {
			return;
		}

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await complete;
			});
		});
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<svelte:window
	onblur={() => {
		title = "Come back again";
	}}
	onfocus={() => {
		title = initTitle;
	}}
/>

<MetaTags {title} />

<div class="content" style:grid-template-columns="{resizeWidth}px 1fr">
	<Header />
	<Navigation />

	{#if largeScreen.current}
		<div
			class="separator"
			role="separator"
			aria-orientation="vertical"
			use:onDrag={{ orientation: "vertical" }}
			ondrag={({ detail: delta }) => {
				resizeWidth = initialWidth + delta;
			}}
			ondragend={() => {
				initialWidth = resizeWidth;
			}}
		></div>
	{/if}

	<main>
		{#if parentUrl}
			<Link variant="link-back" href={parentUrl.url}>
				Back
				{#if parentUrl.name}
					to {parentUrl.name}
				{/if}
			</Link>
		{/if}

		{@render children()}
	</main>

	<Footer />
</div>

<style lang="scss">
	.content {
		height: 100%;
		display: grid;

		grid-template:
			"header div main" auto
			"nav    div main" 1fr
			"footer div main" auto;

		@media screen and (width < 800px) {
			grid-template:
				"header header" auto
				"nav    nav" auto
				"main   main" 1fr
				"footer footer" auto
				/ 1fr;
		}
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 0.5rem;
		z-index: 50;

		grid-area: main;
	}

	.separator {
		grid-area: div;
		background-color: gray;
		cursor: col-resize;
		width: 4px;
		height: 100%;

		@media screen and (width < 800px) {
			display: none;
		}
	}

	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-right {
		from {
			transform: translateX(30px);
		}
	}

	@keyframes slide-to-left {
		to {
			transform: translateX(-30px);
		}
	}

	:root {
		&::view-transition-old(root) {
			animation:
				90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
				300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
		}

		&::view-transition-new(root) {
			animation:
				210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
				300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
		}
	}
</style>
