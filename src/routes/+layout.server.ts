import type { Theme } from "$lib/themes";
import type { ServerLoadEvent } from "@sveltejs/kit";

export function load({ cookies }: ServerLoadEvent) {
	const theme = cookies.get("theme") as Theme | undefined;
	const currentYear = new Date(Date.now()).getFullYear();

	return { currentYear, theme };
}
