import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  Controlled,
  Distribution,
  InList,
  ReadOnly,
  ReviewForm,
  Size,
} from "@/components/demos/rating-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "별을 눌러 점수를 매깁니다. 같은 별을 다시 누르면 0점으로 지워지고, 좌우 화살표 키로도 바꿉니다.",
    Demo: Basic,
  },
  {
    id: "read-only",
    name: "Read only",
    description:
      "이미 매겨진 점수를 보여 주기만 합니다. 누를 수 없고 화면 낭독기에는 '5점 만점에 4점'으로 읽힙니다.",
    Demo: ReadOnly,
  },
  {
    id: "size",
    name: "Size",
    description:
      "별 크기를 작게·보통·크게 세 가지로 바꿉니다. 목록 안에서는 작게 씁니다.",
    Demo: Size,
  },
  {
    id: "controlled",
    name: "Controlled",
    description:
      "고른 점수를 코드가 들고 있어, 점수에 맞는 설명 문구를 함께 바꿉니다.",
    Demo: Controlled,
  },
  {
    id: "distribution",
    name: "Distribution",
    description:
      "평균 점수와 점수별 분포를 막대로 함께 보여 줍니다. 상품 상세 화면에 씁니다.",
    Demo: Distribution,
  },
  {
    id: "review-form",
    name: "Review Form",
    description:
      "별점과 한 줄 평을 함께 받는 리뷰 작성 폼입니다. 점수를 매기기 전에는 등록 버튼이 잠깁니다.",
    Demo: ReviewForm,
  },
  {
    id: "in-list",
    name: "In List",
    description: "리뷰 목록에서 작성자 이름 옆에 작게 붙입니다.",
    Demo: InList,
  },
]
