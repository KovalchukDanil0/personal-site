<script>
	import { Button } from "$lib/components";
</script>

<svelte:head>
	<title>Danylo Space</title>
	<meta property="description" content="Home Page description" />
</svelte:head>

<h1>Home Page</h1>
<p>Home Page</p>

<Button
	onclick={async () => {
		var audio = new Audio("https://cdn.pixabay.com/audio/2025/09/17/audio_32aeb1ec12.mp3");
		await audio.play();
	}}
	>Test
</Button>
12345
