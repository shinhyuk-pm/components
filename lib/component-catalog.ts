/**
 * 컴포넌트 설명서
 *
 * AI는 화면을 보지 못한다. "언제 쓰는가"가 글로 적혀 있어야 고를 수 있다.
 * 이 설명의 품질이 곧 에이전트 출력의 품질이다. 컴포넌트 개수보다 중요하다.
 *
 * 여기 적힌 내용은 app/llms.txt 로 내보내져 외부 AI 도구가 읽는다.
 */

export type CatalogEntry = {
  name: string;
  layer: "primitive" | "block" | "archetype";
  purpose: string;
  slots: string[];
  whenToUse: string;
  whenNotToUse: string;
  layouts?: string[];
};

export const COMPONENT_CATALOG: CatalogEntry[] = [
  {
    name: "list",
    layer: "archetype",
    purpose: "여러 건의 데이터를 훑고 원하는 것을 찾는 화면",
    slots: ["header", "stats(선택)", "filters(선택)", "table"],
    whenToUse:
      "IA 노드가 '목록', '관리', '내역', '조회'처럼 복수의 항목을 다룰 때. 사용자의 목적이 '찾기'일 때.",
    whenNotToUse:
      "항목이 하나뿐이거나, 사용자가 값을 입력하는 것이 주목적일 때. 그런 경우 detail 이나 form 을 쓴다.",
  },
  {
    name: "detail",
    layer: "archetype",
    purpose: "한 건의 대상을 자세히 확인하는 화면",
    slots: ["header", "summary(선택)", "sections(선택)", "faq(선택)"],
    whenToUse: "목록에서 한 건을 선택해 들어가는 화면. 읽기가 주목적이고 편집은 부차적일 때.",
    whenNotToUse:
      "사용자가 값을 채워 제출해야 할 때. 그건 form 이다. 여러 건을 비교해야 하면 list 다.",
  },
  {
    name: "form",
    layer: "archetype",
    purpose: "사용자가 값을 입력하고 제출하는 화면",
    slots: ["header", "groups[].fields", "submit", "cancel(선택)"],
    whenToUse:
      "생성, 수정, 신청, 설정처럼 입력이 목적일 때. 필드가 많으면 groups 로 의미 단위를 나눈다.",
    whenNotToUse:
      "입력 항목이 한두 개이고 다른 화면에 딸린 경우. 그때는 list 의 filters 나 detail 안에 둔다.",
  },
  {
    name: "PageHeader",
    layer: "block",
    purpose: "화면 최상단의 제목과 주요 행동",
    slots: ["title", "description(선택)", "badge(선택)", "actions(선택)"],
    whenToUse: "모든 페이지 원형이 자동으로 사용한다. 명세의 header 가 여기로 간다.",
    whenNotToUse: "카드나 섹션 내부 제목에는 쓰지 않는다. 그건 CardTitle 이다.",
  },
  {
    name: "StatCard",
    layer: "block",
    purpose: "하나의 숫자와 그 변화를 보여주는 요약 카드",
    slots: ["label", "value", "delta(선택)", "icon(선택)"],
    whenToUse: "화면 상단에서 현황을 한눈에 보여줄 때. 보통 3개 내외로 나란히 둔다.",
    whenNotToUse: "여러 숫자를 비교해야 하거나 시계열 추이를 봐야 할 때. 그건 표나 차트의 일이다.",
    layouts: ["stacked", "icon-left", "horizontal"],
  },
  {
    name: "Field",
    layer: "block",
    purpose: "라벨과 입력 한 쌍",
    slots: ["label", "control"],
    whenToUse: "모든 입력에 사용한다. 라벨 없는 입력은 만들지 않는다.",
    whenNotToUse: "읽기 전용 값에도 쓸 수 있지만, 편집 가능해 보이면 안 되는 맥락에서는 피한다.",
    layouts: ["stacked", "inline"],
  },
  {
    name: "Table",
    layer: "primitive",
    purpose: "행과 열로 된 데이터",
    slots: ["columns", "rows"],
    whenToUse: "항목마다 같은 속성들을 비교해야 할 때.",
    whenNotToUse: "항목마다 속성이 다르거나 이미지가 주인공일 때. 그때는 카드 목록이 낫다.",
  },
  {
    name: "Accordion",
    layer: "primitive",
    purpose: "접었다 펴는 질문과 답",
    slots: ["items[].question", "items[].answer"],
    whenToUse: "부가 설명이 길고 대부분의 사용자는 읽지 않아도 되는 경우.",
    whenNotToUse: "반드시 읽어야 하는 내용. 접혀 있으면 아무도 열지 않는다.",
  },
  {
    name: "Dialog",
    layer: "primitive",
    purpose: "현재 작업을 멈추고 확인이나 짧은 입력을 받는 창",
    slots: ["title", "description", "actions"],
    whenToUse: "되돌릴 수 없는 행동을 확인받을 때. 맥락을 잃지 않아야 하는 짧은 작업일 때.",
    whenNotToUse: "입력 항목이 3개를 넘을 때. 그러면 별도 form 페이지로 보낸다.",
  },
  {
    name: "Select",
    layer: "primitive",
    purpose: "정해진 보기 중 하나 고르기",
    slots: ["options"],
    whenToUse: "보기가 4개 이상이고 한 개만 고르는 경우.",
    whenNotToUse: "보기가 2~3개면 라디오나 토글이 더 빠르다.",
  },
  {
    name: "Badge",
    layer: "primitive",
    purpose: "상태를 나타내는 짧은 꼬리표",
    slots: ["text"],
    whenToUse: "등급, 진행 상태, 분류처럼 한두 단어로 끝나는 값.",
    whenNotToUse: "누를 수 있는 것처럼 보이면 안 된다. 행동에는 Button 을 쓴다.",
  },
  {
    name: "Button",
    layer: "primitive",
    purpose: "사용자의 행동",
    slots: ["label"],
    whenToUse: "화면당 primary 는 하나만 둔다. 나머지는 secondary 나 ghost 로 낮춘다.",
    whenNotToUse: "다른 화면으로 단순 이동하는 것은 링크로 표현하는 편이 낫다.",
  },
];

export function catalogAsText() {
  const lines: string[] = [];
  for (const entry of COMPONENT_CATALOG) {
    lines.push(`## ${entry.name} (${entry.layer})`);
    lines.push(`목적: ${entry.purpose}`);
    lines.push(`슬롯: ${entry.slots.join(", ")}`);
    if (entry.layouts) lines.push(`배치 프리셋: ${entry.layouts.join(", ")}`);
    lines.push(`쓸 때: ${entry.whenToUse}`);
    lines.push(`쓰지 말 때: ${entry.whenNotToUse}`);
    lines.push("");
  }
  return lines.join("\n");
}
