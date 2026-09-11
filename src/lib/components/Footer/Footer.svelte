<script lang="ts">
	import { birthYear, siteName } from "$lib/info";
	import type { HTMLAttributes } from "svelte/elements";
	import { slide } from "svelte/transition";

	interface Props extends Omit<HTMLAttributes<EventTarget>, "children"> {
		currentYear: number;
	}

	let { currentYear, ...restProps }: Props = $props();

	let showStatus = $state(false);
	let statusTimeout: NodeJS.Timeout | null = null;
</script>

<footer
	{...restProps}
	onmouseover={() => {
		if (!statusTimeout) {
			statusTimeout = setTimeout(() => {
				showStatus = true;
			}, 1000);
		}
	}}
	onmouseleave={() => {
		if (statusTimeout) {
			clearTimeout(statusTimeout);
			statusTimeout = null;
			showStatus = false;
		}
	}}
>
	<p>
		© {birthYear}
		{siteName}
	</p>

	{#if showStatus}
		<p class="status" transition:slide>
			{#if currentYear - birthYear < 100}
				This is not my actual birth-death range ;)
			{:else}
				Well I may be dead... Whatever
			{/if}
		</p>
	{/if}
</footer>

<style lang="scss">
	footer {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;

		p {
			margin: 0;
		}

		.status {
			font-size: 0.7rem;
		}
	}
</style>
