import type { DemoVariant } from "@/components/demo-types"
import {
  AnimatedItems,
  Basic,
  ConditionalItems,
  Controlled,
  CustomProgress,
  CustomValidation,
  ExplicitSkip,
  Freeform,
  InCard,
  InDialog,
  MultipleSelection,
  NavigationState,
  Resume,
  Shortcuts,
} from "@/components/demos/questionnaire-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "질문을 한 번에 하나씩 보여주는 설문 흐름입니다. 선택지·직접 입력·건너뛰기·진행 표시가 모두 들어 있습니다.",
    Demo: Basic,
  },
  {
    id: "multiple",
    name: "Multiple Selection",
    description: "한 질문에서 여러 개를 고를 수 있습니다.",
    Demo: MultipleSelection,
  },
  {
    id: "freeform",
    name: "Freeform Answer",
    description: "선택지 대신 직접 글로 답할 수 있는 입력칸을 함께 둡니다.",
    Demo: Freeform,
  },
  {
    id: "skip",
    name: "Explicit Skip",
    description: "필수가 아닌 질문은 '건너뛰기' 버튼으로 일부러 넘길 수 있고, 건너뛴 사실이 기록됩니다.",
    Demo: ExplicitSkip,
  },
  {
    id: "shortcuts",
    name: "Shortcuts",
    description: "선택지에 A·B·C 또는 1·2·3 단축키를 붙여 키보드만으로 답할 수 있습니다.",
    Demo: Shortcuts,
  },
  {
    id: "validation",
    name: "Custom Validation",
    description: "제출할 때 답변 조합을 검사해서 문제가 있으면 해당 질문으로 되돌리고 오류를 보여줍니다.",
    Demo: CustomValidation,
  },
  {
    id: "controlled",
    name: "Controlled",
    description: "현재 어느 질문인지 바깥 코드가 기억하고 표시합니다.",
    Demo: Controlled,
  },
  {
    id: "resume",
    name: "Resume",
    description: "지난번에 저장한 답변이 채워진 채 중간 질문부터 다시 시작합니다.",
    Demo: Resume,
  },
  {
    id: "conditional",
    name: "Conditional Items",
    description: "앞 질문의 답에 따라 뒤 질문이 나타나거나 사라집니다.",
    Demo: ConditionalItems,
  },
  {
    id: "navigation-state",
    name: "Navigation State",
    description: "답을 고르기 전까지 '다음' 버튼을 눌리지 않게 막습니다.",
    Demo: NavigationState,
  },
  {
    id: "progress",
    name: "Custom Progress",
    description: "진행 표시를 막대 여러 개로 직접 그린 형태입니다.",
    Demo: CustomProgress,
  },
  {
    id: "animated",
    name: "Animated Items",
    description: "질문이 바뀔 때 아래에서 떠오르는 등장 효과를 줍니다.",
    Demo: AnimatedItems,
  },
  {
    id: "card",
    name: "Card",
    description: "설문을 카드 안에 넣어 제목·설명·진행 표시를 카드 머리글에 배치합니다.",
    Demo: InCard,
  },
  {
    id: "dialog",
    name: "Dialog",
    description: "버튼을 누르면 뜨는 창 안에서 설문을 진행하고, 제출하면 창이 닫힙니다.",
    Demo: InDialog,
  },
]
