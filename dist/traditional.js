"use strict";

// Static character mappings for the Chinese copy shipped with the site.
const simplifiedCharacters = "与专业东丝两丽个义为乌乐乔习书买亚产亲仅从们会伞伦体侧兰关兹内写冲冻净准凉几则创别剧办务动劳匀区华单卫厂厅历压参双发变叠台叶号员响哑园围国图圆场坏块坠垫墙壳处备复头夹奥妆妇娅学宁实审宫宽对寻导将尔尝层属帘带帧广应废开张弯强归当录径怀恋戏户扰报择挂损换据摄摆摊敌数无旧时旷显暂术机杀杂条来极构标样梦椭楼榄横橱欢欧气没泼泽洁浅测浏渐渔温灯灵点烛烟爱状独玛环现琅电画盖盘着砖础礼视离种积称笔笼筛签简篮类紧红纤约纪纬纯纱纳纸纹纺纽线练组细织绍经绒结给络绝统绣继续绳维绿缀缎编缘缝缩网罗联肤胆胶脑脚脸舱艳艺节苏荐莱萨蓝藓衬袜装裤见观规览觉计认让议记许设证识诉试话详语说请读课调谱贝质贯贴费贾资赛轨轮软轻较边达过还这进远连迹适选鉴针钉钩钮钴铁铆铜银铺链错键锯镀镂镜长门问闲间阅队阴陈随雾静页顶顺须顿领颗题颜额风饭饰饱馆馈马骚鱼鲜鹅黄齐齿";
const traditionalCharacters = "與專業東絲兩麗個義為烏樂喬習書買亞產親僅從們會傘倫體側蘭關茲內寫沖凍凈準涼幾則創別劇辦務動勞勻區華單衛廠廳歷壓參雙發變疊臺葉號員響啞園圍國圖圓場壞塊墜墊墻殼處備復頭夾奧妝婦婭學寧實審宮寬對尋導將爾嘗層屬簾帶幀廣應廢開張彎強歸當錄徑懷戀戲戶擾報擇掛損換據攝擺攤敵數無舊時曠顯暫術機殺雜條來極構標樣夢橢樓欖橫櫥歡歐氣沒潑澤潔淺測瀏漸漁溫燈靈點燭煙愛狀獨瑪環現瑯電畫蓋盤著磚礎禮視離種積稱筆籠篩簽簡籃類緊紅纖約紀緯純紗納紙紋紡紐線練組細織紹經絨結給絡絕統繡繼續繩維綠綴緞編緣縫縮網羅聯膚膽膠腦腳臉艙艷藝節蘇薦萊薩藍蘚襯襪裝褲見觀規覽覺計認讓議記許設證識訴試話詳語說請讀課調譜貝質貫貼費賈資賽軌輪軟輕較邊達過還這進遠連跡適選鑒針釘鉤鈕鈷鐵鉚銅銀鋪鏈錯鍵鋸鍍鏤鏡長門問閑間閱隊陰陳隨霧靜頁頂順須頓領顆題顏額風飯飾飽館饋馬騷魚鮮鵝黃齊齒";
const traditionalMap = new Map([...simplifiedCharacters].map((character, index) => [character, traditionalCharacters[index]]));
const traditionalPhrases = [
  ["美學坐標", "美學座標"], ["圖鑒", "圖鑑"], ["發尾", "髮尾"], ["發夾", "髮夾"],
  ["發圈", "髮圈"], ["低發髻", "低髮髻"], ["網絡", "網路"], ["通過", "透過"]
];

function toTraditional(value) {
  let output = value.replace(/[\u3400-\u9fff]/g, character => traditionalMap.get(character) || character);
  for (const [source, target] of traditionalPhrases) output = output.replaceAll(source, target);
  return output;
}
