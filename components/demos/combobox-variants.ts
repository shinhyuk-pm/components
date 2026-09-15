import type { DemoVariant } from "@/components/demo-types"
import {
  AutoHighlight,
  Basic,
  ClearButton,
  CustomItems,
  Disabled,
  Groups,
  InputGroup,
  Invalid,
  Multiple,
  Popup,
} from "@/components/demos/combobox-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description: "입력칸에 글자를 치면 목록이 걸러지는 기본 형태입니다.",
    Demo: Basic,
  },
  {
    id: "multiple",
    name: "Multiple",
    description:
      "여러 개를 골라 칩(chip) 모양으로 쌓아 보여줍니다. 태그를 고르듯 여러 값을 담을 때 씁니다.",
    Demo: Multiple,
  },
  {
    id: "clear-button",
    name: "Clear Button",
    description: "오른쪽 X 버튼을 누르면 고른 값을 한 번에 지웁니다.",
    Demo: ClearButton,
  },
  {
    id: "groups",
    name: "Groups",
    description:
      "항목을 지역별로 묶고 그룹 이름표를 붙였습니다. 선택지가 많을 때 원하는 항목을 빨리 찾게 해줍니다.",
    Demo: Groups,
  },
  {
    id: "custom-items",
    name: "Custom Items",
    description:
      "나라 이름과 대륙을 두 줄로 보여주는 예시입니다. 항목이 객체일 때는 itemToStringLabel(입력칸 표시용)과 itemToStringValue(제출값용)를 둘 다 지정해야 입력칸에 이름이 제대로 뜨고, 하나만 주면 JSON이 그대로 보입니다.",
    Demo: CustomItems,
  },
  {
    id: "invalid",
    name: "Invalid",
    description:
      "aria-invalid를 주면 테두리가 빨갛게 바뀌어 입력이 잘못됐다고 알려줍니다.",
    Demo: Invalid,
  },
  {
    id: "disabled",
    name: "Disabled",
    description: "통째로 비활성화해 클릭도 입력도 막습니다.",
    Demo: Disabled,
  },
  {
    id: "auto-highlight",
    name: "Auto Highlight",
    description:
      "검색어와 맞는 첫 항목이 자동으로 하이라이트됩니다. Enter 키만 눌러도 바로 고를 수 있습니다.",
    Demo: AutoHighlight,
  },
  {
    id: "popup",
    name: "Popup",
    description:
      "입력칸 대신 버튼을 눌러 여는 형태입니다. 검색창은 팝업 안으로 옮겨 넣었습니다.",
    Demo: Popup,
  },
  {
    id: "input-group",
    name: "Input Group",
    description:
      "입력칸 왼쪽에 아이콘을 붙였습니다. 시간대처럼 항목의 종류를 아이콘으로 미리 알려줄 때 씁니다.",
    Demo: InputGroup,
  },
]
