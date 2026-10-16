<script lang="ts">
	import { localizeHref } from "#lib/paraglide/runtime.js";
	import { ArrowRight } from "@lucide/svelte";
	import type { Snippet } from "svelte";
	import type { HTMLAnchorAttributes } from "svelte/elements";

	type Variants = "button" | "arrow-right";

	export interface LinkProps {
		newTab?: boolean;
		underline?: boolean;
		variant?: Variants | false;
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
	href={href ? localizeHref(href) : undefined}
	target={newTab ? "_blank" : null}
	rel={newTab ? "noopener noreferrer" : null}
	{...restProps}
	>{@render children()}
	{#if variant}
		<div class="icon">
			{#if variant === "arrow-right"}
				<ArrowRight />
			{/if}
		</div>
	{/if}
</a>

<style lang="scss">
	$translate-x: 10px;

	.icon {
		display: flex;
		justify-content: center;
		align-items: center;
		padding-right: $translate-x;

		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	a {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.2rem;
		cursor: pointer;
		text-decoration: none;
		width: fit-content;

		&:hover {
			color: var(--tertiary-color);

			.icon {
				transform: translateX($translate-x);
			}
		}

		&[aria-current="page"] {
			color: var(--primary-color);

			&:hover {
				color: var(--tertiary-color);
			}
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
