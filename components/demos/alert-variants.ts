import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  CustomColors,
  Destructive,
  TitleOnly,
  WithAction,
} from "@/components/demos/alert-demo"

export const variants: DemoVariant[] = [
  { id: "basic", name: "Basic", description: "아이콘·제목·설명으로 이뤄진 기본 알림입니다.", Demo: Basic },
  { id: "destructive", name: "Destructive", description: "오류나 경고처럼 위험한 상황을 붉은색으로 알립니다.", Demo: Destructive },
  { id: "action", name: "Action", description: "오른쪽에 버튼을 붙여 바로 조치할 수 있게 합니다.", Demo: WithAction },
  { id: "title-only", name: "Title only", description: "설명 없이 한 줄로만 알릴 때 쓰는 간결한 형태입니다.", Demo: TitleOnly },
  { id: "custom-colors", name: "Custom colors", description: "색상 클래스를 덿붙여 성공·주의 같은 상태를 직접 표현합니다.", Demo: CustomColors },
]
