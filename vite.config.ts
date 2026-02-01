import { paraglideVitePlugin } from "@inlang/paraglide-js";
import { sveltekit } from "@sveltejs/kit/vite";
import Icons from "unplugin-icons/vite";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { robots } from "vite-plugin-robots";

export default defineConfig({
	build: { minify: true },
	plugins: [
		robots(),
		sveltekit(),
		ViteImageOptimizer(),
		Icons({
			compiler: "svelte",
		}),
		paraglideVitePlugin({
			project: "./project.inlang",
			outdir: "./src/lib/paraglide",
			strategy: ["cookie", "preferredLanguage", "url", "baseLocale"],
			urlPatterns: [
				{
					pattern: "/blog", // Canonical route
					localized: [
						["en", "/blog"], // English: /about
						["cs", "/blogu"], // German: /ueber-uns
					],
				},
			],
		}),
	],
});
