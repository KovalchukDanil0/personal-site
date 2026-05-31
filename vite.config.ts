import { paraglideVitePlugin } from "@inlang/paraglide-js";
import { sveltekit } from "@sveltejs/kit/vite";
import { playwright } from "@vitest/browser-playwright";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { defineConfig } from "vitest/config";

const CLIENT_TESTS = ["src/**/*.svelte.test.ts"];

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
		includeTaskLocation: true,
		projects: [
			{
				extends: true,
				test: {
					name: "client",
					browser: {
						enabled: true,
						provider: playwright({ contextOptions: { colorScheme: "dark" } }),
						instances: [{ browser: "chromium", headless: false }],
					},
					include: CLIENT_TESTS,
					exclude: ["src/lib/server/**"],
				},
			},
			{
				extends: true,
				test: {
					name: "server",
					environment: "node",
					include: ["src/**/*.test.{js,ts}"],
					exclude: CLIENT_TESTS,
				},
			},
		],
	},
});
