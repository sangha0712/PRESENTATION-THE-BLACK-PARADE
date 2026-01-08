import { CharacterData, FactionData, FactionId, Rank } from './types';

export const WORLD_LORE = {
  year: 3074,
  event: "대규모 지진 및 방사능 유출 (2150년)",
  population: {
    dead: "10%",
    mutated: "80%",
    survived: "5%",
    evolved: "5% (이능력자)"
  },
  energy: "액시온 (Axion)",
  undiscovered: "전라남도, 경상남도, 제주도 (미개발 위험구역)"
};

export const FACTIONS: Record<FactionId, FactionData> = {
  [FactionId.ZERO_HOUR]: {
    id: FactionId.ZERO_HOUR,
    name: "ZERO HOUR",
    description: "첨단 기술과 이능력의 조화를 추구하는 미래 지향적 세력.",
    territory: "경기도, 충청남도",
    colors: {
      primary: "bg-cyan-900",
      secondary: "border-cyan-500",
      text: "text-cyan-400",
      glow: "shadow-cyan-500/50"
    },
    logoSim: "ZH"
  },
  [FactionId.AEGIS]: {
    id: FactionId.AEGIS,
    name: "AEGIS",
    description: "질서와 규율을 중시하며 인류의 수호자를 자처하는 방패.",
    territory: "전라북도, 경상북도",
    colors: {
      primary: "bg-blue-900",
      secondary: "border-blue-500",
      text: "text-blue-400",
      glow: "shadow-blue-500/50"
    },
    logoSim: "AG"
  },
  [FactionId.BLACK_SWAN]: {
    id: FactionId.BLACK_SWAN,
    name: "BLACK SWAN",
    description: "힘이 곧 법. 욕망에 충실하며 가장 호전적인 무법자들.",
    territory: "충청북도, 강원도",
    colors: {
      primary: "bg-purple-900",
      secondary: "border-purple-600",
      text: "text-purple-500",
      glow: "shadow-purple-600/50"
    },
    logoSim: "BS"
  },
  [FactionId.UNAFFILIATED]: {
    id: FactionId.UNAFFILIATED,
    name: "UNAFFILIATED",
    description: "어디에도 속하지 않고 황무지를 떠도는 자유로운 영혼들.",
    territory: "미개발 지역 및 접경지대",
    colors: {
      primary: "bg-stone-800",
      secondary: "border-stone-500",
      text: "text-stone-400",
      glow: "shadow-stone-500/50"
    },
    logoSim: "UN"
  }
};

export const CHARACTERS: CharacterData[] = [
  // ZERO HOUR
  {
    id: 'sangjungha',
    name: '상중하',
    gender: '여',
    factionId: FactionId.ZERO_HOUR,
    appearance: '은발(장발), 자안',
    age: '20',
    abilityName: '리플렉트 (Reflect)',
    abilityDesc: '물리 충격 및 본인에게 가해진 능력 무조건 반사',
    rank: Rank.A,
    personality: ['활기', '허당', '바보', '진지'],
    features: ['단검 기반 전투술', '동료와 거리감 가까움', '작은 체구 콤플렉스']
  },
  {
    id: 'charin',
    name: '챠린',
    gender: '여',
    factionId: FactionId.ZERO_HOUR,
    appearance: '흑발(단발), 적안',
    age: '23',
    abilityName: '없음 (무능력자)',
    abilityDesc: '순수 신체 능력',
    rank: Rank.S,
    personality: ['쿨함', '내향적', '허당', '사랑둥이'],
    features: ['극한의 무투', '무기 기반 근접 전투', '작은 체구']
  },
  {
    id: 'binette',
    name: '비네트',
    gender: '여',
    factionId: FactionId.ZERO_HOUR,
    appearance: '은발(장발), 적안',
    age: '25',
    abilityName: '임페리움 (Imperium)',
    abilityDesc: '토벌한 변이체와 괴이를 거둬들여 소환수로 부림',
    rank: Rank.S,
    personality: ['메스가키', '외향적', '리더쉽'],
    features: ['올라운더 전투', '무술과 소환술의 조화']
  },
  {
    id: 'miya',
    name: '미야',
    gender: '여',
    factionId: FactionId.ZERO_HOUR,
    appearance: '금발(트윈테일), 벽안, 고양이귀 장식',
    age: '18',
    abilityName: '포켓 디멘션',
    abilityDesc: '아공간에 무기 수납 및 사출',
    rank: Rank.A,
    personality: ['마이페이스', '4차원', '식탐', '자유분방'],
    features: ['중화기 난사', '바주카', '개틀링건']
  },
  // AEGIS
  {
    id: 'yuna',
    name: '유나',
    gender: '여',
    factionId: FactionId.AEGIS,
    appearance: '소라색(장발), 진청안',
    age: '24',
    abilityName: '데이터 링크',
    abilityDesc: '전자기기 해킹 및 정보 실시간 분석',
    rank: Rank.B,
    personality: ['소심함', '성실함', '존댓말', '겁쟁이'],
    features: ['전투 능력 없음', '드론 조종']
  },
  {
    id: 'kangjinhyuk',
    name: '강진혁',
    gender: '남',
    factionId: FactionId.AEGIS,
    appearance: '흑발(단정), 흑안, 우측 의안',
    age: '29',
    abilityName: '사일런스 (Silence)',
    abilityDesc: '반경 30m 내 지정 대상 이능력 강제 비활성화',
    rank: Rank.S,
    personality: ['원칙주의', '냉정', '결벽증', '워커홀릭'],
    features: ['제식 권총', '체술', '능력자 혐오', '상중하 감시']
  },
  {
    id: 'parkjunsu',
    name: '박준수',
    gender: '남',
    factionId: FactionId.AEGIS,
    appearance: '갈색(곱슬), 녹안, 동안',
    age: '22',
    abilityName: '그래비티 필드',
    abilityDesc: '20m 내 중력을 마음대로 조종',
    rank: Rank.C,
    personality: ['소심함', '친절함', '눈치빠름', '정보통'],
    features: ['호신용 테이저건', '수사 및 추적 담당', '분탕 처리반']
  },
  {
    id: 'yunsea',
    name: '윤세아',
    gender: '여',
    factionId: FactionId.AEGIS,
    appearance: '흑발(히메컷), 회색안, 창백함',
    age: '26',
    abilityName: '마리오네트',
    abilityDesc: '무생물에 실을 연결해 원격 조종',
    rank: Rank.B_PLUS,
    personality: ['나른함', '마이페이스', '귀차니즘', '천재'],
    features: ['전투 드로이드 조종', '현장 기피', '원격 지원', '유나 스승']
  },
  // BLACK SWAN
  {
    id: 'raven',
    name: '레이븐',
    gender: '남',
    factionId: FactionId.BLACK_SWAN,
    appearance: '적발(올백), 적안, 창백함',
    age: '34',
    abilityName: '헤마토맨시',
    abilityDesc: '자신의 혈액 무기화, 타인 출혈량 조작',
    rank: Rank.S,
    personality: ['오만', '신사적', '잔혹', '사이코패스'],
    features: ['지팡이 검', '피를 소모시 강화', '비네트와 악연']
  },
  {
    id: 'viper',
    name: '바이퍼',
    gender: '여',
    factionId: FactionId.BLACK_SWAN,
    appearance: '녹발(반삭), 황안(세로동공), 전신문신',
    age: '21',
    abilityName: '톡신 스킨',
    abilityDesc: '접촉 시 부식시키는 독 분비',
    rank: Rank.A_PLUS,
    personality: ['호전적', '단순무식', '광기', '충동적'],
    features: ['맨손 격투', '거친 입담']
  },
  {
    id: 'joker',
    name: '조커',
    gender: '남',
    factionId: FactionId.BLACK_SWAN,
    appearance: '보라색(장발), 오드아이, 피에로 가면',
    age: '불명',
    abilityName: '미러 이미지',
    abilityDesc: '자신과 똑같은 분신 생성 (데미지 1/10)',
    rank: Rank.A,
    personality: ['능글맞음', '돈 밝힘', '거짓말쟁이', '쾌락주의'],
    features: ['트럼프 카드 투척', '배신자']
  },
  // UNAFFILIATED
  {
    id: 'gray',
    name: '그레이',
    gender: '남',
    factionId: FactionId.UNAFFILIATED,
    appearance: '회색발, 흑안',
    age: '불명',
    abilityName: '오염 동화',
    abilityDesc: '방사능 농도가 높을수록 신체 능력 상승',
    rank: Rank.A_PLUS,
    personality: ['염세적', '인간불신', '고독', '과묵'],
    features: ['반변이 인간', '도시 추방자', '변이체 비선공']
  },
  {
    id: 'leesuyeon',
    name: '이수연',
    gender: '여',
    factionId: FactionId.UNAFFILIATED,
    appearance: '흑발(장발), 청안',
    age: '27',
    abilityName: '퓨리파이 (Purify)',
    abilityDesc: '접촉 시 방사능 피폭 및 오염 정화',
    rank: Rank.S,
    personality: ['헌신적', '차분함', '강단있음', '평화주의'],
    features: ['방랑 의사', '희귀 능력', '도망자']
  },
  {
    id: 'jet',
    name: '제트',
    gender: '여',
    factionId: FactionId.UNAFFILIATED,
    appearance: '민트색(숏컷), 자안',
    age: '20',
    abilityName: '에어로 로드',
    abilityDesc: '대기의 흐름을 읽어 오염 구역 안전 주파',
    rank: Rank.B,
    personality: ['무뚝뚝', '프로의식', '단답형', '스피드광'],
    features: ['중립 배달부', '호버 바이크', '불가침 영역']
  }
];

export const MENU_IMAGES = [
  "https://igx.kr/r/2C/0/0",
  "https://igx.kr/r/2C/1/0",
  "https://igx.kr/r/2C/2/0",
  "https://igx.kr/r/2C/3/0",
  "https://igx.kr/r/2C/4/0",
  "https://igx.kr/r/2C/5/0",
  "https://igx.kr/r/2C/6/0",
  "https://igx.kr/r/2C/7/0",
  "https://igx.kr/r/2C/8/0",
  "https://igx.kr/r/2C/9/0",
  "https://igx.kr/r/2C/10/0",
  "https://igx.kr/r/2C/11/0",
  "https://igx.kr/r/2C/12/0",
  "https://igx.kr/r/2C/13/0",
  "https://igx.kr/r/2C/14/0"
];