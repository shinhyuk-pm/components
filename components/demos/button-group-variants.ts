import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  Nested,
  Orientation,
  Sizes,
  Split,
  WithInput,
  WithText,
} from "@/components/demos/button-group-demo"

export const variants: DemoVariant[] = [
  { id: "basic", name: "Basic", description: "버튼 여러 개를 하나로 붙여 묶은 기본 형태입니다.", Demo: Basic },
  { id: "orientation", name: "Orientation", description: "가로로도, 세로로도 묶을 수 있습니다.", Demo: Orientation },
  { id: "size", name: "Sizes", description: "묶음 안 버튼 크기를 맞춰서 바꿉니다.", Demo: Sizes },
  { id: "separator", name: "Text & separator", description: "글자 라벨과 구분선을 끼워 넣습니다.", Demo: WithText },
  { id: "split", name: "Split", description: "주 동작 버튼 옆에 더보기 메뉴를 붙인 형태입니다.", Demo: Split },
  { id: "input", name: "With input", description: "입력칸과 버튼을 하나로 붙여 검색창을 만듭니다.", Demo: WithInput },
  { id: "nested", name: "Nested", description: "묶음 안에 묶음을 넣어 기능별로 구획을 나눕니다.", Demo: Nested },
]
