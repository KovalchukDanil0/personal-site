import { browser } from "$app/environment";
import { setThemeCookie } from "$lib/themes";
import { MediaQuery } from "svelte/reactivity";

export function load({ data }) {
	if (browser && !data.theme) {
		const { current: userThemeDark } = new MediaQuery("prefers-color-scheme: dark");
		data.theme = setThemeCookie(userThemeDark ? "dark" : "light");
	}

	return data;
}
