import { browser } from "$app/environment";
import { setThemeCookie } from "$lib/themes.js";
import posthog from "posthog-js";

export async function load({ data }) {
	if (browser) {
		posthog.init("TOKEN", {
			api_host: "https://us.i.posthog.com",
			defaults: "2025-11-30",
		});

		if (!data.theme) {
			const userThemeDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
			data.theme = userThemeDark ? "dark" : "light";
			setThemeCookie(data.theme);
		}
	}

	return data;
}
