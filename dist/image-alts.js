"use strict";

const altRows = `
gothic-window-pinterest.jpg|幽暗石墙中的尖拱窗与窗外枯树林|A pointed Gothic window framing bare winter trees
gothic-angel-pinterest.jpg|雾中墓园里的石雕天使与枯枝|A stone angel among bare branches in a foggy cemetery
hero-1.jpg|画中的灰绿背景、瓶花与桌上的果实|Flowers in a vase and fruit on a table against a gray-green painted backdrop
abi-1.jpg|黑带上密排的银色方铆钉|Silver square studs in close rows on black belts
abi-2.jpg|黑皮夹克上的拉链、缝线和褶痕|Zips, seams and creases in a black leather jacket
americana-1.jpg|老式餐厅里成排的卡座和大窗|A row of booths and broad windows inside an old diner
americana-2.jpg|平放的浅蓝色丹宁夹克|A pale blue denim jacket laid flat
baroque-1.jpg|教堂穹顶中央的金色圆心与放射状纹饰|A gold center surrounded by radiating decoration in a church dome
baroque-2.jpg|浅背景前一篮枝叶和果实|A basket of fruit and leaves against a light painted backdrop
boho-1.jpg|以藤条紧密编成的圆篮|A round basket tightly woven with rattan
boho-2.jpg|深底上密集的红色刺绣饰片|A dark blouse panel with densely stitched red embroidery
british-1.jpg|带纽扣和袋口的灰褐粗花呢局部|Taupe tweed around buttons and a pocket
british-2.jpg|有多格橱窗的书店门面|A bookshop facade with panes full of books
clean-girl-1.jpg|两块白毛巾的织纹和折边|The weave and edges of two folded white towels
clean-girl-2.jpg|暖色表面上的小号金色耳圈|A small gold hoop earring on a warm surface
color-1.jpg|分成方块的多色同心圆画稿|Multicolored concentric circles arranged in squares
color-2.jpg|路面上连续排列的彩色椅子|A line of colorful chairs on pavement
coquette-1.jpg|三位穿粉色舞裙的芭蕾舞者|Three ballet dancers in pink skirts
coquette-2.jpg|展开的黑色尚蒂伊蕾丝折扇|An open fan with black Chantilly lace
coquette-3.jpg|一双带系带的旧舞鞋|A pair of vintage dance slippers with ties
cyberpunk-1.jpg|东京夜街上被彩色灯光照亮的楼面|Building facades lit in several colors on a Tokyo night street
cyberpunk-2.png|香港夜街上层叠的发光招牌|Illuminated signs stacked above a Hong Kong street at night
downtown-1.jpg|独立唱片店所在的街边楼房|A streetfront building housing an independent record shop
downtown-2.jpg|一件有明显褶痕的黑色皮夹克|A visibly creased black leather jacket
dreamcore-1.jpg|蓝色马赛克室内泳池在拱顶下延伸|A blue mosaic indoor pool stretching beneath arches
dreamcore-2.jpg|空旷地铁通道的灯带和远处出口|Strip lighting and a distant exit in an empty metro corridor
earth-1.jpg|斜口的暖褐色陶罐|A warm brown clay jug with an angled mouth
earth-2.jpg|矮身、有镂空边缘的深色陶碗|A low dark earthenware bowl with an openwork edge
french-1.jpg|雨天巴黎咖啡馆外的成排椅子|Rows of café chairs outdoors in rainy Paris
french-2.jpg|收腰并带宽裙幅的深色连衣裙|A dark dress with a defined waist and wide skirt
gothic-1.jpg|浅底上透空的黑色花边蕾丝|Open black floral lace on a light ground
gothic-2.jpg|长教堂中殿里的连续尖拱|Repeated pointed arches along a cathedral nave
jirai-1.jpg|街头服饰店的橱窗与黑色叠搭|A street-fashion shop window displaying dark layered looks
jirai-2.jpg|在白底上摊开的粉色缎带蝴蝶结|A pink satin bow on a white background
jirai-3.jpg|一双黑色镂空短手套|A pair of short black openwork gloves
minimal-1.jpg|灰色桌面上留有空白的一只白釉碗|One white glazed bowl with space around it on a gray surface
minimal-2.jpg|一只茶碗与配套茶碟|A tea bowl and matching saucer
minimalism-1.jpg|水面边有清晰矩形轮廓的低层建筑|A low rectilinear building beside water
minimalism-2.jpg|浅背景前的茶碗与浅碟|A tea bowl and shallow saucer on a light background
mori-1.jpg|被苔藓覆住的枝干横在林中步道附近|Moss-covered branches near a woodland footpath
mori-2.jpg|米色亚麻的细密经纬纹理|The close warp and weft of beige linen
pixel-1.png|用蓝、绿和黄像素拼出的方格风景|A blocky landscape in blue, green and yellow pixels
pixel-2.jpg|有十字键和红色按钮的旧游戏手柄|A vintage game controller with a directional pad and red buttons
retro-japan-1.jpg|日本咖啡馆橱窗里的模型餐点|Food models in a Japanese café display window
retro-japan-2.jpg|杯中绿色苏打上浮着浅色冰淇淋|Pale ice cream floating in a glass of green soda
retrofuture-1.jpg|穿太空服的阿波罗宇航员站在月面|An Apollo astronaut in a spacesuit standing on the lunar surface
retrofuture-2.jpg|展柜里反光的金色圆顶头盔面罩|A reflective gold curved helmet visor in a museum case
rococo-1.jpg|展厅里宽裙幅的浅粉法式长袍|A pale pink French gown with a wide skirt in a gallery
rococo-2.jpg|带浅色雕饰和弯腿座椅的历史客厅|A historic salon with pale ornament and curved chair legs
soft-girl-1.jpg|柔软层叠的粉色山茶花花瓣|Soft overlapping petals on a pink camellia
soft-girl-2.jpg|画中宽檐的粉色帽子|A broad-brimmed pink hat in a painting
softcore-1.jpg|晨雾覆盖水面，远处是灰粉天空|Mist over water beneath a dusty pink sky
softcore-2.jpg|玻璃窗后漫开的微弱夜光|Soft night lights seen through window glass
urban-1.jpeg|冷灰混凝土建筑的几何结构和阴影|Geometric forms and shadows on a cool concrete building
urban-2.jpg|由金属管形成连续线条的座椅|Seating with continuous lines made of tubular metal
victorian-1.jpg|深色上身与长裙组成的维多利亚步行服|Victorian walking dress with a dark bodice and long skirt
victorian-2.jpg|椭圆形黑色哀悼胸针|An oval black mourning brooch
y2k-pink-electronics.png|镶水钻的粉色翻盖手机和两台数码相机|A pink rhinestone-covered flip phone and two digital cameras
y2k-pink-polka-dot-bag.png|粉色波点肩包、数码相机、粉色眼镜和随身小物|A pink polka-dot shoulder bag with a digital camera, pink glasses and everyday accessories
y2k-1.jpg|手掌上的亮粉色翻盖手机|A glossy pink flip phone held in a hand
y2k-2.jpg|半透明浅蓝外壳的旧掌机|A vintage handheld console with a translucent blue shell
zassi-1.jpg|蓝白条纹棉衫的局部|A close view of blue and white stripes on a cotton top
zassi-2.jpg|店铺展架上排列的日本文具|Japanese stationery arranged on shop shelves
`.trim();
const imageAlts = Object.fromEntries(altRows.split("\n").map(row => {
  const [file, zh, en] = row.split("|");
  return [file, [zh, en]];
}));
