<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLSelectAttributes } from "svelte/elements";

	type Variants = "lang-select";

	interface Props extends HTMLSelectAttributes {
		children: Snippet;
		value: string;
		variant?: Variants;
	}

	let { value, children, variant, ...restProps }: Props = $props();
</script>

<select {...restProps} class={variant} {value}>
	{@render children()}
</select>

<style lang="scss">
	select {
		color: var(--text-color);
		cursor: pointer;

		&.lang-select {
			border: none;
			background: inherit;
		}
	}
</style>
