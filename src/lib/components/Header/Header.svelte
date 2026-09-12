<script lang="ts">
	import { resolve } from "$app/paths";
	import { m } from "$lib/paraglide/messages";
	import type { HTMLAttributes } from "svelte/elements";
	import { Link } from "..";

	type Props = Omit<HTMLAttributes<EventTarget>, "children">;

	let props: Props = $props();
</script>

<header {...props}>
	<Link href={resolve("/")}>{m["navigation.title"]()}</Link>
</header>

<style lang="scss">
	header {
		grid-area: header;
		view-transition-name: header;
		display: flex;
		flex-direction: column;
		width: 100%;
	}
</style>
