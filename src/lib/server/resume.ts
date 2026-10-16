import { email, github, linkedIn, myName, mySurname } from "../info";

export const resume = {
	personal: {
		name: [myName, mySurname].join(" "),
		title: "Senior Full-Stack Software Engineer",
		phone: "+1 (555) 123-4567",
		location: "Prague, Czech Republic",
		email,
	},

	summary:
		"Senior software engineer with over 10 years of experience building scalable web applications. Passionate about clean architecture, TypeScript ecosystems, cloud infrastructure, and developer experience.",

	profiles: [
		{ text: "GitHub", url: github },
		{ text: "LinkedIn", url: linkedIn },
	],

	experience: [
		{
			company: "Tech Solutions Ltd.",
			role: "Senior Software Engineer",
			period: "2021 - Present",
			items: [
				"Designed microservices using Node.js and TypeScript.",
				"Led migration from REST APIs to GraphQL.",
				"Improved deployment pipeline reducing release time by 70%.",
			],
		},
		{
			company: "CloudSoft",
			role: "Full Stack Developer",
			period: "2017 - 2021",
			items: [
				"Built SaaS applications with React and Node.js.",
				"Optimized PostgreSQL queries.",
				"Implemented OAuth2 authentication.",
			],
		},
	],

	education: [
		{
			school: "Czech Technical University",
			degree: "MSc Software Engineering",
			period: "2012 - 2014",
		},
		{
			school: "Masaryk University",
			degree: "BSc Computer Science",
			period: "2009 - 2012",
		},
	],

	projects: [
		{
			name: "Open Source Resume Builder",
			stack: "SvelteKit, TypeScript, PostgreSQL",
			description: "Resume builder supporting customizable templates and PDF export.",
		},
		{
			name: "Analytics Dashboard",
			stack: "React, GraphQL, D3.js",
			description: "Real-time analytics platform processing millions of events.",
		},
	],

	skills: {
		Frontend: ["Svelte", "SvelteKit", "React", "CSS"],
		Backend: ["Node.js", "Fastify", "NestJS"],
		Database: ["PostgreSQL", "MongoDB"],
		Cloud: ["AWS", "Docker", "Terraform"],
	},
};
