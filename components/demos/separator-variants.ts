import type { DemoVariant } from "@/components/demo-types"
import { Basic, List, Menu, Rtl, Vertical } from "@/components/demos/separator-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description: "내용 사이에 가로 구분선을 긋습니다. 제목과 본문을 나눌 때 씁니다.",
    Demo: Basic,
  },
  {
    id: "vertical",
    name: "Vertical",
    description: "나란히 놓인 항목 사이에 세로 구분선을 긋습니다. 링크 메뉴에 흔합니다.",
    Demo: Vertical,
  },
  {
    id: "menu",
    name: "Menu",
    description: "제목과 설명이 있는 메뉴 항목 사이를 세로선으로 나눕니다. 좁은 화면에서는 일부가 숨겨집니다.",
    Demo: Menu,
  },
  {
    id: "list",
    name: "List",
    description: "이름·값 쌍으로 된 목록의 줄 사이를 가로선으로 나눕니다.",
    Demo: List,
  },
  {
    id: "rtl",
    name: "RTL",
    description: "아랍어처럼 오른쪽에서 왼쪽으로 읽는 언어용 배치입니다. 항목 순서가 뒤집힙니다.",
    Demo: Rtl,
  },
]
