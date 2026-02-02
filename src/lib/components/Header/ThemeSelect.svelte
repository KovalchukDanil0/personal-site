<script lang="ts">
	import { setThemeCookie, themes, type Theme } from "$lib/themes";
	import type { HTMLSelectAttributes } from "svelte/elements";
	import { Option, Select } from "..";

	interface Props extends HTMLSelectAttributes {
		theme: Theme;
	}

	let { theme, ...restProps }: Props = $props();
</script>

<Select
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
		<Option value={theme}>{theme}</Option>
	{/each}
</Select>
