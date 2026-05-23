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
	.map {
		width: 100%;
		height: 50%;

		@media screen and (width >= 900px) {
			width: 50%;
		}

		:global(&:where([data-theme="dark"], [data-theme="dark"] *) .leaflet-layer) {
			filter: brightness(0.6) invert(1) contrast(3) hue-rotate(200deg) saturate(0.3) brightness(0.7);
		}
	}

	:global(:where([data-theme="dark"], [data-theme="dark"] *) .leaflet-container) {
		background-color: black !important;
	}
</style>
