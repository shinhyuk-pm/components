import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  Borders,
  Disabled,
  InCard,
  Multiple,
} from "@/components/demos/accordion-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description: "한 번에 하나만 열리는 기본 형태입니다. 첫 항목이 열려 있습니다.",
    Demo: Basic,
  },
  {
    id: "multiple",
    name: "Multiple",
    description: "multiple 옵션을 주면 여러 항목을 동시에 펼쳐 둘 수 있습니다.",
    Demo: Multiple,
  },
  {
    id: "disabled",
    name: "Disabled",
    description: "특정 항목만 잠가서 펼치지 못하게 합니다.",
    Demo: Disabled,
  },
  {
    id: "borders",
    name: "Borders",
    description: "테두리와 구분선을 넣어 항목 경계를 뚜렷하게 만든 형태입니다.",
    Demo: Borders,
  },
  {
    id: "card",
    name: "Card",
    description: "Card 안에 넣어 제목과 설명을 함께 보여주는 형태입니다.",
    Demo: InCard,
  },
]
