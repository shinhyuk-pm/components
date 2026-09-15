import type { DemoVariant } from "@/components/demo-types"
import {
  Border,
  LinksAndButtons,
  Separator,
  Shimmer,
  Status,
  Variants,
  WithIcon,
} from "@/components/demos/marker-demo"

export const variants: DemoVariant[] = [
  {
    id: "variants",
    name: "Variants",
    description:
      "기본·구분선·테두리 세 가지 모양입니다. 대화 사이에 끼워 넣는 안내 줄에 씁니다.",
    Demo: Variants,
  },
  {
    id: "status",
    name: "Status",
    description:
      "아이콘과 함께 진행 상태를 알립니다. 화면 낭독기에도 변화가 전달됩니다.",
    Demo: Status,
  },
  {
    id: "shimmer",
    name: "Shimmer",
    description:
      "글자에 반짝이는 효과를 주어 아직 처리 중임을 나타냅니다. 답변을 받아쓰는 동안 씁니다.",
    Demo: Shimmer,
  },
  {
    id: "separator",
    name: "Separator",
    description:
      "가운데 글자를 두고 좌우로 선이 뻗습니다. 날짜 구분이나 '읽지 않은 메시지' 표시에 씁니다.",
    Demo: Separator,
  },
  {
    id: "border",
    name: "Border",
    description:
      "아래쪽에만 선을 그어 상태 줄을 구분합니다. 글은 왼쪽 정렬을 유지합니다.",
    Demo: Border,
  },
  {
    id: "with-icon",
    name: "With Icon",
    description: "아이콘을 글 옆에 두거나 위에 쌓아 올릴 수 있습니다.",
    Demo: WithIcon,
  },
  {
    id: "links-and-buttons",
    name: "Links & Buttons",
    description:
      "줄 전체를 링크로 바꾸거나 오른쪽에 버튼을 붙여 누를 수 있게 만듭니다.",
    Demo: LinksAndButtons,
  },
]
