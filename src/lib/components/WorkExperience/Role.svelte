<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import { type RoleDetailsProps } from ".";
	import { Link } from "..";

	interface Props extends HTMLAttributes<EventTarget>, RoleDetailsProps {
		children: Snippet;
	}

	let { children, position, period, link, ...restProps }: Props = $props();
</script>

<div class="role" {...restProps}>
	<div class="bubble"></div>

	<div class="info">
		<div class="primary">
			<h3 class="title">{position}</h3>
			{#if link}
				<Link href={link} underline>{link}</Link>
			{/if}
		</div>

		<p class="period">{period}</p>
	</div>

	<div>{@render children()}</div>
</div>

<style lang="scss">
	@use "#styles/variables" as v;

	.role {
		position: relative;
		display: flex;
		flex-direction: column;

		border-radius: 10px;
		padding: 10px;
		border-width: 0;
		border-style: solid;
		border-width: 2px;
		border-color: var(--secondary-color);
		transition: all 0.1s ease-out allow-discrete;

		&:hover {
			transform: translateY(-2px);
			border-color: var(--primary-color);

			.bubble {
				background-color: var(--primary-color);
			}
		}
	}

	.bubble {
		position: absolute;
		top: -4px;
		left: -4px;
		background-color: var(--secondary-color);
		border-color: var(--primary-color);
		border-width: 2px;
		border-style: solid;
		width: 10px;
		height: 10px;
		border-radius: 100%;
	}

	.info {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		h3.title {
			font-weight: bold;
			margin: 0;
		}

		.period {
			background-color: var(--secondary-color);
			border-width: 2px;
			border-radius: 6px;
			padding: 6px;
			align-self: center;
		}

		.primary {
			display: flex;
			flex-direction: column;
			gap: 8px;
		}
	}
</style>
