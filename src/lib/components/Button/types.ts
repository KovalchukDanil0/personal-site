import type { Snippet } from "svelte";
import type { HTMLButtonAttributes } from "svelte/elements";

const variants = ["theme-select"] as const;

export interface Props extends HTMLButtonAttributes {
	children: Snippet;
	variant?: (typeof variants)[number];
}
