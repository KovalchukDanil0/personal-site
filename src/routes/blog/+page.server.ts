import { supabase } from "#lib/supabase/index.js";
import type { Tables } from "#lib/supabase/database.types.js";
import { error } from "@sveltejs/kit";
import type { Test } from ".";

function sortBlogsByYear(blogs: Tables<"blogs">[]) {
	return blogs.reduce<Test>((acc, blog) => {
		const date = new Date(blog.created_at);

		const year = date.getFullYear().toString();
		blog.created_at = date.toLocaleDateString();

		if (!acc[year]) {
			acc[year] = [];
		}

		acc[year].push(blog);

		return acc;
	}, {});
}

export async function load() {
	const { data: blogs } = await supabase
		.from("blogs")
		.select()
		.order("created_at", { ascending: false });
	if (!blogs) {
		error(500, "");
	}

	return {
		blogsSorted: sortBlogsByYear(blogs),
	};
}
