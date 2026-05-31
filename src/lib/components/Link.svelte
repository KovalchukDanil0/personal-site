<script lang="ts">
	import { localizeHref } from "$lib/paraglide/runtime";
	import { mergeClass } from "$lib/utils";
	import type { Snippet } from "svelte";
	import type { HTMLAnchorAttributes } from "svelte/elements";

	type Variants = "link-back" | "button";

	interface Props extends Omit<HTMLAnchorAttributes, "target"> {
		children: Snippet;
		href: string;
		newTab?: boolean;
		variant?: Variants;
	}

	let { class: className, href, newTab, variant, children, ...restProps }: Props = $props();
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<!-- eslint-disable @typescript-eslint/no-base-to-string -->

<a
	class={mergeClass(className?.toString(), variant)}
	href={localizeHref(href)}
	target={newTab ? "_blank" : null}
	rel={newTab ? "noopener noreferrer" : null}
	{...restProps}>{@render children()}</a
>

<style lang="scss">
	a {
		cursor: pointer;
		text-decoration: none;

		&:hover {
			color: gray;
		}

		&.link-back {
			margin-bottom: 0.5rem;
		}

		&.button {
			display: inline-block;
			padding: 0.75rem 1rem;
			background-color: var(--button-background-color);
			color: var(--button-text-color);

			transition-property: transform;
			transition-duration: 0.5s;

			border-radius: 1rem;
			border-style: solid;
			border-color: var(--secondary-color);

			&:hover {
				transform: scale(1.05);
			}
		}
	}
</style>
