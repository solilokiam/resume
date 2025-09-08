const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

(async () => {
  const url = "https://resume.solilokiam.com";
  const outputPath = path.resolve(__dirname, "../public/resume.pdf");

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: "networkidle0" });

  await page.pdf({
    path: outputPath,
    printBackground: true,
    width: "1400px",
    height: "2750px",
  });

  await browser.close();

  console.log(`PDF generated at: ${outputPath}`);
})();
