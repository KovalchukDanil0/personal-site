<script lang="ts">
	import { onDrag } from "$lib/dragMe";
	import { serialize } from "cookie";
	import type { HTMLAttributes } from "svelte/elements";

	interface Props extends HTMLAttributes<EventTarget> {
		width: number;
	}

	let { width = $bindable(), ...restProps }: Props = $props();

	let initialWidth = $state(width);
</script>

<div
	{...restProps}
	class="separator"
	role="separator"
	aria-orientation="vertical"
	aria-valuemin="0"
	aria-valuemax="1000"
	use:onDrag={{
		orientation: "vertical",
		onDrag: (delta) => {
			width = initialWidth + delta;
		},
		onDragEnd: () => {
			initialWidth = width;
			document.cookie = serialize("scrollWidth", initialWidth.toString(), {
				path: "/",
			});
		},
	}}
></div>

<style lang="scss">
	@use "$styles/mixins" as c;

	.separator {
		grid-area: div;
		background: gray;
		width: 3px;
		cursor: col-resize;
		touch-action: none;
		user-select: none;

		@include c.screen-small {
			display: none;
		}
	}
</style>
