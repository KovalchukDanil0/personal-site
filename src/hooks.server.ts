import { paraglideMiddleware } from "#lib/paraglide/server.js";
import type { Theme } from "#lib/themes.ts";
import { sequence, type Handle } from "@sveltejs/kit/hooks";

const handleParaglide: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request, locale }) => {
		event.request = request;

		return resolve(event, {
			transformPageChunk: ({ html }) => html.replace("%paraglide.lang%", locale),
		});
	});

export const handleTheme: Handle = async ({ event, resolve }) => {
	const theme = (event.cookies.get("theme") as Theme | undefined) ?? "dark";

	return await resolve(event, {
		transformPageChunk: ({ html }) => html.replace("%theme%", theme),
	});
};

export const handle = sequence(handleParaglide, handleTheme);
