import type { ScreenSpec } from "@/lib/screen-spec";

/**
 * 예시 명세.
 *
 * Phase 4에서는 이 자리에 AI가 IA 문서로부터 생성한 명세가 들어온다.
 * 지금은 사람이 쓴 것을 넣어 렌더러가 제대로 도는지 확인한다.
 */

const listSpec: ScreenSpec = {
  archetype: "list",
  header: {
    title: "회원 관리",
    description: "가입한 회원을 조회하고 등급을 관리합니다.",
    badge: "운영",
    actions: [
      { label: "회원 추가", emphasis: "primary" },
      { label: "내보내기", emphasis: "secondary" },
    ],
  },
  stats: [
    { label: "총 회원", value: "12,480", delta: "+4.2%" },
    { label: "이번 달 신규", value: "862", delta: "+12.4%" },
    { label: "이탈률", value: "2.4%", delta: "-0.3%" },
  ],
  filters: [
    { label: "이메일", kind: "text", placeholder: "name@company.com" },
    { label: "등급", kind: "select", options: ["전체", "VIP", "일반", "휴면"] },
  ],
  table: {
    columns: ["이름", "이메일", "등급", "가입일"],
    rows: [
      ["김서연", "seoyeon@example.com", "VIP", "2026-08-14"],
      ["박도윤", "doyun@example.com", "일반", "2026-08-09"],
      ["이하은", "haeun@example.com", "일반", "2026-07-28"],
      ["정민재", "minjae@example.com", "휴면", "2026-06-02"],
    ],
  },
};

const detailSpec: ScreenSpec = {
  archetype: "detail",
  header: {
    title: "김서연",
    description: "2026년 8월 14일 가입 · 최근 접속 3시간 전",
    badge: "VIP",
    actions: [{ label: "등급 변경", emphasis: "secondary" }],
  },
  summary: [
    { label: "이메일", value: "seoyeon@example.com" },
    { label: "누적 결제액", value: "₩3,240,000" },
    { label: "최근 주문", value: "2026-09-02" },
  ],
  sections: [
    {
      title: "등급 산정 근거",
      description:
        "최근 6개월 누적 결제액 324만원, 방문 빈도 주 3.2회로 VIP 기준을 충족합니다. 다음 재산정일은 10월 1일입니다.",
    },
  ],
  faq: [
    {
      question: "등급은 어떻게 산정되나요",
      answer: "최근 6개월 누적 결제액과 방문 빈도를 합산해 매월 1일 자동으로 재산정됩니다.",
    },
    {
      question: "탈퇴 회원 데이터는 언제 삭제되나요",
      answer:
        "탈퇴 후 30일간 보관하며, 이후 개인정보는 완전 삭제되고 통계 데이터만 비식별 처리로 남습니다.",
    },
  ],
};

const formSpec: ScreenSpec = {
  archetype: "form",
  header: {
    title: "회원 등록",
    description: "필수 항목을 입력하면 초대 메일이 발송됩니다.",
  },
  groups: [
    {
      title: "기본 정보",
      fields: [
        { label: "이름", kind: "text", placeholder: "홍길동", required: true },
        { label: "이메일", kind: "text", placeholder: "name@company.com", required: true },
        { label: "등급", kind: "select", options: ["일반", "VIP"], required: true },
      ],
    },
    {
      title: "추가 정보",
      description: "지금 입력하지 않아도 나중에 수정할 수 있습니다.",
      fields: [
        { label: "소속", kind: "text", placeholder: "부서 또는 회사명" },
        { label: "메모", kind: "textarea", placeholder: "운영팀만 볼 수 있는 내부 메모" },
      ],
    },
  ],
  submit: { label: "등록하고 초대 보내기" },
  cancel: { label: "취소" },
};

export const SAMPLE_SPECS: { id: string; label: string; spec: ScreenSpec }[] = [
  { id: "list", label: "목록형", spec: listSpec },
  { id: "detail", label: "상세형", spec: detailSpec },
  { id: "form", label: "입력형", spec: formSpec },
];
