import type { DemoVariant } from "@/components/demo-types"
import {
  AppliedFilters,
  Basic,
  DateRange,
  WithCheckboxes,
} from "@/components/demos/filter-bar-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "조건 몇 개와 통합 검색, 그리고 초기화·검색 버튼을 한 상자에 담은 기본 형태입니다.",
    Demo: Basic,
  },
  {
    id: "date-range",
    name: "Date Range",
    description:
      "시작일 ~ 종료일 두 칸으로 기간을 받습니다. 목록 화면에서 가장 흔한 조건입니다.",
    Demo: DateRange,
  },
  {
    id: "checkboxes",
    name: "Checkboxes",
    description:
      "여러 개를 동시에 고르는 조건은 체크박스로 펼쳐 둡니다. 좁은 화면에서는 줄이 바뀝니다.",
    Demo: WithCheckboxes,
  },
  {
    id: "applied",
    name: "Applied Filters",
    description:
      "지금 걸린 조건을 아래에 칩으로 보여 주고, ×를 눌러 하나씩 뗄 수 있게 합니다.",
    Demo: AppliedFilters,
  },
]
