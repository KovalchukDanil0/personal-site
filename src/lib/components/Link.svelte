<script lang="ts">
	import { localizeHref } from "$lib/paraglide/runtime";
	import { mergeClass } from "$lib/utils";
	import type { Snippet } from "svelte";
	import type { HTMLAnchorAttributes } from "svelte/elements";

	const variants = ["link-back", "button"] as const;

	interface Props extends HTMLAnchorAttributes {
		children: Snippet;
		href: string;
		variant?: (typeof variants)[number];
	}

	let { class: className, href, children, variant, ...restProps }: Props = $props();
</script>

<a
	class={mergeClass(className?.toString(), variant && variants.includes(variant) && variant)}
	href={localizeHref(href)}
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
