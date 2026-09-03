const path = require("node:path");
const { pathToFileURL } = require("node:url");
const puppeteer = require("puppeteer");

(async () => {
  // Render the local build, not the deployed site, so the PDF reflects
  // working-tree edits without waiting for a deploy. Run `npm run build` first
  // (the `generate-pdf` script does this for you).
  const input = path.resolve(__dirname, "../dist/index.html");
  const outputPath = path.resolve(__dirname, "../public/resume.pdf");

  const WIDTH = 1400;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({ width: WIDTH, height: 1000 });
  // Measure under print media so the height accounts for `print:` variants.
  await page.emulateMediaType("print");
  await page.goto(pathToFileURL(input).href, { waitUntil: "networkidle0" });

  // The resume is one continuous page, so the paper is sized to the content.
  // Measuring beats a hardcoded height, which silently clipped the page
  // whenever a section was added.
  const height = await page.evaluate(() =>
    Math.ceil(
      Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
      ),
    ),
  );

  await page.pdf({
    path: outputPath,
    printBackground: true,
    width: `${WIDTH}px`,
    height: `${height}px`,
  });

  console.log(`Rendered ${WIDTH}x${height}px`);

  await browser.close();

  console.log(`PDF generated at: ${outputPath}`);
})();
