<script lang="ts">
	import bunnyUrl from "#assets/bunny.png?url";
	import { Application, AssetsLoader } from "svelte-pixi";
	import Bunny from "./Bunny.svelte";
</script>

<Application>
	<AssetsLoader assets={[bunnyUrl]}>
		<Bunny url={bunnyUrl} />
	</AssetsLoader>
</Application>
