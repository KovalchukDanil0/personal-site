<script lang="ts">
	import { resolve } from "$app/paths";
	import { m } from "$lib/paraglide/messages";
	import type { HTMLAttributes } from "svelte/elements";
	import { Navigation, Toggles } from ".";
	import { Footer, Link } from "..";

	type Props = Omit<HTMLAttributes<EventTarget>, "children">;

	let props: Props = $props();
</script>

<aside {...props}>
	<Link href={resolve("/")}>{m["navigation.title"]()}</Link>

	<Navigation />

	<Toggles />
	<Footer />
</aside>

<style lang="scss">
	aside {
		view-transition-name: header;
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: baseline;
		width: var(--aside-width);
		gap: 0.5rem;

		position: fixed;
		left: var(--content-padding);
		bottom: var(--content-padding);
		top: var(--content-padding);

		@media screen and (width < 800px) {
			display: none;
		}
	}
</style>
