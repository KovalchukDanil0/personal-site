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
	@use "$styles/mixins" as c;

	nav {
		grid-area: nav;
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: start;
		gap: 0.5rem;
		margin: 16px 0;

		@include c.screen-small {
			flex-direction: row;
			justify-content: space-around;
		}
	}
</style>
