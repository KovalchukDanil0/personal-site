<script lang="ts">
	import { Canvas } from "@threlte/core";
	import { MetaTags } from "$lib/components";
	import Scene from "./Scene.svelte";
</script>

<MetaTags title="Home Page" description="Home Page description" />

<Canvas>
	<Scene />
</Canvas>
