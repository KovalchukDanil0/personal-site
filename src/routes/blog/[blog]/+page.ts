import { m } from "$lib/paraglide/messages";
import { error } from "@sveltejs/kit";
import type { Component } from "svelte";

const posts = import.meta.glob<{
	default: Component;
	metadata: App.BlogMetadataType;
}>("$lib/posts/*.md");

export async function load({ params: { blog } }) {
	const loader = posts[`/src/lib/posts/${blog}.md`];
	if (!loader) {
		error(404, m["error.blogNotFound"]({ blog }));
	}

	const { default: content, metadata } = await loader();

	return {
		content,
		...metadata,
	};
}
