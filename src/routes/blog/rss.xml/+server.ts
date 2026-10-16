import { supabase } from "#lib/supabase/client.js";
import XMLBuilder from "fast-xml-builder";

export async function GET({ url: { origin: site } }) {
	const { data: blogs } = await supabase.from("blogs").select();

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

				item: blogs?.map(({ created_at, description, slug, title }) => ({
					link: `${site}/blog/${slug}`,
					guid: `${site}/blog/${slug}`,
					pubDate: new Date(created_at).toUTCString(),
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
