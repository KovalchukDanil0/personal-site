<script lang="ts">
	// Make achievements system
	// Make the public chat

	import { onNavigate } from "$app/navigation";
	import { Footer, Header, MetaTags, Navigation, Separator } from "$lib/components";
	import { setCurrentYear, setTheme } from "$lib/context";
	import { siteName } from "$lib/info";
	import "$styles/_index.scss";
	import { posthog } from "posthog-js";
	import { onMount } from "svelte";

	let { children, data } = $props();
	let { currentYear, theme, scrollWidth } = $derived(data);

	setCurrentYear(() => currentYear);
	setTheme(() => theme);

	posthog.init("TOKEN", {
		api_host: "https://us.i.posthog.com",
		defaults: "2025-11-30",
	});

	let initTitle = $state<string>();
	let title = $state<string>();

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

<svelte:window
	onblur={() => {
		title = "Come back again";
	}}
	onfocus={() => {
		title = initTitle;
	}}
/>

<MetaTags {title} />

<div class="content" style:grid-template-columns="{scrollWidth}px 16px 1fr">
	<Header />
	<Navigation />

	<Separator bind:width={scrollWidth} />

	<main>
		{@render children()}
	</main>

	<Footer />
</div>

<style lang="scss">
	@use "$styles/mixins" as c;

	.content {
		height: 100%;
		display: grid;

		grid-template:
			"header div main" auto
			"nav    div main" 1fr
			"footer div main" auto;

		@include c.screen-small {
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
