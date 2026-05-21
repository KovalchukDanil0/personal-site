<script lang="ts">
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

<style lang="scss">
	@use "$styles/theme" as theme;

	.map {
		width: 50%;
		height: 50%;

		&:where(:global([data-theme="dark"]), :global([data-theme="dark"]) *) :global(.leaflet-layer) {
			filter: brightness(0.6) invert(1) contrast(3) hue-rotate(200deg) saturate(0.3) brightness(0.7);
		}
	}

	:where(:global([data-theme="dark"]), :global([data-theme="dark"]) *) :global(.leaflet-container) {
		background-color: black !important;
	}
</style>
