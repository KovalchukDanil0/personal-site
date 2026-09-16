import { supabase } from "$lib/supabase";
import { sanitize } from "isomorphic-dompurify";
import { marked } from "marked";

export async function load({ params: { blog: blogSlug } }) {
	const { data: blog } = await supabase.from("blogs").select().eq("slug", blogSlug).single();

	blog.created_at = new Date(blog.created_at).toLocaleDateString();

	const blogHtml = await marked(blog.content);
	blog.content = sanitize(blogHtml);

	return { blog };
}
