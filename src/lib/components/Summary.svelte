<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	interface Props extends HTMLAttributes<EventTarget> {
		children: Snippet;
	}

	let { children, ...restProps }: Props = $props();
</script>

<summary {...restProps}>{@render children()}</summary>

<style lang="scss">
	summary {
		color: var(--text-color);
		cursor: pointer;
	}
</style>
