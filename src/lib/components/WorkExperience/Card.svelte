<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	interface Props extends HTMLAttributes<EventTarget> {
		children: Snippet;
	}

	let { children, ...restProps }: Props = $props();
</script>

<div class="experience-card" {...restProps}>
	<div class="divider"></div>
	<div class="roles-container">{@render children()}</div>
</div>

<style lang="scss">
	.experience-card {
		display: flex;
		flex-direction: row;
		gap: 8px;
		width: 100%;
	}

	.roles-container {
		display: flex;
		flex-direction: column;
		gap: 10px;
		width: inherit;
	}

	.divider {
		height: 100%;
		width: 2px;
		background-color: var(--primary-color);
	}
</style>
