import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  Controlled,
  Disabled,
  Format,
  MinMax,
  Scrub,
  Step,
} from "@/components/demos/number-field-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "빼기·더하기 버튼으로 숫자를 올리고 내립니다. 칸을 눌러 직접 칠 수도, 위아래 화살표 키로도 바꿀 수 있습니다.",
    Demo: Basic,
  },
  {
    id: "min-max",
    name: "Min & Max",
    description:
      "아래·위 한계를 정해 둡니다. 한계에 닿으면 해당 버튼이 저절로 잠깁니다.",
    Demo: MinMax,
  },
  {
    id: "step",
    name: "Step",
    description:
      "한 번 누를 때 움직이는 크기를 정합니다. 1주(7일) 단위처럼 묶어 셀 때 씁니다.",
    Demo: Step,
  },
  {
    id: "format",
    name: "Format",
    description:
      "원화 기호와 천 단위 쉼표를 저절로 붙입니다. 금액 입력에 씁니다.",
    Demo: Format,
  },
  {
    id: "scrub",
    name: "Scrub",
    description:
      "글자 영역을 좌우로 끌어 값을 빠르게 바꿉니다. 버튼을 여러 번 누를 필요가 없습니다.",
    Demo: Scrub,
  },
  {
    id: "controlled",
    name: "Controlled",
    description: "값을 코드가 들고 있어, 바뀌는 즉시 합계를 다시 계산합니다.",
    Demo: Controlled,
  },
  {
    id: "disabled",
    name: "Disabled & Read only",
    description:
      "왼쪽은 아예 잠근 상태, 오른쪽은 보기만 되는 상태입니다. 읽기 전용은 흐려지지 않습니다.",
    Demo: Disabled,
  },
]
