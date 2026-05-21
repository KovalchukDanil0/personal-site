<script lang="ts">
	import { getLocale, locales, setLocale, type Locale } from "$lib/paraglide/runtime";
	import type { HTMLSelectAttributes } from "svelte/elements";
	import { Option, Select } from "..";

	let props: HTMLSelectAttributes = $props();

	const localeNames: Record<Locale, string> = {
		en: "🇺🇸",
		cs: "🇨🇿",
	};

	const currentLocale = getLocale();
</script>

<Select
	{...props}
	name="locale"
	variant="lang-select"
	onchange={async ({ currentTarget: { value } }) => {
		const locale = value as Locale;

		if (locales.includes(locale)) {
			await setLocale(locale);
		}
	}}
>
	{#each locales as locale (locale)}
		<Option value={locale} selected={locale === currentLocale}>{localeNames[locale]}</Option>
	{/each}
</Select>
