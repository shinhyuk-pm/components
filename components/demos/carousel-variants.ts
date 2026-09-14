import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  Loop,
  Sizes,
  Spacing,
  Vertical,
  WithCounter,
} from "@/components/demos/carousel-demo"

export const variants: DemoVariant[] = [
  { id: "basic", name: "Basic", description: "한 번에 한 장씩 좌우로 넘기는 기본 형태입니다.", Demo: Basic },
  { id: "sizes", name: "Sizes", description: "한 화면에 여러 장이 보이도록 폭을 나눕니다.", Demo: Sizes },
  { id: "spacing", name: "Spacing", description: "슬라이드 사이 간격을 좁게 조절한 형태입니다.", Demo: Spacing },
  { id: "orientation", name: "Vertical", description: "위아래로 넘기는 세로 방향 슬라이드입니다.", Demo: Vertical },
  { id: "loop", name: "Loop", description: "마지막에서 다음을 누르면 처음으로 돌아갑니다.", Demo: Loop },
  { id: "api", name: "Counter", description: "현재 몇 번째 장인지 바깥에서 읽어 표시합니다.", Demo: WithCounter },
]
