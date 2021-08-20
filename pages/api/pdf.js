import puppeteer from 'puppeteer';

export default async function handler(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/pdf', 'Content-Disposition': 'attachment;filename="MiquelCompanyRodriguez.pdf"' });
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('https://resume.solilokiam.com');
	const buffer = await page.pdf({ printBackground: true, width: '1400px', height: '2200px' });

	await browser.close();

  res.end(buffer);
}
