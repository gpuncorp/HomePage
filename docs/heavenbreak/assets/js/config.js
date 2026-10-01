/* 이미지와 확정 문구를 이 파일 한 곳에서 교체합니다. 빈 값은 준비 중 상태입니다.
 * 경로는 index.html 기준. 예: assets/images/heavenbreak-keyvisual.webp
 * STEAM_URL은 실제 HEAVENBREAK 스토어 주소만 입력하세요.
 */
window.HEAVENBREAK_CONFIG = {
  STEAM_URL: 'https://store.steampowered.com/app/4967150/HEAVENBREAK/',
  STEAM_CTA: 'Steam에서 찜하기', // 출시 후: Steam에서 보기
  CONTACT_EMAIL: '',
  HERO_IMAGE: 'assets/images/heavenbreak-hero.webp',
  LOGO_IMAGE: 'assets/images/heavenbreak-logo-trimmed.png',
  CONTENT: {
    tagline: '몰려오는 적을 막아라. 나만의 빌드로 살아남아라.',
    intro: '빠른 템포의 3인칭 로그라이트 슈터.\n무기를 강화하고, 업그레이드를 조합하며 끝없이 밀려오는 웨이브에 맞서세요.',
    aboutLead: '매번 새로운 선택.\n매번 새로운 생존 전략.',
    aboutBody: '서로 다른 전투 스타일의 무기를 선택하고, 전투 중 레벨을 올려 강력한 업그레이드를 조합하세요. 점점 거세지는 적의 웨이브 속에서 패시브와 코어 스킬로 나만의 빌드를 완성합니다. 짧고 반복해서 즐길 수 있는 전투가 매 플레이마다 새로운 선택을 선사합니다.'
  },
  FEATURES: [
    { category: 'HOLD THE LINE', title: '웨이브를 돌파하는 전투', description: '빠른 템포의 3인칭 슈팅으로 끊임없이 밀려오는 적에 맞서세요. 웨이브가 거세질수록 생존을 위한 선택이 중요해집니다.', pending: false },
    { category: 'BUILD YOUR POWER', title: '나만의 빌드 완성', description: '다양한 무기와 레벨업 업그레이드를 조합하세요. 강력한 패시브와 코어 스킬이 전투 스타일을 바꿉니다.', pending: false },
    { category: 'ONE MORE RUN', title: '다시 도전하는 즐거움', description: '짧고 반복해서 즐기기 좋은 전투 세션. 매번 달라지는 선택과 조합으로 새로운 생존 전략을 발견하세요.', pending: false }
  ],
  SCREENSHOTS: [
    { src: 'assets/images/screenshot-01.webp', alt: 'HEAVENBREAK — character close-up', caption: 'Character close-up' },
    { src: 'assets/images/screenshot-02.webp', alt: 'HEAVENBREAK — third-person shooting', caption: 'Third-person shooting' },
    { src: 'assets/images/screenshot-03.webp', alt: 'HEAVENBREAK — Mirror Disruption', caption: 'Mirror Disruption' },
    { src: 'assets/images/screenshot-04.webp', alt: 'HEAVENBREAK — Steel Rain', caption: 'Steel Rain' },
    { src: 'assets/images/screenshot-05.webp', alt: 'HEAVENBREAK — wave survival', caption: 'Wave survival' }
  ]
};
