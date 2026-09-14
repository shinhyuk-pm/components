import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  Group,
  Sizes,
  WithBadge,
  WithDropdown,
} from "@/components/demos/avatar-demo"

export const variants: DemoVariant[] = [
  { id: "basic", name: "Basic", description: "사진이 있으면 사진을, 없으면 이니셜을 보여줍니다.", Demo: Basic },
  { id: "sizes", name: "Sizes", description: "작게·보통·크게 세 가지 크기를 지원합니다.", Demo: Sizes },
  { id: "badge", name: "Badge", description: "오른쪽 아래에 접속 상태나 인증 표시를 붙입니다.", Demo: WithBadge },
  { id: "group", name: "Group", description: "여러 명을 겹쳐 묶고, 남은 인원 수를 함께 보여줍니다.", Demo: Group },
  { id: "dropdown", name: "Dropdown", description: "눌렀을 때 계정 메뉴가 열리는 형태입니다.", Demo: WithDropdown },
]
