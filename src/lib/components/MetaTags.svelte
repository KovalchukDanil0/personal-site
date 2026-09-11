<script lang="ts">
	import { siteName } from "$lib/info";
	import { MetaTags, type MetaTagsProps } from "svelte-meta-tags";

	interface Props extends Omit<MetaTagsProps, "titleTemplate"> {
		layout?: boolean;
	}

	let { layout, ...props }: Props = $props();
</script>

<MetaTags {...props} titleTemplate={layout ? undefined : `%s - ${siteName}`} />
