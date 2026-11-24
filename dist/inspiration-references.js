// Each place is a concrete example of the atmosphere described in the guide.
const inspirationReferences = {
  gothic: {
    music: "https://music.apple.com/us/album/a-forest/65619601?i=65619482",
    art: "https://www.metmuseum.org/exhibitions/listings/2001/caspar-david-friedrich",
    place: { name: ["伦敦威斯敏斯特教堂", "Westminster Abbey, London"], url: "https://www.westminster-abbey.org/visit-us" },
    film: "https://www.20thcenturystudios.com/movies/edward-scissorhands"
  },
  victorian: {
    music: "https://music.apple.com/us/album/wuthering-heights/1675380115?i=1675380129",
    art: "https://www.metmuseum.org/art/collection/search/12127",
    place: { name: ["纽约下东区公寓博物馆", "Tenement Museum, New York"], url: "https://www.tenement.org/" },
    film: "https://www.criterion.com/films/28834-the-age-of-innocence"
  },
  rococo: {
    music: "https://music.apple.com/us/album/fran%C3%A7ois-couperin-les-barricades-myst%C3%A9rieuses/1616214369?i=1616214370",
    art: "https://www.wallacecollection.org/explore/collection/search-the-collection/les-hazards-heureux-de-lescarpolette-swing/",
    place: { name: ["凡尔赛宫小特里亚农宫", "Petit Trianon, Versailles"], url: "https://en.chateauversailles.fr/discover/estate/estate-trianon/petit-trianon" },
    film: "https://www.sonypictures.com/movies/marieantoinette"
  },
  jirai: {
    music: "https://music.apple.com/us/album/ponponpon/453461911?i=453461914",
    art: "https://www.metmuseum.org/art/collection/search/345737",
    place: { name: ["东京涩谷 SHIBUYA109", "SHIBUYA109, Tokyo"], url: "https://www.shibuya109.jp/" },
    film: "https://thirdwindowfilms.com/films/kamikaze-girls/"
  },
  dreamcore: {
    music: "https://music.apple.com/us/album/an-ending-ascent/714861155?i=714861225",
    art: "https://www.moma.org/artists/1106-giorgio-de-chirico",
    place: { name: ["赫斯特城堡罗马泳池", "Roman Pool, Hearst Castle"], url: "https://hearstcastle.org/the-castle/pools/" },
    film: "https://www.ghibli.jp/works/chihiro/"
  },
  cyberpunk: {
    music: "https://music.apple.com/us/album/blade-runner-original-score-from-the-motion-picture/73327394",
    art: "https://americanart.si.edu/artist/nam-june-paik-3670",
    place: { name: ["东京新宿歌舞伎町", "Kabukichō, Tokyo"], url: "https://www.japan.travel/en/spot/1668/" },
    film: "https://www.warnerbros.com/movies/blade-runner"
  },
  y2k: {
    music: "https://music.apple.com/us/album/oops-i-did-it-again/267954486?i=267954487",
    art: "https://gagosian.com/artists/takashi-murakami/",
    place: { name: ["东京秋叶原", "Akihabara, Tokyo"], url: "https://www.gotokyo.org/en/destinations/central-tokyo/akihabara/index.html" },
    film: "https://www.paramountmovies.com/movies/clueless"
  },
  french: {
    music: "https://music.apple.com/us/album/le-temps-de-lamour/1732748481?i=1732748487",
    art: "https://www.cine-tamaris.fr/",
    place: { name: ["巴黎 Le Champo 影院", "Le Champo cinema, Paris"], url: "https://www.cinema-lechampo.com/le-champo.html" },
    film: "https://www.criterion.com/films/27933-the-umbrellas-of-cherbourg"
  },
  americana: {
    music: "https://music.apple.com/us/album/blue-suede-shoes/671019373?i=671019789",
    art: "https://www.artic.edu/artworks/111628/nighthawks",
    place: { name: ["纽约州 Roscoe Diner", "Roscoe Diner, New York"], url: "https://www.roscoediner.com/" },
    film: "https://www.universalpicturesathome.com/movies/american-graffiti"
  },
  british: {
    music: "https://music.apple.com/us/album/waterloo-sunset/1436246864?i=1436246985",
    art: "https://www.vam.ac.uk/articles/william-morris-and-wallpaper-design",
    place: { name: ["伦敦 Skoob 二手书店", "Skoob Books, London"], url: "https://www.skoob.com/" },
    film: "https://www.criterion.com/films/28597-a-room-with-a-view"
  },
  boho: {
    music: "https://music.apple.com/us/album/dreams/202271826?i=202272624",
    art: "https://www.cooperhewitt.org/design-topics/women-in-design/sonia-delaunay/",
    place: { name: ["华盛顿乔治华盛顿大学纺织博物馆", "The Textile Museum, Washington, D.C."], url: "https://museum.gwu.edu/" },
    film: "https://www.paramountmovies.com/movies/almost-famous"
  },
  baroque: {
    music: "https://music.apple.com/us/album/vivaldi-the-four-seasons/1880768330",
    art: "https://www.nationalgallery.org.uk/artists/michelangelo-merisi-da-caravaggio",
    place: { name: ["罗马耶稣教堂", "Church of the Gesù, Rome"], url: "https://turismoroma.it/en/places/church-jesus" },
    film: "https://www.criterion.com/films/29008-barry-lyndon"
  },
  "retro-japan": {
    music: "https://www.youtube.com/watch?v=T_lC2O1oIew",
    art: "https://www.criterion.com/shop/browse?director=ozu-yasujiro",
    place: { name: ["东京神保町 さぼうる 咖啡馆", "Sabouru kissaten, Tokyo"], url: "https://www.openstreetmap.org/search?query=Sabouru%20Jimbocho" },
    film: "https://www.criterion.com/films/784-an-autumn-afternoon"
  },
  mori: {
    music: "https://music.apple.com/us/album/a-town-with-an-ocean-view/882658777?i=882658780",
    art: "https://www.vam.ac.uk/collections/beatrix-potter",
    place: { name: ["伦敦邱园进化园", "Evolution Garden, Kew Gardens"], url: "https://www.kew.org/read-and-watch/11-things-about-evolution-garden" },
    film: "https://www.ghibli.jp/works/majo/"
  },
  zassi: {
    music: "https://music.apple.com/us/album/for-lovers/1486281113?i=1486281115",
    art: "https://rinkokawauchi.com/en/",
    place: { name: ["东京银座伊东屋", "Ginza Itoya, Tokyo"], url: "https://www.ito-ya.co.jp/ext/store/ginza/ginza/index.html" },
    film: "https://www.sonyclassics.com/ourlittlesister/"
  },
  minimalism: {
    music: "https://music.apple.com/us/album/opening/203258539?i=203258554",
    art: "https://www.guggenheim.org/exhibition/agnes-martin",
    place: { name: ["纽约 Dia Beacon 美术馆", "Dia Beacon, New York"], url: "https://www.diaart.org/visit/visit-our-locations-sites/dia-beacon-beacon-united-states" },
    film: "https://www.neonrated.com/film/perfect-days"
  },
  abi: {
    music: "https://music.apple.com/us/album/army-of-me/300205609?i=300205685",
    art: "https://www.moma.org/artists/7500-raymond-pettibon",
    place: { name: ["纽约 Bowery Ballroom", "Bowery Ballroom, New York"], url: "https://boweryballroom.com/" },
    film: "https://www.criterion.com/films/535-sid-nancy"
  },
  retrofuture: {
    music: "https://music.apple.com/us/album/spacelab/726157248?i=726157348",
    art: "https://www.verner-panton.com/",
    place: { name: ["伦敦设计博物馆", "Design Museum, London"], url: "https://designmuseum.org/" },
    film: "https://www.warnerbros.com/movies/2001-space-odyssey"
  },
  coquette: {
    music: "https://music.apple.com/us/album/young-and-beautiful/1440856860?i=1440857081",
    art: "https://www.metmuseum.org/art/collection/search/438817",
    place: { name: ["巴黎加尼叶歌剧院", "Palais Garnier, Paris"], url: "https://www.operadeparis.fr/en/visits/palais-garnier" },
    film: "https://www.criterion.com/films/233-the-red-shoes"
  },
  "soft-girl": {
    music: "https://music.apple.com/us/album/bags/1893175128?i=1893175134",
    art: "https://www.nga.gov/stories/articles/mary-cassatt-daring-printmaker",
    place: { name: ["纽约植物园温室", "Enid A. Haupt Conservatory, New York"], url: "https://www.nybg.org/garden/conservatory/" },
    film: "https://www.sonypictures.com/movies/littlewomen"
  },
  "clean-girl": {
    music: "https://music.apple.com/us/album/kiss-of-life/158796559?i=158796603",
    art: "https://access-ok.okeeffemuseum.org/object/8546/",
    place: { name: ["巴黎联合国教科文组织冥想空间", "UNESCO Meditation Space, Paris"], url: "https://house.unesco.org/en/building" },
    film: "https://www.warnerbros.com/movies/intern"
  },
  downtown: {
    music: "https://music.apple.com/us/album/is-this-it/266376953?i=266376961",
    art: "https://www.pattismith.net/",
    place: { name: ["纽约 Rough Trade 唱片店", "Rough Trade, New York"], url: "https://www.rockefellercenter.com/shops/rough-trade/" },
    film: "https://www.criterion.com/films/28560-frances-ha"
  },
  softcore: {
    music: "https://music.apple.com/us/album/cherry-coloured-funk/258198881?i=258198956",
    art: "https://jamesturrell.com/",
    place: { name: ["旧金山金门公园", "Golden Gate Park, San Francisco"], url: "https://sfrecpark.org/1119/Golden-Gate-Park" },
    film: "https://www.criterion.com/films/198-in-the-mood-for-love"
  },
  pixel: {
    music: "https://music.apple.com/us/song/1454283639",
    art: "https://www.moma.org/collection/works/188396",
    place: { name: ["英国国家电子游戏博物馆", "National Videogame Museum, Sheffield"], url: "https://thenvm.org/" },
    film: "https://movies.disney.com/wreck-it-ralph"
  },
  minimal: {
    music: "https://music.apple.com/us/album/gymnop%C3%A9die-no-1/1452274910?i=1452276834",
    art: "https://www.moma.org/calendar/exhibitions/1848",
    place: { name: ["京都庭园美术馆 Garden of Fine Arts", "Garden of Fine Arts, Kyoto"], url: "https://kyoto-museums.city.kyoto.lg.jp/en/museum/637/" },
    film: "https://www.criterion.com/films/27540-still-walking"
  },
  earth: {
    music: "https://www.youtube.com/watch?v=ZgHdUeMHTwc",
    art: "https://www.okeeffemuseum.org/exhibitions/georgia-okeeffe-ghost-ranch-views/",
    place: { name: ["新墨西哥州欧姬芙故居与工作室", "O’Keeffe Home and Studio, Abiquiú"], url: "https://www.okeeffemuseum.org/visit/home-studio/" },
    film: "https://www.sonypictures.com/movies/kikujiro"
  },
  color: {
    music: "https://music.apple.com/us/album/groove-is-in-the-heart/72794068?i=72793857",
    art: "https://www.moma.org/calendar/exhibitions/1429",
    place: { name: ["纽约海报博物馆 Poster House", "Poster House, New York"], url: "https://posterhouse.org/" },
    film: "https://www.searchlightpictures.com/thegrandbudapesthotel/"
  },
  urban: {
    music: "https://music.apple.com/us/album/intro/1850810462?i=1850810463",
    art: "https://juddfoundation.org/donald-judd/art/",
    place: { name: ["马尔法奇纳蒂基金会", "The Chinati Foundation, Marfa"], url: "https://chinati.org/visit/" },
    film: "https://www.warnerbros.com/movies/her"
  }
};
