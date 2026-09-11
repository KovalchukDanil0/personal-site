import type { Theme } from "$lib/themes";

export function load({ cookies }) {
	const theme = cookies.get("theme") as Theme | undefined;
	const currentYear = new Date(Date.now()).getFullYear();

	return { currentYear, theme };
}
