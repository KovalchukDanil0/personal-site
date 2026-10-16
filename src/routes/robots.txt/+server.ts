import robotstxt from "generate-robotstxt";

export async function GET({ url: { origin } }) {
	const robots = await robotstxt({
		policy: [
			{
				userAgent: "*",
				allow: "/",
				disallow: "/test",
			},
		],
		sitemap: `${origin}/sitemap.xml`,
		host: origin,
	});

	return new Response(robots);
}
