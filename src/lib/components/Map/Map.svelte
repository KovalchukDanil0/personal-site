<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import "./_index.scss";

	type Props = Omit<HTMLAttributes<EventTarget>, "children">;

	let props: Props = $props();

	const PRAGUE_LAT_LNG = [50.0875, 14.421389];
</script>

<div class="map" {...props}>
	{#await import("sveaflet") then { Map, TileLayer, Marker }}
		<Map
			options={{
				center: PRAGUE_LAT_LNG,
				zoom: 13,
			}}
		>
			<TileLayer url={"https://tile.openstreetmap.org/{z}/{x}/{y}.png"} />
			<Marker latLng={PRAGUE_LAT_LNG} />
		</Map>
	{/await}
</div>
