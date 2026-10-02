import { generateResumePdf } from "#lib/server/generateResumePdf.js";

export function GET() {
	const pdf = generateResumePdf();

	return new Response(pdf, {
		headers: {
			"Content-Type": "application/pdf",
			"Content-Disposition": 'inline; filename="resume.pdf"',
		},
	});
}
