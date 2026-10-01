(() => {
  'use strict';
  const languages = {
    en: {
      lang:'en', name:'English', menu:'Menu', skip:'Skip to content', nav:['THE GAME','FEATURES','GALLERY','OTHER PROJECTS','STEAM'],
      tagline:'Hold the line. Build your power.', intro:'A fast-paced third-person roguelite shooter.\nUpgrade your weapons and combine powerful skills to survive relentless waves.', aboutLead:'New choices.\nNew ways to survive.', aboutBody:'Choose weapons with distinct combat styles and level up during battle. Combine upgrades, passive abilities and Core Skills to create your own build against increasingly dangerous waves. Short, replayable sessions bring fresh combinations with every run.',
      cta:'Wishlist on Steam', explore:'Explore the game', store:'View store', steamNote:'HEAVENBREAK on Steam', steamMessage:'Discover HEAVENBREAK and follow the latest updates on Steam.',
      headings:['Meet HEAVENBREAK.','Inside the game.','A closer look.','Watch HEAVENBREAK.','Your next stop. HEAVENBREAK.','More from GPUN.'],
      featureIntro:'The core of HEAVENBREAK', features:[['HOLD THE LINE','Survive the waves','Take on relentless enemies in fast-paced third-person combat. Every wave raises the stakes.'],['BUILD YOUR POWER','Create your own build','Combine weapons, level-up upgrades, passive abilities and powerful Core Skills to shape your combat style.'],['ONE MORE RUN','Make every run count','Jump into short, replayable sessions and discover new strategies through changing choices and combinations.']],
      galleryIntro:'HEAVENBREAK screenshots', captions:['Character close-up','Third-person shooting','Mirror Disruption','Steel Rain','Wave survival'],
      videoIntro:'Gameplay trailer', videoFallback:'Your browser cannot play this video.', download:'Download video', enlarge:'View full size +', prev:'Previous', next:'Next', close:'Close', pending:'Coming soon',
      otherIntro:'Another world. Another experience.', projectText:'Another GPUN project, combining subculture aesthetics with mechanical action.', projectLink:'Explore TERRARIUM', development:'IN DEVELOPMENT', company:'Creating games that players around the world will remember.', footer:['About GPUN ↗','Media / News ↗','GPUN website ↗','Contact ↗'], top:'BACK TO TOP ↑', galleryTitle:'HEAVENBREAK / GALLERY',
      description:'HEAVENBREAK by GPUN: a third-person roguelite shooter featuring wave survival and powerful builds.'
    },
    ko: {
      lang:'ko', name:'한국어', menu:'메뉴', skip:'본문으로 이동', nav:['게임 소개','핵심 특징','갤러리','다른 프로젝트','STEAM'],
      tagline:'몰려오는 적을 막아라. 나만의 빌드로 살아남아라.', intro:'빠른 템포의 3인칭 로그라이트 슈터.\n무기를 강화하고, 강력한 스킬을 조합하며 끝없이 밀려오는 웨이브에 맞서세요.', aboutLead:'매번 새로운 선택.\n매번 새로운 생존 전략.', aboutBody:'서로 다른 전투 스타일의 무기를 선택하고 전투 중 레벨을 올려보세요. 업그레이드, 패시브와 코어 스킬을 조합해 점점 거세지는 웨이브에 맞설 나만의 빌드를 완성합니다. 짧고 반복해서 즐길 수 있는 전투가 매 플레이마다 새로운 조합을 선사합니다.',
      cta:'Steam에서 찜하기', explore:'게임 알아보기', store:'스토어 바로가기', steamNote:'HEAVENBREAK Steam 스토어', steamMessage:'Steam에서 HEAVENBREAK의 최신 정보를 확인하세요.',
      headings:['HEAVENBREAK를 만나다.','게임의 핵심.','더 가까이 만나다.','HEAVENBREAK 영상.','다음은 HEAVENBREAK.','GPUN의 다른 프로젝트.'],
      featureIntro:'HEAVENBREAK의 핵심 경험', features:[['HOLD THE LINE','웨이브를 돌파하는 전투','빠른 템포의 3인칭 슈팅으로 끊임없이 밀려오는 적에 맞서세요. 웨이브가 거세질수록 생존을 위한 선택이 중요해집니다.'],['BUILD YOUR POWER','나만의 빌드 완성','다양한 무기와 레벨업 업그레이드를 조합하세요. 강력한 패시브와 코어 스킬이 전투 스타일을 바꿉니다.'],['ONE MORE RUN','다시 도전하는 즐거움','짧고 반복해서 즐기기 좋은 전투 세션. 매번 달라지는 선택과 조합으로 새로운 생존 전략을 발견하세요.']],
      galleryIntro:'HEAVENBREAK 게임 스크린샷', captions:['캐릭터 클로즈업','3인칭 슈팅 전투','Mirror Disruption','Steel Rain','웨이브 생존 전투'],
      videoIntro:'게임플레이 트레일러', videoFallback:'이 브라우저에서는 영상을 재생할 수 없습니다.', download:'영상 다운로드', enlarge:'확대 보기 +', prev:'이전', next:'다음', close:'닫기', pending:'준비 중',
      otherIntro:'또 다른 세계, 또 다른 경험.', projectText:'서브컬처의 감성과 메카닉 액션을 결합한 GPUN의 또 다른 프로젝트.', projectLink:'TERRARIUM 알아보기', development:'개발 중', company:'전 세계 유저가 오래 기억할 게임을 만듭니다.', footer:['GPUN 소개 ↗','미디어 / 소식 ↗','GPUN 홈페이지 ↗','문의하기 ↗'], top:'맨 위로 ↑', galleryTitle:'HEAVENBREAK / 갤러리',
      description:'HEAVENBREAK는 GPUN의 3인칭 로그라이트 슈터입니다. 웨이브 생존 전투와 나만의 빌드를 만나보세요.'
    },
    ja: {
      lang:'ja', name:'日本語', menu:'メニュー', skip:'本文へ移動', nav:['ゲーム紹介','ゲームの特徴','ギャラリー','その他の作品','STEAM'],
      tagline:'押し寄せる敵を迎え撃て。自分だけのビルドで生き残れ。', intro:'ハイテンポな三人称ローグライトシューター。\n武器を強化し、強力なスキルを組み合わせて、次々と迫るウェーブに立ち向かおう。', aboutLead:'新たな選択。\n新たな生存戦略。', aboutBody:'異なる戦闘スタイルを持つ武器を選び、戦闘中にレベルアップ。アップグレード、パッシブ能力、コアスキルを組み合わせ、激しさを増すウェーブに挑む自分だけのビルドを作り上げよう。短時間で繰り返し楽しめる戦闘では、プレイするたびに新しい組み合わせが生まれる。',
      cta:'Steamでウィッシュリストに追加', explore:'ゲームを知る', store:'ストアを見る', steamNote:'HEAVENBREAK Steamストア', steamMessage:'SteamでHEAVENBREAKの最新情報をチェックしよう。',
      headings:['HEAVENBREAKとは。','ゲームの特徴。','もっと近くで。','HEAVENBREAKの映像。','次はHEAVENBREAKへ。','GPUNのその他の作品。'],
      featureIntro:'HEAVENBREAKのゲーム体験', features:[['HOLD THE LINE','ウェーブを生き抜く戦闘','ハイテンポな三人称シューティングで、押し寄せる敵を迎え撃とう。ウェーブが進むほど、生き残るための選択が重要になる。'],['BUILD YOUR POWER','自分だけのビルド','多彩な武器とレベルアップ時の強化を組み合わせよう。強力なパッシブ能力とコアスキルが戦闘スタイルを変える。'],['ONE MORE RUN','何度でも挑戦','短時間で繰り返し楽しめる戦闘。変化する選択肢と組み合わせから、新たな生存戦略を見つけよう。']],
      galleryIntro:'HEAVENBREAK スクリーンショット', captions:['キャラクターのクローズアップ','三人称シューティング','Mirror Disruption','Steel Rain','ウェーブサバイバル'],
      videoIntro:'ゲームプレイトレーラー', videoFallback:'このブラウザーでは動画を再生できません。', download:'動画をダウンロード', enlarge:'拡大表示 +', prev:'前へ', next:'次へ', close:'閉じる', pending:'準備中',
      otherIntro:'もう一つの世界、もう一つの体験。', projectText:'サブカルチャーの感性とメカニックアクションを融合させた、GPUNのもう一つのプロジェクト。', projectLink:'TERRARIUMを見る', development:'開発中', company:'世界中のプレイヤーの記憶に残るゲームをつくります。', footer:['GPUNについて ↗','メディア / ニュース ↗','GPUN公式サイト ↗','お問い合わせ ↗'], top:'ページ上部へ ↑', galleryTitle:'HEAVENBREAK / ギャラリー',
      description:'GPUNのHEAVENBREAKは、ウェーブサバイバルとビルド構築を楽しめる三人称ローグライトシューターです。'
    },
    zh: {
      lang:'zh-Hans', name:'简体中文', menu:'菜单', skip:'跳转到正文', nav:['游戏介绍','核心特色','图库','其他项目','STEAM'],
      tagline:'迎击来袭之敌。打造专属流派，生存到底。', intro:'快节奏第三人称轻度 Rogue 射击游戏。\n强化武器，组合强大技能，迎战源源不断的敌人。', aboutLead:'每次都有新选择。\n每次都有新策略。', aboutBody:'选择战斗风格各异的武器，在战斗中升级。组合强化效果、被动能力与核心技能，打造专属流派，对抗越来越危险的敌人波次。每局战斗短小精悍，适合反复挑战，每次游玩都能探索新的组合。',
      cta:'在 Steam 上加入愿望单', explore:'了解游戏', store:'前往商店', steamNote:'HEAVENBREAK Steam 商店', steamMessage:'前往 Steam，查看 HEAVENBREAK 的最新消息。',
      headings:['认识 HEAVENBREAK。','游戏核心。','近距离一览。','HEAVENBREAK 视频。','下一站，HEAVENBREAK。','GPUN 的其他项目。'],
      featureIntro:'HEAVENBREAK 的核心体验', features:[['HOLD THE LINE','迎战敌人波次','在快节奏第三人称射击战斗中迎击源源不断的敌人。波次越凶猛，生存选择越重要。'],['BUILD YOUR POWER','打造专属流派','组合多种武器与升级强化。强大的被动能力和核心技能将改变你的战斗风格。'],['ONE MORE RUN','再来一局','短小精悍、适合反复挑战的战斗。通过不断变化的选择与组合，发现新的生存策略。']],
      galleryIntro:'HEAVENBREAK 游戏截图', captions:['角色特写','第三人称射击战斗','Mirror Disruption','Steel Rain','波次生存战斗'],
      videoIntro:'实机演示视频', videoFallback:'此浏览器无法播放该视频。', download:'下载视频', enlarge:'查看大图 +', prev:'上一张', next:'下一张', close:'关闭', pending:'准备中',
      otherIntro:'另一个世界，另一种体验。', projectText:'GPUN 的另一个项目，将二次元美学与机甲动作相结合。', projectLink:'了解 TERRARIUM', development:'开发中', company:'打造让全球玩家长久铭记的游戏。', footer:['关于 GPUN ↗','媒体 / 新闻 ↗','GPUN 官网 ↗','联系我们 ↗'], top:'返回顶部 ↑', galleryTitle:'HEAVENBREAK / 图库',
      description:'GPUN 的 HEAVENBREAK 是一款第三人称轻度 Rogue 射击游戏，包含波次生存战斗与多样流派构筑。'
    }
  };
  const story = {
    en: {title:'A place to return to.',intro:'49 days. One promise.',quote:'“Hold on for seven weeks. I’ll return on the morning of day fifty.”',body:'After the lord leaves for Terrarium, Shelter: HEAVEN stands isolated on the northern frontier. Supplies and support have stopped. Chii and Lisa face relentless Riptor attacks, holding on to the promise of his return.',closing:'Keep the shelter standing. Keep a place for him to come home to.',chiiRole:'SHELTER OPERATOR',chiiName:'Chii',chiiBody:'A government-dispatched operator who keeps the shelter running. Meticulous and composed, she hides a caring heart behind her cool manner.',lisaRole:'VETERAN NAU',lisaName:'Lisa',lisaBody:'The shelter’s most experienced Nau. Brave and quick to judge a battlefield, she holds the line while waiting for the lord’s return.'},
    ko: {title:'돌아올 사람을 위해, 돌아올 곳을 지킨다.',intro:'49일. 단 하나의 약속.',quote:'“7주만 버텨. 50일째 아침에는 내가 돌아온다.”',body:'가주가 테라리움으로 떠난 뒤, 북부 오지의 셸터 헤븐은 고립됩니다. 보급도 지원도 끊긴 그곳에서 치이와 리사는 가주의 귀환 약속을 믿고 몰려드는 립터의 공격에 맞섭니다.',closing:'그가 돌아왔을 때, 돌아올 곳이 남아 있도록.',chiiRole:'셸터 오퍼레이터',chiiName:'치이',chiiBody:'정부에서 파견되어 셸터의 운영을 맡은 오퍼레이터. 꼼꼼하고 침착한 태도 뒤에 누구보다 깊은 정을 품고 있습니다.',lisaRole:'베테랑 나우',lisaName:'리사',lisaBody:'셸터에서 가장 오랜 경력을 가진 나우. 용감하고 현장 판단이 뛰어난 그녀는 가주가 돌아올 날을 기다리며 방어선을 지킵니다.'},
    ja: {title:'帰る人のために、帰る場所を守る。',intro:'49日間。たった一つの約束。',quote:'「7週間、持ちこたえてくれ。50日目の朝には戻る。」',body:'当主がテラリウムへ旅立った後、北方の辺境にあるシェルター・ヘヴンは孤立する。補給も支援も途絶えた中、チイとリサは帰還の約束を信じ、押し寄せるリプターに立ち向かう。',closing:'彼が戻った時、帰る場所が残っているように。',chiiRole:'シェルターのオペレーター',chiiName:'チイ',chiiBody:'政府から派遣され、シェルターの運営を担うオペレーター。几帳面で冷静な態度の奥に、誰よりも深い思いやりを秘めている。',lisaRole:'ベテランのナウ',lisaName:'リサ',lisaBody:'シェルターで最も長い経験を持つナウ。勇敢で現場判断に優れ、当主の帰還を待ちながら防衛線を守る。'},
    zh: {title:'为归来的人，守住归来的地方。',intro:'49天。一个承诺。',quote:'“坚持七周。第50天的早晨，我会回来。”',body:'家主前往泰拉瑞姆后，北方偏远地区的避难所 HEAVEN 陷入孤立。补给与支援全部中断，Chii 与 Lisa 相信家主归来的承诺，迎战不断涌来的 Riptor。',closing:'当他归来时，仍有一个可以回去的地方。',chiiRole:'避难所操作员',chiiName:'Chii',chiiBody:'由政府派遣，负责避难所运行的操作员。严谨、沉着的外表之下，藏着比任何人都深厚的关怀。',lisaRole:'资深 Nau',lisaName:'Lisa',lisaBody:'避难所中资历最深的 Nau。勇敢且擅长战场判断，在等待家主归来的日子里坚守防线。'}
  };
  let saved;
  try { saved = localStorage.getItem('heavenbreak-language'); } catch (_) {}
  const requested = new URLSearchParams(location.search).get('lang');
  const code = Object.hasOwn(languages, requested) ? requested : Object.hasOwn(languages,saved) ? saved : 'en';
  const t = languages[code];
  document.querySelectorAll('[data-story]').forEach(n=>{n.textContent=story[code][n.dataset.story];});
  document.querySelectorAll('.character-art img').forEach((n,i)=>{n.alt=i===0?story[code].chiiName:story[code].lisaName;});
  const config = window.HEAVENBREAK_CONFIG;
  config.TEXT = t;
  config.STEAM_CTA = t.cta;
  config.CONTENT = {tagline:t.tagline,intro:t.intro,aboutLead:t.aboutLead,aboutBody:t.aboutBody};
  config.FEATURES = t.features.map(([category,title,description])=>({category,title,description,pending:false}));
  config.SCREENSHOTS.forEach((item,index)=>{item.caption=t.captions[index] || 'HEAVENBREAK';item.alt='HEAVENBREAK — '+item.caption;});
  document.documentElement.lang=t.lang;
  document.querySelector('meta[name="description"]').content=t.description;
  const text = (s,value)=>{document.querySelectorAll(s).forEach(n=>{n.textContent=value;});};
  text('.skip',t.skip); text('.menu-toggle',t.menu+' ☰');
  const menu = document.querySelector('#navigation'); menu.setAttribute('aria-label',t.menu);
  menu.querySelectorAll('a').forEach((n,i)=>{n.textContent=t.nav[i];});
  text('.secondary',t.explore);
  ['#about-title','#features-title','#gallery-title','#trailer-title','#steam-title','#projects-title'].forEach((s,i)=>text(s,t.headings[i]));
  text('.features .section-head>p',t.featureIntro);text('.gallery .section-head>p',t.galleryIntro);text('.trailer .section-head>p',t.videoIntro);
  text('[data-video-fallback]',t.videoFallback);text('[data-video-download]',t.download);
  document.querySelector('.trailer video').setAttribute('aria-label','HEAVENBREAK — '+t.videoIntro);
  text('#projects .section-head>p',t.otherIntro);text('.project-copy .eyebrow',t.development);text('.project-copy>p:last-of-type',t.projectText);text('.project-copy .text-link',t.projectLink+' ↗');
  text('.footer-top>div>p',t.company);document.querySelectorAll('.footer-links a').forEach((n,i)=>{n.textContent=t.footer[i];});text('.footer-bottom>a',t.top);
  text('[data-close]',t.close+' ✕');text('[data-prev]',t.prev);text('[data-next]',t.next);text('#lightbox-title',t.galleryTitle);
  document.querySelector('[data-close]').setAttribute('aria-label',t.close);document.querySelector('[data-prev]').setAttribute('aria-label',t.prev);document.querySelector('[data-next]').setAttribute('aria-label',t.next);
  const selector = document.querySelector('#language');selector.value=code;selector.setAttribute('aria-label','Language / 언어 / 言語 / 语言');
  selector.addEventListener('change',()=>{try{localStorage.setItem('heavenbreak-language',selector.value);}catch(_){}const url=new URL(location.href);url.searchParams.set('lang',selector.value);location.assign(url.href);});
})();
