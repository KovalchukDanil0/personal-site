<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLSelectAttributes } from "svelte/elements";

	const variants = ["lang-select"] as const;

	interface Props extends HTMLSelectAttributes {
		children: Snippet;
		variant?: (typeof variants)[number];
	}

	let { value = $bindable(), children, variant, ...restProps }: Props = $props();
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
