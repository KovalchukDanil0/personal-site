<script lang="ts">
	import { page } from "$app/state";
	import { m } from "$lib/paraglide/messages";
</script>

<h1>{page.status}</h1>
<p>{page.error?.message ?? m["error.unknown"]()}</p>
