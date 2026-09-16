<script lang="ts">
	import { getLocale, locales, setLocale, type Locale } from "$lib/paraglide/runtime";
	import { Globe } from "@lucide/svelte";
	import { Select, type SelectProps } from ".";
	import { Option } from "..";

	let props: Omit<SelectProps, "children" | "value"> = $props();

	const localeNames: Record<Locale, string> = {
		en: "English",
		cs: "Czech",
	};

	const currentLocale = getLocale();
</script>

<div class="lang-select">
	<Globe />

	<Select
		{...props}
		name="locale"
		variant="lang-select"
		value={currentLocale}
		onchange={async ({ currentTarget: { value } }) => {
			let locale = value as Locale;

			if (locales.includes(locale)) {
				await setLocale(locale);
			}
		}}
	>
		{#each locales as locale (locale)}
			<Option value={locale} selected={locale === currentLocale}>{localeNames[locale]}</Option>
		{/each}
	</Select>
</div>

<style lang="scss">
	.lang-select {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-content: center;
		flex-wrap: nowrap;
	}
</style>
