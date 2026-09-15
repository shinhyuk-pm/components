import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  Group,
  Loading,
  WithAction,
  WithFooter,
  WithProgress,
} from "@/components/demos/stat-card-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "숫자 하나와 전월 대비 증감을 함께 보여 주는 카드입니다. 대시보드 맨 위에 씁니다.",
    Demo: Basic,
  },
  {
    id: "group",
    name: "Group",
    description:
      "여러 장을 나란히 늘어놓습니다. 화면이 좁아지면 두 칸, 한 칸으로 줄어듭니다.",
    Demo: Group,
  },
  {
    id: "footer",
    name: "Footer",
    description: "맨 아래에 기준 시각이나 단서를 작게 덧붙입니다.",
    Demo: WithFooter,
  },
  {
    id: "progress",
    name: "Progress",
    description: "목표 대비 달성률을 막대로 함께 보여 줍니다.",
    Demo: WithProgress,
  },
  {
    id: "action",
    name: "Action",
    description: "카드 안에 바로 이동할 수 있는 버튼을 둡니다.",
    Demo: WithAction,
  },
  {
    id: "loading",
    name: "Loading",
    description: "값을 아직 못 받았을 때 숫자 자리에 회전 표시를 둡니다.",
    Demo: Loading,
  },
]
