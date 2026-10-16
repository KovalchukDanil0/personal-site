<script lang="ts">
	import { myName } from "#lib/info.ts";
	import { MetaTags, type MetaTagsProps } from "svelte-meta-tags";

	interface Props extends Omit<MetaTagsProps, "titleTemplate"> {
		isLayout?: boolean;
	}

	let { isLayout, title, ...props }: Props = $props();
</script>

<MetaTags
	{...props}
	title={title ?? myName}
	titleTemplate={isLayout || !title ? undefined : `%s - ${myName}`}
/>
