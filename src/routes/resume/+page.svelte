<script lang="ts">
	import { asset, resolve } from "$app/paths";
	import { MetaTags } from "$lib/components";
</script>

<MetaTags title="Resume of" description="Resume" />

<h1>Resume goes here</h1>

<embed src={asset("/resume.pdf")} type="application/pdf" />

<iframe
	title="Resume"
	src={resolve("/resume/pdf")}
	width="100%"
	height="800"
	style="border:1px solid #ccc"
></iframe>

<style lang="scss">
	embed {
		width: 100%;
		min-height: 90vh;
	}
</style>
