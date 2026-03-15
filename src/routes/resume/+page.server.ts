import PDFDocument from "pdfkit";

export async function load() {
	const doc = new PDFDocument();

	const chunks: Uint8Array[] = [];

	doc.on("data", (chunk) => chunks.push(chunk));

	const pdfBuffer = await new Promise<Buffer>((resolve) => {
		doc.on("end", () => resolve(Buffer.concat(chunks)));

		// ---- PDF content ----
		doc.fontSize(26).text("Danylo Kovalchuk");
		doc.moveDown();

		doc.fontSize(14).text("Full-Stack Developer");
		doc.text("Prague, Czech Republic");
		doc.text("danilkovalchuk0@gmail.com");

		doc.moveDown();
		doc.fontSize(18).text("Experience");

		doc.moveDown();
		doc.fontSize(12).text("Senior Developer — Acme Corp (2022-Present)");
		doc.text("Building scalable web apps using SvelteKit and Node.js.");

		doc.moveDown();
		doc.text("Frontend Developer — Startup XYZ (2020-2022)");
		doc.text("Developed modern UI architecture.");

		doc.end();
	});

	const base64 = pdfBuffer.toString("base64");

	return {
		pdf: base64,
	};
}
