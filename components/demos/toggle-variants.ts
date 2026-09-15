import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  Controlled,
  Disabled,
  Size,
  Variants,
  WithText,
} from "@/components/demos/toggle-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "누르면 눌린 채로 남는 버튼입니다. 한 번 더 누르면 풀립니다. Switch와 달리 버튼 모양을 유지합니다.",
    Demo: Basic,
  },
  {
    id: "variants",
    name: "Variants",
    description: "배경만 바뀌는 기본형과 테두리가 있는 형태 두 가지입니다.",
    Demo: Variants,
  },
  {
    id: "size",
    name: "Size",
    description:
      "버튼 높이를 작게·보통·크게 세 가지로 바꿉니다. 도구 모음에 맞춰 고릅니다.",
    Demo: Size,
  },
  {
    id: "with-text",
    name: "With Text",
    description: "아이콘 옆에 글자를 붙여 무엇이 켜졌는지 분명히 합니다.",
    Demo: WithText,
  },
  {
    id: "controlled",
    name: "Controlled",
    description:
      "눌린 상태를 코드가 들고 있어, 상태에 따라 아이콘과 글자를 함께 바꿉니다.",
    Demo: Controlled,
  },
  {
    id: "disabled",
    name: "Disabled",
    description: "누를 수 없게 잠근 상태입니다. 눌린 채로 잠글 수도 있습니다.",
    Demo: Disabled,
  },
]
