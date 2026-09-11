<script lang="ts">
	let { children } = $props();
</script>

<div class="blog">
	{@render children()}
</div>

<style lang="scss">
	:global(.blog *:not(.language-js *)) {
		font-family: "Architects Daughter";
	}
</style>
