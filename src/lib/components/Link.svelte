<script lang="ts">
	import { localizeHref } from "$lib/paraglide/runtime";
	import { mergeClass } from "$lib/utils";
	import type { Snippet } from "svelte";
	import type { HTMLAnchorAttributes } from "svelte/elements";

	const variants = ["text", "link-back"] as const;

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

		&.text {
			color: var(--text);
			text-decoration: none;

			&:hover {
				color: gray;
			}
		}

		&.link-back {
			margin-bottom: 0.5rem;
		}
	}
</style>
