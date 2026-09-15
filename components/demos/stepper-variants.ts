import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  Compact,
  Controlled,
  Vertical,
  WithDescription,
} from "@/components/demos/stepper-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "여러 단계를 거치는 화면에서 지금 몇 번째인지 보여 줍니다. 끝난 단계는 체크로 바뀝니다.",
    Demo: Basic,
  },
  {
    id: "description",
    name: "Description",
    description: "단계 이름 아래에 무엇을 하는 단계인지 한 줄로 덧붙입니다.",
    Demo: WithDescription,
  },
  {
    id: "vertical",
    name: "Vertical",
    description:
      "위에서 아래로 세워 둡니다. 단계가 많거나 화면이 좁을 때 씁니다.",
    Demo: Vertical,
  },
  {
    id: "controlled",
    name: "Controlled",
    description:
      "이전·다음 버튼으로 실제로 단계를 옮겨 봅니다. 현재 단계를 코드가 들고 있습니다.",
    Demo: Controlled,
  },
  {
    id: "compact",
    name: "Compact",
    description:
      "글자 없이 막대만으로 진행을 표시합니다. 모바일 화면처럼 자리가 좁을 때 씁니다.",
    Demo: Compact,
  },
]
