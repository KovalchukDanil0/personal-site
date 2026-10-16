<script lang="ts">
	import { m } from "#lib/paraglide/messages.js";
	import { localizeHref } from "#lib/paraglide/runtime.js";
	import { resolve } from "$app/paths";
	import { page } from "$app/state";
	import type { HTMLAttributes } from "svelte/elements";
	import { Link } from "..";

	type Props = Omit<HTMLAttributes<EventTarget>, "children">;

	let props: Props = $props();

	interface LinksType {
		href: string;
		text: string;
	}

	const links: LinksType[] = [
		{ href: resolve("/"), text: m["navigation.title"]() },
		{ href: localizeHref(resolve("blog")), text: "Blog" },
		{ href: localizeHref(resolve("about")), text: "About" },
	];
</script>

<nav {...props}>
	{#each links as { href, text }}
		<Link {href} aria-current={href === page.url.pathname ? "page" : undefined}>{text}</Link>
	{/each}
</nav>

<style lang="scss">
	@use "#styles/mixins" as m;

	nav {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: start;
		gap: 0.5rem;
		margin: 16px 0;

		@include m.screen-small {
			flex-direction: row;
			justify-content: space-around;
		}
	}
</style>
