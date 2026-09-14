import type { DemoVariant } from "@/components/demo-types"
import {
  Anchoring,
  Animation,
  Basic,
  Commands,
  GroupChat,
  LoadHistory,
  OpeningPosition,
  PreviousContext,
  Scrollable,
  Streaming,
  Visibility,
} from "@/components/demos/message-scroller-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "AI 채팅 화면입니다. 보내기를 누르면 답변이 한 글자씩 흘러나오고, 화면은 자동으로 맨 아래를 따라갑니다. 위로 올리면 '맨 아래로' 버튼이 뜹니다.",
    Demo: Basic,
  },
  {
    id: "anchoring",
    name: "Anchoring",
    description: "새 메시지가 왔을 때 내 메시지와 답변 중 어느 쪽을 화면 위쪽에 고정할지 고릅니다.",
    Demo: Anchoring,
  },
  {
    id: "group-chat",
    name: "Group Chat",
    description: "여러 사람이 있는 단체 대화입니다. '○○님이 참여했습니다' 같은 안내 줄도 기준 위치가 됩니다.",
    Demo: GroupChat,
  },
  {
    id: "previous-context",
    name: "Previous Context",
    description: "새 메시지가 위로 올라올 때 바로 앞 메시지를 몇 픽셀 남겨 둘지 정해 맥락이 끊기지 않게 합니다.",
    Demo: PreviousContext,
  },
  {
    id: "streaming",
    name: "Streaming",
    description: "글자가 도착하는 동안 화면이 맨 아래에 붙어 있고, 사용자가 위로 올리면 자동 따라가기를 멈춥니다.",
    Demo: Streaming,
  },
  {
    id: "opening-position",
    name: "Opening Position",
    description: "저장된 대화를 열 때 맨 아래·맨 위·마지막 기준 메시지 중 어디서 시작할지 정합니다.",
    Demo: OpeningPosition,
  },
  {
    id: "load-history",
    name: "Load History",
    description: "위쪽에 옛 메시지를 추가로 붙여 넣어도 지금 읽던 위치가 튀지 않고 그대로 유지됩니다.",
    Demo: LoadHistory,
  },
  {
    id: "animation",
    name: "Animation",
    description: "새 메시지가 아래에서 살짝 떠오르며 나타나는 등장 효과입니다.",
    Demo: Animation,
  },
  {
    id: "commands",
    name: "Commands",
    description: "버튼으로 맨 위·맨 아래·특정 메시지 위치로 스크롤을 옮깁니다. 코드에서 호출하는 방법입니다.",
    Demo: Commands,
  },
  {
    id: "visibility",
    name: "Visibility",
    description: "지금 화면에 보이는 메시지가 몇 개인지, 기준 메시지가 무엇인지 읽어 옵니다. 읽음 처리에 씁니다.",
    Demo: Visibility,
  },
  {
    id: "scrollable",
    name: "Scrollable",
    description: "위나 아래로 더 내릴 내용이 남아 있는지 읽어 옵니다. 그림자나 버튼 표시 여부를 정할 때 씁니다.",
    Demo: Scrollable,
  },
]
