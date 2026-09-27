import { supabase } from "$lib/supabase/client.js";
import { response } from "super-sitemap/sveltekit";

export const prerender = true;

export async function GET({ url: { origin } }) {
	let { data: blogs } = await supabase.from("blogs").select("slug");

	return response({
		excludeRoutePatterns: [/\/test/u],
		paramValues: {
			"/blog/[blog]": blogs ? blogs.map((b) => b.slug) : [],
		},
		origin,
	});
}
