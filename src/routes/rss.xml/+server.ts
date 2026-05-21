import XMLBuilder from "fast-xml-builder";

const posts = import.meta.glob<true, string, App.BlogGlobType>("$lib/posts/*.md", {
	eager: true,
});

export async function GET({ url: { origin: site } }) {
	const items = Object.entries(posts)
		.map(([path, { metadata }]) => ({
			slug: path.split("/").pop()?.replace(".md", ""),
			title: metadata.title,
			description: metadata.description,
			date: metadata.date,
		}))
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
