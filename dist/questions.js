"use strict";

const questions = [
  { id: "image", weight: 3, title: ["哪张材质照片最想放进你的灵感板？", "Which texture would you put on your moodboard?"], hint: ["这四张图都看局部纹理。选你想保留的质感。", "All four are texture close-ups. Choose the surface you’d want to keep."], choices: [
    ["透空黑蕾丝", "Open black lace", ["lace", "dark"], "gothic-1.jpg"],
    ["米色亚麻织纹", "Beige linen weave", ["linen", "natural"], "mori-2.jpg"],
    ["灰褐粗花呢", "Taupe tweed", ["tweed", "neutral"], "british-1.jpg"],
    ["有褶痕的黑皮革", "Creased black leather", ["leather", "dark"], "abi-2.jpg"]
  ] },
  { id: "color", weight: 3, title: ["哪组颜色最想多看一眼？", "Which palette would make you look twice?"], choices: [
    ["墨黑、酒红、冷银", "Ink, burgundy and silver", ["dark", "highContrast"], null, ["#2d2930","#743e50","#c4c1c8"]],
    ["奶白、苔绿、陶土", "Cream, moss and clay", ["warm", "neutral"], null, ["#ece1cd","#777d5c","#9a6958"]],
    ["浅粉、灰紫、雾蓝", "Pale pink, dusty violet and haze blue", ["pastel", "neutral"], null, ["#d7b4c2","#a19bad","#a1b1bd"]],
    ["炭灰、冷蓝、一点亮色", "Charcoal, cool blue and one bright accent", ["cool", "bright"], null, ["#40464d","#788da5","#c5a95e"]]
  ] },
  { id: "material", weight: 3, title: ["在衣服或小物上，你更愿意摸到哪种质感？", "Which finish would you like to touch on a garment or object?"], choices: [
    ["亚麻或洗过的棉布", "Linen or washed cotton", ["linen", "cotton"]],
    ["蕾丝或柔软丝绒", "Lace or soft velvet", ["lace", "velvet"]],
    ["拉丝金属或亮釉", "Brushed metal or glossy glaze", ["metal", "gloss"]],
    ["哑光陶瓷或磨砂表面", "Matte ceramics or a frosted surface", ["matte", "neutral"]]
  ] },
  { id: "shape", weight: 3, title: ["落到衣服上，你更喜欢怎样的轮廓？", "What kind of shape do you like in an outfit?"], choices: [
    ["松身，长短层叠", "Relaxed layers in different lengths", ["loose", "layered"]],
    ["直线，剪裁清楚", "Straight, defined tailoring", ["straight", "tailored"]],
    ["轻收腰，带柔和圆弧", "A softly defined waist and curves", ["fitted", "curved"]],
    ["有几何线条或醒目的层次", "Geometry or prominent layers", ["geometric", "layered"]]
  ] },
  { id: "trim", weight: 3, title: ["你愿意保留哪一种装饰？", "Which detail would you keep?"], choices: [
    ["缎带、蝴蝶结或小花卉", "Ribbons, bows or small florals", ["bows", "floral"]],
    ["拉链、金属扣或网格图形", "Zips, metal hardware or grids", ["hardware", "grid"]],
    ["自然织纹，留出大片空白", "Natural texture with room around it", ["natural", "plain"]],
    ["尖拱、深色花边或细密纹样", "Pointed arches, dark lace edging or ornate patterns", ["arches", "ornate"]]
  ] },
  { id: "avoid", title: ["哪一类元素暂时不想尝试？", "What would you rather avoid for now?"], choices: [
    ["繁复装饰", "Ornament", ["ornate"]], ["亮面反光", "Gloss", ["gloss"]],
    ["大面积深暗色", "Lots of dark color", ["dark"]], ["显眼的金属配件", "Metal hardware", ["hardware"]],
    ["鲜亮配色", "Bright accents", ["bright"]], ["没有特别要避开的", "Nothing in particular", []]
  ] },
  { id: "visibility", weight: 2, title: ["日常里你愿意让造型多醒目？", "How much attention do you want your look to draw?"], choices: [
    ["低调，细看才发现", "Subtle, noticeable up close", ["discreet"]],
    ["留一个清楚的重点", "One focal point", ["balanced"]],
    ["可以大胆一点", "I’m open to a statement", ["statement"]]
  ] },
  { id: "scene", weight: 1, title: ["你最常想在哪种场景用到这些灵感？", "Where would you use these ideas most often?"], choices: [
    ["通勤、上课或日常事务", "Work, study or errands", ["daily"]],
    ["周末、散步或和朋友见面", "Weekends, walks or meeting friends", ["weekend"]],
    ["聚会、看展或其他活动", "Parties, exhibitions or events", ["occasion"]]
  ] },
  { id: "focus", title: ["你最想从哪里开始尝试新风格？", "Where would you like to try a new style first?"], hint: ["这题只调整建议的展示顺序。", "This only changes the order of your ideas."], choices: [
    ["穿搭与配饰", "Clothes and accessories", [], "wardrobe"],
    ["房间与空间", "My room or space", [], "space"],
    ["日常物品", "Everyday objects", [], "objects"]
  ] }
];

function selectedAnswers(answers) {
  return questions.map((question, index) => ({ question, choice: question.choices[answers[index]] }));
}

function rankStyles(answers, feedback = {}) {
  const selected = selectedAnswers(answers);
  const avoided = new Set([...selected.find(entry => entry.question.id === "avoid").choice[2], feedback.avoid].filter(Boolean));
  return catalog.map(style => {
    const tags = guides[style.id].tags;
    const reasons = [];
    let score = 0;
    for (const { question, choice } of selected) {
      if (!question.weight) continue;
      const matching = choice[2].filter(tag => tags.includes(tag) && !avoided.has(tag));
      const weight = feedback.mood && ["shape", "trim", "visibility"].includes(question.id) ? question.weight * .35 : question.weight;
      const points = weight * matching.length / choice[2].length;
      score += points;
      if (points) reasons.push({ matching, points });
    }
    const conflicts = [...avoided].filter(tag => tags.includes(tag)).length;
    if (feedback.mood && guides[style.id].domains.includes("interior")) score += 2;
    if (feedback.daily) {
      if (tags.includes("daily")) score += 3;
      if (!tags.includes("discreet")) score -= 1.5;
    }
    reasons.sort((a, b) => b.points - a.points);
    return { style, score, conflicts, reasons: [...new Set(reasons.flatMap(reason => reason.matching))].slice(0, 4) };
  }).sort((a, b) => a.conflicts - b.conflicts || b.score - a.score).slice(0, 3);
}

function sharedTags(rank) {
  const visualTags = ["visual", "material", "shape", "decoration"].flatMap(group => Object.keys(facetTags[group]));
  return visualTags.map(tag => ({ tag, count: rank.filter(({ style }) => guides[style.id].tags.includes(tag)).length }))
    .filter(entry => entry.count >= 2).sort((a, b) => b.count - a.count).slice(0, 6);
}
