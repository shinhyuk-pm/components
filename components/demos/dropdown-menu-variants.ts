import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  Checkboxes,
  CheckboxesWithIcons,
  Complex,
  Destructive,
  Icons,
  RadioGroup,
  RadioWithIcons,
  Rtl,
  Shortcuts,
  Submenu,
  WithAvatar,
} from "@/components/demos/dropdown-menu-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description: "버튼을 누르면 아래로 펼쳐지는 기본 메뉴입니다. 제목·구분선·비활성 항목이 들어 있습니다.",
    Demo: Basic,
  },
  {
    id: "submenu",
    name: "Submenu",
    description: "항목에 마우스를 올리면 옆으로 한 단계 더 펼쳐지는 하위 메뉴입니다.",
    Demo: Submenu,
  },
  {
    id: "shortcuts",
    name: "Shortcuts",
    description: "항목 오른쪽에 단축키를 흐리게 표시합니다. 자주 쓰는 기능을 키보드로 익히게 합니다.",
    Demo: Shortcuts,
  },
  {
    id: "icons",
    name: "Icons",
    description: "항목 왼쪽에 아이콘을 붙여 한눈에 구분되게 합니다.",
    Demo: Icons,
  },
  {
    id: "checkboxes",
    name: "Checkboxes",
    description: "여러 개를 동시에 켜고 끄는 체크 항목입니다. 화면 표시 옵션 같은 설정에 씁니다.",
    Demo: Checkboxes,
  },
  {
    id: "checkboxes-with-icons",
    name: "Checkboxes with Icons",
    description: "체크 항목에 아이콘까지 붙인 형태입니다.",
    Demo: CheckboxesWithIcons,
  },
  {
    id: "radio-group",
    name: "Radio Group",
    description: "여러 항목 중 하나만 고르는 라디오 항목입니다. 고른 것에 표시가 옮겨 갑니다.",
    Demo: RadioGroup,
  },
  {
    id: "radio-with-icons",
    name: "Radio with Icons",
    description: "라디오 항목에 아이콘을 붙인 형태입니다. 결제 수단 선택처럼 씁니다.",
    Demo: RadioWithIcons,
  },
  {
    id: "destructive",
    name: "Destructive",
    description: "삭제처럼 되돌리기 어려운 동작을 빨간색으로 구분해 실수를 막습니다.",
    Demo: Destructive,
  },
  {
    id: "with-avatar",
    name: "With Avatar",
    description: "프로필 사진을 누르면 계정 메뉴가 뜨는, 화면 오른쪽 위에 흔히 있는 형태입니다.",
    Demo: WithAvatar,
  },
  {
    id: "complex",
    name: "Complex",
    description: "그룹·아이콘·단축키·체크·라디오·하위 메뉴를 한 메뉴에 모두 넣은 종합 예시입니다.",
    Demo: Complex,
  },
  {
    id: "rtl",
    name: "RTL",
    description: "아랍어처럼 오른쪽에서 왼쪽으로 읽는 언어용 배치입니다. 아이콘과 단축키 위치가 뒤집힙니다.",
    Demo: Rtl,
  },
]
