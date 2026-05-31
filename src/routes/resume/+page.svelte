<script lang="ts">
	import { asset } from "$app/paths";
	import { MetaTags } from "$lib/components";
</script>

<MetaTags title="Resume of" description="Resume" />

<h1>Resume goes here</h1>

<embed src={asset("/resume.pdf")} type="application/pdf" />

<img
	class="will-work-for-beer"
	src={asset("/will-work-for-beer-jon-neidert.jpg")}
	alt="Will Work for Beer"
/>

<style lang="scss">
	embed {
		width: 100%;
		min-height: 90vh;
	}

	.will-work-for-beer {
		z-index: -10;
	}
</style>
