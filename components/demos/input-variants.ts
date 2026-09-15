import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  Disabled,
  File,
  Form,
  Grid,
  Inline,
  Invalid,
  Masked,
  Required,
  WithBadge,
  WithButtonGroup,
  WithField,
  WithFieldGroup,
  WithInputGroup,
} from "@/components/demos/input-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description: "가장 단순한 한 줄 입력칸입니다.",
    Demo: Basic,
  },
  {
    id: "field",
    name: "Field",
    description:
      "라벨과 설명을 붙인 형태입니다. 대부분의 폼에서 이 조합을 씁니다.",
    Demo: WithField,
  },
  {
    id: "field-group",
    name: "Field Group",
    description: "입력칸 여러 개와 버튼을 한 묶음으로 세로로 쌓습니다.",
    Demo: WithFieldGroup,
  },
  {
    id: "disabled",
    name: "Disabled",
    description: "입력을 막은 상태입니다. 라벨과 설명도 함께 흐려집니다.",
    Demo: Disabled,
  },
  {
    id: "invalid",
    name: "Invalid",
    description: "입력값에 오류가 있을 때 테두리가 빨갛게 바뀝니다.",
    Demo: Invalid,
  },
  {
    id: "file",
    name: "File",
    description: "파일을 고르는 입력칸입니다.",
    Demo: File,
  },
  {
    id: "inline",
    name: "Inline",
    description: "입력칸과 버튼을 한 줄에 나란히 둡니다. 검색창에 흔합니다.",
    Demo: Inline,
  },
  {
    id: "grid",
    name: "Grid",
    description:
      "입력칸 두 개를 좌우로 나란히 배치합니다. 성·이름처럼 짝이 되는 항목에 씁니다.",
    Demo: Grid,
  },
  {
    id: "required",
    name: "Required",
    description: "라벨에 빨간 별표를 붙여 필수 항목임을 알립니다.",
    Demo: Required,
  },
  {
    id: "badge",
    name: "Badge",
    description: "라벨 오른쪽에 '베타' 같은 작은 꼬리표를 붙입니다.",
    Demo: WithBadge,
  },
  {
    id: "input-group",
    name: "Input Group",
    description: "입력칸 앞뒤에 'https://' 같은 고정 글자나 아이콘을 붙입니다.",
    Demo: WithInputGroup,
  },
  {
    id: "button-group",
    name: "Button Group",
    description: "입력칸과 버튼을 테두리 하나로 딱 붙여 묶습니다.",
    Demo: WithButtonGroup,
  },
  {
    id: "form",
    name: "Form",
    description: "이름·이메일·전화·국가·주소를 모두 갖춘 실제 폼 예시입니다.",
    Demo: Form,
  },
  {
    id: "masked",
    name: "Masked",
    description:
      "숫자만 치면 하이픈·쉼표가 저절로 들어갑니다. 전화번호·주민등록번호·금액처럼 정해진 모양이 있는 값에 씁니다.",
    Demo: Masked,
  },
]
