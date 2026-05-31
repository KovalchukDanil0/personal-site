import { simpleComponent } from "$lib/utils.svelte";
import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-svelte";
import { page } from "vitest/browser";
import Button from "./Button.svelte";

const TEXT_TO_CHECK = "Hello World!";

describe("Welcome.svelte", () => {
	it("renders greetings for host and guest", async () => {
		render(Button, { children: simpleComponent(TEXT_TO_CHECK) });

		await expect.element(page.getByText(TEXT_TO_CHECK)).toBeInTheDocument();
	});
});
