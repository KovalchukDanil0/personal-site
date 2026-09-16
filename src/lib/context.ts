import { createContext } from "svelte";
import type { Theme } from "./themes";

export const [getCurrentYear, setCurrentYear] = createContext<() => number>();
export const [getTheme, setTheme] = createContext<() => Theme>();
