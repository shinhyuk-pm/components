import type { DemoVariant } from "@/components/demo-types"
import {
  AsLink,
  CustomColors,
  Variants,
  WithIcon,
  WithSpinner,
} from "@/components/demos/badge-demo"

export const variants: DemoVariant[] = [
  { id: "variants", name: "Variants", description: "기본으로 제공되는 여섯 가지 강조 스타일입니다.", Demo: Variants },
  { id: "with-icon", name: "With icon", description: "앞이나 뒤에 아이콘을 붙여 의미를 더합니다.", Demo: WithIcon },
  { id: "with-spinner", name: "With spinner", description: "처리 중인 상태를 회전 아이콘으로 알립니다.", Demo: WithSpinner },
  { id: "link", name: "Link", description: "render 옵션으로 링크처럼 눌리게 만든 형태입니다.", Demo: AsLink },
  { id: "custom-colors", name: "Custom colors", description: "색상 클래스를 직접 지정해 상태별로 구분합니다.", Demo: CustomColors },
]
