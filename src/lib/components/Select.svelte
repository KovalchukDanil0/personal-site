<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLSelectAttributes } from "svelte/elements";

	interface Props extends HTMLSelectAttributes {
		children: Snippet;
	}

	let { value = $bindable(), children, ...restProps }: Props = $props();
</script>

<select {value} {...restProps}>
	{@render children()}
</select>

<style lang="scss">
	select {
		cursor: pointer;
	}
</style>
