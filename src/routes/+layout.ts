import { setThemeCookie } from "#lib/themes.js";
import { browser } from "$app/env";
import { MediaQuery } from "svelte/reactivity";

export function load({ data }) {
	if (browser && !data.theme) {
		const { current: userThemeDark } = new MediaQuery("prefers-color-scheme: dark");
		data.theme = setThemeCookie(userThemeDark ? "dark" : "light");
	}

	return data;
}
