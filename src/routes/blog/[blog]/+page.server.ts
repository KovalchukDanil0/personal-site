import { supabase } from "$lib/supabase";
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";

export async function load({ params: { blog: blogSlug } }) {
	const { data: blog } = await supabase.from("blogs").select().eq("slug", blogSlug).single();

	blog.created_at = new Date(blog.created_at).toLocaleDateString();

	const blogHtml = await marked(blog.content);
	blog.content = sanitizeHtml(blogHtml);

	return { blog };
}
