(()=>{
const rows=[
['GPUN은 우리가 만드는 게임에 무한한 자부심을 갖는 게임 개발사입니다.','GPUN is a game studio with boundless pride in the games we create.','GPUNは、自分たちが創るゲームに限りない誇りを持つゲーム開発会社です。','GPUN是一家对自己创作的游戏怀有无限自豪的游戏开发公司。','GPUN是一家對自己創作的遊戲懷有無限自豪的遊戲開發公司。'],
['서브컬처의 감성과 메카닉 액션의 밀도를 결합해,','We combine subculture aesthetics with the depth of mechanical action','サブカルチャーの感性とメカニックアクションの密度を融合し、','我们融合二次元美学与机甲动作的深度，','我們融合二次元美學與機甲動作的深度，'],
['전 세계 유저가 오래 기억할 수 있는 게임을 만들고 있습니다.','to create games that players around the world will remember.','世界中のプレイヤーの心に長く残るゲームを創っています。','打造令全球玩家长久铭记的游戏。','打造令全球玩家長久銘記的遊戲。'],
['AI를 더 나은 결정과 더 빠른 제작, 더 과감한 도전의 엔진으로 삼아 GPUN만의 게임 개발 방식을 만들어갑니다.','We use AI to drive better decisions, faster production and bolder experiments, shaping our own approach to game development.','AIをより良い判断、より速い制作、より大胆な挑戦の原動力とし、GPUN独自のゲーム開発を築いていきます。','我们以AI推动更好的决策、更快的制作和更大胆的尝试，构建GPUN独有的游戏开发方式。','我們以AI推動更好的決策、更快的製作和更大膽的嘗試，構建GPUN獨有的遊戲開發方式。'],
['FUN - 더 재미있게','FUN — More fun','FUN — もっと楽しく','FUN — 更有趣','FUN — 更有趣'],
['AI는 개발 속도를 높이는 도구를 넘어, 더 나은 결정을 내리는 엔진입니다. 유사 장르를 AI로 분석하고 유저 경험을 검증하며, 디렉터의 직관이 빠지기 쉬운 함정을 걷어냅니다. 더 적은 시행착오로, 더 확실하게 재미에 도달합니다.','AI helps us make better decisions as well as work faster. We analyze comparable genres and validate player experiences with AI, checking the blind spots of a director’s intuition. Fewer false starts bring us closer to fun.','AIは開発を速めるだけでなく、より良い判断を支えます。類似ジャンルの分析やプレイヤー体験の検証を通じて、ディレクターの直感に潜む見落としを減らし、少ない試行錯誤で楽しさに近づきます。','AI不仅提升开发速度，也帮助我们作出更好的决策。我们用AI分析同类游戏、验证玩家体验，减少制作人直觉中的盲点，以更少的试错找到真正的乐趣。','AI不僅提升開發速度，也幫助我們作出更好的決策。我們用AI分析同類遊戲、驗證玩家體驗，減少製作人直覺中的盲點，以更少的試錯找到真正的樂趣。'],
['FAST - 더 빠르게','FAST — Move faster','FAST — もっと速く','FAST — 更快速','FAST — 更快速'],
['AI를 활용하여 기획서 오류를 체크하고, 리팩토링 기간은 30% 단축시키며, 캐릭터 제작 효율은 50% 향상시킵니다. 47명의 팀이 대형 스튜디오의 속도를 따라잡습니다. 이것은 목표가 아니라 GPUN에서 지금 일어나고 있는 일입니다.','AI checks design documents, cuts refactoring time by 30% and improves character production efficiency by 50%. Our team of 47 keeps pace with major studios. This is already happening at GPUN.','AIで企画書の誤りを確認し、リファクタリング期間を30％短縮、キャラクター制作効率を50％向上させています。47人のチームが大手スタジオの速度に追いつく。それは目標ではなく、GPUNの現在です。','借助AI，我们检查策划文档错误，将重构时间缩短30%，角色制作效率提高50%。47人的团队追上大型工作室的速度。这已是GPUN的现实。','藉助AI，我們檢查企劃文件錯誤，將重構時間縮短30%，角色製作效率提高50%。47人的團隊追上大型工作室的速度。這已是GPUN的現實。'],
['FEARLESS - 더 과감하게','FEARLESS — Be bolder','FEARLESS — もっと大胆に','FEARLESS — 更大胆','FEARLESS — 更大膽'],
['AI가 게임을 어떻게 바꾸는지, 그 답을 가진 회사는 아직 없습니다. GPUN은 그 답을 가장 먼저 찾고 가장 빠르게 움직입니다. 2030년 개발 전 공정의 AI화를 향해, AI 시대 게임의 기준을 만드는 일에 우리는 망설이지 않습니다.','No company yet has all the answers to how AI will change games. GPUN moves quickly to find them. With AI across our development process as our goal for 2030, we are helping define game development in the AI era.','AIがゲームをどう変えるか、その答えはまだ誰も持っていません。GPUNはその答えをいち早く探し、素早く行動します。2030年の開発全工程へのAI導入に向け、AI時代のゲーム開発の基準を築きます。','AI将如何改变游戏，尚无公司掌握全部答案。GPUN率先探索、迅速行动。我们以2030年开发全流程引入AI为目标，积极建立AI时代的游戏开发标准。','AI將如何改變遊戲，尚無公司掌握全部答案。GPUN率先探索、迅速行動。我們以2030年開發全流程引入AI為目標，積極建立AI時代的遊戲開發標準。'],
['GPUN과','With GPUN,','GPUNとともに、','与GPUN一起，','與GPUN一起，'],
['함께 만들어가세요.','create what comes next.','次の世界を創ろう。','创造下一个世界。','創造下一個世界。'],
['채용 및 회사 관련 문의는 아래 이메일로 연락해 주세요.','For recruitment and company inquiries, please contact us by email below.','採用や会社に関するお問い合わせは、下記メールアドレスへご連絡ください。','招聘及公司相关咨询，请通过以下邮箱联系我们。','徵才及公司相關諮詢，請透過以下信箱聯絡我們。'],
['당신의 다음 게임이,','Your next game.','あなたの次のゲームが、','你的下一款游戏，','你的下一款遊戲，'],
['우리의 자부심이 됩니다.','Our shared pride.','私たちの誇りになる。','将成为我们的骄傲。','將成為我們的驕傲。'],
['GPUN은 함께 만들고, 끝까지 완성하고, 자신이 만든 게임에 자부심을 가질 수 있는 동료를 기다립니다.','We welcome people who create together, see their work through and take pride in the games they make.','ともに創り、最後まで仕上げ、自分のゲームを誇れる仲間を待っています。','我们期待与你共同创作、坚持完成作品，并为亲手打造的游戏感到自豪。','我們期待與你共同創作、堅持完成作品，並為親手打造的遊戲感到自豪。'],
['채용문의 :','Recruitment inquiries:','採用のお問い合わせ：','招聘咨询：','徵才諮詢：'],
['함께 만드는 사람','Create together','ともに創る人','共同创作','共同創作'],
['동료와 적극적으로 생각을 나누고, 서로의 전문성을 존중하며 더 나은 결과를 함께 만들어가는 사람을 기다립니다.','Share ideas openly, respect your colleagues’ expertise and work together for better results.','積極的に意見を交わし、互いの専門性を尊重しながら、より良い成果をともに生み出す人を求めています。','积极分享想法，尊重同事的专业能力，共同创造更好的成果。','積極分享想法，尊重同事的專業能力，共同創造更好的成果。'],
['끝까지 완성하는 사람','See it through','最後まで仕上げる人','坚持完成','堅持完成'],
['아이디어를 결과물로 만들기 위해 집요하게 다듬고, 문제를 발견하면 끝까지 해결해 완성도를 높이는 사람을 기다립니다.','Refine ideas into finished work, solve problems persistently and keep raising the quality.','アイデアを形にするために粘り強く磨き、課題を最後まで解決して完成度を高める人を求めています。','不断打磨想法，将其变为作品，坚持解决问题，提升完成度。','不斷打磨想法，將其變為作品，堅持解決問題，提升完成度。'],
['자부심을 가진 사람','Take pride','誇りを持つ人','心怀自豪','心懷自豪'],
['자신이 만든 게임을 유저 앞에 자신 있게 내보일 수 있도록, 기준을 높게 세우고 퀄리티에 책임지는 사람을 기다립니다.','Set high standards and own the quality of your work, so you can proudly share your games with players.','高い基準を掲げて品質に責任を持ち、自信を持ってプレイヤーに届けられる人を求めています。','坚持高标准，对品质负责，自信地将自己的游戏呈现给玩家。','堅持高標準，對品質負責，自信地將自己的遊戲呈現給玩家。'],
['GPUN 미디어 보기 ↗','GPUN media ↗','GPUNのメディアを見る ↗','查看GPUN媒体报道 ↗','查看GPUN媒體報導 ↗'],
['지피유엔, 신작 \'테라리움\' 7월 30일 두 번째 쇼케이스 개최','GPUN announces a second TERRARIUM showcase for July 30','GPUN、『TERRARIUM』の第2回ショーケースを7月30日に開催','GPUN将于7月30日举办《TERRARIUM》第二次展示会','GPUN將於7月30日舉辦《TERRARIUM》第二次展示會'],
['첫 공개 이후 약 9개월 만에 두 번째 쇼케이스를 예고하며, 메카닉 TPS 프로젝트의 방향성을 소개한 소식입니다.','The second showcase, announced about nine months after the reveal, introduces the direction of the mechanical TPS project.','初公開から約9か月後の第2回ショーケースを予告し、メカニックTPSの方向性を紹介する記事です。','报道介绍了首次公开约九个月后的第二次展示会预告，以及这款机甲TPS的开发方向。','報導介紹了首次公開約九個月後的第二次展示會預告，以及這款機甲TPS的開發方向。'],
['지피유엔 미소녀 메카닉 슈팅 테라리움 세컨드 쇼케이스','GPUN’s character-driven mechanical shooter TERRARIUM: second showcase','GPUNの美少女メカニックシューター『TERRARIUM』第2回ショーケース','GPUN美少女机甲射击游戏《TERRARIUM》第二次展示会','GPUN美少女機甲射擊遊戲《TERRARIUM》第二次展示會'],
['전투, 기지 건설, 필드 플레이를 연결하는 핵심 구조와 2027년 상반기 출시 목표를 다룬 기사입니다.','An article covering the connected combat, base-building and field gameplay, and the planned release in the first half of 2027.','戦闘・基地建設・フィールドプレイをつなぐ仕組みと、2027年上半期の発売目標を紹介する記事です。','报道介绍了连接战斗、基地建设与地图探索的核心玩法，以及2027年上半年的发售目标。','報導介紹了連接戰鬥、基地建設與地圖探索的核心玩法，以及2027年上半年的發售目標。'],
['27년 상반기 출시, 국산 미소녀 슈팅게임 \'테라리움\'의 중간 발표회','TERRARIUM progress showcase: Korean character shooter targets early 2027','2027年上半期発売を目指す韓国産美少女シューター『TERRARIUM』中間発表会','目标2027年上半年发售，韩国美少女射击游戏《TERRARIUM》中期发布会','目標2027年上半年發售，韓國美少女射擊遊戲《TERRARIUM》中期發布會'],
['프로젝트의 현재 개발 상황과 이후 계획을 중심으로 정리한 중간 발표회 기사입니다.','Coverage of the progress showcase, focusing on the current development status and upcoming plans.','現在の開発状況と今後の計画を中心にまとめた中間発表会の記事です。','围绕当前开发进展和后续计划整理的中期发布会报道。','圍繞目前開發進展和後續計畫整理的中期發布會報導。']
];
// Both versions have appeared in the company copy.
rows.push([rows[7][0].replace('기간은','기간을'),...rows[7].slice(1)]);
rows.push(...[["Studio","Studio","スタジオ","工作室","工作室"],["Philosophy","Philosophy","開発理念","开发理念","開發理念"],["We build games","We build games","私たちはゲームを創る。","我们打造游戏，","我們打造遊戲，"],["we’re proud of.","we’re proud of.","誇りを持てるゲームを。","并为之自豪。","並為之自豪。"],["We build games we’re proud of.","We build games we’re proud of.","誇りを持てるゲームを創る。","打造令我们自豪的游戏。","打造令我們自豪的遊戲。"],["Vision","Vision","ビジョン","愿景","願景"],["Focus","Focus","注力分野","专注领域","專注領域"],["Project","Projects","プロジェクト","项目","專案"],["Goal","Goal","目標","目标","目標"],["Subculture","Subculture","サブカルチャー","二次元文化","二次元文化"],["Mechanic action","Mechanical action","メカニックアクション","机甲动作","機甲動作"],["Global experience","Global experience","グローバルな体験","全球化体验","全球化體驗"],["Games we’re proud to show","Games we’re proud to show","自信を持って届けられるゲーム","值得自豪地呈现的游戏","值得自豪地呈現的遊戲"],["Join Us","Join Us","仲間になる","加入我们","加入我們"],["Recruit","Recruitment","採用情報","招聘","徵才"]]);rows.push(...(window.GPUNAdditionalRows||[]));
const codes=['ko','en','ja','zh-Hans','zh-Hant'];const map=new Map(rows.map(r=>[r[0],r]));
window.GPUNLocaleRows=rows;
window.GPUNTranslate=(s,l)=>map.get(s)?.[codes.indexOf(l)]||s;
const originals=new WeakMap();let queued=false;
function render(){const lang=document.documentElement.lang;const index=codes.indexOf(lang);if(index<0)return;const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;while(n=walker.nextNode()){if(n.parentElement.closest('script,style,option,[data-ko],[data-t]'))continue;const raw=n.textContent,trim=raw.trim();if(map.has(trim))originals.set(n,trim);const key=originals.get(n);if(key){const value=map.get(key)[index];if(raw!==value)n.textContent=value;}}}
function schedule(){if(!queued){queued=true;queueMicrotask(()=>{queued=false;render()})}}
new MutationObserver(schedule).observe(document.documentElement,{attributes:true,attributeFilter:['lang'],subtree:false});
new MutationObserver(schedule).observe(document.body,{childList:true,characterData:true,subtree:true});
render();
})();
