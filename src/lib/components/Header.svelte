<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { Navigation } from ".";

	type Props = Omit<HTMLAttributes<EventTarget>, "children">;

	let props: Props = $props();
</script>

<header {...props}>
	<Navigation />
</header>

<style lang="scss">
	@use "#styles/mixins" as m;
	@use "#styles/variables" as v;

	header {
		position: sticky;
		top: 0;
		display: none;
		flex-direction: column;
		background-color: color-mix(in srgb, var(--background-color) 50%, transparent);
		z-index: 100;
		// padding: 22px 0;

		@include m.screen-small {
			display: flex;
		}
	}
</style>
