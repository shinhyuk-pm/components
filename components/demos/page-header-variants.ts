import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  WithActions,
  WithBadge,
  WithBreadcrumb,
  WithTabs,
} from "@/components/demos/page-header-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "화면 이름과 한 줄 설명으로 이루어진 기본 머리글입니다. 아래에 구분선이 그어집니다.",
    Demo: Basic,
  },
  {
    id: "actions",
    name: "Actions",
    description:
      "오른쪽에 등록·내려받기 같은 주요 버튼을 둡니다. 좁은 화면에서는 아래로 내려갑니다.",
    Demo: WithActions,
  },
  {
    id: "badge",
    name: "Badge",
    description: "제목 옆에 상태 배지를 붙여 지금 어떤 상태인지 알립니다.",
    Demo: WithBadge,
  },
  {
    id: "breadcrumb",
    name: "Breadcrumb",
    description: "위쪽에 현재 위치를 함께 보여 줍니다. 깊은 메뉴에 씁니다.",
    Demo: WithBreadcrumb,
  },
  {
    id: "tabs",
    name: "Tabs",
    description:
      "머리글 아래에 탭을 이어 붙여 하위 화면을 나눕니다. 구분선은 탭이 대신합니다.",
    Demo: WithTabs,
  },
]
