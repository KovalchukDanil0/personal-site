import { paraglideVitePlugin } from "@inlang/paraglide-js";
import { sveltekit } from "@sveltejs/kit/vite";
import { playwright } from "@vitest/browser-playwright";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { defineConfig } from "vitest/config";

export default defineConfig({
	build: { minify: true },
	plugins: [
		sveltekit(),
		ViteImageOptimizer(),
		paraglideVitePlugin({
			project: "./project.inlang",
			outdir: "./src/lib/paraglide",
			strategy: ["cookie", "preferredLanguage", "url", "baseLocale"],
			urlPatterns: [
				{
					pattern: "/blog",
					localized: [
						["en", "/blog"],
						["cs", "/blogu"],
					],
				},

				{
					pattern: "/resume",
					localized: [
						["en", "/resume"],
						["cs", "/životopis"],
					],
				},
			],
		}),
	],
	resolve: process.env.VITEST ? { conditions: ["browser"] } : undefined,
	test: {
		expect: { requireAssertions: true },
		projects: [
			{
				extends: "./vite.config.ts",
				test: {
					name: "client",
					browser: {
						enabled: true,
						provider: playwright(),
						instances: [{ browser: "chromium", headless: false }],
					},
					include: ["src/**/*.svelte.{test,spec}.{js,ts}"],
					exclude: ["src/lib/server/**"],
				},
			},
			{
				extends: "./vite.config.ts",
				test: {
					name: "server",
					environment: "node",
					include: ["src/**/*.{test,spec}.{js,ts}"],
					exclude: ["src/**/*.svelte.{test,spec}.{js,ts}"],
				},
			},
		],
	},
});
