<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import { Section, type RoleDetailsProps } from ".";

	interface Props extends HTMLAttributes<EventTarget>, RoleDetailsProps {
		children: Snippet;
	}

	let { children, position, period, ...restProps }: Props = $props();
</script>

<div class="experience-card-role" {...restProps}>
	<Section contents={[position, period]} withHeader />

	<p>{@render children()}</p>
</div>

<style lang="scss">
	.experience-card-role {
		display: flex;
		flex-direction: column;
	}
</style>
