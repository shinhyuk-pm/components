import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  Columns,
  Divided,
  Inline,
  RichValue,
} from "@/components/demos/description-list-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "이름표 아래에 값을 두는 기본 형태입니다. 상세 화면에서 정보를 나열할 때 씁니다.",
    Demo: Basic,
  },
  {
    id: "columns",
    name: "Columns",
    description:
      "한 줄에 두세 칸으로 나눠 담습니다. 항목이 많을 때 세로로 길어지는 것을 막습니다.",
    Demo: Columns,
  },
  {
    id: "inline",
    name: "Inline",
    description:
      "이름표를 왼쪽, 값을 오른쪽에 나란히 둡니다. 이름표 너비가 고르게 맞춰집니다.",
    Demo: Inline,
  },
  {
    id: "divided",
    name: "Divided",
    description: "줄마다 구분선을 그어 항목 경계를 분명히 합니다.",
    Demo: Divided,
  },
  {
    id: "rich-value",
    name: "Rich Value",
    description:
      "값 자리에 배지·링크·긴 문장도 넣을 수 있습니다. 글이 길어지면 줄이 바뀝니다.",
    Demo: RichValue,
  },
]
