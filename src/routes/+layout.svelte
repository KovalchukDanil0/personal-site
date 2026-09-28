<script lang="ts">
	// Make achievements system
	// Make the public chat

	import { onNavigate } from "$app/navigation";
	import { Aside, Footer, Header, MetaTags, Separator } from "$lib/components";
	import { setCurrentYear, setTheme } from "$lib/context";
	import { siteName } from "$lib/info";
	import "$styles/_index.scss";
	import { onMount } from "svelte";

	let { children, data } = $props();
	let { currentYear, theme, scrollWidth } = $derived(data);

	setCurrentYear(() => currentYear);
	setTheme(() => theme);

	let initTitle = $state<string>();
	let title = $state<string>();

	onMount(() => {
		initTitle = document.title.replace(new RegExp(`\\s+-\\s+${siteName}`, "u"), "");
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

<div class="layout">
	<Header />
	<Aside width={scrollWidth} />

	<Separator bind:width={scrollWidth} />

	<div class="main-wrapper">
		<main>
			{@render children()}
		</main>

		<Footer />
	</div>
</div>

<style lang="scss">
	@use "$styles/mixins" as m;
	@use "$styles/variables" as v;

	.layout {
		display: flex;
		flex-direction: row;

		min-height: calc(100dvh - (2 * v.$body-padding));

		@include m.screen-small {
			flex-direction: column;
		}
	}

	.main-wrapper {
		display: flex;
		flex-direction: column;
		padding: 0 10px;
		width: 100%;
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 0.5rem;
		z-index: 50;

		flex: 1 1 auto;
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
