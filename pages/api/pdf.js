import puppeteer from 'puppeteer';

export default async function handler(req, res) {
  // Launch a new browser session.
  res.writeHead(200, { 'Content-Type': 'application/pdf' });
	const browser = await puppeteer.launch();
	// Open a new Page.
	const page = await browser.newPage();

	// Go to our invoice page that we serve on `localhost:8000`.
	await page.goto('http://localhost:3000');
	// Store the PDF in a file named `invoice.pdf`.
	const buffer = await page.pdf({ printBackground: true, format: 'A4', scale: 0.5 });

	await browser.close();

  res.end(buffer);
}
