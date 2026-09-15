import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  Disabled,
  Invalid,
  WithButton,
  WithField,
} from "@/components/demos/textarea-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "여러 줄을 입력하는 기본 입력칸입니다. 내용이 길어지면 높이가 저절로 늘어납니다.",
    Demo: Basic,
  },
  {
    id: "field",
    name: "Field",
    description: "Field 안에서 라벨·입력칸·설명이 한 세트로 정돈된 형태입니다.",
    Demo: WithField,
  },
  {
    id: "disabled",
    name: "Disabled",
    description: "입력을 막은 상태입니다. 배경이 흐려지고 커서가 바뀝니다.",
    Demo: Disabled,
  },
  {
    id: "invalid",
    name: "Invalid",
    description:
      "값이 잘못됐을 때 테두리가 빨갛게 바뀌고 오류 문구가 아래에 나타납니다.",
    Demo: Invalid,
  },
  {
    id: "button",
    name: "Button",
    description:
      "입력칸 아래에 보내기 버튼을 붙인 형태입니다. 문의·댓글 작성에 씁니다.",
    Demo: WithButton,
  },
]
