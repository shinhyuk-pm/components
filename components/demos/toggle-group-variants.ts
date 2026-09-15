import type { DemoVariant } from "@/components/demo-types"
import {
  Attached,
  Basic,
  Multiple,
  Single,
  Size,
  Vertical,
} from "@/components/demos/toggle-group-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "눌린 채로 남는 버튼 여러 개를 한 묶음으로 다룹니다. 글자 서식 도구 모음에 흔합니다.",
    Demo: Basic,
  },
  {
    id: "single",
    name: "Single",
    description:
      "하나만 고를 수 있습니다. 다른 것을 누르면 앞의 것이 저절로 풀립니다.",
    Demo: Single,
  },
  {
    id: "multiple",
    name: "Multiple",
    description:
      "여러 개를 동시에 켤 수 있습니다. 굵게+밑줄처럼 겹쳐 쓰는 서식에 씁니다.",
    Demo: Multiple,
  },
  {
    id: "attached",
    name: "Attached",
    description:
      "간격을 0으로 두면 버튼끼리 딱 붙어 하나의 막대처럼 보입니다. 기간 선택에 흔합니다.",
    Demo: Attached,
  },
  {
    id: "vertical",
    name: "Vertical",
    description: "위아래로 세워서 묶습니다. 좁은 세로 도구 모음에 씁니다.",
    Demo: Vertical,
  },
  {
    id: "size",
    name: "Size",
    description: "묶음 전체의 버튼 크기를 한 번에 맞춥니다.",
    Demo: Size,
  },
]
