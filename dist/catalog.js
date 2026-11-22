"use strict";

// id | era | region | collection | expression, detail, warmth, futurism | colors
// Paired Chinese and English copy follows each metadata line.
const catalogSource = `
gothic|late|europe|subculture|3,4,0,1|252329,51404d,7c414b,c4bec1
哥特|暗色层次、尖拱和强烈的明暗，让剪裁与材质像舞台布景一样有戏剧感。|黑蕾丝、十字架、尖拱、银饰、天鹅绒|黑色长裙叠半透衬衫，留一处银色吊坠做亮点。|深色玻璃烛台、铁艺镜框、丝绒靠垫|看卡斯帕·大卫·弗里德里希画里的废墟和背光。|哥特式教堂的侧廊、烛光音乐会|The Cure — A Forest
Gothic|Dark layers, pointed arches and deep shadows give silhouette and texture a theatrical presence.|Black lace, crosses, pointed arches, silver, velvet|Layer a sheer black blouse over a long skirt and add one silver pendant.|Smoked glass candlestick, wrought-iron mirror, velvet cushion|Look for ruins and backlighting in Caspar David Friedrich’s paintings.|A Gothic cathedral aisle or a candlelit concert|The Cure — A Forest
victorian|nineteenth|europe|history|2,4,2,0|4d333b,8c6967,bb9e77,ded2b9
维多利亚|从十九世纪英国服饰借来的高领与长线条，重点在结构、层次和细小装饰。|高领、排扣、蕾丝袖口、胸针、灯笼袖|在现代长裙外搭高领衬衫和短背心，用一枚胸针收住细节。|绒面首饰盒、雕花相框、深色木桌|看约翰·辛格·萨金特笔下的礼服如何借光表现质感。|十九世纪的历史宅邸、旧书馆|Kate Bush — Wuthering Heights
Victorian|High collars and long lines borrow from nineteenth-century British dress, with an emphasis on structure and small details.|High collar, button rows, lace cuffs, brooches, puff sleeves|Pair a high-neck blouse and cropped waistcoat with a contemporary maxi skirt. Finish with a brooch.|Velvet jewelry box, carved frame, dark wood desk|Notice how light travels across the fabrics in John Singer Sargent’s portraits.|A nineteenth-century house museum or old library|Kate Bush — Wuthering Heights
rococo|early|europe|history|3,4,3,0|6f5762,bb9a9d,d7bfc2,e8ddbb
洛可可|浅色花纹、不对称曲线和轻盈的层叠，让装饰有亲密、活泼的一面。|贝壳曲线、缎带、碎花、蝴蝶结、褶边|选奶粉色系带上衣和素色半裙，鞋包留一个缎面细节。|花边瓷碟、浅金曲线镜、贝壳形托盘|看弗拉戈纳尔如何让花园里的衣裙和枝叶一起摆动。|十八世纪宫殿的小客厅、花园凉亭|François Couperin — Les Barricades Mystérieuses
Rococo|Pale florals, asymmetric curves and airy layers give ornament a playful, intimate quality.|Shell curves, ribbons, tiny florals, bows, ruffles|Put a powder-pink tie-front blouse with a plain skirt and one satin accessory.|Scalloped porcelain, a curving gilt mirror, a shell-shaped tray|Notice how dresses and foliage seem to move together in Fragonard’s garden scenes.|An eighteenth-century salon or garden pavilion|François Couperin — Les Barricades Mystérieuses
jirai|online|asia|subculture|3,4,2,1|332b32,765c6d,b690a2,e1c5cc
地雷系|以日本街头搭配里的黑粉对比为起点，借高腰和挺括的褶边做出少女感。|黑粉、珍珠排扣、领结、泡泡袖、厚底鞋|粉衬衫搭黑色高腰褶裙和厚底乐福鞋，用细蝴蝶结连接上下色块。|黑粉双配色的收纳盒、珍珠扣小包|借奥布里·比亚兹莱的黑白插画理解轮廓与留白。|日系买手店、夜晚的街边橱窗|Kyary Pamyu Pamyu — PONPONPON
Jirai Kei|Start from the pink-and-black contrast in Japanese street fashion. High waists and crisp ruffles shape a sweet silhouette.|Pink and black, pearl buttons, neck bows, puff sleeves, platforms|Match a pink blouse and black high-waisted pleated skirt with platform loafers and a narrow bow.|A two-tone pink-and-black storage box or a pearl-clasp bag|Use Aubrey Beardsley’s black-and-white illustrations as a silhouette study.|A Japanese fashion boutique or illuminated shop windows|Kyary Pamyu Pamyu — PONPONPON
dreamcore|online|global|digital|2,2,1,3|49555d,829b9a,b6a8ba,dbc9b8
梦核|熟悉的空间里出现一点不合常理的光线、比例或空旷感，像醒来后还记得的一帧。|空泳池、长走廊、薄雾、模糊边缘、错位比例|用雾蓝和灰粉叠穿，试一件半透明外搭或有反光边缘的配饰。|磨砂玻璃灯、半透纱帘、偏冷的夜灯|看乔治·德·基里科画里广场的距离和阴影。|清晨的空泳池、散场后的大厅|Brian Eno — An Ending (Ascent)
Dreamcore|A familiar room with slightly wrong light, scale or emptiness feels like a frame you remember from a dream.|Empty pools, long corridors, fog, blurred edges, wrong scale|Layer fog blue and dusty pink with a translucent top layer or a reflective accessory.|Frosted glass lamp, sheer curtains, cool-toned night light|Study the distances and shadows in Giorgio de Chirico’s painted squares.|An empty pool at dawn or a lobby after closing|Brian Eno — An Ending (Ascent)
cyberpunk|late|global|digital|4,3,0,4|202827,485962,80627f,a68d99
赛博朋克|把暗处的城市、人工照明和可见的技术结构叠在一起，质感比单纯的霓虹更重要。|机能扣、反光线、金属、深色网布、霓虹倒影|炭黑打底，选带拉链的短夹克和灰银包，再加一处冷紫。|拉丝金属灯、透明有色收纳盒、外露螺丝|看白南准的装置怎样把电子设备变成空间的一部分。|雨后商业街、夜间高架下的行人道|Vangelis — Blade Runner soundtrack
Cyberpunk|Night streets, artificial light and exposed hardware share the frame. Texture matters as much as neon.|Utility buckles, reflective trim, metal, dark mesh, reflected neon|Build on charcoal with a zip jacket, a silver-gray bag and one cool violet accent.|A brushed metal lamp or tinted clear storage with exposed screws|See how Nam June Paik makes electronics part of the surrounding space.|A commercial street after rain or a walkway under an overpass at night|Vangelis — Blade Runner soundtrack
y2k|millennium|global|pop|4,2,2,4|615f85,9b8aa9,b6a2bd,d9c1c9
Y2K／千禧风|小尺寸轮廓、亮面材质和消费电子的半透明外壳，留住了世纪之交对未来的想象。|迷你肩包、低腰线、银色、果冻塑胶、细框眼镜|短款上衣配直筒牛仔裤，搭腋下包和一件银色小饰品。|半透明收纳、亮面小镜、翻盖手机造型配件|看村上隆的平面图形如何把明亮颜色压成清晰的色块。|二手唱片店的千禧专柜、老电子商场|Britney Spears — Oops!… I Did It Again
Y2K|Small silhouettes, high shine and translucent electronics capture the turn of the millennium’s imagined future.|Mini shoulder bags, low waistlines, silver, jelly plastic, narrow frames|Pair a cropped top with straight jeans, a shoulder bag and a tiny silver accessory.|Translucent storage, a shiny compact mirror or flip-phone-shaped accessories|Look at how Takashi Murakami turns bright colors into crisp, flat forms.|A millennium-era record bin or an old electronics arcade|Britney Spears — Oops!… I Did It Again
french|mid|europe|retro|2,2,3,0|483639,9f6b64,bda489,e3d7c0
法式复古|偏暖的旧色调、清楚的腰线和少量精致配件，带一点老电影的松弛感。|玛丽珍鞋、丝巾、条纹、方领、红棕皮革|方领针织配高腰牛仔或及膝裙，包或鞋里留一件酒红单品。|有色玻璃杯、藤编椅、细金边镜|看阿涅斯·瓦尔达电影中城市色彩和人物衣着的关系。|有藤椅的街角咖啡馆、艺术影院|Françoise Hardy — Le temps de l’amour
French Vintage|Warm aged colors, a clear waistline and a few polished accessories give an old-cinema ease.|Mary Janes, silk scarves, stripes, square necks, reddish-brown leather|Pair a square-neck knit with high-waisted jeans or a knee-length skirt and one burgundy accessory.|Tinted glass, bistro chairs, a fine gilt mirror|Watch how city colors and clothes interact in Agnès Varda’s films.|A corner café with wicker chairs or an arthouse cinema|Françoise Hardy — Le temps de l’amour
americana|mid|america|retro|3,2,3,1|3d4d57,814943,b19370,e4d6bb
美式复古|旧制服、丹宁和公路餐厅色彩并置，轮廓明快，也经得起天天穿。|丹宁、棒球夹克、格纹、帆布、奶油红|把直筒牛仔和素白 T 恤当底，搭短夹克和帆布鞋。|格纹桌布、搪瓷杯、做旧木质收纳|看爱德华·霍珀如何用窗户和室内灯光表现餐厅。|老式公路餐厅、旧商店招牌街区|Elvis Presley — Blue Suede Shoes
Americana Vintage|Old uniforms, denim and roadside-diner colors share a clear, everyday silhouette.|Denim, varsity jackets, checks, canvas, cream and red|Use straight jeans and a white tee as a base for a short jacket and canvas shoes.|Checked tablecloth, enamel mug, aged wood storage|See how Edward Hopper uses windows and interior light to depict diners.|A roadside diner or a street with surviving shop signs|Elvis Presley — Blue Suede Shoes
british|mid|europe|retro|2,3,2,1|3c3d3e,685847,957d6d,c5b3a2
英伦风|从学院制服和户外剪裁借轮廓，以粗纺和格纹增加层次。|粗花呢、菱格、乐福鞋、风衣、皮革|粗花呢外套配灰色半裙和深棕乐福鞋，格纹集中在一件单品。|格纹毛毯、黄铜阅读灯、硬皮笔记本|从威廉·莫里斯的图案里看规律的重复和野生植物形状。|古书店、砖墙学院庭院|The Kinks — Waterloo Sunset
British Heritage|Campus and country tailoring supply the shape. Tweed and checks add depth.|Tweed, argyle, loafers, trench coats, leather|Combine a tweed jacket, gray skirt and dark loafers. Keep checks to one piece.|Checked wool throw, brass reading lamp, hardback notebook|Look for repeated rhythms and wild plant shapes in William Morris’s patterns.|A secondhand bookshop or a brick college courtyard|The Kinks — Waterloo Sunset
boho|late|global|retro|3,3,4,0|554137,a7785c,b89873,d6c4a7
波西米亚风|用松动的轮廓、织纹和手工痕迹做层次。引用具体文化的图纹时，注意保留它们的来源。|流苏、钩织、缀珠、刺绣、编织|棉麻长裙配钩织背心，把图案集中在一件原料或产地可查的配件。|编织筐、手工染织物、琥珀玻璃|看索尼娅·德劳内如何在纺织品上组织色块与节奏。|手工艺市集、纺织博物馆|Fleetwood Mac — Dreams
Bohemian|Loose silhouettes, woven textures and visible handwork build the layers. Keep the provenance of culturally specific motifs in view.|Fringe, crochet, beads, embroidery, basket weave|Put crochet over a linen-cotton maxi dress and choose one accessory with a traceable maker or source.|Woven basket, hand-dyed textile, amber glass|Notice how Sonia Delaunay creates rhythm from color blocks in textiles.|A makers’ market or textile museum|Fleetwood Mac — Dreams
baroque|early|europe|history|4,4,3,0|2e2227,694b42,937758,ccae7c
巴洛克风|深暗背景上的暖金装饰、方向鲜明的曲线和强对比光线，共同形成宏大的气氛。|镀金、卷草纹、厚重天鹅绒、浮雕、明暗对比|黑丝绒长裙配金色耳饰，衣装里只选一处强反光的材质。|金边镜、螺旋烛台、深底花卉画|卡拉瓦乔的画很适合观察灯光如何集中到手、脸或布料。|有穹顶壁画的教堂、老剧院|Antonio Vivaldi — The Four Seasons
Baroque|Warm gilt against dark grounds, decisive curves and strong directional light make the mood dramatic.|Gilding, scrollwork, heavy velvet, relief, chiaroscuro|Pair a black velvet maxi dress with gold earrings and limit high shine to one place.|Gilt-edge mirror, spiral candlestick, dark-ground floral painting|Watch how Caravaggio directs light onto hands, faces and cloth.|A church with a painted dome or a historic theater|Antonio Vivaldi — The Four Seasons
retro-japan|mid|asia|retro|2,3,4,1|4e4539,836252,a48d57,d5c6a9
日系古早|从昭和时代的老喫茶、印刷和家居借一组暖色，保留让人熟悉的旧材质。|琥珀玻璃、圆灯罩、木纹、奶油苏打、印刷颗粒|用琥珀、苔绿或浅棕搭针织开衫与格裙，配复古圆头鞋。|高脚玻璃杯、木柄餐具、琥珀吊灯|看小津安二郎电影里的低机位与家居陈设。|老喫茶店、保留木招牌的街巷|Mariya Takeuchi — Plastic Love
Retro Japan|Borrow a warm palette from Shōwa-era coffee shops, print and interiors, with surfaces that look pleasingly familiar.|Amber glass, round lamps, wood grain, cream soda, print grain|Use amber, moss or pale brown in a cardigan and checked skirt with rounded shoes.|A stemmed soda glass, wood-handled flatware or amber pendant lamp|Notice low camera angles and domestic objects in Yasujirō Ozu’s films.|An old kissaten or a lane with wooden shop signs|Mariya Takeuchi — Plastic Love
mori|millennium|asia|subculture|1,3,4,0|394942,776b51,a4a189,e0d5bb
森系|让大地色和松动的叠穿融进自然环境，能看见织纹和使用痕迹。|亚麻、苔绿、针织、蕨类、草编、长裙|亚麻长裙搭宽松针织开衫，配哑光棕鞋或帆布包。|亚麻桌布、木勺、小藤筐、植物压花|看碧翠丝·波特如何画苔藓、蕨叶和野花。|林间步道、植物园的蕨类区|Joe Hisaishi — A Town with an Ocean View
Mori Kei|Earth tones and loose layers settle into a woodland palette where weave and wear remain visible.|Linen, moss green, knits, ferns, straw weave, long skirts|Layer a relaxed knit cardigan over a linen maxi dress with matte brown shoes or a canvas bag.|Linen cloth, wooden spoon, wicker basket, pressed leaves|Look at how Beatrix Potter draws moss, ferns and wildflowers.|A woodland path or the fern section of a botanical garden|Joe Hisaishi — A Town with an Ocean View
zassi|millennium|asia|pop|1,1,3,1|424a59,7c8388,b1a58e,dfdbcb
日杂|借日本生活杂志的日常搭配思路，用干净版型和能重复组合的基础色做文章。|蓝白条纹、直筒裤、帆布、白袜、棉布|条纹衫、深蓝直筒裤和白袜做底，在帽子或包上加一处柔和的色彩。|帆布收纳、方格本、简洁琺琅杯|看川内伦子怎样从日常物件和光线里取景。|社区文具店、街边面包房|Lamp — 恋人へ
Japanese Magazine Style|Everyday combinations take cues from Japanese lifestyle magazines: clean cuts and base colors that repeat easily.|Navy stripes, straight trousers, canvas, white socks, cotton|Start with a striped top, navy trousers and white socks, then add a muted color in the cap or bag.|Canvas storage, grid notebook, plain enamel mug|See how Rinko Kawauchi frames everyday objects and light.|A neighborhood stationery shop or corner bakery|Lamp — For Lovers
minimalism|late|global|design|0,0,1,2|3d4140,7b8180,b1b0aa,e4e1d9
极简主义|少色、清晰比例和连续材质，让留出的空间与轮廓一样重要。|留白、直线、窄色谱、平滑、模块|用两种近似色搭一套，留下可辨认的肩线和裤线。|无把手收纳、单色托盘、直筒玻璃杯|看艾格尼丝·马丁的网格中细线、间距和纸面。|安静的现代美术馆、采光清楚的图书馆|Philip Glass — Opening
Minimalism|A narrow palette, clear proportions and continuous materials give empty space as much weight as the outline.|Negative space, straight lines, narrow palette, smooth finishes, modules|Create a two-tone outfit with a defined shoulder and trouser line.|Handleless storage, a monochrome tray, a straight glass|Study the fine lines, spacing and surface in Agnes Martin’s grids.|A quiet modern gallery or a library with clear natural light|Philip Glass — Opening
abi|online|asia|subculture|4,4,1,3|3c3441,65627d,956a83,b8a9a5
亚比|这里把「亚比」作为中文网络穿搭伞形标签，收录有意混搭亚文化元素的造型。|链条、安全别针、渔网、厚底、拼接、金属|保留一件黑色基础单品，用斜裁、银链、不同长度的网纱做层次。|别针拼贴、金属挂饰、混材质小包|看雷蒙德·佩蒂邦如何把插图、文字和反叛的视觉语气拼在一起。|独立音乐场地、二手服装市集|Björk — Army of Me
Yabi|This guide uses Yabi as a broad Chinese internet style label for deliberately mixed alternative-fashion cues.|Chains, safety pins, fishnet, platforms, patchwork, metal|Keep one simple black base piece and layer bias cuts, silver chains and mesh at different lengths.|Pin collage, metal charms, mixed-material bag|See how Raymond Pettibon combines illustration, text and a rebellious visual tone.|An independent music venue or secondhand fashion market|Björk — Army of Me
retrofuture|mid|global|design|3,2,1,4|4b5158,76888a,c0896b,d9d2b7
复古未来|看过去如何想象未来。从太空时代的圆角外壳、流线几何和工业色里找灵感。|太空头盔、圆角塑料、银灰、弧形座椅、轨道线|用象牙白做底，加银灰配件和一件橙棕的几何单品。|蛋形灯罩、圆角小家电、金属圆盘|看维尔纳·潘顿如何用成型材料做出连续曲面。|工业设计馆、保留六十年代展品的科技馆|Kraftwerk — Spacelab
Retrofuturism|Look at the future as the past imagined it: rounded Space Age shells, streamlined forms and industrial colors.|Space helmets, rounded plastic, silver gray, curved chairs, orbital lines|Start with ivory, then add silver-gray accessories and one rust-orange geometric piece.|Egg-shaped lamp, rounded appliance, metal disk tray|Follow the continuous curves Verner Panton created with molded materials.|An industrial design museum or a science gallery with 1960s exhibits|Kraftwerk — Spacelab
coquette|online|global|online|3,4,3,0|66505d,aa818d,d5b4b9,ece1d5
Coquette Girl|将缎带、珍珠和芭蕾细节拆开穿进日常，甜度集中在小面积。|蝴蝶结、珍珠、芭蕾鞋、缎带、细蕾丝|细缎带系在发尾，配奶白开衫、浅粉鞋和简单直线条的裙。|缎带书签、珍珠边小框、奶白首饰盒|看德加如何借鞋带、纱裙和练习室里的侧光表现芭蕾。|有古典座椅的剧院大厅、芭蕾排练厅|Lana Del Rey — Young and Beautiful
Coquette Girl|Ribbons, pearls and ballet details work as small, concentrated touches in everyday outfits.|Bows, pearls, ballet flats, satin ribbons, fine lace|Tie a thin ribbon in your hair and pair a cream cardigan with pale-pink flats and a simple skirt.|Ribbon bookmark, pearl-edge frame, cream jewelry box|Look at shoes, tulle and side light in Degas’s ballet scenes.|A theater foyer with classical seating or a ballet studio|Lana Del Rey — Young and Beautiful
soft-girl|online|global|online|2,2,4,1|716476,b195a6,c8b3bb,ebded5
Soft Girl|低对比的粉、蜜桃和淡紫围出柔和的轮廓，配饰留一点童趣。|淡紫、粉雾色、绒感、爱心、小发夹|蜜桃针织配奶白裤和同色发夹，叠一层柔软棉料。|粉雾布包、圆边相框、绒面发圈|看玛丽·卡萨特的粉彩如何用相近颜色做出光感。|有浅色座椅的花店咖啡馆、春日温室|Clairo — Bags
Soft Girl|Low-contrast pink, peach and pale lavender surround a gentle silhouette with playful accessories.|Lavender, dusty pink, fluff, hearts, small hair clips|Pair a peach knit with cream trousers and a matching clip, then layer in soft cotton.|Powder-pink cloth bag, rounded frame, velvet scrunchie|Study the light Mary Cassatt creates with neighboring pastel shades.|A florist café with pale seating or a spring greenhouse|Clairo — Bags
clean-girl|online|global|online|0,1,2,1|605952,938171,beb0a1,e7dfd4
Clean Girl|用平整的轮廓、接近肤色的中性色和一点点金属光泽组织造型。|低发髻、素白棉、金色小圈、同色叠穿、平整线条|素白上衣配米灰裤，留一对小耳圈或一块手表。|中性色梳妆托盘、乳白毛巾、圆口玻璃瓶|看乔治娅·欧姬芙如何把自然轮廓简化成干净的色面。|光线均匀的晨间咖啡馆、清水混凝土庭院|Sade — Kiss of Life
Clean Girl|Smooth silhouettes, warm neutrals and a little metallic shine bring the look together.|Sleek bun, plain white cotton, small gold hoops, tonal layers, clean lines|Put a white top with taupe trousers and choose small hoops or a watch.|Neutral vanity tray, white towels, rounded glass bottles|See how Georgia O’Keeffe reduces natural outlines into clean areas of color.|An evenly lit morning café or a smooth concrete courtyard|Sade — Kiss of Life
downtown|online|america|online|3,2,1,1|32333d,5f575b,8e7e76,b9a79a
Downtown Girl|旧牛仔、深色皮夹克和唱片店的日常气息，允许小面积不整齐和磨损。|皮夹克、深牛仔、帆布包、旧乐队 T 恤、银饰|黑夹克配直筒牛仔和磨旧球鞋，把银饰留在耳畔或手腕。|皮质小包、二手 CD、深色折叠灯|看帕蒂·史密斯的摄影和写作里如何记录城市的边角。|独立唱片店、地下演出场地|The Strokes — Is This It
Downtown Girl|Worn denim, dark leather and record-shop ease make room for a little scuff and irregularity.|Leather jacket, dark denim, canvas bag, old band tee, silver|Put a black jacket with straight jeans and worn sneakers and keep silver at the ears or wrist.|Small leather bag, secondhand CDs, dark folding lamp|Explore the overlooked city corners in Patti Smith’s photography and writing.|An independent record shop or basement venue|The Strokes — Is This It
softcore|online|global|online|1,1,3,2|6d6879,9f8d9e,bda7af,dfcbca
Softcore|图鉴中的 Softcore 指柔焦、低反差的视觉氛围。像隔着窗帘看日出，细节慢慢浮出。|柔焦、浅雾色、半透明、渐变、细织物|用灰紫、奶粉和亚麻叠两到三层，避免每层都加亮面。|雾面香薰瓶、半透明纱灯、柔边相片|从詹姆斯·特瑞尔的光装置观察色彩无边界的过渡。|薄雾公园、落地纱帘的窗边|Cocteau Twins — Cherry-coloured Funk
Softcore|Softcore here means a soft-focus, low-contrast visual mood, like a sunrise gradually becoming visible through curtains.|Soft focus, misty colors, translucency, gradients, fine cloth|Layer gray-violet, milky pink and linen without introducing shine in every layer.|Frosted bottle, translucent fabric lamp, soft-edged print|Watch color dissolve at the edges of James Turrell’s light installations.|A misty park or a window with gauze curtains|Cocteau Twins — Cherry-coloured Funk
pixel|late|global|digital|4,2,1,4|3f475d,637379,968278,c8b592
像素美学|用有限色板和可见的方格拼出物体，局限本身就构成线条与节奏。|像素网格、八位色、锯齿轮廓、方图标、小马赛克|用一件棋盘格或像素刺绣配素色基础装。|拼豆杯垫、方格收纳、小尺寸数字相框|看苏珊·卡雷怎样用有限像素设计早期电脑图标。|街机博物馆、游戏保存展|Koji Kondo — Super Mario Bros. Ground Theme
Pixel Aesthetic|Visible squares and a limited palette build objects. The limitation creates the outlines and rhythm.|Pixel grid, 8-bit colors, stepped edges, square icons, mosaics|Pair one checkerboard or pixel-embroidered piece with a plain outfit.|Fuse-bead coaster, grid storage, compact digital picture frame|Look at how Susan Kare used a handful of pixels to design early computer icons.|An arcade museum or video game preservation exhibition|Koji Kondo — Super Mario Bros. Ground Theme
minimal|today|asia|design|0,0,3,0|5a584d,999283,bbada0,e4d9c9
静物极简|少量温和颜色，让陶、亚麻和自然光在细微处说话。|留白、柔光、哑光陶、亚麻、低矮轮廓|米白棉衫配浅灰裤与哑光皮鞋，靠织物纹理增加层次。|圆腹矮陶杯、浅托盘、亚麻杯垫|观察乔治·莫兰迪静物中瓶罐之间的留白。|有石材和自然光的庭院美术馆|Erik Satie — Gymnopédie No. 1
Still-Life Minimal|A handful of gentle colors lets clay, linen and natural light speak in small details.|Negative space, soft light, matte clay, linen, low shapes|Pair ivory cotton with pale trousers and matte leather, using weave to build layers.|Low rounded cup, shallow tray, linen coaster|Notice the gaps between vessels in Giorgio Morandi’s still lifes.|A courtyard gallery with stone and natural light|Erik Satie — Gymnopédie No. 1
earth|today|global|design|1,2,4,0|5b4238,897651,a77359,d8c5a4
大地慢调|暖色和有痕迹的表面，让熟悉的物件多一点时间感。|粗陶、橄榄绿、陶土色、胡桃木、天然织物|烟棕或苔绿亚麻搭灯芯绒裤，鞋包选有纹理的皮革或帆布。|宽口粗陶碗、圆角木托盘、布灯罩|从乔治娅·欧姬芙的新墨西哥风景画里挑出三种泥土色。|阿比基乌的欧姬芙故居与工作室、陶艺工坊|Nick Drake — Pink Moon
Earth Tones|Warm color and surfaces that show wear give familiar objects a sense of time.|Rough clay, olive, terracotta, walnut, natural weaves|Match smoky-brown or moss linen with corduroy and textured leather or canvas.|Wide earthenware bowl, rounded wooden tray, cloth lampshade|Pick three earth colors from Georgia O’Keeffe’s New Mexico landscapes.|O’Keeffe’s Abiquiú home and studio or a pottery workshop|Nick Drake — Pink Moon
color|today|global|design|4,3,3,2|4e5889,9a645d,ba9660,d7c3af
彩色游乐场|用清楚的色块、带点幽默的曲线和少量冲突色，让日常物件变得好玩。|撞色、曲线、蘑菇灯、有色玻璃、几何花器|钴蓝上衣搭番茄红小包，中间用牛仔蓝或奶白隔开。|环形花器、彩色蘑菇灯、弧线小凳|看亨利·马蒂斯的剪纸，留意饱和色形状之间的距离。|海报店、独立设计市集|Deee-Lite — Groove Is in the Heart
Color Playground|Clear color blocks, humorous curves and a touch of contrast make ordinary things playful.|Color blocking, curves, mushroom lamps, tinted glass, geometric vases|Pair a cobalt top and tomato-red bag with denim or cream between them.|Ring vase, colored mushroom lamp, curving stool|Look at the gaps between saturated shapes in Henri Matisse’s cut-outs.|A poster shop or an independent design market|Deee-Lite — Groove Is in the Heart
urban|today|global|design|2,0,0,3|343640,646b77,929ba1,c8c6c7
都市冷调|清楚的结构、冷色和反光表面，让单一色系也有张力。|拉丝金属、烟灰玻璃、直剪裁、冷蓝灰|炭黑短外套配灰黑长裤和银饰，用两种灰建立层次。|金属细管灯、直线玻璃托盘、哑光桌布|看唐纳德·贾德如何用外沿和重复单元改变空间感。|由旧厂房改成的展厅、马尔法奇纳蒂基金会|The xx — Intro
Urban Cool|Clear construction, cool shades and reflective surfaces add tension within a narrow palette.|Brushed metal, smoked glass, straight tailoring, blue gray|Put a charcoal jacket with dark gray trousers and silver jewelry, varying the shade of gray.|Metal tube lamp, straight-edged glass tray, matte cloth|See how Donald Judd changes the sense of space with repeated units and their edges.|A converted factory gallery or the Chinati Foundation in Marfa|The xx — Intro
`.trim();

function parseCatalogTranslation(line) {
  const [name, description, elements, outfit, objects, art, place, music] = line.split("|");
  return { name, description, elements, outfit, objects, art, place, music };
}

const catalogLines = catalogSource.split("\n");
const catalog = [];
for (let index = 0; index < catalogLines.length; index += 3) {
  const [id, era, region, collection, vector, palette] = catalogLines[index].split("|");
  catalog.push({
    id, era, region, collection,
    vector: vector.split(",").map(Number),
    palette: palette.split(",").map(color => "#" + color),
    zh: parseCatalogTranslation(catalogLines[index + 1]),
    en: parseCatalogTranslation(catalogLines[index + 2])
  });
}
