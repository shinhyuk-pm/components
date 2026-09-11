import type { IaTree } from "@/lib/ia-tree";
import type { ScreenSpec } from "@/lib/screen-spec";

/**
 * 프로젝트 예시
 *
 * IA 트리 하나와 잎 노드마다의 화면 명세. 이것이 기획 에이전트의 최종 산출물 형태다.
 * 사이드바와 현재 위치는 트리에서 자동으로 만들어지고,
 * 각 화면은 명세에서 만들어지며, 디자인은 스킨 표에서 만들어진다.
 */

export const SAMPLE_TREE: IaTree = {
  product: "회원 운영 콘솔",
  nodes: [
    { id: "home", title: "대시보드", archetype: "dashboard" },
    {
      id: "members",
      title: "회원",
      children: [
        { id: "member-list", title: "회원 목록", archetype: "list" },
        { id: "member-detail", title: "회원 상세", archetype: "detail" },
        { id: "member-new", title: "회원 등록", archetype: "wizard" },
      ],
    },
    {
      id: "coupons",
      title: "혜택",
      children: [
        { id: "coupon-list", title: "쿠폰 목록", archetype: "list" },
        { id: "coupon-new", title: "쿠폰 발행", archetype: "form" },
      ],
    },
    { id: "settings", title: "설정", archetype: "settings" },
  ],
};

export const SAMPLE_SCREENS: Record<string, ScreenSpec> = {
  home: {
    archetype: "dashboard",
    header: { title: "대시보드", description: "오늘의 운영 현황입니다." },
    stats: [
      { label: "총 회원", value: "12,480", delta: "+4.2%" },
      { label: "이번 달 매출", value: "₩4,280만", delta: "+12.4%" },
      { label: "미처리 문의", value: "17", delta: "-3건" },
    ],
    panels: [
      {
        title: "등급 분포",
        items: [
          { label: "VIP", value: "1,240명" },
          { label: "일반", value: "9,870명" },
          { label: "휴면", value: "1,370명" },
        ],
      },
      {
        title: "이번 주 알림",
        description: "운영에 영향을 줄 수 있는 항목입니다.",
        items: [
          { label: "만료 임박 쿠폰", value: "4건" },
          { label: "결제 실패", value: "12건" },
        ],
      },
    ],
    table: { columns: ["이름", "등급", "최근 접속", "누적 결제액"], sampleRows: 5 },
  },

  "member-list": {
    archetype: "list",
    header: {
      title: "회원 목록",
      description: "가입한 회원을 조회하고 등급을 관리합니다.",
      badge: "운영",
      actions: [
        { label: "회원 추가", emphasis: "primary" },
        { label: "내보내기", emphasis: "secondary" },
      ],
    },
    stats: [
      { label: "전체", value: "12,480" },
      { label: "이번 달 신규", value: "862", delta: "+12.4%" },
      { label: "휴면", value: "1,370", delta: "+0.8%" },
    ],
    filters: [
      { label: "이메일", kind: "text", placeholder: "name@company.com" },
      { label: "등급", kind: "select", options: ["전체", "VIP", "일반", "휴면"] },
      { label: "상태", kind: "select", options: ["전체", "활성", "보류"] },
    ],
    table: { columns: ["이름", "이메일", "등급", "가입일", "누적 결제액"], sampleRows: 6 },
  },

  "member-detail": {
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
  },

  "member-new": {
    archetype: "wizard",
    header: { title: "회원 등록", description: "세 단계를 마치면 초대 메일이 발송됩니다." },
    steps: [
      {
        title: "기본 정보",
        fields: [
          { label: "이름", kind: "text", placeholder: "홍길동", required: true },
          { label: "이메일", kind: "text", placeholder: "name@company.com", required: true },
        ],
      },
      {
        title: "등급과 소속",
        description: "나중에 변경할 수 있습니다.",
        fields: [
          { label: "등급", kind: "select", options: ["일반", "VIP"], required: true },
          { label: "소속", kind: "text", placeholder: "부서 또는 회사명" },
        ],
      },
      {
        title: "확인",
        fields: [{ label: "운영 메모", kind: "textarea", placeholder: "내부 참고용 메모" }],
      },
    ],
    submit: { label: "등록하고 초대 보내기" },
  },

  "coupon-list": {
    archetype: "list",
    header: {
      title: "쿠폰 목록",
      description: "발행한 쿠폰의 사용 현황을 확인합니다.",
      actions: [{ label: "쿠폰 발행", emphasis: "primary" }],
    },
    filters: [{ label: "상태", kind: "select", options: ["전체", "진행중", "종료", "예정"] }],
    table: { columns: ["쿠폰명", "할인율", "사용 건수", "만료일", "상태"], sampleRows: 6 },
  },

  "coupon-new": {
    archetype: "form",
    header: { title: "쿠폰 발행", description: "발행 즉시 대상 회원에게 노출됩니다." },
    groups: [
      {
        title: "쿠폰 정보",
        fields: [
          { label: "쿠폰명", kind: "text", placeholder: "가을 감사 쿠폰", required: true },
          { label: "할인 방식", kind: "select", options: ["정률", "정액"], required: true },
          { label: "할인 값", kind: "text", placeholder: "10", required: true },
        ],
      },
      {
        title: "대상과 기간",
        description: "대상을 좁힐수록 사용률이 올라갑니다.",
        fields: [
          { label: "대상 등급", kind: "select", options: ["전체", "VIP", "일반", "휴면"] },
          { label: "사용 안내 문구", kind: "textarea", placeholder: "회원에게 보이는 안내" },
        ],
      },
    ],
    submit: { label: "발행하기" },
    cancel: { label: "취소" },
  },

  settings: {
    archetype: "settings",
    header: { title: "설정", description: "콘솔 전체에 적용되는 항목입니다." },
    groups: [
      {
        title: "알림",
        description: "운영자에게 보낼 알림을 고릅니다.",
        options: [
          {
            label: "결제 실패 알림",
            description: "실패 발생 즉시 메일로 알립니다.",
            enabled: true,
          },
          {
            label: "일일 요약",
            description: "매일 오전 9시에 전날 현황을 보냅니다.",
            enabled: true,
          },
          { label: "휴면 전환 알림", description: "90일 미접속 회원이 생기면 알립니다." },
        ],
      },
      {
        title: "데이터",
        options: [
          { label: "탈퇴 회원 30일 보관", description: "해제하면 즉시 삭제됩니다.", enabled: true },
          { label: "통계 비식별 처리", enabled: true },
        ],
      },
    ],
  },
};
