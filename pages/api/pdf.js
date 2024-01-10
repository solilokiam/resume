import chrome from "chrome-aws-lambda";
import puppeteer from "puppeteer-core";

export default async function handler(req, res) {
  const browser = await puppeteer.launch(
    process.env.AWS_EXECUTION_ENV
      ? {
          args: chrome.args,
          executablePath: await chrome.executablePath,
          headless: chrome.headless,
        }
      : {
          args: [],
          executablePath:
            "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        }
  );

  const page = await browser.newPage();
  await page.goto(
    process.env.AWS_EXECUTION_ENV
      ? "https://resume-git-pili-solilokiam.vercel.app?eagerMode=1"
      : "http://localhost:3000?eagerMode=1"
  );
  const buffer = await page.pdf({
    printBackground: true,
    width: "1400px",
    height: "2200px",
  });
  await browser.close();

  res.writeHead(200, {
    "Content-Type": "application/pdf",
    "Content-Disposition": 'attachment;filename="PilarGraciaMurillo.pdf"',
  });
  res.end(buffer);
}
