import type { DemoVariant } from "@/components/demo-types"
import {
  AlignItem,
  Basic,
  Disabled,
  EmailDomain,
  Groups,
  Invalid,
  Scrollable,
} from "@/components/demos/select-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "버튼을 누르면 목록이 펼쳐지고 하나를 고르는 선택 상자입니다. 브라우저 기본 것보다 모양을 자유롭게 꾸밀 수 있습니다.",
    Demo: Basic,
  },
  {
    id: "align-item",
    name: "Align Item",
    description:
      "고른 항목이 버튼 위치에 딱 맞춰 열릴지, 목록이 버튼 아래에 열릴지 스위치로 바꿔 봅니다.",
    Demo: AlignItem,
  },
  {
    id: "groups",
    name: "Groups",
    description: "선택지를 과일·채소처럼 묶고 제목과 구분선을 넣습니다.",
    Demo: Groups,
  },
  {
    id: "scrollable",
    name: "Scrollable",
    description:
      "선택지가 많아도 목록 높이를 고정해 두고 그 안에서만 스크롤됩니다. 시간대 선택처럼 긴 목록에 씁니다.",
    Demo: Scrollable,
  },
  {
    id: "disabled",
    name: "Disabled",
    description:
      "선택 상자 전체를 막거나, 특정 항목만 고를 수 없게 할 수 있습니다.",
    Demo: Disabled,
  },
  {
    id: "invalid",
    name: "Invalid",
    description:
      "값이 잘못됐을 때 테두리가 빨갛게 바뀌고 오류 문구가 아래에 나타납니다.",
    Demo: Invalid,
  },
  {
    id: "email-domain",
    name: "Email Domain",
    description:
      "이메일 도메인을 목록에서 고르되, '직접 입력'을 고르면 빈 칸으로 바뀝니다. 회원가입 폼에 흔한 형태입니다.",
    Demo: EmailDomain,
  },
]
