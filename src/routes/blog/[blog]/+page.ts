import { error } from "@sveltejs/kit";
import type { Component } from "svelte";

export async function load({ params: { blog } }) {
	try {
		const post: { default: Component; metadata: BlogMetadataType } = await import(
			`$lib/posts/${blog}.md`
		);
		const content = post.default;

		return {
			content,
			...post.metadata,
		};
	} catch {
		error(404, `Blog "${blog}" not found`);
	}
}
