import type { Theme } from "$lib/themes";

export { default as Aside } from "./Aside.svelte";
export { default as Header } from "./Header.svelte";
export { default as Navigation } from "./Navigation.svelte";
export { default as ThemeSelect } from "./ThemeSelect.svelte";
export { default as Toggles } from "./Toggles.svelte";

export interface CurrentYearProps {
	currentYear: number;
}

export interface ThemeProps {
	theme?: Theme;
}
