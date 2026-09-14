import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  Clickable,
  Group,
  Sizes,
  States,
  Vertical,
} from "@/components/demos/attachment-demo"

export const variants: DemoVariant[] = [
  { id: "basic", name: "Basic", description: "아이콘·파일명·용량과 제거 버튼을 갖춘 기본 형태입니다.", Demo: Basic },
  { id: "states", name: "States", description: "업로드 중, 실패, 놓기 대기 상태를 각각 다르게 보여줍니다.", Demo: States },
  { id: "sizes", name: "Sizes", description: "default·sm·xs 세 가지 크기를 지원합니다.", Demo: Sizes },
  { id: "vertical", name: "Vertical", description: "세로형 카드입니다. 이미지 썸네일을 나란히 둘 때 좋습니다.", Demo: Vertical },
  { id: "group", name: "Group", description: "여러 첨부를 가로로 묶어 넘겨 볼 수 있게 합니다.", Demo: Group },
  { id: "trigger", name: "Clickable", description: "카드 전체를 늘러 파일을 여는 형태입니다.", Demo: Clickable },
]
