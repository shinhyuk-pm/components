import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  Disabled,
  Groups,
  Invalid,
} from "@/components/demos/native-select-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "브라우저가 원래 제공하는 선택 상자에 모양만 입힌 것입니다. 가볍고 모바일에서는 기기 고유의 선택 화면이 뜹니다.",
    Demo: Basic,
  },
  {
    id: "groups",
    name: "Groups",
    description: "선택지를 부서별로 묶어 제목을 붙입니다.",
    Demo: Groups,
  },
  {
    id: "disabled",
    name: "Disabled",
    description: "선택을 막은 상태입니다.",
    Demo: Disabled,
  },
  {
    id: "invalid",
    name: "Invalid",
    description: "값이 잘못됐을 때 테두리가 빨갛게 바뀝니다.",
    Demo: Invalid,
  },
]
