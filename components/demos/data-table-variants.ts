import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  CellFormatting,
  Filtering,
  Pagination,
  RowActions,
  RowSelection,
  Rtl,
  Sorting,
  Visibility,
} from "@/components/demos/data-table-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic Table",
    description:
      "정렬도 필터도 없이 데이터만 보여주는 가장 단순한 표입니다.",
    Demo: Basic,
  },
  {
    id: "cell-formatting",
    name: "Cell Formatting",
    description:
      "금액 칸을 통화 형식으로 바꾸고 오른쪽으로 정렬했습니다.",
    Demo: CellFormatting,
  },
  {
    id: "sorting",
    name: "Sorting",
    description:
      "이메일 제목을 누르면 오름차순·내림차순으로 정렬됩니다.",
    Demo: Sorting,
  },
  {
    id: "filtering",
    name: "Filtering",
    description:
      "위쪽 입력칸에 글자를 치면 이메일 기준으로 행이 걸러집니다.",
    Demo: Filtering,
  },
  {
    id: "visibility",
    name: "Visibility",
    description:
      "'열 선택' 버튼으로 원하는 열만 보이게 켜고 끕니다.",
    Demo: Visibility,
  },
  {
    id: "row-selection",
    name: "Row Selection",
    description:
      "각 행 앞 체크박스로 여러 행을 한 번에 고르고, 몇 개를 골랐는지 아래에 보여줍니다.",
    Demo: RowSelection,
  },
  {
    id: "row-actions",
    name: "Row Actions",
    description:
      "행 오른쪽 점 세 개 버튼을 누르면 그 행에 대한 메뉴(ID 복사 등)가 뜹니다.",
    Demo: RowActions,
  },
  {
    id: "pagination",
    name: "Pagination",
    description:
      "아래 이전·다음 버튼으로 페이지를 넘깁니다. 행이 많을 때 한 화면에 다 보여주지 않기 위해 씁니다.",
    Demo: Pagination,
  },
  {
    id: "rtl",
    name: "RTL",
    description:
      "아랍어처럼 오른쪽에서 왼쪽으로 읽는 언어용 배치입니다. 글자와 열 순서가 뒤집힙니다.",
    Demo: Rtl,
  },
]
