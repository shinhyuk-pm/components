import type { DemoVariant } from "@/components/demo-types"
import { Basic, Horizontal } from "@/components/demos/scroll-area-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "정해진 높이 안에서 내용을 위아래로 스크롤합니다. 브라우저 기본 스크롤 막대 대신 얇고 통일된 막대가 보입니다.",
    Demo: Basic,
  },
  {
    id: "horizontal",
    name: "Horizontal",
    description:
      "좌우로 스크롤하는 형태입니다. 사진이나 카드를 한 줄로 늘어놓을 때 씁니다.",
    Demo: Horizontal,
  },
]
