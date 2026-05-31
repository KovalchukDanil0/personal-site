<script lang="ts">
	import { birthYear, myName } from "$lib/info";
	import type { HTMLAttributes } from "svelte/elements";

	interface Props extends HTMLAttributes<EventTarget> {
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
		© {birthYear}{#if currentYear > birthYear}
			-{currentYear}
		{/if}
		{myName}
	</p>

	{#if showStatus}
		<p class="status">
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
