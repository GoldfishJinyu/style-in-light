"use strict";

const facetTags = {
  visual: {
    dark: ["深暗", "Dark"], neutral: ["低饱和", "Muted"], warm: ["暖色", "Warm tones"],
    cool: ["冷色", "Cool tones"], pastel: ["粉彩", "Pastels"], bright: ["亮色", "Bright accents"], highContrast: ["强对比", "High contrast"]
  },
  material: {
    lace: ["蕾丝", "Lace"], linen: ["亚麻与天然纤维", "Linen & natural fibers"], tweed: ["粗花呢", "Tweed"],
    leather: ["皮革", "Leather"], metal: ["金属", "Metal"], matte: ["哑光陶瓷", "Matte ceramics"],
    cotton: ["棉布", "Cotton"], gloss: ["亮面", "Gloss"], velvet: ["丝绒", "Velvet"]
  },
  shape: {
    tailored: ["利落剪裁", "Tailored lines"], loose: ["松身轮廓", "Relaxed shapes"], layered: ["层叠", "Layers"],
    curved: ["圆弧", "Curves"], straight: ["直线", "Straight lines"], fitted: ["收腰", "Defined waist"]
  },
  decoration: {
    bows: ["蝴蝶结", "Bows"], floral: ["花卉", "Florals"], hardware: ["金属配件", "Metal hardware"],
    grid: ["网格或格纹", "Grids or checks"], ornate: ["繁复装饰", "Ornament"], plain: ["留白", "Negative space"],
    pixels: ["像素", "Pixels"], arches: ["尖拱", "Pointed arches"], crosses: ["十字架", "Crosses"],
    geometric: ["几何", "Geometry"], natural: ["自然纹理", "Natural textures"]
  },
  mood: {
    romantic: ["浪漫", "Romantic"], severe: ["冷峻", "Severe"], dreamy: ["梦幻", "Dreamlike"],
    nostalgic: ["怀旧", "Nostalgic"], rebellious: ["叛逆", "Rebellious"], quiet: ["安静", "Quiet"],
    playful: ["俏皮", "Playful"], dramatic: ["戏剧感", "Dramatic"]
  },
  domain: {
    fashion: ["穿搭", "Clothing"], interior: ["室内与空间", "Interiors"], objects: ["生活物品", "Objects"],
    art: ["艺术与影像", "Art & film"], music: ["音乐", "Music"]
  },
  context: {
    discreet: ["低调", "Subtle"], balanced: ["适度醒目", "Balanced"], statement: ["醒目", "Statement"],
    daily: ["通勤与上课", "Work & study"], weekend: ["休闲与周末", "Weekend"], occasion: ["聚会与活动", "Events"]
  }
};
const tagLabels = Object.assign({}, ...Object.values(facetTags));

// Six-part visual vocabulary, followed by application, additional eras and additional regions.
const guideRows = `
gothic|dark highContrast lace velvet metal tailored layered ornate arches crosses dramatic rebellious balanced statement occasion|fashion art music interior|nineteenth|global
victorian|dark neutral warm lace velvet fitted layered ornate floral romantic nostalgic balanced statement occasion|fashion art objects|early|global
rococo|pastel warm lace gloss curved fitted bows floral ornate romantic playful balanced statement occasion|fashion art interior objects|nineteenth|global
jirai|dark pastel highContrast lace gloss fitted layered bows ornate dramatic romantic statement occasion weekend|fashion music objects|today|global
dreamcore|neutral pastel cool gloss curved straight plain geometric dreamy quiet discreet balanced weekend|art interior music|late|asia
cyberpunk|dark cool highContrast metal gloss tailored straight hardware geometric severe dramatic rebellious statement balanced occasion weekend|art music fashion interior|online today|asia america
y2k|bright pastel gloss metal fitted curved hardware geometric playful nostalgic statement weekend occasion|fashion objects music|today|asia america
french|warm neutral cotton leather fitted tailored bows grid romantic nostalgic discreet balanced daily weekend|fashion interior art objects|today|global
americana|warm bright cotton leather straight tailored grid nostalgic playful balanced daily weekend|fashion music objects interior|late|global
british|neutral warm tweed leather tailored straight grid nostalgic quiet discreet balanced daily weekend|fashion objects interior art|nineteenth today|global
boho|warm bright linen cotton loose layered floral ornate natural romantic nostalgic balanced weekend occasion|fashion objects interior|mid today|america
baroque|dark warm highContrast velvet metal curved layered floral ornate dramatic romantic statement occasion|art interior music fashion|nineteenth|global
retro-japan|warm neutral cotton gloss curved fitted grid nostalgic quiet balanced daily weekend|interior objects art music|late|global
mori|warm neutral linen cotton loose layered natural floral quiet romantic discreet balanced weekend daily|fashion interior objects art|today|global
zassi|neutral warm cotton linen loose straight grid plain quiet nostalgic discreet daily weekend|fashion objects art|today|global
minimalism|neutral cool matte metal straight tailored plain geometric quiet severe discreet daily weekend|art interior objects fashion|today|america europe
abi|dark highContrast leather metal layered tailored hardware ornate grid rebellious dramatic statement weekend occasion|fashion music art|late|global
retrofuture|neutral cool metal gloss curved straight geometric hardware playful nostalgic balanced statement weekend occasion|art objects interior music|late today|america europe
coquette|pastel neutral lace gloss curved fitted bows floral romantic dreamy discreet balanced weekend occasion|fashion art objects music|today|europe america
soft-girl|pastel warm cotton loose curved bows floral dreamy playful discreet balanced daily weekend|fashion objects music|today|asia america
clean-girl|warm neutral cotton metal straight tailored plain quiet discreet daily weekend|fashion objects interior|today|america
downtown|dark neutral leather cotton straight loose hardware plain nostalgic rebellious discreet balanced daily weekend|fashion music art objects|millennium|global
softcore|pastel neutral linen matte loose curved plain natural dreamy quiet discreet daily weekend|art interior music objects|today|asia
pixel|bright cool gloss straight geometric grid pixels playful nostalgic statement balanced weekend|art objects music|millennium online|asia america
minimal|warm neutral matte linen straight loose plain natural quiet discreet daily weekend|objects interior art fashion|late|global
earth|warm neutral linen matte loose curved natural plain quiet nostalgic discreet balanced daily weekend|interior objects art fashion|mid|america
color|bright highContrast gloss metal curved fitted geometric grid playful dramatic statement weekend occasion|art interior objects fashion|late|europe
urban|cool dark neutral metal leather tailored straight geometric plain severe quiet discreet balanced daily weekend|interior art objects fashion|late|america europe
`.trim();

const guides = Object.fromEntries(guideRows.split("\n").map(row => {
  const [id, tags, domains, eras, regions] = row.split("|");
  return [id, { tags: tags.split(" "), domains: domains.split(" "), eras: eras.split(" "), regions: regions.split(" ") }];
}));
for (const style of catalog) {
  const guide = guides[style.id];
  guide.era = [...new Set([style.era, ...guide.eras])];
  guide.region = [...new Set([style.region, ...guide.regions])];
}

const featuredGuides = {
  gothic: {
    theme: "arch", neighbor: "baroque",
    background: ["本图鉴用「哥特」指当代哥特穿搭与常被借用的历史视觉元素。中世纪哥特建筑的尖拱、彩窗和石饰是视觉参考；当代暗色穿搭是一套独立的文化语境。", "Here Gothic means contemporary goth dress and the historical visual cues it sometimes borrows. Pointed arches, stained glass and carved stone are architectural references, in a different context from the modern dark wardrobe."],
    difference: ["两者都有戏剧性的明暗。哥特可从窄长线条、黑蕾丝和冷银入手；巴洛克更常用暖金、厚重曲线和集中光线。", "Both use dramatic light and shade. Goth styling can start with length, black lace and cool silver; Baroque references lean toward warm gilt, heavy curves and concentrated light."],
    starter: ["给现有黑上衣加一个窄蕾丝领片，或把深色玻璃杯放到浅木桌面；先比较材质在日光下的效果。", "Add a narrow lace collar to a black top you own, or put a smoked-glass tumbler on a light wood table. Notice how the textures look in daylight."],
    film: ["《剪刀手爱德华》——观察人工光、深色轮廓和柔软环境之间的张力。", "Edward Scissorhands — compare artificial light and dark silhouettes with the softer settings."],
    source: "https://www.vam.ac.uk/collections/gothic"
  },
  rococo: {
    theme: "scallop", neighbor: "coquette",
    background: ["洛可可与十八世纪欧洲装饰艺术有关。轻巧曲线和贝壳纹样常出现在室内及工艺品中；同一时期的法式长袍还可以用来观察有结构的裙幅。", "Rococo is associated with eighteenth-century European decorative arts. Light curves and shell-like ornament appear in interiors and objects. Period French gowns also offer a reference for structured width."],
    difference: ["两种都可用蝴蝶结；洛可可会让曲线、花边和层次贯穿整体，Coquette Girl 更适合只保留一两处缎带或芭蕾细节。", "Both use bows. Rococo carries curves, ornament and layering through a composition; Coquette Girl can concentrate the effect in one or two ribbon or ballet details."],
    starter: ["把浅色餐盘换成一只贝壳边小碟，或给素色上衣加一条细缎带。用一处弯曲细节就能试出效果。", "Try a scalloped dish in place of a plain one, or add one ribbon to a solid top. One curved detail is enough to test the effect."],
    film: ["《绝代艳后》（2006）——把粉彩、糕点和丝织品看作电影的设计选择。", "Marie Antoinette (2006) — read the pastels, pastries and silks as choices in production design."],
    source: "https://www.metmuseum.org/art/collection/search/159498"
  },
  mori: {
    theme: "stitch", neighbor: "earth",
    background: ["这里把「森系」用作日系森林感穿搭的视觉标签，重点是自然织物、柔和叠穿和仿佛能融入林间的色彩。", "Here Mori Kei describes a Japanese woodland-inspired silhouette built from natural weaves, soft layers and colors that settle into a forest palette."],
    difference: ["两者都喜欢天然材质。森系主要通过长短层次和轻软织物形成轮廓；大地慢调更多从陶土、木纹和暖光构建室内气氛。", "Both favor natural materials. Mori builds a silhouette with garment lengths and soft cloth; Earth Tones builds an interior mood with clay, wood grain and warm light."],
    starter: ["保留平常的鞋，把亚麻衬衫搭在原有针织衫外。空间里可先用一块未漂白的亚麻桌布。", "Keep your everyday shoes and layer a linen shirt over a knit you own. In a room, start with a piece of unbleached linen."],
    film: ["《魔女宅急便》——观察日常器物、织物和自然光一起形成的生活感。", "Kiki’s Delivery Service — look at how everyday objects, cloth and natural light are grouped."],
    // The woodland photograph is illustrative. No external history claim is made for this label.
  },
  cyberpunk: {
    theme: "grid", neighbor: "urban",
    background: ["这里从赛博朋克影视中的未来城市出发，采用暴露的技术结构、人工光和不平整的城市质感做视觉参考。街景照片用于观察光色和空间。", "This interpretation starts with futuristic cities in cyberpunk film: exposed technology, artificial light and uneven urban textures. The street photos are references for light and space."],
    difference: ["两者都能用冷色和金属。都市冷调侧重干净剪裁与单一色系；赛博朋克会加入反光光源、网面或可见的扣件。", "Both can use cool colors and metal. Urban Cool emphasizes clean cuts and a narrow palette; Cyberpunk adds reflected light, mesh or visible fasteners."],
    starter: ["在炭灰外套上加一根反光细绳，或给桌灯下的深色托盘加一件拉丝金属小物。", "Add a thin reflective cord to a charcoal jacket, or put a brushed-metal object on a dark tray under a desk lamp."],
    film: ["《银翼杀手》（1982）——留意街道倒影、广告光和暗部空间。", "Blade Runner (1982) — notice street reflections, advertising light and pools of shadow."],
    source: "https://www.bfi.org.uk/features/where-begin-japanese-cyberpunk"
  },
  coquette: {
    theme: "ribbon", neighbor: "soft-girl",
    background: ["本图鉴用这个网络穿搭标签描述把缎带、蝴蝶结、珍珠和芭蕾细节拆进日常造型的做法。古典芭蕾美术仅作为视觉联想。", "This online style label covers everyday outfits with ribbons, bows, pearls and ballet details. Ballet art is included as a visual association."],
    difference: ["同样能用浅粉色。Coquette Girl 借缎带、鞋带和细蕾丝组织细节；Soft Girl 更依靠淡色块、软面织物和小发夹。", "Both can use pale pink. Coquette Girl builds on ribbons, lacing and fine lace; Soft Girl leans on soft fabrics, pastel color blocks and small clips."],
    starter: ["先把细缎带系在一只旧包的提手上。想尝试穿搭时，用中性配色让缎带成为唯一重点。", "Tie a narrow ribbon to an existing bag handle. For an outfit, use a neutral palette and make the ribbon the single focal point."],
    film: ["《红菱艳》——观察芭蕾鞋、布料和舞台光如何反复出现。", "The Red Shoes — notice how ballet shoes, fabric and stage lighting recur."],
    source: "https://www.metmuseum.org/art/collection/search/436140",
    sourceNote: ["大都会艺术博物馆的德加作品介绍，用于理解芭蕾的视觉参考。", "The Met’s Degas entry provides context for the ballet imagery."]
  },
  minimalism: {
    theme: "rule", neighbor: "minimal",
    background: ["这里区分二十世纪六十年代的极简艺术与当代穿搭应用。把几何、重复和留白用在衣物或室内，是从艺术语言延伸出的设计方法。", "This guide distinguishes 1960s Minimalist art from contemporary styling. Geometry, repetition and negative space offer principles that can be applied to clothes or interiors."],
    difference: ["极简主义更强调几何、重复和比例；静物极简保留自然光、织纹和陶器微妙的不规则。", "Minimalism emphasizes geometry, repetition and proportion. Still-Life Minimal allows natural light, weave and subtle irregularities in ceramics to lead."],
    starter: ["把三个相近高度的物品放在同一条线上，试着拉开它们的间距。穿搭里从同色直筒裤和简单上衣做相同的比例练习。", "Line up three objects of similar height and try different spacing. Apply the same exercise to proportions using straight pants and a simple top in similar colors."],
    film: ["《完美的日子》——观察重复动作、空间和框景。", "Perfect Days — watch how repeated gestures, space and framing organize the visual rhythm."],
    source: "https://www.moma.org/momaorg/shared/flattened_pages/moma_learning/themes/minimalism/"
  }
};

const workingDefinitions = {
  zassi: ["这里的「日杂」指日本生活与服装杂志中便于重复搭配的日常造型，以蓝白条纹、棉布、宽松直线和实用配件做示例。它是编选口径。", "Here Japanese Magazine Style means repeatable outfit ideas inspired by Japanese lifestyle and fashion magazines: stripes, cotton, relaxed straight lines and useful accessories."],
  abi: ["这里的「亚比」是中文网络的宽泛穿搭标签，指在同一造型里混用朋克、街头和其他亚文化线索。链条、网布和厚底鞋是例子。", "Here Yabi is a broad Chinese online styling label for mixing punk, streetwear and other subcultural cues. Chains, mesh and platforms are examples."],
  softcore: ["本图鉴专指柔焦、低反差、半透明材质和浅雾色构成的视觉氛围，用于摄影、穿搭或室内灵感。", "In this guide Softcore describes low contrast, soft focus, translucent textures and misty colors used as visual inspiration for images, outfits or interiors."]
};

const filmReferences = {
  victorian: ["《纯真年代》——看礼服轮廓和室内陈设怎样共同铺开。", "The Age of Innocence — watch how dress silhouettes and interiors build a scene together."],
  jirai: ["《下妻物语》——关注女主角如何用服饰表达喜好；片中涉及不同的日本穿搭文化。", "Kamikaze Girls — notice how clothing expresses the leads’ tastes across different Japanese fashion cultures."],
  dreamcore: ["《千与千寻》——观察空旷走廊与熟悉物件的陌生感。", "Spirited Away — look for the strangeness of empty passageways and familiar objects."],
  y2k: ["《独领风骚》——观察小包、格纹和有辨识度的日常造型。", "Clueless — notice the small bags, checks and sharply defined everyday looks."],
  french: ["《瑟堡的雨伞》——看服装如何和街道及室内配色呼应。", "The Umbrellas of Cherbourg — look at how wardrobes echo street and room colors."],
  americana: ["《美国风情画》——从公路、夜灯和餐馆找配色灵感。", "American Graffiti — take color cues from roadways, night lights and diners."],
  british: ["《看得见风景的房间》——留意叠穿、户外质感与历史室内。", "A Room with a View — notice layers, outdoor textures and period interiors."],
  boho: ["《几近成名》——观察巡演场景中的织物和休闲叠穿。", "Almost Famous — look at textured fabrics and easy layers on tour."],
  baroque: ["《巴里·林登》——观察烛光把视线引向画面的哪个位置。", "Barry Lyndon — watch where candlelight leads the eye."],
  "retro-japan": ["《秋刀鱼之味》——留意居家物件的重复使用和画面中的暖色。", "An Autumn Afternoon — notice recurring household objects and warm tones."],
  zassi: ["《海街日记》——从层叠的居家衣物和实用小物找日常灵感。", "Our Little Sister — look for easy layers and practical objects at home."],
  abi: ["《席德与南茜》——观察朋克造型中的材质冲突和旧化处理。", "Sid and Nancy — look at contrasts between materials and worn finishes in punk styling."],
  retrofuture: ["《2001 太空漫游》——观察家具、服装与舱内几何。", "2001: A Space Odyssey — notice the furniture, garments and cabin geometry."],
  "soft-girl": ["《小妇人》（2019）——观察柔软织物和低对比配色。", "Little Women (2019) — look at soft textiles and low-contrast combinations."],
  "clean-girl": ["《实习生》——从办公场景里找简单轮廓和克制配饰。", "The Intern — look for clean outlines and restrained accessories in the office."],
  downtown: ["《弗兰西丝·哈》——观察穿搭如何随城市空间和移动而变化。", "Frances Ha — notice how outfits move through the city."],
  softcore: ["《花样年华》——留意隔着门窗、布料和暗处看到的光。", "In the Mood for Love — watch light coming through windows, doorways and fabric."],
  pixel: ["《无敌破坏王》——比较不同游戏场景里的方格与动作节奏。", "Wreck-It Ralph — compare grid shapes and movement across game worlds."],
  minimal: ["《步履不停》——观察桌上的食器、靠窗的光和留出的空白。", "Still Walking — notice tableware, window light and the space around objects."],
  earth: ["《菊次郎的夏天》——从路旁、草地和旧物件找暖色参照。", "Kikujiro — look for warm colors in roadsides, grass and worn objects."],
  color: ["《布达佩斯大饭店》——看对称构图和色块怎样组合。", "The Grand Budapest Hotel — watch how symmetry and color blocking work together."],
  urban: ["《她》——观察现代室内的材料、轮廓和玻璃反光。", "Her — look at materials, silhouettes and glass reflections in modern interiors."]
};
