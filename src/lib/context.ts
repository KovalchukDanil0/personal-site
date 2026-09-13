import { createContext } from "svelte";

export const [getCurrentYear, setCurrentYear] = createContext<() => number>();
export const [getTheme, setTheme] = createContext<() => string>();
