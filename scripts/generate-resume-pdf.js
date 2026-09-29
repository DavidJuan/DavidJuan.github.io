/*
 * Generates the downloadable resume PDFs (src/assets/David-Juan-pt.pdf and David-Juan-en.pdf)
 * from the same JSON files the website uses (src/assets/data), so the site and the PDFs never
 * drift apart.
 *
 * The layout is intentionally ATS-friendly (Gupy, LinkedIn, Workday...): a single column,
 * real selectable text, standard section headings, plain bullet lists and no tables,
 * images or icons carrying information.
 *
 * Usage: npm run resume:pdf
 * Requires a Chromium for Playwright (run "npx playwright install chromium" once if needed).
 */
const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");
const { chromium } = require("playwright");

const root = path.resolve(__dirname, "..");
const dataDir = path.join(root, "src", "assets", "data");
const fontsDir = path.join(root, "src", "assets", "fonts");

const readJson = (file) => JSON.parse(fs.readFileSync(path.join(dataDir, file), "utf8"));
const about = readJson("about.json");
const experiences = readJson("experiences.json");
const skills = readJson("skills.json");

const labels = {
  pt: {
    htmlLang: "pt-BR",
    summary: "Resumo Profissional",
    skills: "Competências Técnicas",
    experience: "Experiência Profissional",
    education: "Formação Acadêmica",
    certifications: "Certificações",
    languages: "Idiomas",
    present: "atual",
    stack: "Stack",
    months: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
    title: "Currículo",
  },
  en: {
    htmlLang: "en",
    summary: "Professional Summary",
    skills: "Technical Skills",
    experience: "Professional Experience",
    education: "Education",
    certifications: "Certifications",
    languages: "Languages",
    present: "Present",
    stack: "Stack",
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    title: "Resume",
  },
};

const pick = (entries, language) => entries.find((entry) => entry.language === language);

const escapeHtml = (text) =>
  String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Dates are stored as MM-DD-YYYY (see experience-interfaces.ts).
function formatDate(date, t) {
  if (!date) {
    return t.present;
  }
  const [month, , year] = date.split("-").map(Number);
  return `${t.months[month - 1]} ${year}`;
}

function fontFace(weight, style, folder, file) {
  const url = pathToFileURL(path.join(fontsDir, folder, file)).href;
  return `@font-face { font-family: "Montserrat"; font-weight: ${weight}; font-style: ${style}; src: url("${url}") format("woff2"); }`;
}

function render(language) {
  const t = labels[language];
  const intro = pick(about.internationalizations, language);
  const skillSet = pick(skills.internationalizations, language);
  const contact = about.contact;
  const jobs = [...experiences].sort((a, b) => b.position - a.position);

  const contactLine = [intro.location, contact.phone, contact.email]
    .filter(Boolean)
    .map(escapeHtml)
    .join(" &nbsp;|&nbsp; ");
  const linksLine = [contact.linkedin, contact.github, contact.portfolio]
    .filter(Boolean)
    .map(escapeHtml)
    .join(" &nbsp;|&nbsp; ");

  const summary = intro.description
    .split(/(?:<br\s*\/?>\s*){2}/i)
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");

  const skillLines = skillSet.categories
    .map((category) => `<li><strong>${escapeHtml(category.title)}:</strong> ${category.items.map(escapeHtml).join(", ")}</li>`)
    .join("");

  const jobBlocks = jobs
    .map((job) => {
      const content = pick(job.internationalizations, language);
      return `
      <article class="job">
        <div class="job-head">
          <h3>${escapeHtml(content.role)}</h3>
          <span class="period">${formatDate(job.startAt, t)} – ${formatDate(job.endAt, t)}</span>
        </div>
        <p class="company"><strong>${escapeHtml(job.companyName)}</strong> · ${escapeHtml(content.city)}, ${escapeHtml(content.country)}</p>
        <p class="job-summary">${escapeHtml(content.summary)}</p>
        <ul>${content.highlights.map((highlight) => `<li>${highlight}</li>`).join("")}</ul>
        <p class="stack"><strong>${t.stack}:</strong> ${(job.technologies || []).map(escapeHtml).join(", ")}</p>
      </article>`;
    })
    .join("");

  const education = skillSet.education
    .map((item) => `<li><strong>${escapeHtml(item.title)}</strong> — ${escapeHtml(item.institution)} (${escapeHtml(item.period)})</li>`)
    .join("");
  const certifications = skillSet.certifications
    .map((item) => `<li>${escapeHtml(item.title)}${item.issuer ? ` — ${escapeHtml(item.issuer)}` : ""}</li>`)
    .join("");
  const spokenLanguages = skillSet.languages
    .map((item) => `${escapeHtml(item.title)}: ${escapeHtml(item.level)}`)
    .join(" &nbsp;|&nbsp; ");

  return `<!doctype html>
<html lang="${t.htmlLang}">
<head>
<meta charset="utf-8">
<title>${escapeHtml(contact.name)} - ${t.title} - ${escapeHtml(intro.headline)}</title>
<style>
  ${fontFace(400, "normal", "regular", "Montserrat-Regular.woff2")}
  ${fontFace(400, "italic", "italic", "Montserrat-Italic.woff2")}
  ${fontFace(600, "normal", "semi-bold", "Montserrat-SemiBold.woff2")}
  ${fontFace(700, "normal", "bold", "Montserrat-Bold.woff2")}
  @page { size: A4; margin: 11mm 13mm 11mm 13mm; }
  /* Ligatures and kerning are disabled so ATS parsers extract plain letters ("fi", not "\ufb01"). */
  * { box-sizing: border-box; font-variant-ligatures: none; font-feature-settings: "liga" 0, "clig" 0, "kern" 0; font-kerning: none; }
  body { margin: 0; font-family: "Montserrat", Arial, sans-serif; font-size: 8.9pt; line-height: 1.38; color: #1b2446; text-rendering: optimizeSpeed; }
  h1 { margin: 0; font-size: 20pt; font-weight: 700; letter-spacing: 0.01em; }
  .headline { margin: 2pt 0 0; font-size: 11.5pt; font-weight: 600; color: #3563e9; }
  .tagline { margin: 2pt 0 0; font-size: 8.8pt; color: #4a5372; }
  .contact { margin: 6pt 0 0; font-size: 8.6pt; color: #4a5372; }
  h2 { margin: 9pt 0 4pt; padding-bottom: 2pt; font-size: 10.5pt; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #222f5c; border-bottom: 1.2pt solid #3563e9; }
  p { margin: 0 0 3pt; }
  ul { margin: 0 0 2pt; padding-left: 13pt; }
  li { margin-bottom: 1.4pt; }
  b, strong { font-weight: 600; }
  .job { margin-bottom: 6pt; }
  .job-head, .company { break-after: avoid-page; }
  .job-head { display: flex; justify-content: space-between; align-items: baseline; gap: 10pt; }
  .job-head h3 { margin: 0; font-size: 10.2pt; font-weight: 700; }
  .period { white-space: nowrap; font-size: 8.8pt; font-weight: 600; color: #4a5372; }
  .company { margin: 1pt 0 2pt; font-size: 9pt; color: #3563e9; }
  .company strong { color: #1b2446; }
  .job-summary { font-style: italic; color: #4a5372; }
  .stack { margin-top: 2pt; font-size: 8.6pt; color: #4a5372; }
  .skills li { margin-bottom: 1.6pt; }
</style>
</head>
<body>
  <header>
    <h1>${escapeHtml(contact.name)}</h1>
    <p class="headline">${escapeHtml(intro.headline)}</p>
    <p class="tagline">${escapeHtml(intro.tagline)}</p>
    <p class="contact">${contactLine}<br>${linksLine}</p>
  </header>

  <section>
    <h2>${t.summary}</h2>
    ${summary}
  </section>

  <section>
    <h2>${t.skills}</h2>
    <ul class="skills">${skillLines}</ul>
  </section>

  <section>
    <h2>${t.experience}</h2>
    ${jobBlocks}
  </section>

  <section>
    <h2>${t.education}</h2>
    <ul>${education}</ul>
  </section>

  <section>
    <h2>${t.certifications}</h2>
    <ul>${certifications}</ul>
  </section>

  <section>
    <h2>${t.languages}</h2>
    <p>${spokenLanguages}</p>
  </section>
</body>
</html>`;
}

(async () => {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();
    for (const language of Object.keys(labels)) {
      const htmlFile = path.join(root, "dist", `resume-${language}.html`);
      fs.mkdirSync(path.dirname(htmlFile), { recursive: true });
      fs.writeFileSync(htmlFile, render(language), "utf8");

      await page.goto(pathToFileURL(htmlFile).href, { waitUntil: "load" });
      await page.evaluate(() => document.fonts.ready);

      const output = path.join(root, "src", "assets", `David-Juan-${language}.pdf`);
      await page.pdf({ path: output, format: "A4", printBackground: true, preferCSSPageSize: true });
      console.log(`Generated ${path.relative(root, output)}`);
    }
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
