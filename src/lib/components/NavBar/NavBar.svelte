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

<nav {...restProps}>
	<Link href={resolve("/")} variant="text">{m["navigation.title"]()}</Link>

	<div class="toggles">
		<LangSelect />
		{#if theme}
			<ThemeSelect {theme} />
		{/if}
	</div>
</nav>

<style lang="scss">
	nav {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: auto;
		gap: 0.5rem;

		@media screen and (width >= 900px) {
			flex-direction: column;
			justify-content: start;
			align-items: baseline;
			width: 20%;
		}
	}

	div.toggles {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		@media screen and (width >= 900px) {
			flex-direction: row;
		}
	}
</style>
