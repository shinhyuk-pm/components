import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  ChoiceCard,
  Description,
  Disabled,
  Fieldset,
  Invalid,
} from "@/components/demos/radio-group-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "여러 선택지 중 하나만 고르는 동그란 버튼입니다. 하나를 고르면 나머지는 자동으로 해제됩니다.",
    Demo: Basic,
  },
  {
    id: "description",
    name: "Description",
    description: "각 선택지 아래에 짧은 설명을 붙입니다.",
    Demo: Description,
  },
  {
    id: "choice-card",
    name: "Choice Card",
    description:
      "선택지를 카드 모양으로 크게 만들어 제목·설명까지 보여줍니다. 요금제 선택에 흔합니다.",
    Demo: ChoiceCard,
  },
  {
    id: "fieldset",
    name: "Fieldset",
    description: "선택지 묶음에 제목(범례)과 설명을 붙입니다.",
    Demo: Fieldset,
  },
  {
    id: "disabled",
    name: "Disabled",
    description: "특정 선택지만 고를 수 없게 막습니다.",
    Demo: Disabled,
  },
  {
    id: "invalid",
    name: "Invalid",
    description: "값이 잘못됐을 때 동그라미 테두리가 빨갛게 바뀝니다.",
    Demo: Invalid,
  },
]
