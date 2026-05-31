<script lang="ts">
	import { resolve } from "$app/paths";
	import { Link, MetaTags } from "$lib/components";
	import { Vml } from "$lib/components/icons";
	import { email, github, linkedIn, myName } from "$lib/info";
</script>

<MetaTags title="Hello" description="Home Page description" />

<section>
	<h1>Hey, I am <span class="accent">{myName}</span>!</h1>
	<p>Full-Stack Web Developer based in Czech Republic, Prague</p>
	<q><i>Being a fullstack dev is being equally bad at backend and frontend</i></q>
	<div class="buttons">
		<Link href={resolve("/about")} variant="button">About me</Link>
		<Link href={resolve("/blog")} variant="button">Read the blog</Link>
	</div>
</section>

<section>
	<h2>About Me</h2>
	<p>
		Full-Stack Web Developer with experience of automating complex workflows. Have passion of
		finding different non-usual <s>workarounds</s> ways to solve a problems
	</p>
	<div class="buttons">
		<Link href={github} variant="button" newTab>GitHub</Link>
		<Link href={linkedIn} variant="button" newTab>LinkedIn</Link>
		<Link href="mailto:{email}" variant="button">Email</Link>
	</div>
</section>

<section>
	<h2>Work Experience</h2>
	<Vml width="30%" height="10%" />
	<p>MDU</p>
</section>

<section>
	<h2>Skills and technologies</h2>
	<p>JavaScript</p>
	<p>TypeScript</p>
	<p>Rust</p>
</section>

<section>
	<h2>Recent Writings</h2>
</section>

<section>
	<h2>Photography</h2>
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: start;
		justify-content: space-evenly;

		> p {
			margin: 0;
			padding: 0;
		}

		> .buttons {
			display: flex;
			flex-direction: row;
			gap: 0.25rem;
		}
	}

	.accent {
		color: var(--primary-color);
	}
</style>
