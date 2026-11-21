"use strict";

const styles = {
  minimal: {
    name: "静物极简", keywords: "留白 · 柔光 · 细微质感",
    intro: "少量颜色和清晰的轮廓，让材质、比例和光线自己说话。",
    palette: ["#f2eee5", "#d9c8b4", "#a59f93", "#55594e"],
    ideas: {
      clothing: ["同色系叠穿", "用米白棉衫、浅灰直筒裤和哑光皮鞋叠出层次。保留一件有明显纹理的单品，让同色搭配更有变化。"],
      objects: ["低矮的哑光陶杯", "找一只圆腹、无图案的矮陶杯，搭配亚麻杯垫。把桌面上常用的物件集中在一个浅色托盘里。"],
      art: ["乔治·莫兰迪", "看他的《静物》，留意几只瓶瓶罐罐之间的距离，以及浅色表面被光线分成的层次。", "https://www.nga.gov/artworks/53527-still-life"],
      places: ["纽约野口勇博物馆", "留意雕塑、自然光和庭院中的空隙。也可以在附近找一座有石材和安静中庭的美术馆。", "https://www.noguchi.org/museum/"]
    }
  },
  earth: {
    name: "大地慢调", keywords: "暖棕 · 天然材质 · 手作感",
    intro: "暖色和有痕迹的表面，让熟悉的物件多一点时间感。",
    palette: ["#e9d6b9", "#b66647", "#71633d", "#4f342b"],
    ideas: {
      clothing: ["亚麻与灯芯绒", "从烟棕、苔绿或陶土色里挑两种。试试松肩亚麻衬衫配灯芯绒裤，鞋包选有自然纹理的皮革或帆布。"],
      objects: ["粗陶、木器和软织物", "挑一只保留手作纹理的宽口碗，搭配圆角胡桃木托盘。让灯光从布罩透出来，显出木纹和陶土的细节。"],
      art: ["乔治亚·欧姬芙", "试着从她的新墨西哥州风景画里挑出三种泥土色，观察轮廓是怎样被简化的。", "https://www.okeeffemuseum.org/"],
      places: ["阿比基乌的欧姬芙故居与工作室", "把土坯墙和沙漠色当作配色灵感。也可以在自己的城市找一家陶艺工作室，看看天然材质在不同光线下的样子。", "https://www.okeeffemuseum.org/homes/"]
    }
  },
  color: {
    name: "彩色游乐场", keywords: "撞色 · 曲线 · 表达欲",
    intro: "大胆色块和带点幽默的轮廓，让平常的一天也有可以玩的地方。",
    palette: ["#3043b3", "#d9422c", "#edb83d", "#f5e5d6"],
    ideas: {
      clothing: ["一主一辅的撞色", "试试钴蓝上衣配番茄红袜子或小包。用牛仔蓝或奶白留出间隔，让两种亮色都能看清。"],
      objects: ["蘑菇灯与几何花器", "选一件有鲜明曲线的彩色物件，例如蘑菇灯或环形花器。把它放在素色书桌上，先看看一个色块能改变多少。"],
      art: ["亨利·马蒂斯", "从马蒂斯的剪纸看起，留意蓝色、橙色和白色的形状怎么在画面里彼此拉开距离。", "https://www.moma.org/interactives/exhibitions/2014/matisse/the-cut-outs.html"],
      places: ["尼斯马蒂斯博物馆", "沿着马蒂斯的作品找你喜欢的色彩组合。也可以在本地的设计市集或海报店找同样鲜明的图形。", "https://www.musee-matisse-nice.org/en/practical-information/"]
    }
  },
  urban: {
    name: "都市冷调", keywords: "利落 · 金属 · 结构",
    intro: "干净的结构、冷色与反光表面，给日常造型一点俐落的张力。",
    palette: ["#28262f", "#626c83", "#b6bdc5", "#e3dde7"],
    ideas: {
      clothing: ["清晰的剪裁", "用炭黑短外套、直线条长裤和银色配件组成一套。用深浅不同的灰分出层次，让衣服的结构更明显。"],
      objects: ["拉丝金属与烟灰玻璃", "试一盏管状金属灯，或边缘清晰的烟灰玻璃托盘。搭配哑光织物来平衡反光的材质。"],
      art: ["唐纳德·贾德", "找几件贾德的立体作品，看重复单元、边缘和空隙怎样改变你对整个空间的感受。", "https://www.moma.org/artists/2948-donald-judd"],
      places: ["马尔法奇纳蒂基金会", "留意铝、混凝土和场地之间的关系。在本地也可以找由旧工厂改成的展览空间。", "https://chinati.org/about/mission-history/"]
    }
  }
};

const categories = {
  clothing: "穿搭", objects: "日常物件", art: "艺术家", places: "地点"
};
const ages = ["暂不填写", "18 岁以下", "18–24 岁", "25–34 岁", "35–44 岁", "45 岁以上"];

// Each answer pairs a visual or behavioral cue with one style family.
const questions = [
  { group: "性格与日常", title: "哪种周末最能让你充电？", options: [
    ["独处一会儿，读书或整理房间", "minimal"], ["和熟悉的人做饭，慢慢聊天", "earth"],
    ["约朋友去逛新的市集或展览", "color"], ["一个人出门，在城市里随意走走", "urban"]
  ] },
  { group: "性格与日常", title: "你希望自己的造型多引人注目？", options: [
    ["越低调越自在", "minimal"], ["有亲切感，细节经得起看", "earth"],
    ["我喜欢一眼就能被记住的造型", "color"], ["有辨识度，轮廓比颜色更重要", "urban"]
  ] },
  { group: "自我表达", title: "你最想用哪种方式表达自己？", options: [
    ["用一个小细节，留一点想象空间", "minimal"], ["带一件有故事或亲手做的东西", "earth"],
    ["试一组别人不太会选的配色", "color"], ["选一件剪裁鲜明的衣服建立气场", "urban"]
  ] },
  { group: "视觉偏好", title: "哪组颜色最先吸引你？", weight: 3, options: [
    ["象牙白、雾灰、浅木色", "minimal"], ["陶土红、苔绿、暖棕", "earth"],
    ["钴蓝、番茄红、明黄", "color"], ["炭黑、冷银、烟灰蓝", "urban"]
  ] },
  { group: "视觉偏好", title: "你最想伸手触摸哪种材质？", weight: 2, options: [
    ["哑光细瓷与洗过的亚麻", "minimal"], ["粗陶与带清晰木纹的实木", "earth"],
    ["有色玻璃和光滑亮釉", "color"], ["拉丝金属和烟灰玻璃", "urban"]
  ] },
  { group: "视觉偏好", title: "如果给桌上添一盏灯，你会选？", weight: 2, options: [
    ["米白纸灯，光线柔和", "minimal"], ["圆鼓鼓的陶土灯座配布罩", "earth"],
    ["橘红色蘑菇灯，关灯也好看", "color"], ["银色折臂灯，结构清晰", "urban"]
  ] },
  { group: "视觉偏好", title: "哪种空间最想让你多待一会儿？", weight: 2, options: [
    ["阳光穿过纱帘的安静房间", "minimal"], ["有木桌、旧器皿和植物的厨房", "earth"],
    ["家具像雕塑一样的彩色工作室", "color"], ["有混凝土和大窗的旧厂房展厅", "urban"]
  ] },
  { group: "生活场景", title: "你最想从哪里开始尝试新风格？", options: [
    ["每天出门的穿搭", "clothing"], ["房间里常用的小物", "objects"],
    ["想看的艺术作品", "art"], ["周末可以去的地方", "places"]
  ] }
];

const get = id => document.getElementById(id);
const answers = Array(questions.length).fill(null);
const profile = { name: "", age: "暂不填写" };
let step = 0;

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function calculateReport(answers) {
  const scores = Object.fromEntries(Object.keys(styles).map(key => [key, 0]));
  const signals = questions.slice(0, -1).map((question, index) => {
    const [label, key] = question.options[answers[index]];
    const weight = question.weight ?? 1;
    scores[key] += weight;
    return { label, key, weight };
  });
  // Prefer the explicit palette choice when totals tie.
  const palettePreference = signals[3].key;
  const ranked = Object.keys(scores).sort((a, b) =>
    scores[b] - scores[a] || Number(b === palettePreference) - Number(a === palettePreference)
  );
  const [primary, alternative] = ranked;
  const strongest = signals.filter(signal => signal.key === primary)
    .sort((a, b) => b.weight - a.weight).slice(0, 2);
  return {
    primary, alternative: scores[alternative] ? alternative : null,
    strongest, focus: questions.at(-1).options[answers.at(-1)][1]
  };
}

function renderQuiz() {
  const root = get("quiz-content");
  if (step === 0) {
    root.innerHTML = `
      <p class="eyebrow">风格测试</p>
      <h1 tabindex="-1">先认识一下你</h1>
      <p>昵称和年龄段都可以跳过。年龄段仅用于记录这次作答，风格根据你的偏好推荐。</p>
      <form id="profile-form">
        <div class="fields">
          <label for="nickname">昵称<input id="nickname" name="nickname" maxlength="24" autocomplete="nickname" placeholder="想让报告怎么称呼你？"></label>
          <label for="age">年龄段<select id="age" name="age">${ages.map(age => `<option>${age}</option>`).join("")}</select></label>
        </div>
        <div class="flow-actions"><a class="text-link" href="#home">返回首页</a><button class="button" type="submit">开始答题</button></div>
      </form>`;
    get("nickname").value = profile.name;
    get("age").value = profile.age;
    get("profile-form").addEventListener("submit", event => {
      event.preventDefault();
      profile.name = get("nickname").value.trim();
      profile.age = get("age").value;
      step = 1;
      renderQuiz();
    });
  } else {
    const index = step - 1;
    const question = questions[index];
    root.innerHTML = `
      <div class="question-top"><p class="eyebrow">${question.group}</p><span>第 ${step} / ${questions.length} 题</span></div>
      <progress aria-label="问卷进度" value="${step}" max="${questions.length}"></progress>
      <h1 id="question-title" tabindex="-1">${question.title}</h1>
      <form id="question-form">
        <fieldset>
          <legend class="sr-only">${question.title}</legend>
          ${question.options.map(([label], i) => `
            <label class="option"><input type="radio" name="answer" value="${i}" ${answers[index] === i ? "checked" : ""}> ${label}</label>
          `).join("")}
        </fieldset>
        <p id="answer-error" class="validation" role="alert" hidden>请先选择一个答案。</p>
        <div class="flow-actions">
          <button id="prev" class="button outline" type="button">${step === 1 ? "返回基本信息" : "上一题"}</button>
          <button class="button" type="submit">${step === questions.length ? "生成风格报告" : "下一题"}</button>
        </div>
      </form>`;
    const form = get("question-form");
    form.addEventListener("change", event => {
      answers[index] = Number(event.target.value);
      get("answer-error").hidden = true;
    });
    form.addEventListener("submit", event => {
      event.preventDefault();
      if (answers[index] === null) {
        get("answer-error").hidden = false;
        form.querySelector("input").focus();
        return;
      }
      if (step === questions.length) {
        location.hash = "report";
        return;
      }
      step++;
      renderQuiz();
    });
    get("prev").addEventListener("click", () => {
      step--;
      renderQuiz();
    });
  }
  root.querySelector("h1").focus();
}

function feature(key, title, eyebrow, reason = "") {
  const style = styles[key];
  return `<div class="feature">
    <div class="feature-copy">
      <p class="eyebrow">${eyebrow}</p>
      <h1 tabindex="-1">${title}</h1>
      <p>${style.intro}</p>
      <div class="swatches" role="img" aria-label="${style.name}示例色板">${style.palette.map(color => `<span style="background:${color}"></span>`).join("")}</div>
      ${reason ? `<p class="reason">${reason}</p>` : ""}
    </div>
    <div class="mood ${key}" role="img" aria-label="${style.name}风格静物图"></div>
  </div>`;
}

function inspiration(style, focus) {
  const order = Object.keys(categories).filter(key => key !== focus);
  if (focus) order.unshift(focus);
  return `<section class="results-section" aria-labelledby="inspiration-title">
    <h2 id="inspiration-title">把风格带进日常</h2>
    <div class="details-grid">${order.map(key => {
      const [name, description, url] = style.ideas[key];
      return `<article><h3>${categories[key]}</h3><strong>${url ? `<a href="${url}" target="_blank" rel="noopener noreferrer">${name}</a>` : name}</strong><p>${description}</p></article>`;
    }).join("")}</div>
  </section>`;
}

function renderReport() {
  const { primary, alternative, strongest, focus } = calculateReport(answers);
  const style = styles[primary];
  const heading = profile.name ? `${escapeHtml(profile.name)}的风格报告` : "你的风格报告";
  const evidence = strongest.map(signal => `「${signal.label}」`).join("、");
  const ageNote = profile.age === ages[0] ? "" : `<p class="micro">填写的年龄段 · ${profile.age}</p>`;
  get("report-content").innerHTML = `
    ${feature(primary, style.name, heading, `你的选择 ${evidence} 与这种风格最接近。可以先从「${categories[focus]}」试一试。`)}
    ${ageNote}
    ${alternative ? `<p class="second">还可以探索 <a href="#style-${alternative}">${styles[alternative].name}</a> · ${styles[alternative].keywords}</p>` : ""}
    ${inspiration(style, focus)}
    <div class="flow-actions report-actions">
      <button class="button outline" id="edit-answers" type="button">修改答案</button>
      <button class="button outline" id="restart" type="button">重新测试</button>
      <a class="text-link" href="#styles">浏览风格图鉴</a>
    </div>`;
  get("edit-answers").addEventListener("click", () => {
    step = 1;
    location.hash = "quiz";
  });
  get("restart").addEventListener("click", () => {
    profile.name = "";
    profile.age = ages[0];
    answers.fill(null);
    step = 0;
    location.hash = "quiz";
  });
}

function route() {
  const page = location.hash.slice(1);
  if (page === "main") return;
  const key = page.startsWith("style-") ? page.slice(6) : "";
  const detail = Object.hasOwn(styles, key);
  const complete = answers.every(answer => answer !== null);
  const report = page === "report" && complete;
  const quiz = page === "quiz" || (page === "report" && !complete);
  get("home-view").hidden = quiz || report || detail;
  get("quiz-view").hidden = !quiz;
  get("report-view").hidden = !report;
  get("detail-view").hidden = !detail;
  get("nav-quiz").textContent = complete ? "我的报告" : "开始测试";
  get("nav-quiz").href = complete ? "#report" : "#quiz";

  if (quiz) {
    renderQuiz();
  } else if (report) {
    renderReport();
    get("report-content").querySelector("h1").focus();
  } else if (detail) {
    const style = styles[key];
    const back = complete ? '<a class="text-link back-link" href="#report">返回我的报告</a>' : "";
    get("detail-content").innerHTML = `
      <a class="text-link back-link" href="#styles">返回风格图鉴</a> ${back}
      ${feature(key, style.name, style.keywords)}
      ${inspiration(style)}
      <div class="flow-actions"><a class="button" href="#quiz">测测我的风格</a></div>`;
    get("detail-content").querySelector("h1").focus();
  }
  if (page === "styles") {
    get("styles").scrollIntoView();
  } else {
    window.scrollTo(0, 0);
  }
}

get("style-grid").innerHTML = Object.entries(styles).map(([key, style]) => `
  <a class="style-card" href="#style-${key}">
    <span class="mood ${key}" aria-hidden="true"></span>
    <span class="card-copy"><strong>${style.name}</strong><span>${style.keywords}</span></span>
  </a>`).join("");
window.addEventListener("hashchange", route);
route();
