<script lang="ts">
	import { setThemeCookie, type Theme } from "$lib/themes";
	import { Moon, Sun } from "@lucide/svelte";
	import { getContext } from "svelte";
	import type { HTMLButtonAttributes } from "svelte/elements";
	import { Button } from "..";

	type Props = Omit<HTMLButtonAttributes, "children">;

	let props: Props = $props();

	let theme = $state<string>(getContext("theme"));
</script>

<Button
	variant="theme-select"
	onclick={() => {
		const NEW_THEME: Theme = theme === "dark" ? "light" : "dark";
		theme = NEW_THEME;
		setThemeCookie(NEW_THEME);
	}}
	{...props}
>
	{#if theme === "dark"}
		<Moon />
	{:else}
		<Sun />
	{/if}
</Button>
