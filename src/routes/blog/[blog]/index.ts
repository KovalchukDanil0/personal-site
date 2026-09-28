import type { Tables } from "$lib/supabase/database.types";

export type BlogImage = Partial<Omit<Tables<"images">, "id">>;

export interface Blog extends Omit<Tables<"blogs">, "id" | "image_id"> {
	image?: BlogImage;
}
