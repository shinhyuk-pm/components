import type { DemoVariant } from "@/components/demo-types"
import {
  AsDialog,
  Basic,
  Groups,
  Scrollable,
  Shortcuts,
} from "@/components/demos/command-demo"

export const variants: DemoVariant[] = [
  { id: "basic", name: "Basic", description: "검색창과 항목 목록으로 이뤄진 기본 형태입니다.", Demo: Basic },
  { id: "groups", name: "Groups", description: "항목을 제목별로 묶고 구분선을 넣습니다.", Demo: Groups },
  { id: "shortcuts", name: "Shortcuts", description: "오른쪽에 단축키를 표시해 빠른 실행을 안내합니다.", Demo: Shortcuts },
  { id: "scrollable", name: "Scrollable", description: "항목이 많으면 목록 안에서 스크롤됩니다.", Demo: Scrollable },
  { id: "dialog", name: "Dialog", description: "화면 위에 띄우는 명령 팔레트입니다. ⌘K로도 열립니다.", Demo: AsDialog },
]
