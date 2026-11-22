"use strict";

// Short questions come first. Numeric choices are trait intensity (0–4).
const questionSource = `
expression|1|personality
怎样度过一个陌生场合最舒服？|先安静观察|找一个人聊聊|自在地参与小组|主动加入热闹的讨论
What feels most comfortable in a room full of strangers?|Quietly observe|Talk to one person|Ease into a small group|Jump into a lively discussion
expression|2|personality
你希望自己的造型多引人注目？|融入环境就好|有一个细节能被发现|远看就有辨识度|希望让人一眼记住
How much attention would you like your outfit to draw?|Blend into the room|Give someone a detail to notice|Be recognizable from a distance|Make a memorable first impression
detail|2|visual
选一个最想穿的轮廓。|直线剪裁，少装饰|宽松剪裁，有自然纹理|收腰，加一处明显褶皱|多层叠穿，蕾丝或配饰很重要
Which silhouette would you most like to wear?|Straight and nearly unadorned|Loose with a natural texture|Fitted at the waist with a visible ruffle|Layered with prominent lace or accessories
warmth|2|visual
拿起哪组颜色会让你高兴？|炭黑、烟灰蓝、冷银|灰紫、雾蓝、浅灰|奶白、粉雾色、浅木色|琥珀、陶土、橄榄绿
Which palette would you enjoy picking up?|Charcoal, smoke blue and silver|Gray-violet, haze blue and pale gray|Ivory, dusty pink and pale wood|Amber, terracotta and olive
future|2|visual
你最想给桌面加哪种质感？|木头、亚麻、粗陶|旧纸、哑光皮革、雾面玻璃|光滑陶瓷或有色玻璃|拉丝金属、透明塑料或电子光
Which texture would you add to your desk?|Wood, linen or rough clay|Old paper, matte leather or frosted glass|Smooth ceramics or tinted glass|Brushed metal, clear plastic or electronic light
era|1.7|visual|early,mid,millennium,online
哪一页时间最想翻开？|十七至十八世纪的历史陈设|二十世纪的老杂志或老电影|世纪之交的电子产品和街头穿搭|当下的网络情绪板
Which page in time would you turn to first?|A seventeenth- or eighteenth-century interior|A twentieth-century magazine or movie|Millennium-era electronics and street fashion|A contemporary online moodboard
collection|2.5|visual|history,retro,online,digital
哪种收藏最想慢慢看？|古董织物与宫廷服饰|旧衣与老店招牌|蝴蝶结、粉雾色和随手拍|像素图形、城市霓虹和未来道具
Which collection would you take your time with?|Antique textiles and court dress|Vintage clothes and old shop signs|Bows, dusty pink and candid photos|Pixel graphics, urban neon and futuristic props
motif|3.3|visual|gothic victorian jirai abi baroque,british french americana retro-japan zassi downtown,rococo mori coquette soft-girl softcore earth clean-girl minimal,dreamcore cyberpunk y2k retrofuture pixel urban color minimalism
如果做一张灵感板，你会先贴哪组图？|黑蕾丝、金属、戏剧性的阴影|老书、唱片、格纹和旧丹宁|缎带、浅色花朵或天然织物|雾光、像素、亮面或几何轮廓
What would you pin to a moodboard first?|Black lace, metal and theatrical shadows|Old books, records, checks and worn denim|Ribbons, pale flowers or natural textiles|Misty light, pixels, shine or geometric shapes
expression|1|personality
你有一个很喜欢的小众爱好，会怎么分享？|自己留着享受|推荐给一位熟朋友|发一张照片或一份清单|邀请大家来一起玩
How would you share a niche interest you love?|Enjoy it privately|Suggest it to one close friend|Post a photo or a list|Invite people to join in
detail|1.4|visual
选一件你会在二手店停下来看的衣服。|素面羊毛西装|有纹理的亚麻开衫|刺绣、补丁或镶边的小外套|有很多缝线、褶边或配饰的裙装
Which secondhand find would make you pause?|A plain wool blazer|A textured linen cardigan|A jacket with embroidery, patches or trim|A dress with intricate seams, ruffles or accessories
warmth|1.4|visual
最想让哪种光留在照片里？|蓝色时刻的冷光|雨天的散射光|隔着白纱的自然光|夕阳或暖灯照过深木色
Which light would you keep in a photograph?|Cold blue-hour light|Diffuse rain-day light|Daylight through white gauze|Sunset or lamplight on dark wood
future|1.4|visual
在哪种空间里你更愿意停留？|有天然石和木梁的房间|带印刷旧海报的咖啡馆|有大窗和几何家具的展厅|反光屏幕与电子灯交错的夜街
Where would you choose to linger?|A room with stone and timber|A coffee shop with old printed posters|A gallery with big windows and geometric furniture|A night street of screens and electronic lights
region|1.4|visual|europe,asia,america,global
哪一种视觉文化最想继续探索？|欧洲历史服饰与设计|东亚街头与生活杂志|北美流行文化与旧物|跨地域的混搭或数字文化
Which visual culture would you like to explore further?|European dress history and design|East Asian street styles and lifestyle magazines|North American pop culture and vintage objects|Cross-regional or digital culture
collection|1.6|visual|design,subculture,pop,digital
下面哪件事会让你想加入？|研究物件的比例和材质|看小众穿搭如何打破规则|追一段经典的流行穿搭|体验游戏画面或未来空间
Which would you most like to do?|Study the proportion and material of objects|See how alternative fashion breaks rules|Revisit a classic moment in pop fashion|Explore a game world or imagined future
era|1.3|visual|nineteenth,late,today,millennium
为周末挑一个展览。|十九世纪服饰与工艺|二十世纪末音乐与街头文化|当代材质与生活设计|千禧年前后的家用电子
Pick an exhibition for the weekend.|Nineteenth-century dress and craft|Late twentieth-century music and street culture|Contemporary materials and everyday design|Household electronics around the millennium
motif|3.3|visual|victorian rococo coquette gothic jirai baroque,british french americana retro-japan downtown y2k,boho mori zassi earth soft-girl softcore clean-girl minimal,cyberpunk pixel dreamcore abi retrofuture color urban minimalism
哪一种细节让你愿意在衣服或空间里多试一次？|系带、蕾丝和其他细密的装饰|二手材质、旧图案和日常剪裁|自然纤维、圆润边缘和柔和色差|几何形状、半透明或反光部件
What detail would you happily try again in clothes or a room?|Lacing, lace and fine ornament|Secondhand materials, old prints and everyday cuts|Natural fibers, rounded edges and soft contrasts|Geometry, translucency or reflective hardware
`.trim();

const coordinates = ["expression", "detail", "warmth", "future"];
const questionLines = questionSource.split("\n");
const questions = [];
for (let index = 0; index < questionLines.length; index += 3) {
  const [key, weight, group, values] = questionLines[index].split("|");
  questions.push({
    key, weight: Number(weight), group,
    values: values ? values.split(",") : [0, 1.33, 2.67, 4],
    zh: questionLines[index + 1].split("|"),
    en: questionLines[index + 2].split("|")
  });
}
const shortLength = 8;

function rankStyles(answers) {
  const responses = answers.map((choice, index) => ({
    question: questions[index], value: questions[index].values[choice], choice
  }));
  return catalog.map(style => {
    let score = 0;
    const reasons = [];
    for (const response of responses) {
      const { question, value } = response;
      const axis = coordinates.indexOf(question.key);
      let affinity;
      if (axis >= 0) {
        affinity = 1 - Math.abs(value - style.vector[axis]) / 4;
      } else if (question.key === "motif") {
        affinity = value.split(" ").includes(style.id) ? 1 : 0;
      } else {
        affinity = style[question.key] === value ? 1 : 0;
      }
      const contribution = affinity * question.weight;
      score += contribution;
      if (question.group === "visual" && affinity >= .75) reasons.push({ ...response, contribution });
    }
    reasons.sort((a, b) => b.contribution - a.contribution);
    return { style, score, reasons: reasons.slice(0, 2) };
  }).sort((a, b) => b.score - a.score).slice(0, 3);
}
