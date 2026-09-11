import { createRawSnippet } from "svelte";

export function simpleComponent(text: string) {
	return createRawSnippet(() => ({
		render: () => text,
		setup: (node) => {
			$effect(() => {
				node.textContent = text;
			});
		},
	}));
}
