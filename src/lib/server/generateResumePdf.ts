import { jsPDF } from "jspdf";
import { resume } from "./resume";

export function generateResumePdf() {
	function header(text: string) {
		doc.setFont("helvetica", "bold");
		doc.setFontSize(22);
		doc.text(text, margin, y);

		y += 8;
	}

	function subHeader(text: string) {
		doc.setFont("helvetica", "bold");
		doc.setFontSize(12);
		doc.text(text, margin, y);

		y += 8;
	}

	function title(text: string) {
		doc.setFont("helvetica", "bold");
		doc.setFontSize(16);
		doc.text(text, margin, y);

		y += 8;
	}

	function text(text: string, { url, addMargin }: { url?: string; addMargin?: number } = {}) {
		doc.setFont("helvetica", "normal");
		doc.setFontSize(10);

		const lines: string[] = doc.splitTextToSize(text, 170);

		if (url) {
			doc.textWithLink(text, margin, y, {
				url,
			});
		} else {
			doc.text(lines, margin, y);
		}

		y += lines.length * 5 + (addMargin ?? 3);
	}

	function bullet(textValue: string, url?: string) {
		// const lines: string[] = doc.splitTextToSize(`• ${textValue}`, 165);

		text(`• ${textValue}`, { url, addMargin: 1 });

		// y += lines.length * 5;
	}

	function checkPage() {
		if (y > 270) {
			doc.addPage();
			y = margin;
		}
	}

	const doc = new jsPDF({
		format: "a4",
		unit: "mm",
	});

	const margin = 20;
	let y = margin;

	// Header

	header(resume.personal.name);
	subHeader(resume.personal.title);

	text(`${resume.personal.email} | ${resume.personal.phone} | ${resume.personal.location}`);

	y += 3;

	// Summary

	title("Summary");

	text(resume.summary);

	y += 3;

	// Profiles

	title("Profiles");

	for (const { text, url } of resume.profiles) {
		bullet(text, url);
	}

	y += 3;

	// Experience

	title("Experience");

	for (const job of resume.experience) {
		checkPage();

		doc.setFont("helvetica", "bold");

		subHeader(`${job.role} - ${job.company}`);

		// y += 5;

		doc.setFont("helvetica", "italic");

		text(job.period);

		// y += 6;

		for (const item of job.items) {
			bullet(item);
		}

		y += 3;
	}

	// Education

	title("Education");

	for (const edu of resume.education) {
		text(`${edu.degree}, ${edu.school} (${edu.period})`);
	}

	y += 3;

	// Projects

	title("Projects");

	for (const project of resume.projects) {
		checkPage();

		doc.setFont("helvetica", "bold");

		text(project.name);

		y += 5;

		text(project.stack);
		text(project.description);
	}

	y += 3;

	// Skills

	title("Skills");

	for (const [group, skills] of Object.entries(resume.skills)) {
		text(`${group}: ${skills.join(", ")}`);
	}

	return doc.output("arraybuffer");
}
