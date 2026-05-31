import { includeIgnoreFile } from "@eslint/config-helpers";
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import svelte from "eslint-plugin-svelte";
import { defineConfig } from "eslint/config";
import globals from "globals";
import path from "node:path";
import ts from "typescript-eslint";
import svelteConfig from "./svelte.config.js";

const gitignorePath = path.resolve(import.meta.dirname, ".gitignore");

export default defineConfig(
	includeIgnoreFile(gitignorePath),
	js.configs.recommended,
	...ts.configs.strictTypeChecked,
	...svelte.configs.recommended,
	prettier,
	...svelte.configs.prettier,
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
		},
		rules: {
			"no-undef": "off",

			"@typescript-eslint/no-explicit-any": "error",
			"@typescript-eslint/use-unknown-in-catch-callback-variable": "error",
			"@typescript-eslint/no-unsafe-argument": "error",
			"@typescript-eslint/no-unsafe-call": "error",
			"@typescript-eslint/no-unsafe-member-access": "error",
			"@typescript-eslint/no-unsafe-return": "error",

			"@typescript-eslint/no-unsafe-assignment": "warn",
		},
	},
	{
		files: ["**/*.ts", "**/*.js"],
		languageOptions: {
			parserOptions: {
				projectService: true,
			},
		},
	},
	{
		files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
		languageOptions: {
			parserOptions: {
				projectService: true,
				parser: ts.parser,
				extraFileExtensions: [".svelte"],
				svelteConfig,
			},
		},
		rules: {
			"@typescript-eslint/no-base-to-string": "warn",
			"@typescript-eslint/no-confusing-void-expression": "warn",
			"@typescript-eslint/no-unsafe-call": "warn",

			"svelte/block-lang": [
				"error",
				{
					script: ["ts"],
					style: "scss",
				},
			],
			"svelte/no-navigation-without-resolve": "warn",
			"svelte/button-has-type": "error",
			"svelte/no-add-event-listener": "error",
			"svelte/no-ignored-unsubscribe": "error",
			"svelte/no-inline-styles": "error",
			"svelte/prefer-const": "error",
			"svelte/prefer-destructured-store-props": "error",
			"svelte/require-optimized-style-attribute": "error",
			"svelte/require-stores-init": "error",
			"svelte/no-unused-class-name": "warn",
		},
	}
);
