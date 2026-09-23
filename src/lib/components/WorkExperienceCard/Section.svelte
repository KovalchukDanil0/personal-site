<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";

	interface Props extends HTMLAttributes<EventTarget> {
		contents: (string | undefined)[];
		withHeader?: boolean;
	}

	let { contents, withHeader, ...restProps }: Props = $props();

	let [header, ...restContent] = $derived(contents);
</script>

{#if contents.length > 0}
	<div class="experience-card-section" {...restProps}>
		<svelte:element this={withHeader ? "h3" : "p"} class="title">{header}</svelte:element>
		{#each restContent as content}
			{#if content}
				<p>{content}</p>
			{/if}
		{/each}
	</div>
{/if}

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
