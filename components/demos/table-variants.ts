import type { DemoVariant } from "@/components/demo-types"
import { Basic, EmptyState, Footer } from "@/components/demos/table-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "제목줄과 내용줄로 이루어진 기본 표입니다. 표 아래 설명(캡션)을 달 수 있습니다.",
    Demo: Basic,
  },
  {
    id: "footer",
    name: "Footer",
    description:
      "표 맨 아래에 합계 줄을 붙입니다. 금액처럼 전체를 요약해야 할 때 씁니다.",
    Demo: Footer,
  },
  {
    id: "empty",
    name: "Empty",
    description:
      "보여 줄 행이 없을 때 표 안쪽에 안내를 띄웁니다. 제목줄은 그대로 두어 어떤 표인지 알 수 있게 합니다.",
    Demo: EmptyState,
  },
]
