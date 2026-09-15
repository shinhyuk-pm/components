import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  BookedDates,
  CustomCellSize,
  DateAndTimePicker,
  MonthAndYearSelector,
  Presets,
  Range,
  WeekNumbers,
} from "@/components/demos/calendar-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "날짜 하나를 고르는 기본 달력입니다. 테두리만 둘러 두었습니다.",
    Demo: Basic,
  },
  {
    id: "range",
    name: "Range",
    description:
      "시작일과 종료일을 잡아 기간으로 고릅니다. 두 달을 나란히 보여 줍니다.",
    Demo: Range,
  },
  {
    id: "month-and-year-selector",
    name: "Month and Year Selector",
    description:
      "제목 부분이 월·연도 드롭다운으로 바뀝니다. 먼 과거나 미래로 한 번에 건너뛸 때 편합니다.",
    Demo: MonthAndYearSelector,
  },
  {
    id: "presets",
    name: "Presets",
    description:
      "'오늘', '일주일 뒤' 같은 버튼을 옆에 붙인 형태입니다. 자주 쓰는 날짜를 한 번에 고릅니다.",
    Demo: Presets,
  },
  {
    id: "date-and-time-picker",
    name: "Date and Time Picker",
    description:
      "달력 아래에 시각 입력칸을 더해 날짜와 시간을 함께 정합니다. 일정 예약 화면에 씁니다.",
    Demo: DateAndTimePicker,
  },
  {
    id: "booked-dates",
    name: "Booked dates",
    description:
      "이미 찬 날짜를 취소선으로 표시하고 선택을 막습니다. 숙소나 회의실 예약에 씁니다.",
    Demo: BookedDates,
  },
  {
    id: "custom-cell-size",
    name: "Custom Cell Size",
    description:
      "--cell-size 값으로 날짜 칸 크기를 키웁니다. 화면 폭에 따라 다르게 줄 수도 있습니다.",
    Demo: CustomCellSize,
  },
  {
    id: "week-numbers",
    name: "Week Numbers",
    description:
      "왼쪽에 그 해의 몇 번째 주인지 표시합니다. 주 단위로 일하는 업무에 유용합니다.",
    Demo: WeekNumbers,
  },
]
