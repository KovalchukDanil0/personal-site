import XMLBuilder from "fast-xml-builder";
import { postsGlob } from "..";

export function GET({ url: { origin: site } }) {
	const items = Object.entries(postsGlob)
		.map(
			([
				path,
				{
					metadata: { title, date, description },
				},
			]) => {
				const slug = path.split("/").pop()?.replace(".md", "");
				if (!slug) {
					return null;
				}

				return {
					title,
					description,
					date,
					slug,
				};
			}
		)
		.filter((item) => !!item)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	const builder = new XMLBuilder({
		ignoreAttributes: false,
		format: true,
	});

	const xml = builder.build({
		"?xml": {
			"@_version": "1.0",
			"@_encoding": "utf8",
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
					description,
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
