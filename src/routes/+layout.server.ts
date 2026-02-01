import type { Theme } from "$lib/themes";

export async function load({ cookies }) {
	const theme = cookies.get("theme") as Theme | undefined;

	return {
		theme,
	};
}
