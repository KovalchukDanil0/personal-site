<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";

	type Props = HTMLAttributes<EventTarget>;

	let props: Props = $props();
</script>

<div {...props} class="skills">
	<p>JavaScript/TypeScript</p>
	<p>Rust</p>
	<p>Python</p>
</div>

<style lang="scss">
	.skills {
		display: flex;
		flex-direction: row;
		gap: 8px;
	}
</style>
