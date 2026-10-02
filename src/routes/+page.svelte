<script lang="ts">
	import { Link, MetaTags, Ticker, Tooltip, WorkExperienceCard } from "#lib/components/index.js";
	import { email, github, linkedIn } from "#lib/info.js";
	import { resolve } from "$app/paths";
</script>

<MetaTags title="Hello" description="Home Page description" />

<section>
	<h1 class="header">Hey, I am <Ticker content={["Danylo", "Dan", "Daniel", "Danil"]} /> !</h1>

	<div>
		<Tooltip text="Mostly using TypeScript, Rust and Python">Software Engineer</Tooltip>, based in
		Czech Republic, Prague
	</div>

	<div class="buttons">
		<Link href={resolve("about")} variant="arrow-right">About me</Link>
		<Link href={resolve("blog")} variant="arrow-right">Read the blog</Link>
	</div>
</section>

<section>
	<h2>About Me</h2>
	<p>
		Ut varius, velit ac gravida scelerisque, felis felis egestas purus, eget laoreet enim arcu nec
		quam. Phasellus ornare dictum mauris vitae posuere. Suspendisse potenti. Duis pharetra massa at
		aliquet mattis. Mauris rutrum felis lectus, et facilisis quam pulvinar vel. Duis non pretium
		turpis. Etiam rutrum nunc ut mi lobortis lacinia. Donec ut sagittis neque.
	</p>
	<div class="buttons">
		<Link href={github} variant="arrow-right" newTab>GitHub</Link>
		<Link href={linkedIn} variant="arrow-right" newTab>LinkedIn</Link>
		<Link href="mailto:{email}" variant="arrow-right">Email</Link>
	</div>
</section>

<section>
	<WorkExperienceCard.Info
		company="VML"
		location="Bubenská 1477/1, Praha 7"
		period="July 2022 - Present"
		website="vml.com/czech-republic"
	>
		<WorkExperienceCard.Role position="Content Editor" period="2022 - 2025">
			<p>
				Created a Chrome Extension <Link
					href="https://github.com/KovalchukDanil0/AEMFixes"
					underline
					newTab>github.com/KovalchukDanil0/AEMFixes</Link
				> to increase productivity of team by 50% by automating repetitive work
			</p>
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
