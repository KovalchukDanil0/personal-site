<script lang="ts">
	import { normalizeUrl } from "$lib/utils";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import { Link } from ".";

	interface Props extends HTMLAttributes<EventTarget> {
		children: Snippet;
		company: string;
		location: string;
		position: string;
		period: string;
		website: string;
	}

	let { children, company, location, position, period, website, ...rest }: Props = $props();

	const websiteNormalized = $derived(normalizeUrl(website));
</script>

<div class="experience-card" {...rest}>
	<div class="section">
		<h3 class="title">{company}</h3>
		<p>{location}</p>
	</div>

	<div class="section">
		<p>{position}</p>
		<p>{period}</p>
	</div>

	<p>{@render children()}</p>

	<Link href={websiteNormalized} newTab underline>{website}</Link>
</div>

<style lang="scss">
	.experience-card {
		display: flex;
		flex-direction: column;
	}

	.section {
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		h3.title {
			font-weight: bold;
		}
	}
</style>
