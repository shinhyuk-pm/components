import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  DateOfBirth,
  Disabled,
  Range,
  TwoInputs,
  WithPresets,
} from "@/components/demos/date-picker-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description: "버튼을 누르면 달력이 떠서 하루를 고릅니다.",
    Demo: Basic,
  },
  {
    id: "range",
    name: "Range",
    description: "시작일과 종료일을 이어서 고르는 기간 선택입니다.",
    Demo: Range,
  },
  {
    id: "date-of-birth",
    name: "Date of birth",
    description: "연도·월을 목록에서 골라 먼 과거로 빠르게 이동합니다.",
    Demo: DateOfBirth,
  },
  {
    id: "presets",
    name: "Presets",
    description: "오늘·내일처럼 자주 쓰는 날짜를 버튼으로 제공합니다.",
    Demo: WithPresets,
  },
  {
    id: "disabled-dates",
    name: "Disabled dates",
    description: "예약처럼 고를 수 없는 날짜를 막아 둘니다.",
    Demo: Disabled,
  },
  {
    id: "two-inputs",
    name: "Two Inputs",
    description:
      "달력 하나로 구간을 고르는 대신, 시작일·종료일 칸을 따로 둡니다. 검색 조건 줄에 흔한 형태입니다.",
    Demo: TwoInputs,
  },
]
