"use strict";

const copy = {
  brand: ["美学坐标", "Aesthetic Coordinates"],
  title: ["美学坐标 · 个人风格探索", "Aesthetic Coordinates · Find your style"],
  subtitle: ["从穿搭、物件、艺术和音乐里，发现自己的风格。", "Find your style through clothing, objects, art and music."],
  heroTop: ["找到你的", "Find your"],
  heroBottom: ["美学坐标", "aesthetic."],
  heroText: ["从性格和视觉偏好出发，看看哪些风格与你契合，再把灵感带进衣柜、房间和周末。", "Start with how you move through the world and what catches your eye. Then bring the styles that fit into your wardrobe, your room and your weekends."],
  heroCaption: ["从历史服饰、日常材质和网络视觉中找灵感。", "Inspiration from dress history, everyday materials and online visual culture."],
  quiz: ["开始风格测试", "Take the style quiz"],
  resume: ["继续答题", "Continue the quiz"],
  report: ["我的报告", "My report"],
  library: ["风格图鉴", "Style library"],
  libraryText: ["按时代、地区和风格类别探索。标签标的是主要灵感语境。", "Browse by era, region or collection. Labels describe each style’s main reference points."],
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
  searchHint: ["如 蝴蝶结、金属、哥特", "Try bows, metal or Gothic"],
  era: ["时代", "Era"],
  region: ["地区", "Region"],
  collection: ["类别", "Collection"],
  allEra: ["所有时代", "All eras"],
  allRegion: ["所有地区", "All regions"],
  allCollection: ["所有类别", "All collections"],
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
  startTitle: ["选择测试长度", "Choose your quiz length"],
  startText: ["两种测试都会给出前三种风格。长测会多问一些材质、文化和细节偏好。", "Both quizzes give you three recommendations. The long quiz asks more about materials, cultural reference points and details."],
  quick: ["短测", "Quick quiz"],
  long: ["长测", "In-depth quiz"],
  quickDetail: ["8 题 · 约 2 分钟", "8 questions · about 2 minutes"],
  longDetail: ["16 题 · 约 5 分钟", "16 questions · about 5 minutes"],
  aboutProfile: ["昵称用于称呼。年龄与性别可选，仅显示在当次报告中。", "Your name personalizes your report. Age and gender are optional and only appear in your current report."],
  nickname: ["昵称（可选）", "Name (optional)"],
  nicknameHint: ["想让报告怎么称呼你？", "What should we call you?"],
  age: ["年龄段（可选）", "Age group (optional)"],
  gender: ["性别（可选）", "Gender (optional)"],
  skipField: ["暂不填写", "Prefer not to say"],
  under18: ["18 岁以下", "Under 18"],
  over45: ["45 岁及以上", "45 or older"],
  woman: ["女性", "Woman"],
  man: ["男性", "Man"],
  nonbinary: ["非二元", "Non-binary"],
  other: ["其他", "Other"],
  begin: ["开始答题", "Start answering"],
  home: ["返回首页", "Back to home"],
  personality: ["性格与表达", "Personality and expression"],
  visual: ["审美偏好", "Visual preferences"],
  progress: ["问卷进度", "Quiz progress"],
  unanswered: ["请先选择一个答案。", "Choose an answer to continue."],
  backInfo: ["返回基本信息", "Back to profile"],
  previous: ["上一题", "Previous"],
  next: ["下一题", "Next"],
  generate: ["生成风格报告", "See my results"],
  reportName: ["的风格报告", "’s style report"],
  reportTitle: ["你的风格报告", "Your style report"],
  reportText: ["这三种风格最贴近你选出的颜色、材质、时代和表达方式。", "These three styles are the closest to your choices around color, texture, era and self-expression."],
  reportWhy: ["你的选择中与这类风格相关的线索", "Cues from your answers that fit this style"],
  reportMore: ["查看风格详情", "Explore the style"],
  first: ["最贴近", "Closest match"],
  second: ["第二推荐", "Second match"],
  third: ["第三推荐", "Third match"],
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
  inspiration: ["把风格带进日常", "Bring the style into everyday life"]
};

const get = id => document.getElementById(id);
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
const filterState = { search: "", era: "", region: "", collection: "" };
const filters = {
  era: "early nineteenth mid late millennium online today".split(" "),
  region: "europe asia america global".split(" "),
  collection: "history retro subculture pop design digital online".split(" ")
};
const profile = { name: "", age: "", gender: "", mode: "quick" };
const ages = { "": "skipField", under18: "under18", "18–24": "18–24", "25–34": "25–34", "35–44": "35–44", over45: "over45" };
const genders = { "": "skipField", woman: "woman", man: "man", nonbinary: "nonbinary", other: "other" };
const fonts = { "DM Sans": "dm-sans", "DM Serif Display": "dm-serif-display", "Noto Serif SC": "noto-serif-sc", "Noto Serif TC": "noto-serif-tc" };
let step = 0;
let answers = [];

function translate(pair) {
  if (locale === "en") return pair[1];
  return locale === "zh-Hant" ? toTraditional(pair[0]) : pair[0];
}

function t(key) {
  return copy[key] ? translate(copy[key]) : key;
}

function styleText(style) {
  if (locale === "en") return style.en;
  if (locale === "zh-Hans") return style.zh;
  return Object.fromEntries(Object.entries(style.zh).map(([key, value]) =>
    [key, key === "music" ? value : toTraditional(value)]
  ));
}

function questionText(question) {
  if (locale === "en") return question.en;
  return locale === "zh-Hant" ? question.zh.map(toTraditional) : question.zh;
}

function eraLabel(era) {
  return t(era === "online" ? "onlineEra" : era);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function quizLength() {
  return profile.mode === "long" ? questions.length : shortLength;
}

function finished() {
  return answers.length === quizLength() && answers.every(Number.isInteger);
}

function picture(image, alt, extra = "") {
  if (!image) return "";
  return `<img ${extra} src="media/${image.file}" alt="${escapeHtml(alt)}" decoding="async">`;
}

function imageCredit(image) {
  const license = image.license === "Public domain" ? t("publicDomain") : image.license;
  const maker = image.author || t("creatorUnknown");
  return `<a href="${escapeHtml(image.source)}" target="_blank" rel="noopener noreferrer">${escapeHtml(maker)}</a> · ${
    image.licenseUrl ? `<a href="${escapeHtml(image.licenseUrl)}" target="_blank" rel="noopener noreferrer">${license}</a>` : license
  }`;
}

function imageDetails(image) {
  const name = image.title.replace(/\.(jpe?g|png|webp)$/i, "");
  return `<figure>${picture(image, name, 'loading="lazy"')}<figcaption><span>${escapeHtml(name)}</span><span>${imageCredit(image)}</span></figcaption></figure>`;
}

function palette(style) {
  return `<div class="swatches" role="img" aria-label="${t("palette")}: ${style.palette.join(", ")}">${style.palette.map(color =>
    `<span style="--swatch:${color}" title="${color}"></span>`
  ).join("")}</div>`;
}

function renderFilters() {
  const root = get("filters");
  root.innerHTML = `
    <label class="search-filter">${t("search")}<input type="search" name="search" placeholder="${t("searchHint")}"></label>
    ${Object.entries(filters).map(([key, values]) => {
      const label = key === "era" ? eraLabel : t;
      const all = "all" + key[0].toUpperCase() + key.slice(1);
      return `<label>${t(key)}<select name="${key}"><option value="">${t(all)}</option>
        ${values.map(value => `<option value="${value}">${label(value)}</option>`).join("")}</select></label>`;
    }).join("")}
    <button class="button outline small" type="button" id="reset-filters">${t("reset")}</button>`;
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
    if (Object.keys(filters).some(key => filterState[key] && filterState[key] !== style[key])) return false;
    if (!term) return true;
    const fields = [style.zh.name, style.zh.elements, style.en.name, style.en.elements];
    return fields.concat(fields.slice(0, 2).map(toTraditional)).some(field => field.toLocaleLowerCase().includes(term));
  });
  get("count").textContent = visible.length ? `${visible.length} ${t("found")}` : t("noResults");
  get("style-grid").innerHTML = visible.map(style => {
    const text = styleText(style);
    return `<a class="style-card" href="#style-${style.id}">
      <div class="card-image">${picture(styleImages[style.id]?.[0], "", 'loading="lazy"')}</div>
      <div class="card-copy"><span class="card-category">${eraLabel(style.era)} · ${t(style.region)}</span><h3>${text.name}</h3><p>${text.elements.split(locale === "en" ? ", " : "、").slice(0, 3).join(" · ")}</p></div>
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
  get("skip").textContent = t("skip");
  get("locale-label").textContent = t("language");
  get("locale").value = locale;
  get("nav-library").textContent = t("library");
  get("nav-quiz").textContent = t(finished() ? "report" : step ? "resume" : "quiz");
  get("nav-quiz").href = finished() ? "#report" : "#quiz";
  const image = styleImages.hero?.[0];
  get("hero").innerHTML = `
    <div class="hero-copy">
      <h1>${t("heroTop")}<br><em>${t("heroBottom")}</em></h1>
      <p class="lede">${t("heroText")}</p>
      <div class="hero-actions"><a class="button" id="hero-quiz" href="#quiz">${t("quiz")}</a><a class="text-link" href="#styles">${t("library")}</a></div>
    </div>
    <figure class="hero-art">
      ${picture(image, "", 'fetchpriority="high"')}
      <figcaption><span>${t("heroCaption")}</span>${image ? `<span>${imageCredit(image)}</span>` : ""}</figcaption>
    </figure>`;
  get("library-head").innerHTML = `<h2 id="library-title" tabindex="-1">${t("library")}</h2><p>${t("libraryText")}</p>`;
  get("footer").innerHTML = `<a class="brand" href="#home">${t("brand")}</a><p>${t("privacy")}</p><a class="text-link" href="#credits">${t("credits")}</a>`;
  renderFilters();
  renderLibrary();
  updateQuizLinks();
}

function updateQuizLinks() {
  const complete = finished();
  for (const id of ["nav-quiz", "hero-quiz"]) {
    get(id).textContent = t(complete ? "report" : step ? "resume" : "quiz");
    get(id).href = complete ? "#report" : "#quiz";
  }
}

function rememberProfile(form) {
  const data = new FormData(form);
  profile.name = String(data.get("name") || "").trim();
  profile.age = String(data.get("age") || "");
  profile.gender = String(data.get("gender") || "");
  profile.mode = String(data.get("mode") || "quick");
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
        <fieldset class="mode-options"><legend class="sr-only">${t("startTitle")}</legend>
          ${["quick", "long"].map(mode =>
            `<label class="option mode-option"><input type="radio" name="mode" value="${mode}" ${profile.mode === mode ? "checked" : ""}><span><strong>${t(mode)}</strong><small>${t(mode + "Detail")}</small></span></label>`
          ).join("")}
        </fieldset>
        <p class="profile-note">${t("aboutProfile")}</p>
        <div class="fields">
          <label>${t("nickname")}<input name="name" autocomplete="nickname" value="${escapeHtml(profile.name)}" maxlength="24" placeholder="${t("nicknameHint")}"></label>
          <label>${t("age")}<select name="age">${options(ages, profile.age)}</select></label>
          <label>${t("gender")}<select name="gender">${options(genders, profile.gender)}</select></label>
        </div>
        <div class="flow-actions"><a class="text-link" href="#home">${t("home")}</a><button class="button" type="submit">${t("begin")}</button></div>
      </form>`;
    const form = get("profile-form");
    form.addEventListener("input", () => rememberProfile(form));
    form.addEventListener("submit", event => {
      event.preventDefault();
      rememberProfile(form);
      if (answers.length !== quizLength()) answers = Array(quizLength()).fill(null);
      step = 1;
      renderQuiz();
    });
  } else {
    const index = step - 1;
    const question = questions[index];
    const [title, ...choices] = questionText(question);
    root.innerHTML = `
      <div class="question-top"><span>${t(question.group)}</span><span>${step} / ${quizLength()}</span></div>
      <progress aria-label="${t("progress")}" value="${step}" max="${quizLength()}"></progress>
      <h1 tabindex="-1">${title}</h1>
      <form id="question-form">
        <fieldset class="question-options"><legend class="sr-only">${title}</legend>
          ${choices.map((choice, value) =>
            `<label class="option"><input type="radio" name="answer" value="${value}" ${answers[index] === value ? "checked" : ""}><span>${choice}</span></label>`
          ).join("")}
        </fieldset>
        <p class="validation" id="answer-error" role="alert" hidden>${t("unanswered")}</p>
        <div class="flow-actions"><button id="previous" class="button outline" type="button">${t(step === 1 ? "backInfo" : "previous")}</button>
          <button class="button" type="submit">${t(step === quizLength() ? "generate" : "next")}</button></div>
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
      } else if (step === quizLength()) {
        if (location.hash === "#report") route();
        else location.hash = "report";
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
  if (focus) root.querySelector("h1").focus({ preventScroll: true });
}

function inspiration(text) {
  const labels = { wardrobe: "outfit", objects: "objects", artist: "art", place: "place", music: "music" };
  return `<div class="details-grid">${Object.entries(labels).map(([key, field]) =>
    `<article class="${key === "music" ? "music" : ""}"><h3>${t(key)}</h3><p>${text[field]}</p></article>`
  ).join("")}</div>`;
}

function renderDetail(style) {
  const text = styleText(style);
  const images = styleImages[style.id] || [];
  get("detail-content").innerHTML = `
    <div class="back-links"><a class="text-link" href="#styles">${t("backLibrary")}</a>${finished() ? `<a class="text-link" href="#report">${t("backReport")}</a>` : ""}</div>
    <section class="feature">
      <div class="feature-copy"><p class="overline">${eraLabel(style.era)} · ${t(style.region)} · ${t(style.collection)}</p>
        <h1 tabindex="-1">${text.name}</h1><p class="lede">${text.description}</p>${palette(style)}
      </div>
      <div class="feature-image">${picture(images[0], "", 'fetchpriority="high"')}</div>
    </section>
    <section class="details-section"><h2>${t("elements")}</h2>
      <ul class="elements">${text.elements.split(locale === "en" ? ", " : "、").map(element => `<li>${element}</li>`).join("")}</ul>
    </section>
    <section class="details-section"><h2>${t("inspiration")}</h2>${inspiration(text)}</section>
    ${images.length ? `<section class="details-section"><h2>${t("moodboard")}</h2><div class="moodboard">${images.map(imageDetails).join("")}</div></section>` : ""}`;
}

function renderReport() {
  const rank = rankStyles(answers);
  const name = profile.name ? escapeHtml(profile.name) + t("reportName") : t("reportTitle");
  const details = [profile.age && t(ages[profile.age]), profile.gender && t(genders[profile.gender])].filter(Boolean).join(" · ");
  const markers = ["first", "second", "third"];
  get("report-content").innerHTML = `
    <header class="report-head"><h1 tabindex="-1">${name}</h1><p class="lede">${t("reportText")}</p>${details ? `<p class="profile-note">${details}</p>` : ""}</header>
    <div class="report-grid">${rank.map(({ style, reasons }, index) => {
      const text = styleText(style);
      return `<article class="recommendation">
        <div class="card-image">${picture(styleImages[style.id]?.[0], "", 'loading="lazy"')}</div>
        <div class="recommendation-copy"><p class="overline">${t(markers[index])}</p><h2>${text.name}</h2><p>${text.description}</p>
          ${palette(style)}
          ${reasons.length ? `<p class="reason"><strong>${t("reportWhy")}</strong><br>${reasons.map(({ question, choice }) => questionText(question)[choice + 1]).join(" · ")}</p>` : ""}
          <a class="text-link" href="#style-${style.id}">${t("reportMore")}</a></div></article>`;
    }).join("")}</div>
    <section class="details-section"><h2>${t("inspiration")} · ${styleText(rank[0].style).name}</h2>${inspiration(styleText(rank[0].style))}</section>
    <div class="flow-actions report-actions"><button class="button outline" id="edit" type="button">${t("edit")}</button><button class="button outline" id="restart" type="button">${t("restart")}</button><a class="text-link" href="#styles">${t("library")}</a></div>`;
  get("edit").addEventListener("click", () => {
    step = 1;
    location.hash = "quiz";
  });
  get("restart").addEventListener("click", () => {
    step = 0;
    answers = [];
    location.hash = "quiz";
  });
}

function renderCredits() {
  const groups = [["hero", t("brand")], ...catalog.map(style => [style.id, styleText(style).name])];
  get("credits-content").innerHTML = `
    <a class="text-link back-links" href="#home">${t("home")}</a>
    <h1 tabindex="-1">${t("credits")}</h1><p class="lede">${t("creditIntro")}</p>
    <p class="lede">${t("fontIntro")}</p>
    <ul class="elements">${Object.entries(fonts).map(([name, file]) => `<li><a href="fonts/${file}-OFL.txt">${name}</a></li>`).join("")}</ul>
    <div class="credit-list">${groups.filter(([id]) => styleImages[id]?.length).map(([id, name]) =>
      `<section><h2>${name}</h2><ul>${styleImages[id].map(img =>
        `<li>${escapeHtml(img.title)} · ${imageCredit(img)}</li>`
      ).join("")}</ul></section>`
    ).join("")}</div>`;
}

function route({ focus = true, scroll = true } = {}) {
  const hash = location.hash.slice(1);
  if (hash === "main") return;
  const style = hash.startsWith("style-") && catalog.find(item => item.id === hash.slice(6));
  let page = "home";
  if (style) page = "detail";
  else if (hash === "report") page = finished() ? "report" : "quiz";
  else if (hash === "quiz") page = "quiz";
  else if (hash === "credits") page = "credits";
  for (const name of ["home", "detail", "report", "quiz", "credits"]) get(name + "-view").hidden = name !== page;
  updateQuizLinks();
  if (page === "detail") renderDetail(style);
  if (page === "quiz") renderQuiz(false);
  if (page === "report") renderReport();
  if (page === "credits") renderCredits();
  if (hash === "styles") {
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
window.addEventListener("hashchange", () => route());
renderChrome();
route();
