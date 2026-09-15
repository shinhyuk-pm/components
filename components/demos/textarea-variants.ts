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
    description:
      "여러 줄 입력칸을 라벨·설명과 묶어 폼 한 줄로 만듭니다. 설명은 아래에 붙습니다.",
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
      "글자 수가 모자라는 등 값이 잘못됐을 때 테두리가 빨갛게 바뀌고 이유를 아래에 적어 줍니다.",
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
