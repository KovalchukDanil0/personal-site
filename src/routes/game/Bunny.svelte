<script lang="ts">
	import { Texture } from "pixi.js";
	import { onTick, Sprite } from "svelte-pixi";

	interface Props {
		url: string;
	}

	let { url }: Props = $props();

	let x = $state(360);
	let y = $state(200);

	onTick((ticker) => {
		const time = ticker.lastTime / 500;
		x = 360 + Math.cos(time) * 50;
		y = 200 + Math.sin(time) * 50;
	});
</script>

<Sprite {x} {y} texture={Texture.from(url)} anchor={0.5} scale={3} />
