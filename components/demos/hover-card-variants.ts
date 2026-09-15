import type { DemoVariant } from "@/components/demo-types"
import { Basic, Sides } from "@/components/demos/hover-card-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "링크나 이름에 마우스를 올리면 미리보기 카드가 뜹니다. 프로필 요약을 보여줄 때 씁니다.",
    Demo: Basic,
  },
  {
    id: "sides",
    name: "Sides",
    description: "카드가 나타나는 방향을 위·아래·왼쪽·오른쪽 중에서 고릅니다.",
    Demo: Sides,
  },
]
