# 美学坐标

一个从穿搭、物件、艺术和音乐探索个人美学的静态网站。[打开已部署的网站](https://goldfishjinyu.github.io/style-in-light/)

- 风格图鉴包含 28 种风格，可按时代、地区和类别筛选，也可搜索中英文风格名和元素。时代与地区是编辑归类，表示主要灵感语境。
- 短测 8 题，长测 16 题。根据性格表达与审美偏好推荐三种风格。昵称用于称呼，年龄段和性别是可以跳过的资料。
- 提供简体中文、繁体中文、English 及浅色、深色两种界面。语言和主题保存在浏览器中，刷新页面会清空问卷答案。

双击 `dist/index.html` 本地预览。网站使用原生 HTML、CSS 和 JavaScript。推送到 `main` 会触发 GitHub Actions 将 `dist` 发布到 GitHub Pages。

## 内容和授权

- `dist/catalog.js` 包含中英文图鉴内容、分组和风格向量。`dist/questions.js` 包含中英文问卷和推荐逻辑。
- `dist/images.js` 记录真实素材的 Wikimedia Commons 源文件、作者和许可。网站页脚的「图片与字体来源」和各风格详情页提供可核查的署名与链接。图片作为编辑参考，部分封面裁切，文件为网页缩放或压缩。
- `dist/fonts/` 包含本地托管的 DM Sans、DM Serif Display、Noto Serif SC 和 Noto Serif TC 以及对应的 SIL 开放字体许可证。中文标题字体包含网站文案所用字符的子集，其他字符使用系统字体。
