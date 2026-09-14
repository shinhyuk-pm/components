import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  Destructive,
  Small,
  SmallWithMedia,
  WithMedia,
} from "@/components/demos/alert-dialog-demo"

export const variants: DemoVariant[] = [
  { id: "basic", name: "Basic", description: "제목·설명과 취소/확인 버튼으로 이뤄진 기본 확인 창입니다.", Demo: Basic },
  { id: "small", name: "Small", description: "폭이 좁고 버튼이 균등하게 나뉘는 작은 크기입니다.", Demo: Small },
  { id: "media", name: "Media", description: "상단에 아이콘을 넣어 상황을 한눈에 알리는 형태입니다.", Demo: WithMedia },
  { id: "small-with-media", name: "Small + Media", description: "작은 크기에 아이콘을 함께 쓴 조합입니다.", Demo: SmallWithMedia },
  { id: "destructive", name: "Destructive", description: "삭제처럼 되돌릴 수 없는 작업을 붉은색으로 강조합니다.", Demo: Destructive },
]
