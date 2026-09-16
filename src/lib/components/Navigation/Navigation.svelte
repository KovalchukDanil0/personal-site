<script lang="ts">
	import { resolve } from "$app/paths";
	import { page } from "$app/state";
	import { localizeHref } from "$lib/paraglide/runtime";
	import type { HTMLAttributes } from "svelte/elements";
	import { Toggles } from ".";
	import { Link } from "..";

	type Props = Omit<HTMLAttributes<EventTarget>, "children">;

	let props: Props = $props();

	const links: { href: string; text: string }[] = [
		{ href: localizeHref(resolve("/blog")), text: "Blog" },
		{ href: localizeHref(resolve("/resume")), text: "Resume" },
		{ href: localizeHref(resolve("/about")), text: "About" },
	];
</script>

<nav {...props}>
	{#each links.filter(({ href }) => href !== page.url.pathname) as { href, text }}
		<Link {href}>{text}</Link>
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
