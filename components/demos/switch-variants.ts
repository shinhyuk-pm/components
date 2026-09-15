import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  ChoiceCard,
  Description,
  Disabled,
  Invalid,
  Size,
} from "@/components/demos/switch-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "켜고 끄는 토글 스위치입니다. 옆의 라벨을 눌러도 같이 켜집니다.",
    Demo: Basic,
  },
  {
    id: "description",
    name: "Description",
    description:
      "스위치 왼쪽에 제목과 설명을 붙인 형태입니다. 설명 글을 눌러도 켜집니다.",
    Demo: Description,
  },
  {
    id: "choice-card",
    name: "Choice Card",
    description:
      "카드 전체가 누를 수 있는 영역이 됩니다. 알림 설정처럼 여러 개를 나란히 둘 때 씁니다.",
    Demo: ChoiceCard,
  },
  {
    id: "disabled",
    name: "Disabled",
    description: "바꿀 수 없게 잠근 상태입니다. 색이 흐려집니다.",
    Demo: Disabled,
  },
  {
    id: "invalid",
    name: "Invalid",
    description: "꼭 켜야 하는데 꺼져 있을 때 오류 문구를 함께 보여 줍니다.",
    Demo: Invalid,
  },
  {
    id: "size",
    name: "Size",
    description: "작은 크기와 기본 크기 두 가지를 지원합니다.",
    Demo: Size,
  },
]
