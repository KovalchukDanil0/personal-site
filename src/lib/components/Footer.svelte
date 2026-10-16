<script lang="ts">
	import { getCurrentYear, getTheme } from "#lib/context.ts";
	import { myName } from "#lib/info.ts";
	import type { HTMLAttributes } from "svelte/elements";
	import { slide } from "svelte/transition";
	import { Badge } from ".";

	type Props = Omit<HTMLAttributes<EventTarget>, "children">;

	let props: Props = $props();

	let showStatus = $state(false);
	let statusTimeout: NodeJS.Timeout | null = null;

	let theme = getTheme();
	let themeDark = theme() === "dark";

	let currentYear = getCurrentYear();
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
	<div class="site-name">
		<p>
			© {currentYear()}
			{myName}
		</p>

		{#if showStatus}
			<p class="status" transition:slide>Hello!</p>
		{/if}
	</div>

	<div class="badges-wrapper">
		<Badge
			src="https://notbyai.fyi/img/written-by-human-not-by-ai-white.svg"
			href="https://notbyai.fyi"
			alt="Written by humans, not by AI"
		/>

		<Badge
			src="https://storage.ko-fi.com/cdn/kofi{themeDark ? '1' : '6'}.png?v=1"
			href="https://ko-fi.com/T8M627428N"
			alt="Buy me a coffee"
		/>
	</div>
</footer>

<style lang="scss">
	footer {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;

		p {
			margin: 0;
		}
	}

	.status {
		font-size: 0.7rem;
	}

	.badges-wrapper {
		display: flex;
		flex-direction: row;
		gap: 0.25rem;
	}
</style>
