import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-svelte";
import { page } from "vitest/browser";
import Footer from "./Footer.svelte";

describe("Welcome.svelte", () => {
	it("renders greetings for host and guest", async () => {
		render(Footer, { currentYear: new Date().getFullYear() });

		await expect.element(page.getByText("2026")).toBeInTheDocument();
	});
});
