<script lang="ts">
	import { resolve } from "$app/paths";
	import { Link, MetaTags, Ticker, Tooltip, WorkExperienceCard } from "$lib/components";
	import { email, github, linkedIn } from "$lib/info";
</script>

<MetaTags title="Hello" description="Home Page description" />

<section>
	<h1 class="header">Hey, I am <Ticker content={["Danylo", "Dan", "Daniel", "Danil"]} /> !</h1>

	<div>
		<Tooltip text="Being a fullstack dev is being equally bad at backend and frontend"
			>Full-Stack Web Developer</Tooltip
		>, based in Czech Republic, Prague
	</div>

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
	<WorkExperienceCard.Info
		company="VML"
		location="Bubenská 1477/1, Praha 7"
		period="July 2022 - Present"
		website="vml.com/czech-republic"
	>
		<WorkExperienceCard.Role position="Content Editor" period="2022 - 2025"
			>Created a Chrome Extension <Link
				href="https://github.com/KovalchukDanil0/AEMFixes"
				underline
				newTab>github.com/KovalchukDanil0/AEMFixes</Link
			> to increase productivity of team by 50% by automating repetitive work</WorkExperienceCard.Role
		>

		<WorkExperienceCard.Role position="Tagging Specialist" period="2022 - 2025">
			<ul>
				<li>
					Created chrome extension that increased peformance of each team member by 200%, by
					automating dev-prod environment switching. Additionally added some userful tools such as
					brocken links checker and server data visualisation
				</li>
				<li>Launched new vehicle on all EMEA markets websites in tight deadlines</li>
				<li>Led medium-sized learning meetings for newcomers</li>
			</ul>
		</WorkExperienceCard.Role>

		<WorkExperienceCard.Role position="Tagging Specialist" period="2026 - Present">
			<ul>
				<li>
					Implemented, configured, tested, and maintained web tags using Tag Management Systems
					(e.g. Google Tag Manager, Adobe Launch)
				</li>
				<li>
					Ensured accurate tracking of user interactions, website events, campaigns, and conversions
					across digital platform
				</li>
			</ul>
		</WorkExperienceCard.Role>
	</WorkExperienceCard.Info>
</section>

<section>
	<h2>Skills and technologies</h2>
	<p>JavaScript</p>
	<p>TypeScript</p>
	<p>Rust</p>
</section>

<style lang="scss">
	.header {
		display: inline-flex;
		white-space: pre;
	}

	section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: start;
		justify-content: space-evenly;
		width: 100%;

		:global(> div) {
			margin-right: 100px;
		}

		:global(> p) {
			margin: 0;
			padding: 0;
		}

		> .buttons {
			display: flex;
			flex-direction: row;
			gap: 1ch;
		}
	}
</style>
