<script lang="ts">
	import { setThemeCookie, type Theme } from "$lib/themes";
	import { Moon, Sun } from "@lucide/svelte";
	import type { HTMLButtonAttributes } from "svelte/elements";
	import { Button } from "..";

	interface Props extends Omit<HTMLButtonAttributes, "children"> {
		theme?: Theme;
	}

	let { theme, ...restProps }: Props = $props();
</script>

<Button
	variant="theme-select"
	onclick={() => {
		const NEW_THEME: Theme = theme === "dark" ? "light" : "dark";
		theme = NEW_THEME;
		setThemeCookie(NEW_THEME);
	}}
	{...restProps}
>
	{#if theme === "dark"}
		<Moon />
	{:else}
		<Sun />
	{/if}
</Button>
