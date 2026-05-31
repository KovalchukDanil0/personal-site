import XMLBuilder from "fast-xml-builder";
import type { RequestEvent } from "./$types";

const posts = import.meta.glob<true, string, App.BlogGlobType>("$lib/posts/*.md", {
	eager: true,
});

export function GET({ url: { origin: site } }: RequestEvent) {
	const items = Object.entries(posts)
		.map(([path, { metadata }]) => {
			const slug = path.split("/").pop()?.replace(".md", "");
			if (!slug) {
				return null;
			}

			return {
				title: metadata.title,
				description: metadata.description,
				date: metadata.date,
				slug,
			};
		})
		.filter((item) => !!item)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	const builder = new XMLBuilder({
		ignoreAttributes: false,
		format: true,
	});

	const xml = builder.build({
		"?xml": {
			"@_version": "1.0",
			"@_encoding": "UTF-8",
		},

		rss: {
			"@_version": "2.0",

			channel: {
				title: "Your Blog",
				link: site,
				description: "Latest blog posts",

				item: items.map(({ date, description, slug, title }) => ({
					link: `${site}/blog/${slug}`,
					guid: `${site}/blog/${slug}`,
					pubDate: new Date(date).toUTCString(),
					description: description,
					title,
				})),
			},
		},
	});

	return new Response(xml, {
		headers: {
			"Content-Type": "application/xml",
		},
	});
}
