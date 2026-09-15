import type { DemoVariant } from "@/components/demo-types"
import { Basic, InField } from "@/components/demos/label-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "체크박스 옆에 붙은 이름표입니다. 글자를 눌러도 체크가 되도록 입력 요소와 연결됩니다.",
    Demo: Basic,
  },
  {
    id: "in-field",
    name: "Label in Field",
    description: "Field 안에서 라벨·입력칸·설명이 한 세트로 정돈된 형태입니다.",
    Demo: InField,
  },
]
