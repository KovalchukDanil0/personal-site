<script lang="ts">
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";

	interface Props {
		content: string[];
		interval?: number;
	}

	let { interval = 2000, content }: Props = $props();

	let currentIndex = $state(0);

	let contentElement = $state<HTMLElement>();
	let currentWidth = $state<number>(108);

	onMount(() => {
		setInterval(() => {
			currentIndex = (currentIndex + 1) % content.length;
		}, interval);
	});

	$effect(() => {
		if (contentElement) {
			currentWidth = contentElement.offsetWidth;
		}
	});
</script>

<span class="ticker" style:width="{currentWidth}px">
	{#key currentIndex}
		<span
			class="content color-accent"
			in:fly={{ y: 20, duration: 400 }}
			out:fly={{ y: 20, duration: 400 }}
			bind:this={contentElement}
		>
			{content[currentIndex]}
		</span>
	{/key}
</span>

<style lang="scss">
	.ticker {
		position: relative;
		display: inline-block;

		transition: width 400ms ease;
	}

	.content {
		position: absolute;

		&[inert] {
			z-index: -1;
		}
	}
</style>
