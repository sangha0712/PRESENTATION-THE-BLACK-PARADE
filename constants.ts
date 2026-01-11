
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

export const HISTORY_LOGS = [
  // ERA 1: THE COLLAPSE (2150-2200)
  {
    id: "LOG_2150_04",
    date: "2150.04.12",
    title: "THE GREAT COLLAPSE",
    category: "EVENT",
    securityLevel: "Lv.1",
    content: "진도 16.0의 대지진 발생. 전 세계 핵발전소 74% 동시 멜트다운. 대기 중 방사능 농도가 치사량의 500배까지 상승하며 인류 문명 붕괴."
  },
  {
    id: "LOG_2155_09",
    date: "2155.09.01",
    title: "PROJECT: NOAH FAILED",
    category: "MILITARY",
    securityLevel: "Lv.3",
    content: "지하 벙커로 대피했던 구인류 지도층, 내부 자원 고갈 및 오염된 환기 시스템으로 인해 전멸 확인. 인류 지휘 체계 완전 소실."
  },
  {
    id: "LOG_2199_11",
    date: "2199.11.05",
    title: "FIRST AWAKENING",
    category: "BIOLOGY",
    securityLevel: "Lv.5",
    content: "최초의 이능력자(Gifted) '아담' 탄생. 방사능을 에너지원으로 변환하는 신체 구조 발견. 구인류와 신인류 간의 갈등 시발점."
  },
  
  // ERA 2: THE CHAOS (2200-2500)
  {
    id: "LOG_2250_01",
    date: "2250.01.01",
    title: "OP. CLEAN SLATE",
    category: "MILITARY",
    securityLevel: "Lv.4",
    content: "구인류 잔존 세력의 마지막 발악. 변이체들을 몰살하기 위한 대규모 소이탄 폭격 작전 실패. 오히려 변이체들의 급격한 진화를 촉발함."
  },
  {
    id: "LOG_2300_08",
    date: "2300.08.15",
    title: "AXION DISCOVERY",
    category: "TECHNOLOGY",
    securityLevel: "Lv.2",
    content: "오염된 대기에서 결정화된 고효율 에너지원 '액시온' 정제 기술 개발. 이를 바탕으로 ZERO HOUR의 전신인 '테크노 코어' 설립."
  },
  {
    id: "LOG_2342_03",
    date: "2342.03.10",
    title: "THE LONG WINTER",
    category: "ENVIRONMENT",
    securityLevel: "Lv.2",
    content: "핵겨울로 인한 50년 간의 빙하기 도래. 식량 생산 불가능. 인구의 40%가 기아로 사망하거나 동족 포식 발생."
  },
  {
    id: "LOG_2410_12",
    date: "2410.12.24",
    title: "MUTATION: TYPE-Z",
    category: "BIOLOGY",
    securityLevel: "Lv.4",
    content: "지능을 가진 변이체(Type-Z) 최초 보고. 인간의 언어를 흉내내어 생존자를 유인하는 사냥 방식 확인."
  },

  // ERA 3: THE FACTIONS (2500-3000)
  {
    id: "LOG_2500_03",
    date: "2500.03.20",
    title: "AEGIS PROTOCOL",
    category: "POLITICS",
    securityLevel: "Lv.3",
    content: "무질서한 능력자 범죄를 막기 위해 자경단 연합 'AEGIS' 공식 출범. '힘은 질서를 위해서만 존재한다'는 강령 채택."
  },
  {
    id: "LOG_2650_12",
    date: "2650.12.25",
    title: "THE RED RAIN",
    category: "ENVIRONMENT",
    securityLevel: "Lv.3",
    content: "3일 밤낮으로 붉은 비가 내린 기상이변. 이 비를 맞은 생물 중 30%가 즉사하고, 살아남은 생물은 광폭화됨. BLACK SWAN 세력 확장 계기."
  },
  {
    id: "LOG_2777_07",
    date: "2777.07.07",
    title: "THE GREAT WALL",
    category: "CONSTRUCTION",
    securityLevel: "Lv.2",
    content: "ZERO HOUR, 경기도 접경 지역에 높이 50m의 방벽 건설 완공. 미개발 구역으로부터의 변이체 유입 완전 차단."
  },
  {
    id: "LOG_2850_03",
    date: "2850.03.15",
    title: "THE GHOST FLEET",
    category: "SOCIETY",
    securityLevel: "Lv.3",
    content: "오염된 바다를 건너오는 정체불명의 선박들 급증. 타 대륙의 생존자들이 목숨을 걸고 밀항을 시도. 정부는 이들을 전원 체포하여 '제 7 격리구역'에 수감."
  },
  {
    id: "LOG_2890_06",
    date: "2890.06.06",
    title: "BLACK SWAN RISING",
    category: "WAR",
    securityLevel: "Lv.4",
    content: "밀항자 수용소에서 발생한 계획적인 무력 점거. 리더 '레이븐'은 '이 땅의 주인은 가장 강한 자'라고 선언하며, 외부 세력을 규합해 한반도 정복을 위한 교두보를 마련함."
  },
  {
    id: "LOG_2950_11",
    date: "2950.11.11",
    title: "BATTLE OF DAEJEON",
    category: "WAR",
    securityLevel: "Lv.3",
    content: "3대 세력이 대전 폐허에서 액시온 광맥을 두고 충돌. 3일간의 전투 끝에 무승부로 종결. 사상자 5,000명 발생."
  },
  {
    id: "LOG_3000_01",
    date: "3000.01.01",
    title: "THE TRUCE",
    category: "DIPLOMACY",
    securityLevel: "Lv.5",
    content: "3대 세력(ZERO HOUR, AEGIS, BLACK SWAN) 간의 불가침 조약 체결. 각자의 영토를 인정하고 미개발 구역을 완충지대로 설정."
  },

  // ERA 4: PRESENT DAY (3000-3074)
  {
    id: "LOG_3050_05",
    date: "3050.05.05",
    title: "ZERO HOUR AI",
    category: "TECHNOLOGY",
    securityLevel: "Lv.4",
    content: "ZERO HOUR, 자율형 전투 AI 'VALK' 가동 시작. 인간의 개입 없이 도시 치안 유지 가능 확인."
  },
  {
    id: "LOG_3070_02",
    date: "3070.02.14",
    title: "DISEASE: AXION BURN",
    category: "MEDICAL",
    securityLevel: "Lv.2",
    content: "이능력 과다 사용 시 발생하는 신체 붕괴 현상. 혈관이 푸르게 빛나며 타들어가다가 결국 결정화되어 사망함. 현재 치료법 없음."
  },
  {
    id: "LOG_3072_09",
    date: "3072.09.21",
    title: "GHOST SIGNAL",
    category: "MYSTERY",
    securityLevel: "Lv.Top",
    content: "미개발 구역 깊은 곳에서 정체불명의 라디오 신호 포착. '구원자가 온다'는 메시지가 48시간 간격으로 반복 송출 중."
  },
  
  // MISC LORE & RUMORS
  {
    id: "LOG_TECH_01",
    date: "UNKNOWN",
    title: "TECH: NEURAL LINK",
    category: "TECHNOLOGY",
    securityLevel: "Lv.3",
    content: "뇌파를 기계에 직접 연결하는 기술. 유나(AEGIS)와 같은 데이터 링크 능력자가 아니더라도 제한적으로 드론 조작 가능."
  },
  {
    id: "LOG_BIO_04",
    date: "UNKNOWN",
    title: "BIO: HIVE MIND",
    category: "BIOLOGY",
    securityLevel: "Lv.4",
    content: "최근 미개발 구역에서 발견되는 변이체들의 특징. 개체가 아닌 집단 지성을 공유하며, 여왕 개체의 명령에 절대복종하는 패턴을 보임."
  },
  {
    id: "LOG_ZONE_09",
    date: "UNKNOWN",
    title: "ZONE: SECTOR 9",
    category: "LOCATION",
    securityLevel: "Lv.5",
    content: "과거 서울의 중심부였던 곳. 현재는 가장 높은 방사능 수치를 기록하는 거대 싱크홀. 그 바닥에 무엇이 있는지는 아무도 모름."
  },
  {
    id: "LOG_ITEM_77",
    date: "UNKNOWN",
    title: "ARTIFACT: MONOLITH",
    category: "ARTIFACT",
    securityLevel: "Lv.Top",
    content: "전라남도 깊은 곳에서 목격담이 들려오는 검은 비석. 접근하는 모든 기계장치를 무력화시키며, 주변의 시간을 왜곡시킨다는 소문."
  },
  {
    id: "LOG_SOC_01",
    date: "CURRENT",
    title: "CURRENCY: CREDITS",
    category: "SOCIETY",
    securityLevel: "Lv.1",
    content: "기존 화폐는 휴지조각이 됨. 현재는 액시온 배터리 그 자체 혹은 디지털 크레딧이 통용됨. BLACK SWAN 구역에서는 물물교환이나 노동력이 화폐를 대신함."
  },
  {
    id: "LOG_RUMOR_05",
    date: "CURRENT",
    title: "THE WANDERER",
    category: "RUMOR",
    securityLevel: "Lv.1",
    content: "세력에 속하지 않은 S급 능력자가 황무지를 떠돌며 병자들을 고친다는 소문. 각 세력의 스카우터들이 혈안이 되어 찾고 있음."
  },
  {
    id: "LOG_WEAPON_99",
    date: "UNKNOWN",
    title: "LEGENDARY: SOUL EATER",
    category: "WEAPON",
    securityLevel: "Lv.4",
    content: "BLACK SWAN의 창고 어딘가에 보관되어 있다는 저주받은 검. 사용자의 생명력을 갉아먹는 대신 무엇이든 벨 수 있다고 함."
  },
  {
    id: "LOG_FOOD_02",
    date: "CURRENT",
    title: "SYNTH-MEAT",
    category: "CULTURE",
    securityLevel: "Lv.1",
    content: "오염되지 않은 고기는 사치품. 일반 시민들은 변이 식물 단백질로 만든 합성육이나 곤충 젤리를 주식으로 섭취함."
  },
  {
    id: "LOG_ORG_00",
    date: "UNKNOWN",
    title: "THE ARCHITECTS",
    category: "CONSPIRACY",
    securityLevel: "Lv.Top",
    content: "3대 세력의 배후에서 전쟁을 조장하고 무기를 파는 비밀 결사체. 그들의 정체나 목적은 철저히 베일에 싸여 있음."
  },
  {
    id: "LOG_ENV_03",
    date: "CURRENT",
    title: "ACID FOG",
    category: "ENVIRONMENT",
    securityLevel: "Lv.2",
    content: "새벽녘에 자주 발생하는 산성 안개. 피부에 닿으면 화상을 입히며, 방독면 없이는 5분 내에 폐가 녹아내릴 수 있음."
  },
  {
    id: "LOG_MUT_11",
    date: "UNKNOWN",
    title: "CREATURE: STALKER",
    category: "BESTIARY",
    securityLevel: "Lv.3",
    content: "투명화 능력을 가진 변이 맹수. 발소리를 내지 않으며, 열 감지 시야로도 포착하기 어려움. 주로 밤에 활동."
  }
];

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
    description: "바다를 건너온 이방인들의 연합. 한반도 정복을 노리는 혁명군.",
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
    imageUrl: 'https://igx.kr/r/2C/0/0',
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
    imageUrl: 'https://igx.kr/r/2C/2/0',
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
    imageUrl: 'https://igx.kr/r/2C/1/0',
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
    imageUrl: 'https://igx.kr/r/2C/3/0',
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
    imageUrl: 'https://igx.kr/r/2C/4/0',
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
    imageUrl: 'https://igx.kr/r/2C/5/0',
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
    imageUrl: 'https://igx.kr/r/2C/6/0',
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
    imageUrl: 'https://igx.kr/r/2C/7/0',
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
    imageUrl: 'https://igx.kr/r/2C/8/0',
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
    imageUrl: 'https://igx.kr/r/2C/14/0',
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
    imageUrl: 'https://igx.kr/r/2C/10/0',
    appearance: '보라색(장발), 오드아이, 피에로 가면',
    age: '불명',
    abilityName: '미러 이미지',
    abilityDesc: '자신과 똑같은 분신 생성 (데미지 1/10)',
    rank: Rank.A,
    personality: ['능글맞음', '돈 밝힘', '거짓말쟁이', '쾌락주의'],
    features: ['트럼프 카드 투척', '배신자']
  },
  {
    id: 'gray',
    name: '그레이',
    gender: '남',
    factionId: FactionId.BLACK_SWAN,
    imageUrl: 'https://igx.kr/r/2C/11/0',
    appearance: '회색발, 흑안',
    age: '불명',
    abilityName: '오염 동화',
    abilityDesc: '방사능 농도가 높을수록 신체 능력 상승',
    rank: Rank.A_PLUS,
    personality: ['염세적', '인간불신', '고독', '과묵'],
    features: ['반변이 인간', '도시 추방자', '변이체 비선공']
  },
  // UNAFFILIATED
  {
    id: 'leesuyeon',
    name: '이수연',
    gender: '여',
    factionId: FactionId.UNAFFILIATED,
    imageUrl: 'https://igx.kr/r/2C/12/0',
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
    imageUrl: 'https://igx.kr/r/2C/13/0',
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

export const MAIN_MENU_BACKGROUNDS = [
  "https://igx.kr/r/2C/15/0",
  "https://igx.kr/r/2C/15/1",
  "https://igx.kr/r/2C/15/2",
  "https://igx.kr/r/2C/15/3"
];
