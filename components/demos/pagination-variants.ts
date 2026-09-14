import type { DemoVariant } from "@/components/demo-types"
import { Basic, IconsOnly, Rtl, Simple } from "@/components/demos/pagination-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "이전·다음 화살표와 페이지 번호, 생략 표시(…)가 있는 기본 형태입니다. 목록이 여러 페이지로 나뉠 때 씁니다.",
    Demo: Basic,
  },
  {
    id: "simple",
    name: "Simple",
    description: "화살표 없이 페이지 번호만 나란히 둔 단순한 형태입니다.",
    Demo: Simple,
  },
  {
    id: "icons-only",
    name: "Icons Only",
    description: "화살표만 남기고 페이지당 행 수 선택을 곁들인 표 하단용 형태입니다.",
    Demo: IconsOnly,
  },
  {
    id: "rtl",
    name: "RTL",
    description: "아랍어처럼 오른쪽에서 왼쪽으로 읽는 언어용 배치입니다. 화살표와 숫자 순서가 뒤집힙니다.",
    Demo: Rtl,
  },
]
