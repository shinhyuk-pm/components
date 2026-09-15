import type { DemoVariant } from "@/components/demo-types"
import { Basic, DisabledButton, Sides } from "@/components/demos/tooltip-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "마우스를 올리거나 키보드로 옮겨 가면 짧은 설명 말풍선이 뜹니다.",
    Demo: Basic,
  },
  {
    id: "sides",
    name: "Sides",
    description:
      "말풍선이 뜨는 방향을 위·아래·왼쪽·오른쪽 중에서 고릅니다. 화면 끝에서는 알아서 뒤집힙니다.",
    Demo: Sides,
  },
  {
    id: "disabled-button",
    name: "Disabled Button",
    description:
      "잠긴 버튼은 마우스 반응이 없어 말풍선도 안 뜹니다. 바깥을 감싸 주면 '왜 못 누르는지'를 알려 줄 수 있습니다.",
    Demo: DisabledButton,
  },
]
