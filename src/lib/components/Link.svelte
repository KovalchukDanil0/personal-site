<script lang="ts">
	import { localizeHref } from "$lib/paraglide/runtime";
	import type { Snippet } from "svelte";
	import type { HTMLAnchorAttributes } from "svelte/elements";

	type Variants = "button" | "nav";

	export interface LinkProps {
		newTab?: boolean;
		underline?: boolean;
		variant?: Variants;
	}

	interface Props extends Omit<HTMLAnchorAttributes, "target">, LinkProps {
		children: Snippet;
	}

	let {
		class: className,
		underline,
		variant,
		href,
		newTab,
		children,
		...restProps
	}: Props = $props();
</script>

<a
	class={[className?.toString(), variant, underline && "underline"]}
	href={localizeHref(href)}
	target={newTab ? "_blank" : null}
	rel={newTab ? "noopener noreferrer" : null}
	{...restProps}>{@render children()}</a
>

<style lang="scss">
	a {
		cursor: pointer;
		text-decoration: none;
		width: fit-content;

		&:hover {
			color: gray;
		}

		&.underline {
			text-decoration: underline;
		}

		&.button {
			display: inline-block;
			padding: 0.75rem 1rem;
			text-decoration: none;
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
