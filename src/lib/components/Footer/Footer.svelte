<script lang="ts">
	import { birthYear, siteName } from "$lib/info";
	import { getContext } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import { slide } from "svelte/transition";

	type Props = Omit<HTMLAttributes<EventTarget>, "children">;

	let props: Props = $props();

	const currentYear = getContext<number>("currentYear");

	let showStatus = $state(false);
	let statusTimeout: NodeJS.Timeout | null = null;
</script>

<footer
	{...props}
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
		grid-area: footer;
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
