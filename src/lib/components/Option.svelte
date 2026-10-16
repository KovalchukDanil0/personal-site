<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLOptionAttributes } from "svelte/elements";

	interface Props extends HTMLOptionAttributes {
		children: Snippet;
	}

	let { children, ...restProps }: Props = $props();
</script>

<option {...restProps}>
	{@render children()}
</option>

<style lang="scss">
	option {
		color: var(--text-color);
		cursor: pointer;
	}
</style>
