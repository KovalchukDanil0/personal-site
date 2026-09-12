<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { ThemeSelect } from ".";
	import { LangSelect } from "..";

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
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}
</style>
