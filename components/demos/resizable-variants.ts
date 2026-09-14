import type { DemoVariant } from "@/components/demo-types"
import { Basic, Handle, Rtl, Vertical } from "@/components/demos/resizable-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "경계선을 끌어 영역 크기를 바꾸는 분할 화면입니다. 가로 분할 안에 세로 분할을 겹쳐 넣었습니다.",
    Demo: Basic,
  },
  {
    id: "vertical",
    name: "Vertical",
    description: "위아래로 나눈 분할 화면입니다. 머리글과 본문 높이를 조절할 때 씁니다.",
    Demo: Vertical,
  },
  {
    id: "handle",
    name: "Handle",
    description: "경계선 가운데에 손잡이를 표시해 끌 수 있음을 알립니다. 사이드바 너비 조절에 흔합니다.",
    Demo: Handle,
  },
  {
    id: "rtl",
    name: "RTL",
    description: "아랍어처럼 오른쪽에서 왼쪽으로 읽는 언어용 배치입니다. 사이드바가 오른쪽에 놓입니다.",
    Demo: Rtl,
  },
]
