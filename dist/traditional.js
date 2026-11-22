"use strict";

// Static character mappings for the Chinese copy shipped with the site.
const simplifiedCharacters = "与专业东丝两丽个义为乌乐乔习书买亚产亲仅从们众会伞伦体侧兰关兴兹内写冲冻净准凉几则创别剧动劳匀区华单卫厂厅历压参双发变叠台叶哑园围国图圆场块坠垫墙壳处备复头夹奥妆娅学宁审宫宽对导将尔层属岁帘带帧广废开张强当录恋戏户报择挂损摄摆数无旧时旷显暂术机杂条来极构标样梦榄橱欢欧气没泼泽洁浅测润渐渔温灯灵点烛烟热爱状独玛环现琅电画皱盖盘着砖础礼视离种积称笔笼筛签简类红纤约纪纯纱纳纸纹纺线练组细织经绒结给络绣继绪续维绿缀缎编缘缝缩网肤胶脑脚脸艺节苏荐莱萨蓝藓补衬袜装裤见观规览觉计认讨让记许论设证识试话详语说请读调谱贝质贴费贾资赛轨轮软轻边达过还这进远连迹适选鉴针钟钩钴铁铜银链错锯镀镜镶长问间闹阅队阳阴陈随雾静页顶顿领颗题颜风饰饱馆马验鲜鹅黄齐齿龄";
const traditionalCharacters = "與專業東絲兩麗個義為烏樂喬習書買亞產親僅從們眾會傘倫體側蘭關興茲內寫沖凍凈準涼幾則創別劇動勞勻區華單衛廠廳歷壓參雙發變疊臺葉啞園圍國圖圓場塊墜墊墻殼處備復頭夾奧妝婭學寧審宮寬對導將爾層屬歲簾帶幀廣廢開張強當錄戀戲戶報擇掛損攝擺數無舊時曠顯暫術機雜條來極構標樣夢欖櫥歡歐氣沒潑澤潔淺測潤漸漁溫燈靈點燭煙熱愛狀獨瑪環現瑯電畫皺蓋盤著磚礎禮視離種積稱筆籠篩簽簡類紅纖約紀純紗納紙紋紡線練組細織經絨結給絡繡繼緒續維綠綴緞編緣縫縮網膚膠腦腳臉藝節蘇薦萊薩藍蘚補襯襪裝褲見觀規覽覺計認討讓記許論設證識試話詳語說請讀調譜貝質貼費賈資賽軌輪軟輕邊達過還這進遠連跡適選鑒針鐘鉤鈷鐵銅銀鏈錯鋸鍍鏡鑲長問間鬧閱隊陽陰陳隨霧靜頁頂頓領顆題顏風飾飽館馬驗鮮鵝黃齊齒齡";
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
