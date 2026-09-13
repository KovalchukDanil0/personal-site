<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";

	interface Props extends HTMLAttributes<EventTarget> {
		contents: string[];
		withHeader?: boolean;
	}

	let { contents, withHeader, ...restProps }: Props = $props();

	let [header, ...restContent] = $derived(contents);
</script>

<div class="experience-card-section" {...restProps}>
	<svelte:element this={withHeader ? "h3" : "p"} class="title">{header}</svelte:element>
	{#each restContent as content}
		<p>{content}</p>
	{/each}
</div>

<style lang="scss">
	.experience-card-section {
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		h3.title {
			font-weight: bold;
		}
	}
</style>
