import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  BlockEnd,
  BlockStart,
  Button,
  Custom,
  Dropdown,
  Icon,
  InlineEnd,
  InlineStart,
  Text,
  Textarea,
  WithKbd,
  WithSpinner,
} from "@/components/demos/input-group-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description: "입력칸 앞에 아이콘, 뒤에 결과 수를 붙인 기본 형태입니다.",
    Demo: Basic,
  },
  {
    id: "inline-start",
    name: "Inline Start",
    description: "아이콘을 입력칸 앞쪽(왼쪽)에 둡니다.",
    Demo: InlineStart,
  },
  {
    id: "inline-end",
    name: "Inline End",
    description:
      "아이콘을 입력칸 뒤쪽(오른쪽)에 둡니다. 비밀번호 보기 버튼에 흔합니다.",
    Demo: InlineEnd,
  },
  {
    id: "block-start",
    name: "Block Start",
    description:
      "입력칸 위쪽에 머리글 줄을 붙입니다. 파일 이름·복사 버튼을 얹은 코드 칸에 씁니다.",
    Demo: BlockStart,
  },
  {
    id: "block-end",
    name: "Block End",
    description:
      "입력칸 아래쪽에 바닥글 줄을 붙입니다. 글자 수·게시 버튼을 얹은 댓글 칸에 씁니다.",
    Demo: BlockEnd,
  },
  {
    id: "icon",
    name: "Icon",
    description:
      "검색·메일·카드 등 아이콘을 앞뒤에 다양하게 붙인 예시 모음입니다.",
    Demo: Icon,
  },
  {
    id: "text",
    name: "Text",
    description:
      "'$', 'https://', '@company.com'처럼 고정 글자를 앞뒤에 붙입니다.",
    Demo: Text,
  },
  {
    id: "button",
    name: "Button",
    description: "복사·즐겨찾기·검색 같은 작은 버튼을 입력칸 안에 넣습니다.",
    Demo: Button,
  },
  {
    id: "kbd",
    name: "Kbd",
    description: "오른쪽에 ⌘K 같은 단축키 힌트를 보여줍니다.",
    Demo: WithKbd,
  },
  {
    id: "dropdown",
    name: "Dropdown",
    description:
      "입력칸 안 버튼을 누르면 메뉴가 펼쳐집니다. 검색 범위 선택 같은 데 씁니다.",
    Demo: Dropdown,
  },
  {
    id: "spinner",
    name: "Spinner",
    description: "처리 중임을 알리는 회전 표시를 입력칸 안에 넣습니다.",
    Demo: WithSpinner,
  },
  {
    id: "textarea",
    name: "Textarea",
    description:
      "여러 줄 입력칸 위아래에 도구 줄을 붙인 코드 편집기 모양입니다.",
    Demo: Textarea,
  },
  {
    id: "custom",
    name: "Custom",
    description:
      "직접 만든 입력 요소도 data-slot만 맞추면 같은 묶음 안에 넣을 수 있습니다.",
    Demo: Custom,
  },
]
