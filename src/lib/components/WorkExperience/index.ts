import Card from "./Card.svelte";
import Role from "./Role.svelte";

export interface RoleDetailsProps {
	position?: string;
	link?: string;
	period: string;
}

export default {
	Role,
	Card,
};
