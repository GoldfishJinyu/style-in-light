"use strict";

// A style gets a page composition and its own silhouette, ink, and paper.
// Layouts describe how the heading, photograph and palette are arranged.
const themeRows = `
gothic|sanctuary|rose-window|6b4156|ddb2c8|eadbe4
victorian|archive|cameo|61475e|d8b4cf|e9dce4
rococo|salon|shell|835458|eac0c1|f2e0df
jirai|collage|tied-heart|894963|e6a8c3|f0dce7
dreamcore|panorama|portal|594e83|c9bde9|e7e3f2
cyberpunk|terminal|circuit|315a66|a8d6dd|dce9e8
y2k|terminal|spark|69487b|dbc0f0|ece0f1
french|archive|awning|82483e|e5b6a8|eddcd4
americana|panorama|diner|834943|e9b5a9|f0dfd6
british|atelier|stitch|535d3f|c4cea5|e5e8da
boho|textile|tassel|774c3d|e6bdab|ecdfd2
baroque|sanctuary|sunburst|75552e|e6c798|ede2ce
retro-japan|archive|soda|565e36|c9cf9c|e7e9d3
mori|textile|fern|475b3d|c4d5b4|e0e8d8
zassi|ledger|stripe|465c70|b4c9dd|e1e8ec
minimalism|gallery|modules|3e5354|b9ceca|e1e9e6
abi|poster|pin|714c6a|dbb2d4|e9dce7
retrofuture|terminal|orbit|765134|e6bf9c|ebe0d4
coquette|collage|bow|844f64|e5b4ca|f0dce5
soft-girl|salon|petals|795575|dfbbe1|f1e3ef
clean-girl|gallery|hoop|765b42|e1c7a8|eee6d8
downtown|poster|record|5f5148|d7c1b3|e8dfd7
softcore|panorama|mist|685874|d7c3e2|ebe3ee
pixel|terminal|pixel|4e566e|bbc8e8|e2e7f3
minimal|gallery|vessel|655b47|d8c9ab|eee8db
earth|textile|terrace|795437|e4c19e|f1e3d4
color|poster|blocks|774944|e5bab1|ede1dc
urban|ledger|angles|425b66|b2cbd4|dee9ec
`.trim();

const detailThemes = Object.fromEntries(themeRows.split("\n").map(row => {
  const [id, layout, emblem, light, dark, paper] = row.split("|");
  return [id, { layout, emblem, light: "#" + light, dark: "#" + dark, paper: "#" + paper }];
}));
