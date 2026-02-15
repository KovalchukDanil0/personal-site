import { m } from "$lib/paraglide/messages";
import { error } from "@sveltejs/kit";
import type { Component } from "svelte";
import type { BlogMetadataType } from "../+page.server";

interface BlogType {
	default: Component;
	metadata: BlogMetadataType;
}

export async function load({ params: { blog } }) {
	const { default: content, metadata }: BlogType = await import(`$lib/posts/${blog}.md`).catch(() =>
		error(404, m["error.blogNotFound"]({ blog }))
	);

	return {
		content,
		...metadata,
	};
}
