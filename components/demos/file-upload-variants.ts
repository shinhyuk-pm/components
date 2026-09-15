import type { DemoVariant } from "@/components/demo-types"
import {
  Accept,
  Basic,
  Disabled,
  Errors,
  Excel,
  WithList,
} from "@/components/demos/file-upload-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "파일을 끌어다 놓거나 눌러서 고릅니다. 키보드로도 Enter·Space로 열 수 있습니다.",
    Demo: Basic,
  },
  {
    id: "accept",
    name: "Accept",
    description:
      "받을 파일 종류와 안내 문구를 바꿉니다. 여러 개를 한 번에 받게 할 수도 있습니다.",
    Demo: Accept,
  },
  {
    id: "list",
    name: "With List",
    description:
      "고른 파일을 아래에 목록으로 보여 주고 하나씩 뺄 수 있게 합니다. 실제로 올려 보세요.",
    Demo: WithList,
  },
  {
    id: "excel",
    name: "Excel",
    description:
      "명부를 한꺼번에 등록하는 엑셀 업로드 형태입니다. 양식 내려받기를 함께 둡니다.",
    Demo: Excel,
  },
  {
    id: "errors",
    name: "Errors",
    description:
      "몇 줄이 실패했는지, 어느 칸이 왜 틀렸는지 표로 되돌려 줍니다.",
    Demo: Errors,
  },
  {
    id: "disabled",
    name: "Disabled",
    description:
      "올릴 수 없는 상태입니다. 흐려지고 끌어다 놓아도 반응하지 않습니다.",
    Demo: Disabled,
  },
]
