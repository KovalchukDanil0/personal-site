<script lang="ts">
	import { resolve } from "$app/paths";
	import { m } from "$lib/paraglide/messages";
	import type { Theme } from "$lib/themes";
	import type { HTMLAttributes } from "svelte/elements";
	import { ThemeSelect } from ".";
	import { Footer, LangSelect, Link } from "..";

	interface Props extends Omit<HTMLAttributes<EventTarget>, "children"> {
		currentYear: number;
		theme?: Theme;
	}

	let { theme, currentYear, ...restProps }: Props = $props();
</script>

{#snippet toggles()}
	<div class="toggles">
		<LangSelect />
		<ThemeSelect {theme} />
	</div>
{/snippet}

{#snippet navigation()}
	<nav>
		<Link href={resolve("/blog")}>Blog</Link>
		<Link href={resolve("/resume")}>Resume</Link>
	</nav>
{/snippet}

<header {...restProps}>
	<div class="header-content">
		<Link href={resolve("/")}>{m["navigation.title"]()}</Link>

		{@render toggles()}
	</div>

	{@render navigation()}
</header>

<aside {...restProps}>
	<Link href={resolve("/")}>{m["navigation.title"]()}</Link>

	{@render navigation()}
	{@render toggles()}

	<Footer {currentYear} />
</aside>

<style lang="scss">
	header {
		view-transition-name: header;
		display: flex;
		flex-direction: column;
		width: 100%;

		@media screen and (width >= 900px) {
			display: none;
		}
	}

	.header-content {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: auto;
		gap: 0.5rem;
	}

	aside {
		view-transition-name: header;
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: baseline;
		width: var(--aside-width);
		gap: 0.5rem;

		position: fixed;
		left: var(--content-padding);
		bottom: var(--content-padding);
		top: var(--content-padding);

		@media screen and (width < 900px) {
			display: none;
		}
	}

	nav {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		align-items: start;
		justify-content: start;
		gap: 0.5rem;

		@media screen and (width < 900px) {
			flex-direction: row;
			justify-content: space-around;
		}
	}

	.toggles {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}
</style>
