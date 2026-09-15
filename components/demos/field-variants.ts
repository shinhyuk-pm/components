import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  ChoiceCard,
  Fieldset,
  Group,
  Responsive,
  WithCheckbox,
  WithInput,
  WithRadio,
  WithSelect,
  WithSlider,
  WithSwitch,
  WithTextarea,
} from "@/components/demos/field-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "결제 폼 전체를 Field로 짠 종합 예시입니다. 입력칸·선택·체크·텍스트영역이 한 묶음으로 정돈됩니다.",
    Demo: Basic,
  },
  {
    id: "input",
    name: "Input",
    description:
      "라벨 + 입력칸 + 설명의 기본 조합입니다. 설명은 입력칸 위에도, 아래에도 둘 수 있습니다.",
    Demo: WithInput,
  },
  {
    id: "textarea",
    name: "Textarea",
    description: "여러 줄 입력칸을 라벨·설명과 함께 묶습니다.",
    Demo: WithTextarea,
  },
  {
    id: "select",
    name: "Select",
    description: "드롭다운 선택 상자를 라벨·설명과 함께 묶습니다.",
    Demo: WithSelect,
  },
  {
    id: "slider",
    name: "Slider",
    description:
      "슬라이더를 제목·설명과 함께 묶습니다. 현재 값이 설명 문장 안에 바로 표시됩니다.",
    Demo: WithSlider,
  },
  {
    id: "fieldset",
    name: "Fieldset",
    description:
      "관련 입력칸 여러 개를 하나의 제목(범례) 아래로 묶습니다. 주소 입력처럼 씁니다.",
    Demo: Fieldset,
  },
  {
    id: "checkbox",
    name: "Checkbox",
    description: "체크박스를 가로로 배치하고 구분선으로 그룹을 나눕니다.",
    Demo: WithCheckbox,
  },
  {
    id: "radio",
    name: "Radio",
    description: "하나만 고르는 라디오 버튼 목록을 범례·설명과 함께 묶습니다.",
    Demo: WithRadio,
  },
  {
    id: "switch",
    name: "Switch",
    description: "라벨과 켜기/끄기 스위치를 한 줄에 나란히 둡니다.",
    Demo: WithSwitch,
  },
  {
    id: "choice-card",
    name: "Choice Card",
    description:
      "선택지를 카드 모양으로 크게 만들어 제목·설명까지 보여줍니다. 요금제 선택에 흔합니다.",
    Demo: ChoiceCard,
  },
  {
    id: "group",
    name: "Field Group",
    description: "설정 화면처럼 여러 섹션을 구분선으로 나눠 쌓습니다.",
    Demo: Group,
  },
  {
    id: "responsive",
    name: "Responsive",
    description:
      "좁은 화면에서는 세로로, 넓은 화면에서는 라벨과 입력칸이 나란히 놓입니다.",
    Demo: Responsive,
  },
]
