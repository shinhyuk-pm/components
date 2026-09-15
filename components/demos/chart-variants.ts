import type { DemoVariant } from "@/components/demo-types"
import {
  Axis,
  Basic,
  Grid,
  Legend,
  Tooltip,
  TooltipOptions,
} from "@/components/demos/chart-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "막대만 있는 가장 단순한 그래프입니다. 여기에 눈금선·축·툴팁을 하나씩 더해 갑니다.",
    Demo: Basic,
  },
  {
    id: "grid",
    name: "Grid",
    description: "가로 눈금선을 깔아 값을 눈으로 가늠하기 쉽게 만듭니다.",
    Demo: Grid,
  },
  {
    id: "axis",
    name: "Axis",
    description: "아래쪽에 월 이름표를 붙여 각 막대가 언제인지 알려 줍니다.",
    Demo: Axis,
  },
  {
    id: "tooltip",
    name: "Tooltip",
    description:
      "막대에 마우스를 올리면 정확한 숫자가 뜹니다. 그래프에서 가장 자주 쓰는 기능입니다.",
    Demo: Tooltip,
  },
  {
    id: "legend",
    name: "Legend",
    description:
      "어떤 색이 무엇을 뜻하는지 아래에 표시합니다. 항목이 둘 이상일 때 필요합니다.",
    Demo: Legend,
  },
  {
    id: "tooltip-options",
    name: "Tooltip Options",
    description:
      "툴팁의 표식 모양(dot·line·dashed)과 제목 표시 여부를 바꾼 예시입니다.",
    Demo: TooltipOptions,
  },
]
