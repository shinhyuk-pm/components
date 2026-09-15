import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  Disabled,
  Icons,
  Line,
  Vertical,
} from "@/components/demos/tabs-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "여러 화면을 한자리에 겹쳐 두고 위쪽 이름표로 갈아 끼웁니다. 키보드는 좌우 화살표로 옮겨 다닌 뒤 Enter로 고릅니다.",
    Demo: Basic,
  },
  {
    id: "line",
    name: "Line",
    description:
      "배경 상자 없이 밑줄만으로 현재 탭을 표시합니다. 목록 위 필터에 잘 어울립니다.",
    Demo: Line,
  },
  {
    id: "vertical",
    name: "Vertical",
    description: "이름표를 왼쪽에 세로로 세웁니다. 설정 화면에 흔합니다.",
    Demo: Vertical,
  },
  {
    id: "disabled",
    name: "Disabled",
    description:
      "권한이 없는 탭을 눌리지 않게 막습니다. 흐리게 보이고 키보드로도 건너뜁니다.",
    Demo: Disabled,
  },
  {
    id: "icons",
    name: "Icons",
    description: "이름표에 아이콘을 함께 넣어 알아보기 쉽게 합니다.",
    Demo: Icons,
  },
]
