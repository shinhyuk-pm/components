import type { DemoVariant } from "@/components/demo-types"
import { Alignments, Basic, Form } from "@/components/demos/popover-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "버튼을 누르면 바로 옆에 작은 창이 뜹니다. 배경을 가리지 않아 Dialog보다 가볍게 정보를 보여줄 때 씁니다.",
    Demo: Basic,
  },
  {
    id: "alignments",
    name: "Alignments",
    description: "창이 버튼의 시작·가운데·끝 중 어디에 맞춰 열릴지 고릅니다.",
    Demo: Alignments,
  },
  {
    id: "form",
    name: "Form",
    description:
      "창 안에 입력칸을 넣어 값을 바로 고칠 수 있게 합니다. 너비·높이 설정 같은 데 씁니다.",
    Demo: Form,
  },
]
