<script lang="ts">
	import { getTheme } from "$lib/context";
	import { setThemeCookie, type Theme } from "$lib/themes";
	import { Moon, Sun } from "@lucide/svelte";
	import type { HTMLButtonAttributes } from "svelte/elements";
	import { Button } from "..";

	type Props = Omit<HTMLButtonAttributes, "children">;

	let props: Props = $props();

	let themeGetter = $state(getTheme());
	let theme = $derived(themeGetter());
</script>

<Button
	variant="theme-select"
	onclick={() => {
		const newTheme: Theme = theme === "dark" ? "light" : "dark";
		theme = newTheme;
		setThemeCookie(newTheme);
	}}
	{...props}
>
	{#if theme === "dark"}
		<Moon />
	{:else}
		<Sun />
	{/if}
</Button>
