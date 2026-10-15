<script lang="ts">
	import { Link, MetaTags } from "#components";
	import { resolve } from "$app/paths";
	import type { Blog } from ".";

	interface Props {
		data: { blog: Blog };
	}

	let { data }: Props = $props();
	let { title, description, created_at, content, image } = $derived(data.blog);

	let image_elm = $state<HTMLImageElement>();

	// Equivalent to background-size: 200%
	// Change this to whatever zoom level you want.
	const zoom = 1;
	let size = 0;
	let initialWidth = $state<DOMRectReadOnly>();

	interface ImageStyles {
		opacity: number;
		transformScale: number;
		filterBlur: number;
	}
	let image_styles = $state<ImageStyles>();

	// On first render DOMRect is undefined so $effect is needed
	$effect(() => {
		if (!image_elm || !initialWidth) {
			return;
		}

		size = zoom * initialWidth.width;
		console.log(size);
	});
</script>

<svelte:window
	on:scroll={() => {
		const fromTop = window.scrollY;
		const newSize = size - fromTop / 3;

		if (!image_elm || !initialWidth) {
			return;
		}

		// Convert the original background-size behavior
		// to an image scale.
		const scale = newSize / initialWidth.width;

		image_styles = {
			opacity: 1 - (fromTop / document.documentElement.scrollHeight) * 1.3,
			filterBlur: fromTop / 100,
			transformScale: scale,
		};
	}}
/>

<MetaTags {title} {description} />
<Link href={resolve("blog")}>Back</Link>

<article>
	{#if image}
		<img
			bind:this={image_elm}
			bind:contentRect={initialWidth}
			src={image.src}
			alt={image.alt}
			style:opacity={image_styles?.opacity}
			style:transform="scale({image_styles?.transformScale ?? 1})"
			style:filter="blur({image_styles?.filterBlur ?? 0}px)"
		/>
	{/if}

	<h1>{title}</h1>
	<p>Published: {created_at}</p>

	{@html content}
</article>

<style>
	article {
		width: 100%;
	}

	img {
		display: block;
		object-fit: cover;
		width: 100%;
		height: 40vh;
		transform-origin: center center;
		will-change: transform, filter, opacity;
	}
</style>
