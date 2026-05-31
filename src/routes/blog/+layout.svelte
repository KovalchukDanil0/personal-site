<script lang="ts">
	import type { LayoutProps } from "./$types";

	let { children }: LayoutProps = $props();
</script>

<div class="blog">
	{@render children()}
</div>

<style lang="scss">
	:global(.blog *:not(.language-js *)) {
		font-family: "Architects Daughter";
	}
</style>
