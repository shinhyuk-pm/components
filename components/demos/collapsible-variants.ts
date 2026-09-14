import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  Controlled,
  FileTree,
  SettingsPanel,
} from "@/components/demos/collapsible-demo"

export const variants: DemoVariant[] = [
  { id: "basic", name: "Basic", description: "버튼을 눌러 숨겨진 항목을 펼치는 기본 형태입니다.", Demo: Basic },
  { id: "controlled", name: "Controlled", description: "열림 여부를 바깥에서 직접 제어합니다.", Demo: Controlled },
  { id: "settings-panel", name: "Settings panel", description: "설정 화면의 고급 옵션처럼 한 덩어리를 접어 둡니다.", Demo: SettingsPanel },
  { id: "file-tree", name: "File tree", description: "여러 겹으로 중첩해 폴더 구조를 표현합니다.", Demo: FileTree },
]
