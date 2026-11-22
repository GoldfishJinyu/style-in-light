import { mkdir, readFile, writeFile } from "node:fs/promises";
import { runInNewContext } from "node:vm";

const dist = new URL("../dist/", import.meta.url);
const html = await readFile(new URL("index.html", dist), "utf8");
const catalog = await readFile(new URL("catalog.js", dist), "utf8");
const styles = runInNewContext(catalog + "\ncatalog.map(style => style.id)");
const routes = ["home", "styles", "quiz", "report", "credits", ...styles.map(id => "style-" + id)];
const base = process.env.PAGES_BASE_PATH;
// Use the configured Pages subpath so assets also load before URL normalization.
const assetPrefix = base === undefined ? "../" : base.replace(/\/$/, "") + "/";
const entry = html.replace(/(<(?:script|link)\b[^>]*?\b(?:src|href)=")(?![#\/]|\w+:)/g, "$1" + assetPrefix);

for (const route of routes) {
  const directory = new URL(route + "/", dist);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL("index.html", directory), entry);
}

console.log(`Prepared ${routes.length} GitHub Pages routes.`);
