<script lang="ts">
	import type { HTMLImgAttributes } from "svelte/elements";

	type Props = HTMLImgAttributes;

	let props: Props = $props();
</script>

<img {...props} class="badge" />

<style lang="scss">
	.badge {
		width: 80px;
		height: 30px;
		object-fit: contain;
	}
</style>
