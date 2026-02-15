<script lang="ts">
	import { resolve } from "$app/paths";
	import { m } from "$lib/paraglide/messages";
	import type { Theme } from "$lib/themes";
	import type { HTMLAttributes } from "svelte/elements";
	import { LangSelect, ThemeSelect } from ".";
	import { Button, Link } from "..";

	interface Props extends HTMLAttributes<EventTarget> {
		theme?: Theme;
	}

	let { theme, ...restProps }: Props = $props();

	let hamburgerMenuOpened = $state(false);
</script>

{#snippet toggles()}
	<div class="toggles">
		<LangSelect />
		{#if theme}
			<ThemeSelect {theme} />
		{/if}
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
		<Link href={resolve("/")} variant="text">{m["navigation.title"]()}</Link>

		{@render toggles()}
		{@render navigation()}

		<Button
			onclick={() => {
				hamburgerMenuOpened = !hamburgerMenuOpened;
			}}>Open Nav Menu</Button
		>
	</div>

	{#if hamburgerMenuOpened}
		<div class="hamburger-menu">
			<p>Hamburger with Cheese please</p>
		</div>
	{/if}
</header>

<aside {...restProps}>
	<Link href={resolve("/")} variant="text">{m["navigation.title"]()}</Link>

	{@render toggles()}
	{@render navigation()}
</aside>

<style lang="scss">
	header {
		display: flex;
		flex-direction: column;
	}

	div.header-content {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: auto;
		gap: 0.5rem;

		@media screen and (width >= 900px) {
			display: none;
		}
	}

	aside {
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: baseline;
		width: 20%;
		gap: 0.5rem;

		@media screen and (width < 900px) {
			display: none;
		}
	}

	nav {
		display: flex;
		align-items: center;
		gap: 0.35rem;
	}

	div.toggles {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;

		@media screen and (width >= 900px) {
			flex-direction: column;
		}
	}

	div.hamburger-menu {
	}
</style>
