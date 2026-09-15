import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  Persistent,
  Promise,
  Types,
  WithAction,
  WithDescription,
} from "@/components/demos/toast-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "화면 구석에 잠깐 떴다가 저절로 사라지는 알림입니다. 하던 일을 막지 않습니다.",
    Demo: Basic,
  },
  {
    id: "types",
    name: "Types",
    description:
      "성공·오류·주의·안내 네 가지로 성격을 구분합니다. 아이콘이 함께 바뀝니다.",
    Demo: Types,
  },
  {
    id: "description",
    name: "Description",
    description: "제목 아래 한 줄 설명을 붙여 언제·무엇을 했는지 덧붙입니다.",
    Demo: WithDescription,
  },
  {
    id: "action",
    name: "Action",
    description:
      "'실행 취소' 같은 버튼을 함께 띄웁니다. 삭제처럼 되돌릴 여지를 줘야 할 때 씁니다.",
    Demo: WithAction,
  },
  {
    id: "promise",
    name: "Promise",
    description:
      "오래 걸리는 작업에 붙이면 처리 중 → 완료(또는 실패)로 알림이 저절로 바뀝니다.",
    Demo: Promise,
  },
  {
    id: "persistent",
    name: "Persistent",
    description:
      "직접 닫기 전까지 남아 있는 알림입니다. 꼭 읽어야 하는 내용에 씁니다.",
    Demo: Persistent,
  },
]
