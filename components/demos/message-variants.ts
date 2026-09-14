import type { DemoVariant } from "@/components/demo-types"
import {
  Actions,
  Basic,
  Group,
  HeaderFooter,
  WithAttachment,
  WithAvatar,
} from "@/components/demos/message-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "메신저 대화 한 묶음입니다. 내 말은 오른쪽, 상대 말은 왼쪽에 놓이고 '입력 중...' 표시까지 들어 있습니다.",
    Demo: Basic,
  },
  {
    id: "avatar",
    name: "Avatar",
    description: "말풍선 옆에 보낸 사람의 프로필 사진을 붙입니다.",
    Demo: WithAvatar,
  },
  {
    id: "group",
    name: "Group",
    description: "같은 사람이 연달아 보낸 메시지를 한 묶음으로 붙여 사진을 한 번만 보여줍니다.",
    Demo: Group,
  },
  {
    id: "header-footer",
    name: "Header & Footer",
    description: "말풍선 위에 보낸 사람 이름, 아래에 '읽음' 같은 상태를 표시합니다.",
    Demo: HeaderFooter,
  },
  {
    id: "actions",
    name: "Actions",
    description: "말풍선 아래에 복사·좋아요·다시 보내기 같은 버튼을 붙입니다.",
    Demo: Actions,
  },
  {
    id: "attachment",
    name: "Attachment",
    description: "이미지나 PDF 같은 첨부 파일을 말풍선과 함께 보여줍니다.",
    Demo: WithAttachment,
  },
]
