<script lang="ts">
	import { siteName } from "#lib/info.js";
	import { MetaTags, type MetaTagsProps } from "svelte-meta-tags";

	interface Props extends Omit<MetaTagsProps, "titleTemplate"> {
		isLayout?: boolean;
	}

	let { isLayout: layout, ...props }: Props = $props();
</script>

<MetaTags {...props} titleTemplate={layout ? undefined : `%s - ${siteName}`} />
