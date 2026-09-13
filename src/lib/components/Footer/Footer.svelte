<script lang="ts">
	import { getCurrentYear } from "$lib/context";
	import { birthYear, siteName } from "$lib/info";
	import type { HTMLAttributes } from "svelte/elements";
	import { slide } from "svelte/transition";
	import { Badge } from "..";

	type Props = Omit<HTMLAttributes<EventTarget>, "children">;

	let props: Props = $props();

	const currentYear = getCurrentYear();

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
			{#if currentYear() - birthYear < 100}
				This is not my actual birth-death range ;)
			{:else}
				Well I may be dead... Whatever
			{/if}
		</p>
	{/if}

	<Badge
		src="https://notbyai.fyi/img/written-by-human-not-by-ai-white.svg"
		alt="Written by humans, not by AI"
	/>
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
