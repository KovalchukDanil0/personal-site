<script lang="ts">
	import { Link, MetaTags, Skills, Ticker, WorkExperience } from "#components";
	import { email, github, linkedIn } from "#lib/info.ts";
</script>

<MetaTags title="Hello" description="Home Page description" />

<section>
	<h1 class="header">Hey, I am <Ticker content={["Danylo", "Dan", "Daniel", "Danil"]} /> !</h1>

	<p class="details">Software Engineer, based in Czech Republic, Prague</p>
	<p><i>I like building things that are a little different and making them run fast</i></p>
</section>

<section>
	<h2>About Me</h2>

	<p></p>

	<div class="buttons">
		<Link href={github} variant="arrow-right" newTab>GitHub</Link>
		<Link href={linkedIn} variant="arrow-right" newTab>LinkedIn</Link>
		<Link href="mailto:{email}" variant="arrow-right">Email</Link>
	</div>
</section>

<section>
	<h2>Experience</h2>

	<WorkExperience.Card>
		<WorkExperience.Role
			position="Tagging Specialist"
			period="2026 - Present"
			link="https://vml.com/czech-republic"
		>
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
		</WorkExperience.Role>

		<WorkExperience.Role
			position="Content Editor"
			period="2022 - 2025"
			link="https://vml.com/czech-republic"
		>
			<p>
				Created a Chrome Extension <Link
					href="https://github.com/KovalchukDanil0/AEMFixes"
					underline
					newTab>github.com/KovalchukDanil0/AEMFixes</Link
				> to increase productivity of team by 50% by automating repetitive work
			</p>
		</WorkExperience.Role>
	</WorkExperience.Card>
</section>

<section>
	<h2>Growing Through Code</h2>

	<!-- Make cards more interactive, for example when user hovers a card (it displayes some png and years) it rotates and shows info -->
	<div class="code-journey">
		<div class="card">
			<p>
				First of firsts I joined a programming course for juniors at Step IT Academy, spending most
				of my time learning video editing, 3D modeling, and working with vector graphics. It was
				only the game development module that helped me realize just how much I love programming.
			</p>
		</div>

		<div class="card">
			<p>
				I spent a huge amount of time creating horror games, but eventually realized that games are
				too complex a task to start with.
			</p>
		</div>

		<div class="card">
			<p>
				I had almost given up on it, but then I started learning Python programming right on my
				phone during Computer Science class. During that time, I created numerous graphics using the
				"turtle" module.
			</p>
		</div>

		<div class="card">
			<p>
				While studying at the university's Faculty of Computer Science, I met people with whom I
				developed native desktop software on C# as part of an exam assignment.
			</p>
		</div>

		<div class="card">
			<p>
				The war broke out, and I moved to the Czech Republic - only to discover that I was addicted
				to Full-Stack web development.
			</p>
		</div>
	</div>
</section>

<section>
	<h2>Skills and technologies</h2>

	<Skills />
</section>

<style lang="scss">
	@use "#styles/mixins" as m;

	.header {
		display: inline-flex;
		white-space: pre;
	}

	.details {
		text-decoration-style: wavy;
		text-decoration-color: var(--primary-color);
		text-decoration-thickness: 2px;
		text-decoration-line: underline;
	}

	.code-journey {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 35px;

		@include m.screen-small {
			flex-direction: column;
			gap: 15px;
		}

		> .card {
			border-color: var(--secondary-color);
			border-style: dashed;
			border-width: 2px;
			border-radius: 10px;
			padding: 20px;
			width: 25%;

			@include m.screen-small {
				width: 100%;
			}
		}
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
