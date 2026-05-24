<script>
	import { resolve } from "$app/paths";
	import { Link } from "$lib/components";
	import { email, github, linkedIn } from "$lib/info";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags title="Danylo Space" description="Home Page description" />

<section>
	<h1>Hey, I am <span class="accent">Danylo</span>!</h1>
	<p>Full-Stack Web Developer based in Czech Republic, Prague</p>
	<q><i>Being a fullstack dev is being equally bad at backend and frontend</i></q>
	<div class="buttons">
		<Link href={resolve("/about")} variant="button">About me</Link>
		<Link href={resolve("/blog")} variant="button">Read the blog</Link>
	</div>
</section>

<section>
	<h2>About Me</h2>
	<p>Lorem ipsum dorem</p>
	<div class="buttons">
		<Link href={github} target="_blank" variant="button">GitHub</Link>
		<Link href={linkedIn} target="_blank" variant="button">LinkedIn</Link>
		<Link href="mailto:{email}" variant="button">Email</Link>
	</div>
</section>

<section>
	<h2>Work Experience</h2>
	<p>VML</p>
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
