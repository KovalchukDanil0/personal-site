import { browser } from "$app/environment";
import { setThemeCookie } from "$lib/themes.js";
import posthog from "posthog-js";
import { MediaQuery } from "svelte/reactivity";

export async function load({ data }) {
	if (browser) {
		posthog.init("TOKEN", {
			api_host: "https://us.i.posthog.com",
			defaults: "2025-11-30",
		});

		if (!data.theme) {
			const userThemeDark = new MediaQuery("prefers-color-scheme: dark").current;
			data.theme = userThemeDark ? "dark" : "light";
			setThemeCookie(data.theme);
		}
	}

	return data;
}
