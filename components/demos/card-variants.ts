import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  Small,
  Spacing,
  WithAction,
  WithFooter,
} from "@/components/demos/card-demo"

export const variants: DemoVariant[] = [
  { id: "basic", name: "Basic", description: "제목·설명·본문으로 이뤄진 가장 단순한 형태입니다.", Demo: Basic },
  { id: "action", name: "Action", description: "머리말 오른쪽에 버튼을 붙여 추가 동작을 둡니다.", Demo: WithAction },
  { id: "footer", name: "Footer", description: "아래쪽에 확인·취소 같은 버튼 영역을 둡니다.", Demo: WithFooter },
  { id: "small", name: "Small", description: "여백이 좁은 작은 크기입니다. 목록 안에 여러 장 넣을 때 좋습니다.", Demo: Small },
  { id: "spacing", name: "Spacing", description: "여백 변수 하나로 카드 전체 간격을 조절합니다.", Demo: Spacing },
]
