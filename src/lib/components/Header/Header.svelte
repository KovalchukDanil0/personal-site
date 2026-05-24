<script lang="ts">
	import { resolve } from "$app/paths";
	import { m } from "$lib/paraglide/messages";
	import type { Theme } from "$lib/themes";
	import type { HTMLAttributes } from "svelte/elements";
	import { LangSelect, ThemeSelect } from ".";
	import { Link } from "..";

	interface Props extends HTMLAttributes<EventTarget> {
		theme?: Theme;
	}

	let { theme, ...restProps }: Props = $props();
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

	{@render toggles()}
	{@render navigation()}
</aside>

<style lang="scss">
	header {
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
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: baseline;
		width: 20%;
		gap: 0.5rem;
		height: 100%;

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
