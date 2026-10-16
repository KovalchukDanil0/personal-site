import type { Tables } from "#lib/supabase/database.types.js";

export type Test = Record<number, Tables<"blogs">[]>;
