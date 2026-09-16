<script lang="ts">
	import type { HTMLImgAttributes } from "svelte/elements";
	import { Link, type LinkProps } from ".";

	interface Props extends Omit<HTMLImgAttributes, "children">, Omit<LinkProps, "newTab"> {
		src: string;
		href?: string;
	}

	let { href, ...restProps }: Props = $props();
</script>

{#snippet image()}
	<img {...restProps} class="badge" />
{/snippet}

{#if href}
	<Link {href} newTab>
		{@render image()}
	</Link>
{:else}
	{@render image()}
{/if}

<style lang="scss">
	.badge {
		width: 80px;
		height: 30px;
		object-fit: contain;
	}
</style>
