import { postsGlob, type BlogItem } from ".";

function postsByYear(posts: BlogItem[]): Record<string, BlogItem[]> {
	return posts.reduce<Record<string, BlogItem[]>>((acc, blog) => {
		const year = blog.metadata.date.getFullYear().toString();

		if (!acc[year]) {
			acc[year] = [];
		}

		acc[year].push(blog);

		return acc;
	}, {});
}

export function load() {
	const posts = Object.entries(postsGlob)
		.map(([path, { metadata }]) => ({
			blog: path.split("/").pop()?.replace(".md", ""),
			metadata: { ...metadata, date: new Date(metadata.date) },
		}))
		.filter((post): post is BlogItem => Boolean(post.blog));

	return {
		postsWithYear: postsByYear(posts),
	};
}
