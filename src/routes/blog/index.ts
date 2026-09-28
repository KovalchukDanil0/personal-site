import type { Tables } from "$lib/supabase/database.types";

export type Test = Record<number, Tables<"blogs">[]>;
