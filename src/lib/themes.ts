import { stringifySetCookie } from "cookie";

export type Theme = "light" | "dark";

export const themes: Theme[] = ["light", "dark"];

export function setThemeCookie(theme: Theme): Theme {
	const one_year = 60 * 60 * 24 * 365;
	document.cookie = stringifySetCookie({
		name: "theme",
		value: theme,
		maxAge: one_year,
		path: "/",
		sameSite: "lax",
	});

	document.documentElement.dataset["theme"] = theme;
	return theme;
}
