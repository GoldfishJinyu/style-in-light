import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import { basename, dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { runInNewContext } from "node:vm";

const source = new URL("../dist/", import.meta.url);
let dist = source;
if (process.env.PAGES_STAGE_DIR) {
  const sourcePath = fileURLToPath(source);
  const mediaPath = resolve(sourcePath, "media");
  const outputPath = resolve(process.env.PAGES_STAGE_DIR);
  const licenseFile = await readFile(new URL("image-licenses.js", source), "utf8");
  const licenses = runInNewContext(licenseFile + "\nimageLicenses");
  await cp(sourcePath, outputPath, {
    recursive: true,
    filter(path) {
      if (dirname(path) !== mediaPath) return true;
      const record = licenses[basename(path)];
      return Boolean(record && record.permissionStatus !== "unverified");
    }
  });
  dist = pathToFileURL(join(outputPath, ".") + "/");
}
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
