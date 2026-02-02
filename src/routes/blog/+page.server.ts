interface BlogGlobType {
	metadata: BlogMetadataType;
}

export async function load() {
	const postsGlob = import.meta.glob<true, string, BlogGlobType>("$lib/posts/*.md", {
		eager: true,
	});

	const posts = Object.entries(postsGlob)
		.map(([path, module]) => ({
			blog: path.split("/").pop()?.replace(".md", ""),
			metadata: module.metadata,
		}))
		.filter((post): post is { blog: string } & BlogGlobType => !!post.blog);

	return {
		posts,
	};
}
