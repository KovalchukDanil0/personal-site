<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { Navigation } from ".";
	import { Toggles } from "./Navigation";

	interface Props extends Omit<HTMLAttributes<EventTarget>, "children"> {
		width: number;
	}

	let { width, ...restProps }: Props = $props();
</script>

<aside {...restProps} style:width="{width}px">
	<Navigation />

	<Toggles />
</aside>

<style lang="scss">
	@use "$styles/mixins" as m;
	@use "$styles/variables" as v;

	aside {
		position: sticky;
		top: 0;
		display: flex;
		flex-direction: column;
		height: calc(100dvh - (2 * v.$body-padding));

		@include m.screen-small {
			display: none;
		}
	}
</style>
