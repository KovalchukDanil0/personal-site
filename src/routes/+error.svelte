<script lang="ts">
	import { m } from "#lib/paraglide/messages.js";
	import { page } from "$app/state";
</script>

<h1 class="error-code">{page.status}</h1>
<p>{page.error?.message ?? m["error.unknown"]()}</p>

<style lang="scss">
	.error-code {
		color: var(--primary-color);
	}
</style>
