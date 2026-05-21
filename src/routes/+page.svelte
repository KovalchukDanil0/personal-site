<script>
	import { Button, Map } from "$lib/components";
	import { Anvil } from "@lucide/svelte";
</script>

<svelte:head>
	<title>Home Page</title>
	<meta property="description" content="Home Page description" />
</svelte:head>

<h1>Home Page</h1>
<p>Home Page</p>

<Anvil />

<Map />

<Button
	onclick={async () => {
		var audio = new Audio("https://cdn.pixabay.com/audio/2025/09/17/audio_32aeb1ec12.mp3");
		await audio.play();
	}}
	>Test
</Button>
