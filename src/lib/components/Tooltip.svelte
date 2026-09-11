<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";

	interface Props extends HTMLAttributes<EventTarget> {
		text: string;
		padding?: {
			left: number;
			top: number;
		};
	}

	let { padding = { left: 10, top: 10 }, text, children, ...restProps }: Props = $props();

	let show = $state(false);
	let x = $state(0);
	let y = $state(0);
</script>

<span
	onmouseover={() => {
		show = true;
	}}
	onmouseleave={() => {
		show = false;
	}}
	onmousemove={(ev) => {
		if (!show) {
			return;
		}

		x = ev.x + padding.left;
		y = ev.y + padding.top;
	}}
	{...restProps}
	>{@render children?.()}
</span>

{#if show}
	<q class="tooltip" style:top="{y}px" style:left="{x}px"><i>{text}</i></q>
{/if}

<style lang="scss">
	span {
		text-decoration-line: underline;
		text-decoration-style: dashed;
		cursor: default;
	}

	.tooltip {
		border: 1px solid var(--primary-color);
		box-shadow: 1px 1px 1px var(--primary-color);
		background: var(--background-color);
		border-radius: 4px;
		padding: 4px;
		position: absolute;
		pointer-events: none;
		user-select: none;
		color: var(--text-color);
		z-index: 80;
	}
</style>
