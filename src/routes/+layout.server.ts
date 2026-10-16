import type { Theme } from "#lib/themes.ts";
import { isbot } from "isbot";

export function load({ cookies, request }) {
	const theme = cookies.get("theme") as Theme | undefined;
	const scrollWidth = Number(cookies.get("scrollWidth")) || 228;

	const isBot = isbot(request.headers.get("User-Agent"));

	const currentYear = new Date(Date.now()).getFullYear();

	return { scrollWidth, currentYear, theme, isBot };
}
