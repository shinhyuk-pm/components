import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  Group,
  WithButton,
  WithTooltip,
} from "@/components/demos/kbd-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "키보드 키 하나하나를 작은 키캡 모양으로 보여줍니다. 단축키 안내에 씁니다.",
    Demo: Basic,
  },
  {
    id: "group",
    name: "Group",
    description: "여러 키 조합을 한 묶음으로 문장 속에 넣습니다.",
    Demo: Group,
  },
  {
    id: "button",
    name: "Button",
    description: "버튼 안에 단축키를 함께 표시합니다. '확인 ⏎'처럼 씁니다.",
    Demo: WithButton,
  },
  {
    id: "tooltip",
    name: "Tooltip",
    description: "버튼에 마우스를 올리면 뜨는 말풍선 안에 단축키를 보여줍니다.",
    Demo: WithTooltip,
  },
]
