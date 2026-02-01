<script lang="ts">
	import { getLocale, locales, setLocale, type Locale } from "$lib/paraglide/runtime";
	import type { HTMLSelectAttributes } from "svelte/elements";

	let props: HTMLSelectAttributes = $props();

	const localeNames: Record<Locale, string> = {
		en: "English",
		cs: "Czech",
	};

	const currentLocale = getLocale();
</script>

<select
	{...props}
	name="locale"
	onchange={async ({ currentTarget: { value } }) => {
		const locale = value as Locale;

		if (locales.includes(locale)) {
			await setLocale(locale);
		}
	}}
>
	{#each locales as locale (locale)}
		<option value={locale} selected={locale === currentLocale}>{localeNames[locale]}</option>
	{/each}
</select>
