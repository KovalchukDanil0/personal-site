import { createRawSnippet } from "svelte";
import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-svelte";
import { page } from "vitest/browser";
import { Button } from ".";

const textToCheck = "Hello World!";

describe("Welcome.svelte", () => {
	it("renders greetings for host and guest", async () => {
		render(Button, {
			children: createRawSnippet(() => ({ render: () => "test" })),
		});

		await expect.element(page.getByText(textToCheck)).toBeInTheDocument();
	});
});
