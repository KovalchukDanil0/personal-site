export interface BlogMetadataType {
	title: string;
	description: string;
	date: Date;
}

interface BlogGlobType {
	metadata: BlogMetadataType;
}

export type BlogItem = { blog: string } & BlogGlobType;

function postsByYear(posts: BlogItem[]): Record<string, BlogItem[]> {
	return posts.reduce(
		(acc, blog) => {
			const year = blog.metadata.date.getFullYear().toString();

			if (!acc[year]) {
				acc[year] = [];
			}

			acc[year].push(blog);

			return acc;
		},
		{} as Record<string, BlogItem[]>
	);
}

export async function load() {
	const postsGlob = import.meta.glob<true, string, BlogGlobType>("$lib/posts/*.md", {
		eager: true,
	});

	const posts = Object.entries(postsGlob)
		.map(([path, { metadata }]) => ({
			blog: path.split("/").pop()?.replace(".md", ""),
			metadata: { ...metadata, date: new Date(metadata.date) },
		}))
		.filter((post): post is BlogItem => !!post.blog);

	return {
		postsWithYear: postsByYear(posts),
	};
}
