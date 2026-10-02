<script lang="ts">
	import { MetaTags } from "#lib/components/index.js";
	import { Canvas } from "@threlte/core";
	import Scene from "./Scene.svelte";
</script>

<MetaTags title="Home Page" description="Home Page description" />

<Canvas>
	<Scene />
</Canvas>
