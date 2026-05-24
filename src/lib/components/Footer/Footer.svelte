<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";

	interface Props extends HTMLAttributes<EventTarget> {
		currentYear: number;
	}

	let { currentYear, ...restProps }: Props = $props();
</script>

<footer {...restProps}>
	{currentYear}
</footer>
