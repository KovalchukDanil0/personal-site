<script lang="ts">
	import { getLocale, locales, setLocale, type Locale } from "$lib/paraglide/runtime";
	import { Select, type SelectProps } from ".";
	import { Option } from "..";

	let props: Omit<SelectProps, "children" | "value"> = $props();

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
	value={currentLocale}
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
