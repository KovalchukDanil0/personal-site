import type { Theme } from "$lib/themes";

export function load({ cookies }) {
	const theme = cookies.get("theme") as Theme | undefined;
	const scrollWidth = Number(cookies.get("scrollWidth")) || 228;

	const currentYear = new Date(Date.now()).getFullYear();

	return { scrollWidth, currentYear, theme };
}
