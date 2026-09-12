<script lang="ts">
	import { resolve } from "$app/paths";
	import type { HTMLAttributes } from "svelte/elements";
	import { Toggles } from ".";
	import { Link } from "..";

	type Props = Omit<HTMLAttributes<EventTarget>, "children">;

	let props: Props = $props();
</script>

<nav {...props}>
	<Link href={resolve("/blog")}>Blog</Link>
	<Link href={resolve("/resume")}>Resume</Link>

	<Toggles />
</nav>

<style lang="scss">
	nav {
		grid-area: nav;
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: start;
		gap: 0.5rem;

		@media screen and (width < 800px) {
			flex-direction: row;
			justify-content: space-around;
		}
	}
</style>
