<script lang="ts">
	import { onDrag } from "#lib/dragMe.js";
	import { stringifySetCookie } from "cookie";
	import type { HTMLAttributes } from "svelte/elements";

	interface Props extends HTMLAttributes<EventTarget> {
		width: number;
	}

	let { width = $bindable(), ...restProps }: Props = $props();

	let initialWidth = $state(width);
</script>

<div {...restProps} class="separator-wrapper" role="separator">
	<div
		class="separator"
		use:onDrag={{
			orientation: "vertical",
			onDrag: (delta) => {
				width = initialWidth + delta;
			},
			onDragEnd: () => {
				initialWidth = width;
				document.cookie = stringifySetCookie({
					name: "scrollWidth",
					value: initialWidth.toString(),
					path: "/",
				});
			},
		}}
	></div>
</div>

<style lang="scss">
	@use "#styles/mixins" as m;

	.separator-wrapper {
		display: block;

		@include m.screen-small {
			display: none;
		}
	}

	.separator {
		cursor: col-resize;
		touch-action: none;
		user-select: none;

		background: gray;
		width: 3px;
		height: 100%;
	}
</style>
