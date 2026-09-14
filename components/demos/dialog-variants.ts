import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  CustomCloseButton,
  NoCloseButton,
  Rtl,
  ScrollableContent,
  StickyFooter,
} from "@/components/demos/dialog-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "버튼을 누르면 화면 가운데 창이 뜹니다. 제목·설명·입력칸·저장 버튼이 한 세트입니다.",
    Demo: Basic,
  },
  {
    id: "custom-close-button",
    name: "Custom Close Button",
    description:
      "오른쪽 위 X 대신, 아래쪽에 직접 만든 '닫기' 버튼을 둔 형태입니다.",
    Demo: CustomCloseButton,
  },
  {
    id: "no-close-button",
    name: "No Close Button",
    description:
      "X 버튼을 아예 없앤 형태입니다. 바깥을 누르거나 Esc 키로만 닫힙니다.",
    Demo: NoCloseButton,
  },
  {
    id: "sticky-footer",
    name: "Sticky Footer",
    description:
      "내용이 길어 스크롤되어도 아래 버튼 영역은 항상 보입니다. 약관 동의 화면에 씁니다.",
    Demo: StickyFooter,
  },
  {
    id: "scrollable-content",
    name: "Scrollable Content",
    description:
      "창 전체가 아니라 안쪽 내용만 스크롤됩니다. 제목은 위에 고정됩니다.",
    Demo: ScrollableContent,
  },
  {
    id: "rtl",
    name: "RTL",
    description:
      "아랍어처럼 오른쪽에서 왼쪽으로 읽는 언어용 배치입니다. 제목과 버튼 위치가 뒤집힙니다.",
    Demo: Rtl,
  },
]
