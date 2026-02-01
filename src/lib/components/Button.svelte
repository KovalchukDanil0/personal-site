<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLButtonAttributes } from "svelte/elements";

	interface Props extends HTMLButtonAttributes {
		children: Snippet;
	}

	let { children, ...restProps }: Props = $props();
</script>

<button {...restProps}>{@render children()}</button>

<style lang="scss">
	button {
		cursor: pointer;
	}
</style>
