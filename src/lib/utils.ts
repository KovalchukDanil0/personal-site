import { noCase } from "change-case";

export function mergeClass(...args: (string | null | boolean | undefined)[]) {
	return args.filter((item) => !!item).join(" ");
}

interface ParentRoute {
	url: string;
	name: string | null;
}

export function parentRoute(pathname: string): ParentRoute | undefined {
	const parts = pathname.split("/").filter((item) => !!item);
	if (!parts.length) {
		return;
	}

	if (parts.length === 1) {
		return { url: "/", name: "home" };
	}

	const parentRouteName = parts.at(-2);
	return {
		url: "/" + parts.slice(0, -1).join("/"),
		name: parentRouteName ? noCase(parentRouteName) : null,
	};
}
