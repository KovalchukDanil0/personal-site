import { serialize } from "cookie";

export type Theme = "light" | "dark";

export const themes: Theme[] = ["light", "dark"];

export function setThemeCookie(theme: Theme) {
	const one_year = 60 * 60 * 24 * 365;
	document.cookie = serialize("theme", theme, {
		maxAge: one_year,
		path: "/",
		sameSite: "lax",
	});

	document.documentElement.setAttribute("data-theme", theme);
}
