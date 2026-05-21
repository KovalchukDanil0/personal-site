<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLButtonAttributes } from "svelte/elements";

	const variants = ["theme-select"] as const;

	interface Props extends HTMLButtonAttributes {
		children: Snippet;
		variant?: (typeof variants)[number];
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
		border-radius: 0.25rem;
		background-color: var(--btn-bg);
		color: var(--btn-text);

		&.theme-select {
			background: none;
			color: var(--text);
		}
	}
</style>
