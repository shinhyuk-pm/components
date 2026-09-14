import type { DemoVariant } from "@/components/demo-types"
import {
  Grid,
  Portrait,
  Square,
  Video,
} from "@/components/demos/aspect-ratio-demo"

export const variants: DemoVariant[] = [
  { id: "square", name: "Square", description: "1:1 정사각형입니다. 프로필 사진이나 썸네일에 씁니다.", Demo: Square },
  { id: "video", name: "Video", description: "16:9 가로 비율입니다. 영상이나 배너에 많이 쓰입니다.", Demo: Video },
  { id: "portrait", name: "Portrait", description: "3:4 세로 비율입니다. 인물 사진이나 포스터에 맞습니다.", Demo: Portrait },
  { id: "grid", name: "Grid", description: "여러 비율을 나란히 두어 줄이 흘트러지지 않는지 확인합니다.", Demo: Grid },
]
