<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLButtonAttributes } from "svelte/elements";

	type Variants = "theme-select" | "arrow-right";

	export interface Props extends HTMLButtonAttributes {
		children: Snippet;
		variant?: Variants;
	}

	let { children, variant, ...restProps }: Props = $props();
</script>

<button {...restProps} class={variant}>
	{@render children()}
</button>

<style lang="scss">
	button {
		display: flex;
		text-align: center;
		align-items: center;
		justify-content: center;

		border: none;
		color: var(--button-text-color);

		cursor: pointer;

		&.theme-select {
			background: none;
			color: var(--text-color);
		}
	}
</style>
