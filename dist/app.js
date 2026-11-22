"use strict";

const copy = {
  brand: ["美学坐标", "Aesthetic Coordinates"],
  title: ["美学坐标 · 个人风格探索", "Aesthetic Coordinates · Find your style"],
  heroTop: ["找到你的", "Find your"],
  heroBottom: ["美学坐标", "aesthetic."],
  heroCaption: ["从历史服饰、日常材质和网络视觉中找灵感。", "Inspiration from dress history, everyday materials and online visual culture."],
  quiz: ["开始风格测试", "Take the style quiz"],
  resume: ["继续答题", "Continue the quiz"],
  report: ["我的报告", "My report"],
  library: ["风格图鉴", "Style library"],
  skip: ["跳到主要内容", "Skip to main content"],
  navigation: ["主导航", "Main navigation"],
  language: ["语言", "Language"],
  light: ["浅色模式", "Light mode"],
  dark: ["深色模式", "Dark mode"],
  privacy: ["答题资料只在当前页面使用。", "Quiz answers stay on this page."],
  credits: ["图片与字体来源", "Image and font credits"],
  creditIntro: ["图片是风格参考，部分封面有裁切，文件已为网页缩放或压缩。原始语境、作者和许可请见源文件页面。", "Images are visual references. Files are resized or compressed for the web and cover previews may be cropped. See source pages for the original context, creator and licence."],
  fontIntro: ["本地托管字体均采用 SIL 开放字体许可证。", "Self-hosted typefaces are distributed under the SIL Open Font License."],
  creatorUnknown: ["作者见源文件", "Creator listed at source"],
  publicDomain: ["公有领域", "Public domain"],
  noResults: ["没有符合条件的风格，试试调整筛选。", "No styles match. Try changing the filters."],
  found: ["种风格", "styles"],
  search: ["搜索风格或元素", "Search styles or elements"],
  era: ["时代", "Era"],
  region: ["地区", "Region"],
  reset: ["清除筛选", "Clear filters"],
  early: ["17–18 世纪", "17th–18th centuries"],
  nineteenth: ["19 世纪", "19th century"],
  mid: ["20 世纪中期", "Mid-20th century"],
  late: ["20 世纪后期", "Late 20th century"],
  millennium: ["千禧年前后", "Around the millennium"],
  onlineEra: ["2010 年代至今", "2010s–present"],
  today: ["当代", "Contemporary"],
  europe: ["欧洲", "Europe"],
  asia: ["东亚", "East Asia"],
  america: ["北美", "North America"],
  global: ["跨地区", "Cross-regional"],
  history: ["历史风格", "Historical styles"],
  subculture: ["亚文化", "Subcultures"],
  digital: ["数字视觉", "Digital aesthetics"],
  pop: ["流行穿搭", "Pop fashion"],
  retro: ["复古灵感", "Vintage inspiration"],
  design: ["生活与设计", "Living and design"],
  online: ["网感标签", "Online style labels"],
  begin: ["开始答题", "Start answering"],
  home: ["返回首页", "Back to home"],
  visual: ["审美偏好", "Visual preferences"],
  progress: ["问卷进度", "Quiz progress"],
  unanswered: ["请先选择一个答案。", "Choose an answer to continue."],
  backInfo: ["返回测试说明", "Back to quiz intro"],
  previous: ["上一题", "Previous"],
  next: ["下一题", "Next"],
  generate: ["生成风格报告", "See my results"],
  reportTitle: ["你的风格报告", "Your style report"],
  reportMore: ["查看风格详情", "Explore the style"],
  restart: ["重新测试", "Start a new quiz"],
  edit: ["修改答案", "Edit answers"],
  backLibrary: ["返回风格图鉴", "Back to the library"],
  backReport: ["返回我的报告", "Back to my results"],
  elements: ["风格元素", "Style elements"],
  palette: ["参考色板", "Reference palette"],
  moodboard: ["图片参考", "Visual references"],
  wardrobe: ["穿搭", "What to wear"],
  objects: ["日常物件", "Everyday objects"],
  artist: ["艺术与创作者", "Art and makers"],
  place: ["地点与氛围", "Places and atmosphere"],
  music: ["音乐推荐", "Music pairing"],
  inspiration: ["把风格带进日常", "Bring the style into everyday life"],
  ...phaseCopy
};

const get = id => document.getElementById(id);
const siteRoot = new URL(".", document.currentScript.src);
const pathRouting = location.protocol === "https:" || location.protocol === "http:";
const pages = new Set(["home", "styles", "quiz", "report", "credits", ...catalog.map(style => "style-" + style.id)]);

function pageHref(page) {
  return pathRouting ? new URL(page, siteRoot).pathname : "#" + page;
}

function pageFromPath(path) {
  if (!path.startsWith(siteRoot.pathname)) return null;
  const page = path.slice(siteRoot.pathname.length).replace(/(?:^|\/)index\.html$/, "").replace(/\/$/, "");
  return pages.has(page) ? page : page === "" ? "home" : null;
}

function navigate(page) {
  const href = pageHref(page);
  if (!pathRouting && location.hash !== href) {
    location.hash = href;
    return;
  }
  if (pathRouting && href !== location.pathname + location.search + location.hash) history.pushState(null, "", href);
  route();
}

const saved = {
  get(key) {
    try { return localStorage.getItem("aesthetic-" + key); } catch { return null; }
  },
  set(key, value) {
    try { localStorage.setItem("aesthetic-" + key, value); } catch { /* file and private browsing */ }
  }
};
let locale = ["zh-Hans", "zh-Hant", "en"].includes(saved.get("locale")) ? saved.get("locale") : "zh-Hans";
let theme = saved.get("theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
const filters = {
  era: "early nineteenth mid late millennium online today".split(" "),
  region: "europe asia america global".split(" "),
  collection: "history retro subculture pop design digital online".split(" "),
  visual: Object.keys(facetTags.visual),
  material: Object.keys(facetTags.material),
  shape: Object.keys(facetTags.shape),
  decoration: Object.keys(facetTags.decoration),
  mood: Object.keys(facetTags.mood),
  domain: Object.keys(facetTags.domain)
};
const filterState = Object.fromEntries(["search", ...Object.keys(filters)].map(key => [key, ""]));
const filterLabels = { visual: "visuals", material: "materials", shape: "shapes", decoration: "trims", mood: "moods", domain: "domains" };
const outfitDisplays = { any: "showAny", feminine: "showFeminine", neutral: "showNeutral" };
const fonts = { "DM Sans": "dm-sans", "DM Serif Display": "dm-serif-display", "Noto Serif SC": "noto-serif-sc", "Noto Serif TC": "noto-serif-tc" };
const photos = Object.fromEntries(Object.values(styleImages).flat().map(image => [image.file, image]));
let outfitDisplay = "any";
let feedback = { avoid: "", mood: false, daily: false };
let step = 0;
let answers = [];

function translate(pair) {
  if (locale === "en") return pair[1];
  return locale === "zh-Hant" ? toTraditional(pair[0]) : pair[0];
}

function t(key) {
  return copy[key] ? translate(copy[key]) : key;
}

function tagText(tag) {
  return translate(tagLabels[tag]);
}

function styleText(style) {
  if (locale === "en") return style.en;
  if (locale === "zh-Hans") return style.zh;
  return Object.fromEntries(Object.entries(style.zh).map(([key, value]) =>
    [key, key === "music" ? value : toTraditional(value)]
  ));
}

function eraLabel(era) {
  return t(era === "online" ? "onlineEra" : era);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function finished() {
  return answers.length === questions.length && answers.every(Number.isInteger);
}

function picture(image, extra = "") {
  if (!imageLicenses[image?.file]) return `<span class="image-placeholder">${t("imagePending")}</span>`;
  const alt = imageAlts[image.file] ? translate(imageAlts[image.file]) : image.title;
  return `<img ${extra} src="${new URL("media/" + image.file, siteRoot).href}" alt="${escapeHtml(alt)}" decoding="async">`;
}

function imageCredit(image) {
  const record = imageLicenses[image?.file];
  if (!record) return t("imagePending");
  const license = record.license === "Public domain" ? t("publicDomain") : record.license;
  const maker = record.author || t("creatorUnknown");
  return `<a href="${escapeHtml(record.source)}" target="_blank" rel="noopener noreferrer">${escapeHtml(maker)}</a> · ${
    record.licenseUrl ? `<a href="${escapeHtml(record.licenseUrl)}" target="_blank" rel="noopener noreferrer">${license}</a>` : license
  }`;
}

function licenseDetails(image) {
  const record = imageLicenses[image.file];
  return record ? `<span><a href="${escapeHtml(record.original)}" target="_blank" rel="noopener noreferrer">${t("originalImage")}</a> · ${t("checked")} <time datetime="${record.checked}">${record.checked}</time><br>${t(record.attribution)}</span>` : "";
}

function imageDetails(image) {
  const name = image.title.replace(/\.(jpe?g|png|webp)$/i, "");
  return `<figure>${picture(image, 'loading="lazy"')}<figcaption><span>${escapeHtml(name)}</span><span>${imageCredit(image)}</span>${licenseDetails(image)}</figcaption></figure>`;
}

function palette(colors) {
  return `<div class="swatches" role="img" aria-label="${t("palette")} ${colors.join(", ")}">${colors.map(color =>
    `<span style="--swatch:${color}" title="${color}"></span>`
  ).join("")}</div>`;
}

function renderFilters() {
  const root = get("filters");
  const select = key => {
    const label = key === "era" ? eraLabel : filterLabels[key] ? tagText : t;
    return `<label>${t(filterLabels[key] || key)}<select name="${key}"><option value="">${t("allFilters")}</option>
      ${filters[key].map(value => `<option value="${value}">${label(value)}</option>`).join("")}</select></label>`;
  };
  root.innerHTML = `
    <div class="filter-row">
    <label class="search-filter">${t("search")}<input type="search" name="search" placeholder="${t("searchHint")}"></label>
    ${["collection", "visual", "mood"].map(select).join("")}
    <button class="button outline small" type="button" id="reset-filters">${t("reset")}</button>
    </div>
    <details class="extra-filters" ${["era", "region", "material", "shape", "decoration", "domain"].some(key => filterState[key]) ? "open" : ""}>
      <summary>${t("facetOptions")}</summary>
      <div class="filter-row">${["era", "region", "material", "shape", "decoration", "domain"].map(select).join("")}</div>
    </details>`;
  for (const [key, value] of Object.entries(filterState)) root.elements.namedItem(key).value = value;
  get("reset-filters").addEventListener("click", () => {
    for (const key of Object.keys(filterState)) filterState[key] = "";
    root.reset();
    renderLibrary();
  });
}

function renderLibrary() {
  const term = filterState.search.trim().toLocaleLowerCase();
  const visible = catalog.filter(style => {
    const guide = guides[style.id];
    const buckets = { era: guide.era, region: guide.region, collection: [style.collection], domain: guide.domains };
    if (Object.keys(filters).some(key => filterState[key] && !(buckets[key] || guide.tags).includes(filterState[key]))) return false;
    if (!term) return true;
    const tags = [...guide.tags, ...guide.domains].map(tag => tagLabels[tag]);
    const fields = [[style.zh.name, style.en.name], [style.zh.elements, style.en.elements], ...tags];
    return fields.flatMap(([zh, en]) => [zh, en, toTraditional(zh)]).some(field => field.toLocaleLowerCase().includes(term));
  });
  get("count").textContent = visible.length ? `${visible.length} ${t("found")}` : t("noResults");
  get("style-grid").innerHTML = visible.map(style => {
    const text = styleText(style);
    return `<a class="style-card" href="${pageHref("style-" + style.id)}">
      <div class="card-image">${picture(styleImages[style.id]?.[0], 'loading="lazy"')}</div>
      <div class="card-copy"><span class="card-category">${t(style.collection)} · ${eraLabel(style.era)}</span><h3>${text.name}</h3><p>${text.elements.split(locale === "en" ? ", " : "、").slice(0, 3).join(" · ")}</p></div>
    </a>`;
  }).join("");
}

function renderTheme() {
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#24231f" : "#f4f0e8";
  const label = t(theme === "light" ? "dark" : "light");
  get("theme").textContent = theme === "light" ? "☾" : "☀";
  get("theme").setAttribute("aria-label", label);
  get("theme").title = label;
}

function renderChrome() {
  document.documentElement.lang = locale;
  document.title = t("title");
  document.querySelector('meta[name="description"]').content = t("subtitle");
  renderTheme();
  document.querySelector("nav").setAttribute("aria-label", t("navigation"));
  get("brand").textContent = t("brand");
  get("brand").href = pageHref("home");
  get("skip").textContent = t("skip");
  get("locale-label").textContent = t("language");
  get("locale").value = locale;
  get("nav-library").textContent = t("library");
  get("nav-library").href = pageHref("styles");
  const image = styleImages.hero?.[0];
  get("hero").innerHTML = `
    <div class="hero-copy">
      <h1>${t("heroTop")}<br><em>${t("heroBottom")}</em></h1>
      <p class="lede">${t("heroText")}</p>
      <div class="hero-actions"><a class="button" id="hero-quiz" href="${pageHref("quiz")}">${t("quiz")}</a><a class="text-link" href="${pageHref("styles")}">${t("library")}</a></div>
    </div>
    <figure class="hero-art">
      ${picture(image, 'fetchpriority="high"')}
      <figcaption><span>${t("heroCaption")}</span>${image ? `<span>${imageCredit(image)}</span>` : ""}</figcaption>
    </figure>`;
  get("library-head").innerHTML = `<h2 id="library-title" tabindex="-1">${t("library")}</h2><p>${t("libraryText")}</p>`;
  get("footer").innerHTML = `<a class="brand" href="${pageHref("home")}">${t("brand")}</a><p>${t("privacy")}</p><a class="text-link" href="${pageHref("credits")}">${t("credits")}</a>`;
  renderFilters();
  renderLibrary();
  updateQuizLinks();
}

function updateQuizLinks() {
  const complete = finished();
  for (const id of ["nav-quiz", "hero-quiz"]) {
    get(id).textContent = t(complete ? "report" : step ? "resume" : "quiz");
    get(id).href = pageHref(complete ? "report" : "quiz");
  }
}

function options(values, selected) {
  return Object.entries(values).map(([value, label]) =>
    `<option value="${value}" ${value === selected ? "selected" : ""}>${t(label)}</option>`
  ).join("");
}

function renderQuiz(focus = true) {
  const root = get("quiz-content");
  if (step === 0) {
    root.innerHTML = `
      <h1 tabindex="-1">${t("startTitle")}</h1><p class="subtle">${t("startText")}</p>
      <form id="profile-form">
        <label class="outfit-field">${t("showWear")}<select name="outfit" aria-describedby="outfit-note">${options(outfitDisplays, outfitDisplay)}</select></label>
        <p class="profile-note" id="outfit-note">${t("aboutProfile")}</p>
        <div class="flow-actions"><a class="text-link" href="${pageHref("home")}">${t("home")}</a><button class="button" type="submit">${t("begin")}</button></div>
      </form>`;
    const form = get("profile-form");
    form.addEventListener("change", () => { outfitDisplay = form.elements.outfit.value; });
    form.addEventListener("submit", event => {
      event.preventDefault();
      if (answers.length !== questions.length) answers = Array(questions.length).fill(null);
      step = 1;
      renderQuiz();
    });
  } else {
    const index = step - 1;
    const question = questions[index];
    const title = translate(question.title);
    root.innerHTML = `
      <div class="question-top"><span>${t(["scene", "focus", "visibility"].includes(question.id) ? "context" : "visual")}</span><span>${step} / ${questions.length}</span></div>
      <progress aria-label="${t("progress")}" value="${step}" max="${questions.length}"></progress>
      <h1 tabindex="-1">${title}</h1>
      ${question.hint ? `<p class="subtle">${translate(question.hint)}</p>` : ""}
      <form id="question-form">
        <fieldset class="question-options ${question.id === "image" ? "picture-options" : ""}"><legend class="sr-only">${title}</legend>
          ${question.choices.map((choice, value) => {
            const visual = question.id === "image" ? `<span class="texture-photo">${picture(photos[choice[3]])}</span>` : choice[4] ? palette(choice[4]) : "";
            return `<label class="option">${question.id === "image" ? visual : ""}<span class="option-label">
              <input type="radio" name="answer" value="${value}" ${answers[index] === value ? "checked" : ""}>
              <span>${translate(choice)}${question.id !== "image" ? visual : ""}</span><span class="selection-mark" aria-hidden="true">✓</span>
            </span></label>`;
          }).join("")}
        </fieldset>
        ${question.id === "image" ? `<a class="text-link texture-credits" href="${pageHref("credits")}" target="_blank" rel="noopener">${t("credits")}</a>` : ""}
        <p class="validation" id="answer-error" role="alert" hidden>${t("unanswered")}</p>
        <div class="flow-actions"><button id="previous" class="button outline" type="button">${t(step === 1 ? "backInfo" : "previous")}</button>
          <button class="button" type="submit">${t(step === questions.length ? "generate" : "next")}</button></div>
      </form>`;
    const form = get("question-form");
    form.addEventListener("change", event => {
      answers[index] = Number(event.target.value);
      get("answer-error").hidden = true;
    });
    form.addEventListener("submit", event => {
      event.preventDefault();
      if (!Number.isInteger(answers[index])) {
        get("answer-error").hidden = false;
        form.querySelector("input").focus();
      } else if (step === questions.length) {
        navigate("report");
      } else {
        step++;
        renderQuiz();
      }
    });
    get("previous").addEventListener("click", () => {
      step--;
      renderQuiz();
    });
  }
  if (focus) root.querySelector("h1").focus();
}

function spaceIdea(style) {
  return t("spaceMid") + " " + styleText(style).objects;
}

function outfitIdea(style, useDisplay) {
  if (useDisplay && outfitDisplay !== "any") {
    const base = t(outfitDisplay === "feminine" ? "feminineTip" : "neutralTip");
    const cue = guides[style.id].tags.find(tag => Object.hasOwn(facetTags.decoration, tag) && tag !== feedback.avoid);
    return cue ? `${base} ${t("chosenCue")} ${tagText(cue)}.` : base;
  }
  return styleText(style).outfit;
}

function inspiration(style, first = "wardrobe", useDisplay = false) {
  const text = styleText(style);
  const feature = featuredGuides[style.id];
  const cards = {
    wardrobe: outfitIdea(style, useDisplay),
    space: spaceIdea(style),
    objects: text.objects,
    artist: text.art,
    place: text.place,
    music: text.music
  };
  cards.film = translate(feature?.film || filmReferences[style.id]);
  return `<div class="details-grid">${[first, ...Object.keys(cards).filter(key => key !== first)].map(key => {
    const label = ["artist", "place", "music", "film"].includes(key) ? ` <span class="mood-label">${t("atmosphere")}</span>` : "";
    return `<article><h3>${t(key)}${label}</h3><p>${cards[key]}</p></article>`;
  }).join("")}</div>`;
}

function detailTags(style) {
  const guide = guides[style.id];
  const groups = {
    collection: t(style.collection), era: guide.era.map(eraLabel).join(" · "), region: guide.region.map(t).join(" · ")
  };
  for (const group of ["visual", "material", "shape", "decoration", "mood"]) {
    groups[filterLabels[group]] = guide.tags.filter(tag => Object.hasOwn(facetTags[group], tag)).map(tagText).join(" · ");
  }
  groups.domains = guide.domains.map(tagText).join(" · ");
  return `<dl class="style-facts">${Object.entries(groups).filter(([, value]) => value).map(([label, value]) =>
    `<div><dt>${t(label)}</dt><dd>${value}</dd></div>`
  ).join("")}</dl>`;
}

function relatedStyle(style, feature) {
  const tags = guides[style.id].tags;
  const candidates = catalog.filter(item => item.id !== style.id).map(item => ({
    item, common: guides[item.id].tags.filter(tag => tags.includes(tag))
  }));
  const related = feature
    ? candidates.find(({ item }) => item.id === feature.neighbor)
    : candidates.sort((a, b) => b.common.length - a.common.length)[0];
  const distinctive = guides[related.item.id].tags.filter(tag => !tags.includes(tag)).slice(0, 3);
  const details = feature ? translate(feature.difference) : distinctive.map(tagText).join(" · ");
  return `<article class="comparison">
    <a href="${pageHref("style-" + related.item.id)}">${styleText(related.item).name}</a>
    ${related.common.length ? `<p><strong>${t("similar")}</strong> ${related.common.slice(0, 3).map(tagText).join(" · ")}</p>` : ""}
    ${details ? `<p><strong>${t("difference")}</strong> ${details}</p>` : ""}
  </article>`;
}

function renderDetail(style) {
  const text = styleText(style);
  const images = styleImages[style.id] || [];
  const theme = detailThemes[style.id];
  const active = document.documentElement.style;
  active.setProperty("--guide-light", theme.light);
  active.setProperty("--guide-dark", theme.dark);
  active.setProperty("--guide-paper", theme.paper);
  const feature = featuredGuides[style.id];
  const definition = feature?.background || workingDefinitions[style.id];
  const definitionText = definition ? translate(definition) : text.description;
  const source = feature?.source;
  const sourceText = feature?.sourceNote ? translate(feature.sourceNote) : t("sourceEntry");
  get("detail-content").innerHTML = `
    <article class="detail-theme" data-style="${style.id}" data-layout="${theme.layout}" data-emblem="${theme.emblem}">
    <div class="back-links"><a class="text-link" href="${pageHref("styles")}">${t("backLibrary")}</a>${finished() ? `<a class="text-link" href="${pageHref("report")}">${t("backReport")}</a>` : ""}</div>
    <section class="detail-opening" aria-labelledby="detail-title">
      <div class="emblem-stage" aria-hidden="true"><i></i><i></i><i></i></div>
      <header class="detail-heading">
        <p class="overline">${t(style.collection)} · ${eraLabel(style.era)} · ${t(style.region)}</p>
        <h1 id="detail-title" tabindex="-1">${text.name}</h1><p class="lede">${text.description}</p>
      </header>
      <figure class="detail-cover">
        <div class="cover-frame">${picture(images[0], 'fetchpriority="high"')}</div>
        ${images[0] ? `<figcaption><span>${imageCredit(images[0])}</span></figcaption>` : ""}
      </figure>
      <div class="detail-palette"><p>${t("palette")}</p>${palette(style.palette)}</div>
    </section>
    <div class="guide-chapters">
    <section class="details-section guide-overview chapter"><h2>${t("about")}</h2><p>${definitionText}</p>${detailTags(style)}</section>
    <section class="details-section guide-elements chapter"><h2>${t("elements")}</h2>
      <ul class="elements">${text.elements.split(locale === "en" ? ", " : "、").map(element => `<li>${element}</li>`).join("")}</ul>
    </section>
    <section class="details-section guide-neighbor chapter"><h2>${t("neighbor")}</h2>${relatedStyle(style, feature)}</section>
    <section class="details-section starter chapter"><h2>${t("lowTry")}</h2><p>${feature ? translate(feature.starter) : text.outfit + " " + t("wearSmall")}</p></section>
    <section class="details-section guide-inspiration chapter"><h2>${t("inspiration")}</h2>${inspiration(style)}</section>
    ${images.length ? `<section class="details-section guide-photos chapter"><h2>${t("moodboard")}</h2><div class="moodboard">${images.map(imageDetails).join("")}</div></section>` : ""}
    <section class="details-section guide-sources chapter"><h2>${t("source")}</h2><p class="subtle">${t("editorial")}</p>
      ${source ? `<p><a href="${source}" target="_blank" rel="noopener noreferrer">${sourceText}</a></p>` : ""}
      <ul class="source-links">${images.filter(image => imageLicenses[image.file]).map(image =>
        `<li><a href="${escapeHtml(imageLicenses[image.file].source)}" target="_blank" rel="noopener noreferrer">${escapeHtml(image.title)}</a></li>`
      ).join("")}</ul>
    </section></div></article>`;
}

function trialIdeas(style, first, cue) {
  const groups = {
    wardrobe: ["wearSmall", "wearMid", "wearFull"],
    space: ["spaceSmall", "spaceMid", "spaceFull"],
    objects: ["objectSmall", "objectMid", "objectFull"]
  };
  const labels = first === "wardrobe" ? ["startSmall", "addLayer", "fullLook"] : ["scaleSmall", "addLayer", "scaleFull"];
  return `<div class="trial-grid">${groups[first].map((item, index) => {
    const specific = first === "wardrobe" && index === 2 && outfitDisplay !== "any" ? " " + outfitIdea(style, true) : "";
    return `<article><h3>${t(labels[index])}</h3><p>${t(item)}${specific}</p>
      ${index === 0 && cue ? `<p class="trial-cue">${t("chosenCue")} ${tagText(cue)}</p>` : ""}</article>`;
  }).join("")}</div>`;
}

function renderReport(updated = false) {
  const rank = rankStyles(answers, feedback);
  const preferences = selectedAnswers(answers);
  const displayOrder = preferences.find(({ question }) => question.id === "focus").choice[3];
  const first = feedback.mood && displayOrder === "wardrobe" ? "space" : displayOrder;
  const avoided = new Set([...preferences.find(({ question }) => question.id === "avoid").choice[2], feedback.avoid]);
  const summaryChoices = preferences.filter(({ question, choice }) =>
    ["color", "material", "shape"].includes(question.id) && !choice[2].some(tag => avoided.has(tag))
  ).map(({ choice }) => translate(choice));
  const visualSummary = (summaryChoices.length ? summaryChoices : rank[0].reasons.map(tagText))
    .join(locale === "en" ? ", " : "、");
  const collective = sharedTags(rank).filter(({ tag }) => !avoided.has(tag));
  const preferred = rank[0];
  const safeCue = preferred.reasons.find(tag => !Object.hasOwn(facetTags.context, tag));
  const available = [...new Set([feedback.avoid, ...rank.flatMap(({ style }) => guides[style.id].tags)
    .filter(tag => ["visual", "material", "shape", "decoration"].some(group => Object.hasOwn(facetTags[group], tag)))].filter(Boolean))];
  const markers = ["first", "second", "third"];
  get("report-content").innerHTML = `
    <header class="report-head"><h1 tabindex="-1">${t("reportTitle")}</h1>
      ${visualSummary ? `<p class="report-summary">${t("summaryLead")} ${visualSummary}${locale === "en" ? "." : "。"}</p>` : ""}
      <p class="lede">${t("reportText")}</p></header>
    <div class="report-grid">${rank.map(({ style, reasons }, index) => {
      const text = styleText(style);
      return `<article class="recommendation">
        <div class="card-image">${picture(styleImages[style.id]?.[0], 'loading="lazy"')}</div>
        <div class="recommendation-copy"><p class="overline">${t(markers[index])}</p><h2>${text.name}</h2><p>${text.description}</p>
          ${palette(style.palette)}
          <p class="reason">${reasons.length ? `<strong>${t("reportWhy")}</strong><br>${reasons.map(tagText).join(" · ")}` : t("noDirectMatch")}</p>
          <a class="text-link" href="${pageHref("style-" + style.id)}">${t("reportMore")}</a></div></article>`;
    }).join("")}</div>
    <section class="details-section"><h2>${t("shared")}</h2>
      ${collective.length ? `<ul class="elements shared-tags">${collective.map(({tag,count}) =>
        `<li>${tagText(tag)} <small>${t(count === 3 ? "commonThree" : "commonTwo")}</small></li>`
      ).join("")}</ul>` : `<p>${t("noCommon")}</p>`}
    </section>
    <section class="details-section feedback-panel"><h2>${t("refine")}</h2><p>${t("refineHelp")}</p>
      <form id="feedback-form">
        <label class="outfit-field">${t("dislike")}<select name="avoid"><option value="">${t("nothing")}</option>
          ${available.map(tag => `<option value="${tag}" ${feedback.avoid === tag ? "selected" : ""}>${tagText(tag)}</option>`).join("")}
        </select></label>
        <label class="feedback-check"><input name="mood" type="checkbox" ${feedback.mood ? "checked" : ""}> ${t("moodOnly")}</label>
        <label class="feedback-check"><input name="daily" type="checkbox" ${feedback.daily ? "checked" : ""}> ${t("moreDaily")}</label>
        <button class="button outline" type="submit" id="apply-feedback">${t("apply")}</button>
        <p class="feedback-status" id="feedback-status" role="status"></p>
      </form>
    </section>
    <section class="details-section"><h2>${t("lowTry")} · ${t(first)}</h2>
      ${feedback.mood ? `<p class="trial-note">${t("moodSpace")}</p>` : ""}
      ${feedback.daily ? `<p class="trial-note">${t("keepDaily")}</p>` : ""}
      ${trialIdeas(preferred.style, first, safeCue)}
    </section>
    <section class="details-section"><h2>${t("inspiration")} · ${styleText(preferred.style).name}</h2>${inspiration(preferred.style, first, true)}</section>
    <div class="flow-actions report-actions"><button class="button outline" id="edit" type="button">${t("edit")}</button><button class="button outline" id="restart" type="button">${t("restart")}</button><a class="text-link" href="${pageHref("styles")}">${t("library")}</a></div>`;
  get("feedback-form").addEventListener("submit", event => {
    event.preventDefault();
    const fields = event.currentTarget.elements;
    feedback = { avoid: fields.avoid.value, mood: fields.mood.checked, daily: fields.daily.checked };
    renderReport(true);
  });
  if (updated) {
    get("apply-feedback").focus();
    requestAnimationFrame(() => {
      const status = get("feedback-status");
      if (status) status.textContent = t("reranked");
    });
  }
  get("edit").addEventListener("click", () => {
    step = 1;
    navigate("quiz");
  });
  get("restart").addEventListener("click", () => {
    step = 0;
    answers = [];
    feedback = { avoid: "", mood: false, daily: false };
    navigate("quiz");
  });
}

function renderCredits() {
  const groups = [["hero", t("brand")], ...catalog.map(style => [style.id, styleText(style).name])];
  get("credits-content").innerHTML = `
    <a class="text-link back-links" href="${pageHref("home")}">${t("home")}</a>
    <h1 tabindex="-1">${t("credits")}</h1><p class="lede">${t("creditIntro")}</p>
    <p class="lede">${t("fontIntro")}</p>
    <ul class="elements">${Object.entries(fonts).map(([name, file]) => `<li><a href="${new URL("fonts/" + file + "-OFL.txt", siteRoot).href}">${name}</a></li>`).join("")}</ul>
    <div class="credit-list">${groups.filter(([id]) => styleImages[id]?.length).map(([id, name]) =>
      `<section><h2>${name}</h2><ul>${styleImages[id].map(img =>
        `<li>${escapeHtml(img.title)} · ${imageCredit(img)}<br>${licenseDetails(img)}</li>`
      ).join("")}</ul></section>`
    ).join("")}</div>`;
}

function route({ focus = true, scroll = true } = {}) {
  const hash = location.hash.slice(1);
  if (hash === "main" && !pathRouting) return;
  const legacyPage = pages.has(hash) ? hash : null;
  const selected = legacyPage || (pathRouting ? pageFromPath(location.pathname) : null) || "home";
  if (pathRouting && (legacyPage || !hash) && pageHref(selected) !== location.pathname + location.hash) {
    history.replaceState(null, "", pageHref(selected) + location.search);
  }
  const style = selected.startsWith("style-") && catalog.find(item => item.id === selected.slice(6));
  let page = "home";
  if (style) page = "detail";
  else if (selected === "report") page = finished() ? "report" : "quiz";
  else if (selected === "quiz") page = "quiz";
  else if (selected === "credits") page = "credits";
  for (const name of ["home", "detail", "report", "quiz", "credits"]) get(name + "-view").hidden = name !== page;
  updateQuizLinks();
  if (page === "detail") renderDetail(style);
  if (page === "quiz") renderQuiz(false);
  if (page === "report") renderReport();
  if (page === "credits") renderCredits();
  if (hash === "main") return;
  if (selected === "styles") {
    if (focus) get("library-title").focus({ preventScroll: true });
    if (scroll) get("styles").scrollIntoView();
  } else {
    if (focus && page !== "home") get(page + "-view").querySelector("h1").focus({ preventScroll: true });
    if (scroll) window.scrollTo(0, 0);
  }
}

get("filters").addEventListener("submit", event => event.preventDefault());
get("filters").addEventListener("input", event => {
  if (!Object.hasOwn(filterState, event.target.name)) return;
  filterState[event.target.name] = event.target.value;
  renderLibrary();
});
get("locale").addEventListener("change", event => {
  locale = event.target.value;
  saved.set("locale", locale);
  renderChrome();
  route({ focus: false, scroll: false });
});
get("theme").addEventListener("click", () => {
  theme = theme === "dark" ? "light" : "dark";
  saved.set("theme", theme);
  renderTheme();
});
document.addEventListener("click", event => {
  if (!pathRouting || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const link = event.target.closest("a[href]");
  if (!link || link.target || link.hasAttribute("download")) return;
  const url = new URL(link.href);
  if (url.origin !== siteRoot.origin || url.search || url.hash) return;
  const page = pageFromPath(url.pathname);
  if (!page) return;
  event.preventDefault();
  navigate(page);
});
window.addEventListener("popstate", () => route());
window.addEventListener("hashchange", () => route());
renderChrome();
route();
