<script lang="ts">
	import { normalizeUrl } from "$lib/utils";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import { type RoleDetailsProps, Section } from ".";
	import { Link } from "..";

	interface Props extends HTMLAttributes<EventTarget>, RoleDetailsProps {
		children: Snippet;
		company: string;
		location: string;
		website: string;
	}

	let { children, company, location, position, period, website, ...restProps }: Props = $props();

	const websiteNormalized = $derived(normalizeUrl(website));
</script>

<div class="experience-card" {...restProps}>
	<Section contents={[company, location]} withHeader />
	<Section contents={[position, period]} />

	<div>{@render children()}</div>

	<Link href={websiteNormalized} underline newTab>{website}</Link>
</div>

<style lang="scss">
	.experience-card {
		display: flex;
		flex-direction: column;
	}
</style>
