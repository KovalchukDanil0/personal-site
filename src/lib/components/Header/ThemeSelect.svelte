<script lang="ts">
	import { setThemeCookie, type Theme } from "$lib/themes";
	import { Moon, Sun } from "@lucide/svelte";
	import type { HTMLButtonAttributes } from "svelte/elements";
	import { Button } from "..";

	interface Props extends HTMLButtonAttributes {
		theme?: Theme;
	}

	let { theme, ...restProps }: Props = $props();
</script>

<Button
	variant="theme-select"
	onclick={() => {
		const newTheme: Theme = theme === "dark" ? "light" : "dark";

		theme = newTheme;
		setThemeCookie(newTheme);
	}}
	{...restProps}
>
	{#if theme === "dark"}
		<Moon />
	{:else}
		<Sun />
	{/if}
</Button>
