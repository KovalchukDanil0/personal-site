import { supabase } from "#lib/supabase/index.js";
import { error } from "@sveltejs/kit";
import { marked, type Renderer } from "marked";
import sanitizeHtml from "sanitize-html";
import type { Blog, BlogImage } from ".";

export async function load({ params: { blog: blogSlug }, url: { origin } }) {
	const { data: blog_data } = await supabase.from("blogs").select().eq("slug", blogSlug).single();

	let blog_image: BlogImage = {};
	if (blog_data?.image_id) {
		const { data: image_data } = await supabase
			.from("images")
			.select()
			.eq("id", blog_data.image_id)
			.single();

		const { id: _, ...image } = image_data ?? {};
		blog_image = image;
	}

	if (!blog_data) {
		error(500, "Cannot fetch blog");
	}

	// Added Partial so compiler won't complain
	const renderer: Partial<Renderer> = {
		link({ href, title, text }) {
			let url: URL;
			try {
				url = new URL(href);
			} catch {
				url = new URL(href, origin);
			}

			const isExternal = url.origin !== origin;

			return `<a href="${href}"${title ? ` title="${title}"` : ""}${isExternal ? ' target="_blank" rel="noopener noreferrer"' : ""}>${text}</a>`;
		},
	};
	marked.use({ renderer });

	const blogHtml = await marked(blog_data.content);

	const blog: Blog = {
		// Important to keep blog_data above so properties below wouldn't be overwritten
		...blog_data,

		created_at: new Date(blog_data.created_at).toLocaleDateString(),
		content: sanitizeHtml(blogHtml),
		image: blog_image,
	};

	return { blog };
}
