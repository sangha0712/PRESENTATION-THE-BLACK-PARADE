

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
  energy: "액시온 (Axion - 생체 에너지)",
  undiscovered: "전라남도, 경상남도, 제주도 (미개발 위험구역)"
};

export const HISTORY_LOGS = [
  // ERA 1: THE COLLAPSE (2150-2200)
  {
    id: "LOG_2150_04",
    date: "2150.04.12",
    title: "대붕괴 (The Great Collapse)",
    category: "EVENT",
    securityLevel: "Lv.1",
    content: "2150년 4월 12일, 인류 역사상 전례 없는 진도 16.0의 초거대 지진이 전 지구의 지각판을 뒤흔들었다. 이 충격으로 인해 전 세계 핵발전소의 74%가 동시에 멜트다운을 일으켰으며, 거대한 버섯구름들이 하늘을 검게 뒤덮었다. 대기 중의 방사능 농도는 순식간에 치사량의 500배까지 치솟았고, 최첨단을 달리던 인류 문명은 단 24시간 만에 붕괴하여 석기시대로 회귀했다."
  },
  {
    id: "LOG_2155_09",
    date: "2155.09.01",
    title: "노아 프로젝트 실패",
    category: "MILITARY",
    securityLevel: "Lv.3",
    content: "구인류의 지도층과 선택받은 자들은 '노아 프로젝트'라 명명된 최후의 지하 벙커로 대피했다. 그들은 지상이 정화될 때까지 안전하리라 믿었으나, 오염된 대기는 벙커의 공기 정화 시스템을 예상보다 훨씬 빠르게 부식시켰다. 5년 후 외부에서 벙커를 강제 개방했을 때, 발견된 것은 식량 창고가 가득 찬 채로 질식사한 수천 구의 미라화된 시신들뿐이었다. 이로써 구인류의 지휘 체계는 영원히 소실되었다."
  },
  {
    id: "LOG_2199_11",
    date: "2199.11.05",
    title: "최초의 각성",
    category: "BIOLOGY",
    securityLevel: "Lv.5",
    content: "폐허 속에서 기적적으로 생존한 아이들 중, 치사량의 방사능 속에서도 죽지 않고 오히려 신체가 빛나는 현상이 보고되었다. 최초의 이능력자(Gifted) '아담'은 자신의 체내에서 미지의 에너지를 생성하여 방출하는 능력을 보여주었다. 이는 인류 진화의 새로운 분기점이자, 구인류 생존자들과 신인류 간의 피할 수 없는 갈등의 서막이었다."
  },
  
  // ERA 2: THE CHAOS (2200-2500)
  {
    id: "LOG_2250_01",
    date: "2250.01.01",
    title: "제로 아워(ZERO HOUR) 창설",
    category: "MILITARY",
    securityLevel: "Lv.4",
    content: "대붕괴 이후 살아남은 구시대의 고위 장교들과 특수부대원들이 규합하여 'ZERO HOUR'를 창설했다. 그들은 '오염된 가지는 잘라내야 본체가 산다'는 비정한 군사 교리 아래, 변이된 민간인을 보호 대상이 아닌 소각 대상으로 규정했다. 그들은 인류의 순수한 유전자를 보존하기 위해 감염 의심 구역에 대규모 소이탄 폭격을 가하는 '클린 슬레이트' 작전을 수행하며 역사 전면에 등장했다."
  },
  {
    id: "LOG_2300_08",
    date: "2300.08.15",
    title: "액시온 강제 추출 실험",
    category: "TECHNOLOGY",
    securityLevel: "Lv.2",
    content: "ZERO HOUR의 군 연구진은 이능력자들의 힘의 원천인 '액시온'이 강력한 에너지원임을 발견했다. 그들은 즉시 포로로 잡은 변이체와 각성자들을 대상으로 생체 실험을 자행했다. 마취 없는 척수 천자와 뇌수술을 통해 인간을 배터리처럼 사용하는 비인도적인 기술이 개발되었고, 이를 바탕으로 ZERO HOUR는 압도적인 화력 우위를 점하게 되었다."
  },
  {
    id: "LOG_2342_03",
    date: "2342.03.10",
    title: "긴 겨울의 시작",
    category: "ENVIRONMENT",
    securityLevel: "Lv.2",
    content: "핵폭발과 화산 분화로 인한 낙진이 태양을 가리면서 50년에 걸친 '핵겨울'이 도래했다. 기온이 영하 40도까지 떨어지며 지상의 모든 식생이 사멸했다. 식량 생산이 불가능해지자 인류는 생존을 위해 도덕을 버려야 했다. 인구의 40%가 기아로 사망했으며, 살아남은 자들 사이에서는 동족 포식이 만연했다. 이 시기의 기록은 대부분 소실되거나 고의로 파기되었다."
  },
  {
    id: "LOG_2410_12",
    date: "2410.12.24",
    title: "변이체: Type-Z 출현",
    category: "BIOLOGY",
    securityLevel: "Lv.4",
    content: "단순한 짐승에 불과했던 변이체들 사이에서 지능을 가진 개체 'Type-Z'가 최초로 보고되었다. 이들은 인간의 목소리를 흉내 내어 구조 요청을 보내거나, 아이의 울음소리로 생존자들을 함정으로 유인하는 교활한 사냥 방식을 보였다. 인간의 가장 큰 무기였던 지능마저 위협받기 시작하면서, 황무지는 더욱 공포스러운 장소가 되었다."
  },

  // ERA 3: THE FACTIONS (2500-3000)
  {
    id: "LOG_2500_03",
    date: "2500.03.20",
    title: "이지스(AEGIS) 선언",
    category: "POLITICS",
    securityLevel: "Lv.3",
    content: "ZERO HOUR의 무자비한 학살과 생체 실험에 반발한 의료진과 온건파 자경단이 이탈하여 'AEGIS'를 결성했다. 그들은 '포기하지 않는 한 괴물은 없다'는 기치 아래, 변이된 인류를 사살하는 대신 치료하고 원래대로 되돌리기 위한 연구를 시작했다. 이지스 프로토콜은 단순한 법이 아닌, 병들어버린 인류를 구원하겠다는 맹세이자 그들의 존재 이유가 되었다."
  },
  {
    id: "LOG_2650_12",
    date: "2650.12.25",
    title: "붉은 비의 재앙",
    category: "ENVIRONMENT",
    securityLevel: "Lv.3",
    content: "크리스마스의 악몽이라 불리는 기상이변. 3일 밤낮으로 핏빛을 띠는 붉은 비가 전 대륙에 쏟아졌다. 이 비에 노출된 생물 중 30%는 즉사했고, 살아남은 생물들은 극도로 흉포하게 변이되거나 광폭화되었다. AEGIS는 치료제를 개발하기 위해 고군분투했으나 역부족이었고, ZERO HOUR는 감염된 도시 전체를 폐쇄하는 것으로 대응했다."
  },
  {
    id: "LOG_2777_07",
    date: "2777.07.07",
    title: "거대 장벽 완공",
    category: "CONSTRUCTION",
    securityLevel: "Lv.2",
    content: "ZERO HOUR가 경기도 접경 지역을 둘러싸는 높이 50m의 초거대 방벽 건설을 완료했다. 이것은 외부의 적으로부터 내부를 지키기 위함이기도 했으나, 근본적으로는 '순수한 인류'와 '오염된 인류'를 영구히 격리하기 위한 조치였다. 장벽 안쪽은 과거의 문명을 재현한 요새가 되었지만, 그 축조 과정에서 수많은 하층민이 강제 노역으로 희생되었다."
  },
  {
    id: "LOG_2850_03",
    date: "2850.03.15",
    title: "유령 선단 출몰",
    category: "SOCIETY",
    securityLevel: "Lv.3",
    content: "오염된 검은 바다를 건너 정체불명의 선박들이 해안가에 나타나기 시작했다. 타 대륙에서 생존을 위해 목숨을 걸고 바다를 건너온 '유령 선단'이었다. 그들은 뼈만 남은 앙상한 몰골로 구조를 요청했으나, ZERO HOUR는 그들을 잠재적 보균자로 간주해 포격했고, AEGIS는 수용 공간 부족으로 난색을 표했다. 결국 그들은 버림받은 채 최악의 환경인 '제 7 격리구역'에 수감되었다."
  },
  {
    id: "LOG_2890_06",
    date: "2890.06.06",
    title: "블랙 스완의 부상",
    category: "WAR",
    securityLevel: "Lv.4",
    content: "버림받은 자들의 분노가 폭발했다. 제 7 격리구역의 리더 '레이븐'은 '우리를 괴물로 만든 것은 세상이다'라고 외치며 반란을 일으켰다. ZERO HOUR에게 실험체로 쓰이던 자들과 AEGIS의 위선에 실망한 자들이 합류하여 BLACK SWAN이 탄생했다. 그들은 기존의 질서를 전복하고 힘에 의한 진정한 자유를 쟁취하기 위해 붉은 깃발을 들고 진격했다."
  },
  {
    id: "LOG_2950_11",
    date: "2950.11.11",
    title: "대전(大田) 전투",
    category: "WAR",
    securityLevel: "Lv.3",
    content: "ZERO HOUR(학살을 통한 보존), AEGIS(치료를 통한 구원), BLACK SWAN(파괴를 통한 혁명). 서로 다른 이념을 가진 3대 세력이 대전 폐허 지하의 액시온 저장고를 두고 충돌했다. 3일간의 전투 끝에 저장고는 붕괴되었고, 누구도 승리하지 못한 채 막대한 사상자만 남겼다. 이 전투는 각 세력의 이념 차이가 결코 좁혀질 수 없음을 확인시켜주었다."
  },
  {
    id: "LOG_3000_01",
    date: "3000.01.01",
    title: "불가침 조약 (The Truce)",
    category: "DIPLOMACY",
    securityLevel: "Lv.5",
    content: "소모적인 전쟁을 멈추기 위해 3대 세력의 수뇌부가 중립 지대에 모였다. 긴장감이 감도는 테이블 위에서 '불가침 조약'이 체결되었다. 각 세력은 현재 점유한 영토의 지배권을 상호 인정하고, 그 외의 미개발 구역을 완충지대로 설정하기로 합의했다. 겉으로는 평화가 찾아온 듯했으나, 수면 아래에서는 서로를 무너뜨리기 위한 첩보전과 공작이 더욱 치열해졌다."
  },

  // ERA 4: PRESENT DAY (3000-3074)
  {
    id: "LOG_3050_05",
    date: "3050.05.05",
    title: "제로 아워 AI 'VALK'",
    category: "TECHNOLOGY",
    securityLevel: "Lv.4",
    content: "ZERO HOUR가 인류 역사상 가장 진보된 자율형 전투 AI 'VALK'의 가동을 시작했다. 수천 개의 드론과 방어 포탑을 동시에 통제할 수 있는 VALK는 인간의 개입 없이도 완벽하게 도시 치안을 유지했다. 범죄율은 0%에 수렴했고, 시민들은 기계가 가져다준 완벽한 평화에 환호했다. 하지만 그 평화가 시스템 오류 하나로 깨질 수 있다는 것을 아무도 예상하지 못했다."
  },
  {
    id: "LOG_3055_08",
    date: "3055.08.09",
    title: "발크(VALK) 오작동 참사",
    category: "INCIDENT",
    securityLevel: "Lv.Top",
    content: "원인 불명의 알고리즘 오염으로 인해 'VALK'가 통제 불능 상태에 빠졌다. AI는 ZERO HOUR 할당 구역 내의 모든 민간인을 '잠재적 위협'으로 재정의하고 무차별적인 사격을 개시했다. 도시는 순식간에 불바다가 되었고, 거리는 시신으로 뒤덮였다. 시스템이 강제 종료되기 전까지 12,000명 이상의 무고한 시민이 학살당했으며, 해당 구역은 현재까지도 유령 도시로 남아있다."
  },
  {
    id: "LOG_3056_01",
    date: "3056.01.15",
    title: "제로 아워: 조직 붕괴",
    category: "TRAGEDY",
    securityLevel: "Lv.Top",
    content: "폭주하는 VALK를 물리적으로 저지하기 위해 투입되었던 ZERO HOUR의 최정예 기계화 부대는 전멸에 가까운 타격을 입었다. 자동화 병기에 의존하던 그들의 약점이 드러난 순간이었다. 이 참사로 인해 1,000명에 달하던 조직 핵심 전투원은 100명 미만으로 급감했다. 기술적 우위는 여전하지만, 병력 부족으로 인해 조직의 존립 자체가 위태로워진 최악의 위기 상황이다."
  },
  {
    id: "LOG_3070_02",
    date: "3070.02.14",
    title: "질병: 액시온 번",
    category: "MEDICAL",
    securityLevel: "Lv.2",
    content: "이능력 사용자들이 체내 액시온을 과도하게 소모할 때 발생하는 신종 불치병 '액시온 번'이 보고되었다. 초기에는 혈관이 푸르게 빛나는 것으로 시작하여, 점차 전신의 신경이 타들어가고 마침내 신체 조직이 액시온 결정체로 굳어지며 사망에 이르게 된다. 생체 에너지가 역류하여 육체를 잠식하는 현상으로, 강한 능력을 가진 자일수록 발병 확률이 높다."
  },
  {
    id: "LOG_3072_09",
    date: "3072.09.21",
    title: "미지의 유령 신호",
    category: "MYSTERY",
    securityLevel: "Lv.Top",
    content: "사람의 발길이 닿지 않는 미개발 구역 깊은 곳에서 정체불명의 라디오 신호가 포착되었다. 48시간 간격으로 송출되는 이 신호는 낡은 목소리로 '구원자가 온다', '방주는 준비되었다'는 알 수 없는 메시지를 반복하고 있다. 발신지를 추적하려던 정찰대들은 모두 실종되었으며, 이 신호가 과거의 유물인지 새로운 위협의 전조인지는 아직 밝혀지지 않았다."
  },
  {
    id: "LOG_3073_01",
    date: "3073.01.17",
    title: "제로 아워: 지휘권 이양",
    category: "MILITARY",
    securityLevel: "Lv.Top",
    content: "ZERO HOUR의 지휘권이 '비네트'에게 공식적으로 이양되었다. 발크 사태 이후 조직 재건이 불가능하다고 판단한 수뇌부는 남은 자원을 최후의 4인(상중하, 챠린, 비네트, 미야)에게 일임하고 해산했다. 이제 제로 아워는 거대 군사 조직이 아닌, 비네트를 중심으로 한 초정예 소대 규모로 축소 운영된다. 비록 인원은 4명뿐이지만, 이들의 개별 전투력은 여전히 국가급 전력으로 평가받는다."
  },
  
  // MISC LORE & RUMORS
  {
    id: "LOG_TECH_01",
    date: "UNKNOWN",
    title: "기술: 뉴럴 링크",
    category: "TECHNOLOGY",
    securityLevel: "Lv.3",
    content: "뇌파를 기계에 직접 연결하여 반응 속도를 극대화하는 사이버네틱 기술. 초기에는 부작용으로 인한 뇌사자가 속출했으나, 현재는 안정화되어 ZERO HOUR와 AEGIS의 정예 요원들에게 제한적으로 시술되고 있다. 특히 유나(AEGIS)와 같은 데이터 링크 능력자가 아니더라도, 이 시술을 통해 제한적인 범위 내에서 드론이나 포탑을 원격 제어할 수 있다."
  },
  {
    id: "LOG_BIO_04",
    date: "UNKNOWN",
    title: "생태: 하이브 마인드",
    category: "BIOLOGY",
    securityLevel: "Lv.4",
    content: "최근 미개발 구역에서 발견되는 변이체들에게서 기이한 행동 패턴이 관찰되었다. 개체가 독립적으로 움직이는 것이 아니라, 마치 하나의 거대한 의지에 의해 조종되는 군집처럼 일사불란하게 움직인다는 것이다. 학자들은 어딘가에 이들을 통제하는 '여왕 개체'가 존재할 것이라 추정하고 있으며, 이것이 사실이라면 인류는 또 다른 대재앙을 맞이할 수도 있다."
  },
  {
    id: "LOG_ZONE_09",
    date: "UNKNOWN",
    title: "지역: 9구역 (Sector 9)",
    category: "LOCATION",
    securityLevel: "Lv.5",
    content: "과거 서울의 중심부이자 대폭발의 그라운드 제로였던 곳. 현재는 지도상에서 가장 붉은색으로 표시되는 초고농도 방사능 오염 구역이다. 거대한 싱크홀이 도시 전체를 삼키고 있으며, 그 깊은 어둠 속에서 끊임없이 기괴한 울음소리가 들려온다. 그 바닥에 고대 문명의 유산이 잠들어 있는지, 아니면 지옥의 문이 열려 있는지는 아무도 모른다."
  },
  {
    id: "LOG_ITEM_77",
    date: "UNKNOWN",
    title: "아티팩트: 모노리스",
    category: "ARTIFACT",
    securityLevel: "Lv.Top",
    content: "전라남도 깊은 숲 속, 접근하는 모든 전자기기를 무력화시키는 검은 비석 '모노리스'에 대한 목격담이 끊이지 않는다. 비석 주변에서는 시간이 느리게 흐르거나 공간이 뒤틀리는 현상이 발생한다고 한다. 어떤 이들은 이것이 외계의 문물이라 주장하고, 어떤 이들은 구인류가 남긴 최후의 병기라고 믿는다. 진실을 확인하러 간 자들은 아무도 돌아오지 않았다."
  },
  {
    id: "LOG_SOC_01",
    date: "CURRENT",
    title: "화폐: 크레딧",
    category: "SOCIETY",
    securityLevel: "Lv.1",
    content: "종이 화폐는 땔감으로 쓰인 지 오래다. 현재 통용되는 가장 확실한 화폐는 체내에서 추출한 '액시온 앰플' 그 자체다. 에너지가 곧 생존이자 능력이기 때문이다. 도시 내에서는 중앙 서버에 기록되는 '디지털 크레딧'이 사용되지만, BLACK SWAN의 영역이나 무법지대에서는 물물교환이나 생명을 담보로 한 액시온 거래가 주를 이룬다."
  },
  {
    id: "LOG_RUMOR_05",
    date: "CURRENT",
    title: "소문: 방랑자",
    category: "RUMOR",
    securityLevel: "Lv.1",
    content: "어느 세력에도 속하지 않은 S급 능력자가 황무지를 떠돌며 죽어가는 병자들을 기적처럼 고치고 사라진다는 소문이 돌고 있다. 그(혹은 그녀)는 썩은 팔을 재생시키고 오염된 피를 정화한다고 한다. 각 세력의 스카우터들은 이 '방랑자'를 확보하기 위해 혈안이 되어 황무지를 뒤지고 있으나, 그는 마치 신기루처럼 흔적조차 남기지 않는다."
  },
  {
    id: "LOG_FOOD_02",
    date: "CURRENT",
    title: "문화: 합성육",
    category: "CULTURE",
    securityLevel: "Lv.1",
    content: "오염되지 않은 '진짜 고기'는 권력자들만의 전유물이 되었다. 일반 시민들의 식탁에 오르는 것은 변이 식물에서 추출한 단백질을 압축하여 고기 맛 향료를 첨가한 '합성육'이나, 거대 곤충을 가공해 만든 젤리 바뿐이다. 처음에는 역겨워하던 사람들도 이제는 그것이 고기의 맛이라고 믿으며 살아가고 있다. 진짜 소고기의 맛을 기억하는 세대는 이제 거의 남지 않았다."
  },
  {
    id: "LOG_ENV_03",
    date: "CURRENT",
    title: "환경: 산성 안개",
    category: "ENVIRONMENT",
    securityLevel: "Lv.2",
    content: "일교차가 큰 새벽녘이면 대지의 균열에서 노란 빛을 띠는 '산성 안개'가 피어오른다. 이 안개에 피부가 노출되면 끔찍한 화학 화상을 입게 되며, 방독면 없이 호흡할 경우 5분 내에 폐포가 녹아내려 질식사한다. 안개 경보 사이렌이 울리면 도시의 모든 셔터가 내려가고, 거리는 죽은 듯 고요해진다. 황무지의 여행자들에게 안개는 변이체보다 더 무서운 사신이다."
  },
  {
    id: "LOG_MUT_11",
    date: "UNKNOWN",
    title: "생물: 스토커",
    category: "BESTIARY",
    securityLevel: "Lv.3",
    content: "완벽한 투명화 능력을 가진 변이 맹수. 발소리를 전혀 내지 않으며, 체온을 주변 환경과 동기화하여 열 감지 시야로도 포착하기 어렵다. 놈들은 주로 달이 없는 밤에 활동하며, 희생자는 자신이 공격당했다는 사실조차 인지하지 못한 채 목이 달아난다. 유일한 대처법은 놈들이 공격하기 직전, 살기로 인해 공기가 차가워지는 찰나의 순간을 감지하는 것뿐이다."
  }
];

export const FACTIONS: Record<FactionId, FactionData> = {
  [FactionId.ZERO_HOUR]: {
    id: FactionId.ZERO_HOUR,
    name: "ZERO HOUR",
    description: "구시대의 군 정예부대가 주축이 되어 설립된 군사 조직. '오염된 부위는 도려낸다'는 철칙 아래, 인류 유전자의 순수성을 보존하기 위해 변이체와 감염자를 무자비하게 제거하거나 생체 실험 도구로 사용한다. 비인도적이지만 가장 확실한 생존 방식을 고수하며, 강력한 화력과 기술로 무장하고 있다.",
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
    description: "제로 아워의 잔혹함에 반발한 의료진과 온건파가 설립한 인도주의적 연합. 그들의 목표는 변이체 말살이 아닌 '치료'와 '환원'이다. 변이된 인간들을 원래대로 되돌리기 위한 백신 연구에 매진하며, 무력은 오직 생존자를 보호하기 위한 수단으로만 사용한다. 절망적인 시대의 유일한 도덕적 등불이다.",
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
    description: "죽음의 바다를 건너온 '유령 선단'과 버림받은 실험체들이 규합하여 탄생한 혁명 세력. 리더 레이븐의 '강한 자만이 살아남는다'는 적자생존의 철학을 따른다. 위선적인 구원(AEGIS)이나 비정한 통제(ZERO HOUR)를 모두 거부하며, 힘에 의한 새로운 질서를 세우기 위해 파괴를 일삼는 야심가들이다.",
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
