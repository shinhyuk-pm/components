import type { DemoVariant } from "@/components/demo-types"
import { Basic, Size, WithEmpty } from "@/components/demos/spinner-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "빙글빙글 도는 표시로 '처리 중'임을 알립니다. 얼마나 남았는지는 알려 주지 않습니다.",
    Demo: Basic,
  },
  {
    id: "size",
    name: "Size",
    description: "크기를 자유롭게 조절합니다. 놓이는 자리에 맞춰 키웁니다.",
    Demo: Size,
  },
  {
    id: "empty",
    name: "Empty",
    description:
      "아직 보여 줄 내용이 없는 영역 한가운데에 놓아 불러오는 중임을 알립니다.",
    Demo: WithEmpty,
  },
]
