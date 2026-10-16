<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { LangSelect, ThemeSelect } from "..";

	type Props = Omit<HTMLAttributes<EventTarget>, "children">;

	let props: Props = $props();
</script>

<div class="toggles" {...props}>
	<LangSelect />
	<ThemeSelect />
</div>

<style lang="scss">
	@use "#styles/mixins" as m;

	.toggles {
		display: flex;
		flex-direction: row;
		flex-grow: 1;
		align-items: start;
		justify-content: start;
		gap: 0.5rem;

		@include m.screen-small {
			justify-content: center;
		}
	}
</style>
