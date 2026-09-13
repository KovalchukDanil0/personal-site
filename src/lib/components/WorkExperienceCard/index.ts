import Info from "./Info.svelte";
import Role from "./Role.svelte";

export interface RoleDetailsProps {
	position?: string;
	period: string;
}

export { default as Section } from "./Section.svelte";

export default {
	Role,
	Info,
};
