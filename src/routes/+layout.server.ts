import { PUBLIC_POSTHOG_TOKEN } from "$env/static/public";
import type { Theme } from "$lib/themes";
import { PostHog } from "posthog-node";
import { v7 as uuidv7 } from "uuid";

export async function load({ cookies, url }) {
	const theme = cookies.get("theme") as Theme | undefined;
	const scrollWidth = Number(cookies.get("scrollWidth")) || 228;

	const currentYear = new Date(Date.now()).getFullYear();

	let posthogId = cookies.get("posthog-id");
	if (!posthogId) {
		let uuid = uuidv7();

		cookies.set("posthog-id", uuid, { path: "/" });
		posthogId = uuid;
	}

	const client = new PostHog(PUBLIC_POSTHOG_TOKEN, {
		host: "https://eu.i.posthog.com",
	});
	client.capture({
		event: "$pageview",
		distinctId: posthogId,
		properties: { $current_url: url.href },
	});

	await client.shutdown();

	return { scrollWidth, currentYear, theme };
}
