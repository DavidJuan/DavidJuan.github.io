/*
 * Assembles the GitHub Pages site in dist/site from the two locale builds:
 *
 *   dist/site/pt/     <- dist/pt/pt   (npm run build-locale:pt)
 *   dist/site/en/     <- dist/en/en   (npm run build-locale:en)
 *   dist/site/index.html and 404.html redirect to /pt/ or /en/ by browser language
 *
 * Usage: npm run build:site, then publish the contents of dist/site to the gh-pages branch.
 */
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const site = path.join(dist, "site");

const locales = { pt: path.join(dist, "pt", "pt"), en: path.join(dist, "en", "en") };

for (const [locale, folder] of Object.entries(locales)) {
  if (!fs.existsSync(path.join(folder, "index.html"))) {
    console.error(`Missing ${path.relative(root, folder)}: run "npm run build-locale:${locale}" first.`);
    process.exit(1);
  }
}

fs.rmSync(site, { recursive: true, force: true });
fs.mkdirSync(site, { recursive: true });

for (const [locale, folder] of Object.entries(locales)) {
  fs.cpSync(folder, path.join(site, locale), { recursive: true });
}

const rootIndex = path.join(__dirname, "root-index.html");
fs.copyFileSync(rootIndex, path.join(site, "index.html"));
fs.copyFileSync(rootIndex, path.join(site, "404.html"));
fs.copyFileSync(path.join(root, "src", "robots.txt"), path.join(site, "robots.txt"));
fs.copyFileSync(path.join(root, "src", "sitemap.xml"), path.join(site, "sitemap.xml"));
// Serve files as-is (no Jekyll processing on GitHub Pages).
fs.writeFileSync(path.join(site, ".nojekyll"), "");

console.log(`Site assembled in ${path.relative(root, site)}`);
