<script lang="ts">
	import { resolve } from "$app/paths";
	import { page } from "$app/state";
	import { m } from "$lib/paraglide/messages";
	import { localizeHref } from "$lib/paraglide/runtime";
	import type { HTMLAttributes } from "svelte/elements";
	import { Toggles } from ".";
	import { Link } from "..";

	type Props = Omit<HTMLAttributes<EventTarget>, "children">;

	let props: Props = $props();

	interface LinksType {
		href: string;
		text: string;
	}

	const links: LinksType[] = [
		{ href: resolve("/"), text: m["navigation.title"]() },
		{ href: localizeHref(resolve("/blog")), text: "Blog" },
		{ href: localizeHref(resolve("/about")), text: "About" },
	];
</script>

<nav {...props}>
	{#each links as { href, text }}
		<Link {href} variant={href === page.url.pathname && "active"}>{text}</Link>
	{/each}

	<Toggles />
</nav>

<style lang="scss">
	@use "$styles/mixins" as c;

	nav {
		grid-area: nav;
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: start;
		gap: 0.5rem;
		margin: 16px 0;

		@include c.screen-small {
			flex-direction: row;
			justify-content: space-around;
		}
	}
</style>
