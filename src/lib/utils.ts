import { noCase } from "change-case";

interface ParentRoute {
	url: string;
	name: string | null;
}

export function parentRoute(pathname: string): ParentRoute | undefined {
	const parts = pathname.split("/").filter(Boolean);
	if (parts.length === 0) {
		return;
	}

	if (parts.length === 1) {
		return { url: "/", name: "home" };
	}

	const parentRouteName = parts.at(-2);
	return {
		url: `/${parts.slice(0, -1).join("/")}`,
		name: parentRouteName ? noCase(parentRouteName) : null,
	};
}

export function normalizeUrl(input: string) {
	return /^https?:\/\//iu.test(input) ? input : `https://${input}`;
}
