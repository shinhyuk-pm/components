import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  Collapsed,
  CustomSeparator,
  Responsive,
  WithDropdown,
} from "@/components/demos/breadcrumb-demo"

export const variants: DemoVariant[] = [
  { id: "basic", name: "Basic", description: "화살표로 구분되는 기본 이동 경로입니다.", Demo: Basic },
  { id: "custom-separator", name: "Custom separator", description: "구분 기호를 슬래시 등 원하는 아이콘으로 바꿉니다.", Demo: CustomSeparator },
  { id: "collapsed", name: "Collapsed", description: "경로가 길 때 가운데를 말줄임표로 접습니다.", Demo: Collapsed },
  { id: "dropdown", name: "Dropdown", description: "접힌 부분을 누르면 숨겨진 경로가 메뉴로 열립니다.", Demo: WithDropdown },
  { id: "responsive", name: "Responsive", description: "화면이 좁아지면 중간 단계를 자동으로 숨깁니다.", Demo: Responsive },
]
