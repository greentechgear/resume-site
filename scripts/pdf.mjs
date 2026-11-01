// Renders the built site in public/ to US Letter and A4 PDFs using the print
// stylesheet. Run after `hugo`. Uses an installed Chrome (CHROME_PATH, or the
// usual locations), so no browser download and no third-party API.
import { createServer } from "node:http";
import { readFile, access } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import puppeteer from "puppeteer-core";

const root = new URL("../public/", import.meta.url).pathname;
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".woff2": "font/woff2",
};

async function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    "/usr/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  ].filter(Boolean);
  for (const path of candidates) {
    try {
      await access(path);
      return path;
    } catch {}
  }
  throw new Error("No Chrome found. Set CHROME_PATH to a Chrome or Chromium binary.");
}

const server = createServer(async (req, res) => {
  let path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname));
  if (path.endsWith("/")) path += "index.html";
  try {
    const body = await readFile(join(root, path));
    res.writeHead(200, { "content-type": types[extname(path)] ?? "application/octet-stream" });
    res.end(body);
  } catch {
    res.writeHead(404).end();
  }
});
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const url = `http://127.0.0.1:${server.address().port}/`;

const browser = await puppeteer.launch({ executablePath: await findChrome(), args: ["--no-sandbox"] });
try {
  const page = await browser.newPage();
  await page.emulateMediaType("print");
  await page.goto(url, { waitUntil: "networkidle0" });
  await page.evaluate(() => document.fonts.ready);
  for (const [format, file] of [["Letter", "resume.letter.pdf"], ["A4", "resume.a4.pdf"]]) {
    await page.pdf({ path: join(root, file), format, printBackground: true, preferCSSPageSize: false });
    console.log(`wrote public/${file}`);
  }
} finally {
  await browser.close();
  server.close();
}
