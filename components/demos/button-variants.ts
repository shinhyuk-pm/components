import type { DemoVariant } from "@/components/demo-types"
import {
  AsLink,
  Disabled,
  IconOnly,
  Loading,
  Rounded,
  Sizes,
  Variants,
  WithIcon,
} from "@/components/demos/button-demo"

export const variants: DemoVariant[] = [
  { id: "variants", name: "Variants", description: "강조 정도에 따른 여섯 가지 기본 스타일입니다.", Demo: Variants },
  { id: "sizes", name: "Sizes", description: "XS부터 Large까지 네 가지 크기를 제공합니다.", Demo: Sizes },
  { id: "icon", name: "Icon", description: "글자 없이 아이콘만 넣은 정사각형 버튼입니다.", Demo: IconOnly },
  { id: "with-icon", name: "With icon", description: "글자 앞이나 뒤에 아이콘을 함께 넣습니다.", Demo: WithIcon },
  { id: "loading", name: "Loading", description: "처리 중일 때 회전 아이콘을 넣고 누르지 못하게 합니다.", Demo: Loading },
  { id: "disabled", name: "Disabled", description: "조건이 맞지 않아 누를 수 없는 상태입니다.", Demo: Disabled },
  { id: "rounded", name: "Rounded", description: "모서리를 완전히 둥글게 만든 형태입니다.", Demo: Rounded },
  { id: "as-link", name: "As link", description: "생김새는 버튼이지만 실제로는 링크로 동작합니다.", Demo: AsLink },
]
