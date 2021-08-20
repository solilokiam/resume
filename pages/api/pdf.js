import chrome from 'chrome-aws-lambda';
import puppeteer from 'puppeteer-core';

export default async function handler(req, res) {
  const browser = await puppeteer.launch(process.env.AWS_EXECUTION_ENV ? {
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: chrome.headless
  } : {
    args: [],
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });

	const page = await browser.newPage();
	await page.goto('https://resume.solilokiam.com');
	const buffer = await page.pdf({ printBackground: true, width: '1400px', height: '2200px' });
	await browser.close();

  res.writeHead(200, { 'Content-Type': 'application/pdf', 'Content-Disposition': 'attachment;filename="MiquelCompanyRodriguez.pdf"' });
  res.end(buffer);
}
