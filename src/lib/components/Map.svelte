<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";

	type Props = Omit<HTMLAttributes<EventTarget>, "children">;

	let props: Props = $props();

	const latLng = [50.0875, 14.421389];
</script>

<div class="map" {...props}>
	{#await import("sveaflet") then { Map, TileLayer, Marker }}
		<Map
			options={{
				center: latLng,
				zoom: 13,
			}}
		>
			<TileLayer url={"https://tile.openstreetmap.org/{z}/{x}/{y}.png"} />
			<Marker {latLng} />
		</Map>
	{/await}
</div>

<style lang="scss">
	@use "#styles/mixins" as m;

	.map {
		width: 100%;
		height: 50%;

		@include m.screen-large {
			width: 50%;
		}

		:global(.leaflet-layer) {
			filter: var(--leaflet-filter);
		}

		:global(.leaflet-container) {
			background-color: var(--leaflet-background-color) !important;
		}
	}
</style>
