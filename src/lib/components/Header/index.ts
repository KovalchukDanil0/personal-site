import type { Theme } from "$lib/themes";

export { default as Header } from "./Header.svelte";

export interface CurrentYearProps {
	currentYear: number;
}

export interface ThemeProps {
	theme?: Theme;
}
