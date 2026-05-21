<script lang="ts">
	import { setThemeCookie, type Theme } from "$lib/themes";
	import { Moon, Sun } from "@lucide/svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import { Button } from "..";

	interface Props extends HTMLAttributes<EventTarget> {
		theme: Theme;
	}

	let { theme, ...restProps }: Props = $props();
</script>

<div {...restProps}>
	<Button
		variant="theme-select"
		onclick={() => {
			const newTheme: Theme = theme === "dark" ? "light" : "dark";

			theme = newTheme;
			setThemeCookie(newTheme);
		}}
	>
		{#if theme === "dark"}
			<Moon />
		{:else}
			<Sun />
		{/if}
	</Button>
</div>

<!-- <Select
	{...restProps}
	bind:value={theme}
	onchange={({ currentTarget: { value } }) => {
		const newTheme = value as Theme;
		if (!themes.includes(newTheme)) {
			return;
		}

		setThemeCookie(newTheme);
		theme = newTheme;
	}}
>
	{#each themes as theme (theme)}
		{#if theme === "dark"}
			<Moon />
		{:else}
			<Sun />
		{/if}
	{/each}
</Select> -->
