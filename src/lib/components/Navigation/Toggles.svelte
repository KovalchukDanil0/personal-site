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
	.toggles {
		display: flex;
		flex-direction: row;
		flex-grow: 1;
		align-items: end;
		justify-content: end;
		gap: 0.5rem;
	}
</style>
