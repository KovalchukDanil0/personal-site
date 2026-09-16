import type { Tables } from "$lib/supabase/database.types";

export interface BlogItem extends App.BlogGlobType {
	blog: string;
}

export type Test = Record<number, Tables<"blogs">[]>;

export const postsGlob = import.meta.glob<true, string, App.BlogGlobType>("$posts/*.md", {
	eager: true,
});
