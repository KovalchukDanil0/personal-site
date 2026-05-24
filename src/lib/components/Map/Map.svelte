<script lang="ts">
	import "./index.scss";

	const pragueLatLng = [50.0875, 14.421389];
</script>

<div class="map">
	{#await import("sveaflet") then { Map, TileLayer, Marker }}
		<Map
			options={{
				center: pragueLatLng,
				zoom: 13,
			}}
		>
			<TileLayer url={"https://tile.openstreetmap.org/{z}/{x}/{y}.png"} />
			<Marker latLng={pragueLatLng} />
		</Map>
	{/await}
</div>
