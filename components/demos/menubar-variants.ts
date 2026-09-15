import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  Checkbox,
  Icons,
  Radio,
  Submenu,
} from "@/components/demos/menubar-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "파일·편집·보기·프로필 메뉴가 나란히 놓인 프로그램 상단 메뉴 막대입니다. 단축키·하위 메뉴·체크·라디오가 모두 들어 있습니다.",
    Demo: Basic,
  },
  {
    id: "checkbox",
    name: "Checkbox",
    description: "켜고 끄는 체크 항목이 있는 메뉴입니다. 보기 옵션에 씁니다.",
    Demo: Checkbox,
  },
  {
    id: "radio",
    name: "Radio",
    description:
      "하나만 고르는 라디오 항목이 있는 메뉴입니다. 프로필·테마 선택에 씁니다.",
    Demo: Radio,
  },
  {
    id: "submenu",
    name: "Submenu",
    description:
      "항목 위에 마우스를 올리면 옆으로 한 단계 더 펼쳐지는 하위 메뉴입니다.",
    Demo: Submenu,
  },
  {
    id: "icons",
    name: "Icons",
    description:
      "항목 왼쪽에 아이콘을 붙이고, 삭제 같은 위험한 동작은 빨간색으로 구분합니다.",
    Demo: Icons,
  },
]
