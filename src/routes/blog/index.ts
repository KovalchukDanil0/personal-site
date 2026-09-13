export type BlogItem = { blog: string } & App.BlogGlobType;

export const postsGlob = import.meta.glob<true, string, App.BlogGlobType>("$posts/*.md", {
	eager: true,
});
