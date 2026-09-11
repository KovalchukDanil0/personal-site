<script lang="ts">
	import { onNavigate } from "$app/navigation";
	import { page } from "$app/state";
	import favicon from "$lib/assets/favicon.svg";
	import { Footer, Header, Link, MetaTags } from "$lib/components";
	import { siteName } from "$lib/info";
	import "$lib/styles/_index.scss";
	import { parentRoute } from "$lib/utils";
	import { posthog } from "posthog-js";
	import { onMount } from "svelte";

	let { children, data } = $props();
	let { currentYear, theme } = $derived(data);

	posthog.init("TOKEN", {
		api_host: "https://us.i.posthog.com",
		defaults: "2025-11-30",
	});

	const parentUrl = $derived(parentRoute(page.url.pathname));

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

<div class="content">
	<Header {theme} {currentYear} />

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

		<Footer {currentYear} />
	</main>
</div>

<style lang="scss">
	.content {
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
		z-index: 50;
		overflow-y: hidden;

		@media screen and (width >= 900px) {
			margin-left: var(--aside-width);
			padding-left: 1rem;
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
