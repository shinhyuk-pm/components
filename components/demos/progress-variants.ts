import type { DemoVariant } from "@/components/demo-types"
import { Basic, Controlled, Rtl, WithLabel } from "@/components/demos/progress-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "작업이 얼마나 진행됐는지 보여주는 막대입니다. 페이지를 열면 13%에서 66%로 차오릅니다.",
    Demo: Basic,
  },
  {
    id: "label",
    name: "Label",
    description: "막대 위에 이름표와 현재 퍼센트를 함께 표시합니다.",
    Demo: WithLabel,
  },
  {
    id: "controlled",
    name: "Controlled",
    description: "슬라이더로 값을 바꾸면 막대가 따라 움직입니다. 값을 코드에서 직접 다루는 형태입니다.",
    Demo: Controlled,
  },
  {
    id: "rtl",
    name: "RTL",
    description: "아랍어처럼 오른쪽에서 왼쪽으로 읽는 언어용 배치입니다. 막대가 오른쪽부터 채워집니다.",
    Demo: Rtl,
  },
]
