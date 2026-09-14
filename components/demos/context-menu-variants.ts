import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  Destructive,
  WithCheckboxes,
  WithIconsAndShortcuts,
  WithRadio,
  WithSubmenu,
} from "@/components/demos/context-menu-demo"

export const variants: DemoVariant[] = [
  { id: "basic", name: "Basic", description: "오른쪽 버튼을 누르면 나오는 가장 단순한 메뉴입니다.", Demo: Basic },
  { id: "icons", name: "Icons & shortcuts", description: "아이콘과 단축키를 함께 표시합니다.", Demo: WithIconsAndShortcuts },
  { id: "submenu", name: "Submenu", description: "항목 위에 올리면 하위 메뉴가 옆으로 펼쳐집니다.", Demo: WithSubmenu },
  { id: "checkboxes", name: "Checkboxes", description: "켜고 끄는 항목을 메뉴 안에 둡니다.", Demo: WithCheckboxes },
  { id: "radio", name: "Radio", description: "여러 선택지 중 하나만 고르게 합니다.", Demo: WithRadio },
  { id: "destructive", name: "Destructive", description: "삭제처럼 위험한 항목을 붉은색으로 구분합니다.", Demo: Destructive },
]
