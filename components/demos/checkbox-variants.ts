import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  Disabled,
  Group,
  InTable,
  WithDescription,
} from "@/components/demos/checkbox-demo"

export const variants: DemoVariant[] = [
  { id: "basic", name: "Basic", description: "글자 옆에 체크 상자를 둔 가장 기본 형태입니다.", Demo: Basic },
  { id: "description", name: "Description", description: "제목 아래 설명을 붙여 무엇을 켜는지 분명히 합니다.", Demo: WithDescription },
  { id: "disabled", name: "Disabled", description: "바꿀 수 없는 항목을 흐리게 표시합니다.", Demo: Disabled },
  { id: "group", name: "Group", description: "전체 선택과 부분 선택(중간 상태)을 함께 다룹니다.", Demo: Group },
  { id: "table", name: "Table", description: "표에서 행을 골라 한꺼번에 처리할 때 쓰는 형태입니다.", Demo: InTable },
]
