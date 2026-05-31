import type { Snippet } from "svelte";
import type { HTMLButtonAttributes } from "svelte/elements";

type Variants = "theme-select";

export interface Props extends HTMLButtonAttributes {
	children: Snippet;
	variant?: Variants;
}
