import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  Size,
  WithBadge,
  WithButton,
  WithEmpty,
  WithInputGroup,
} from "@/components/demos/spinner-demo"

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
    id: "button",
    name: "Button",
    description:
      "버튼 안에 넣어 누른 뒤 처리 중임을 보여 줍니다. 보통 버튼을 함께 잠급니다.",
    Demo: WithButton,
  },
  {
    id: "badge",
    name: "Badge",
    description: "배지 안에 넣어 '동기화 중' 같은 상태를 표시합니다.",
    Demo: WithBadge,
  },
  {
    id: "input-group",
    name: "Input Group",
    description:
      "입력칸 오른쪽 끝에 넣어 중복 확인처럼 서버에 묻는 중임을 알립니다.",
    Demo: WithInputGroup,
  },
  {
    id: "empty",
    name: "Empty",
    description:
      "아직 보여 줄 내용이 없는 영역 한가운데에 놓아 불러오는 중임을 알립니다.",
    Demo: WithEmpty,
  },
]
