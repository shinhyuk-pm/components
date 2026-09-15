import type { DemoVariant } from "@/components/demo-types"
import {
  Alphanumeric,
  Basic,
  Controlled,
  Disabled,
  Form,
  FourDigits,
  Invalid,
  Pattern,
  Separator,
} from "@/components/demos/input-otp-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "여섯 칸짜리 인증번호 입력칸입니다. 한 글자 치면 다음 칸으로 자동으로 넘어갑니다.",
    Demo: Basic,
  },
  {
    id: "pattern",
    name: "Pattern",
    description: "숫자만 받도록 제한합니다. 글자를 쳐도 입력되지 않습니다.",
    Demo: Pattern,
  },
  {
    id: "separator",
    name: "Separator",
    description: "두 칸씩 묶고 사이에 구분선을 넣어 읽기 쉽게 합니다.",
    Demo: Separator,
  },
  {
    id: "disabled",
    name: "Disabled",
    description:
      "입력을 막은 상태입니다. 이미 확인이 끝난 번호를 보여줄 때 씁니다.",
    Demo: Disabled,
  },
  {
    id: "controlled",
    name: "Controlled",
    description:
      "입력한 값을 아래 문장에 바로 보여줍니다. 값을 코드에서 직접 다루는 형태입니다.",
    Demo: Controlled,
  },
  {
    id: "invalid",
    name: "Invalid",
    description: "번호가 틀렸을 때 칸 테두리가 빨갛게 바뀝니다.",
    Demo: Invalid,
  },
  {
    id: "four-digits",
    name: "Four Digits",
    description: "네 자리 비밀번호처럼 칸 수를 줄인 형태입니다.",
    Demo: FourDigits,
  },
  {
    id: "alphanumeric",
    name: "Alphanumeric",
    description: "숫자와 영문자를 모두 받습니다. 초대 코드 입력에 씁니다.",
    Demo: Alphanumeric,
  },
  {
    id: "form",
    name: "Form",
    description:
      "카드 안에 제목·설명·다시 보내기·확인 버튼까지 갖춘 실제 인증 화면입니다.",
    Demo: Form,
  },
]
