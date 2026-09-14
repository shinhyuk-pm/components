import type { DemoVariant } from "@/components/demo-types"
import {
  Alignment,
  Conversation,
  LinksAndButtons,
  Reactions,
  Variants,
  WithTooltip,
} from "@/components/demos/bubble-demo"

export const variants: DemoVariant[] = [
  { id: "variants", name: "Variants", description: "색과 테두리가 다른 여섯 가지 말풍선 스타일입니다.", Demo: Variants },
  { id: "alignment", name: "Alignment", description: "왼쪽·오른쪽 정렬로 보낸 쪽과 받은 쪽을 구분합니다.", Demo: Alignment },
  { id: "group", name: "Group", description: "여러 말풍선을 묶어 실제 대화처럼 배치합니다.", Demo: Conversation },
  { id: "links-and-buttons", name: "Links & buttons", description: "말풍선 자체를 링크나 버튼으로 만들어 누를 수 있게 합니다.", Demo: LinksAndButtons },
  { id: "reactions", name: "Reactions", description: "말풍선 모서리에 이모지 반응을 붙입니다.", Demo: Reactions },
  { id: "tooltip", name: "Tooltip", description: "마우스를 올리면 보낸 시각 같은 정보를 보여줍니다.", Demo: WithTooltip },
]
