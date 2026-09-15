import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  Controlled,
  Disabled,
  MultipleThumbs,
  Range,
  Vertical,
} from "@/components/demos/slider-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "손잡이를 좌우로 끌어 값을 고르는 기본 형태입니다. 키보드 화살표로도 움직입니다.",
    Demo: Basic,
  },
  {
    id: "range",
    name: "Range",
    description:
      "손잡이가 두 개라 최저·최고 구간을 함께 고릅니다. 가격대 필터에 씁니다.",
    Demo: Range,
  },
  {
    id: "multiple-thumbs",
    name: "Multiple Thumbs",
    description: "손잡이를 셋 이상 두어 여러 지점을 한 줄에서 고릅니다.",
    Demo: MultipleThumbs,
  },
  {
    id: "vertical",
    name: "Vertical",
    description: "세로로 세운 형태입니다. 음량 조절기처럼 위아래로 움직입니다.",
    Demo: Vertical,
  },
  {
    id: "controlled",
    name: "Controlled",
    description:
      "고른 값을 코드가 들고 있어, 옮기는 즉시 옆의 숫자가 같이 바뀝니다.",
    Demo: Controlled,
  },
  {
    id: "disabled",
    name: "Disabled",
    description: "옮길 수 없게 잠근 상태입니다. 전체가 흐려집니다.",
    Demo: Disabled,
  },
]
