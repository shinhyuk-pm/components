import type { DemoVariant } from "@/components/demo-types"
import {
  Background,
  Basic,
  Outline,
  Rtl,
  WithAvatar,
  WithAvatarGroup,
  WithInputGroup,
} from "@/components/demos/empty-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "아이콘·제목·설명·버튼으로 구성된 기본 빈 상태 화면입니다. 목록에 아직 아무것도 없을 때 보여줍니다.",
    Demo: Basic,
  },
  {
    id: "outline",
    name: "Outline",
    description: "점선 테두리를 둘러 '여기에 올려 두세요' 같은 업로드 영역처럼 보이게 합니다.",
    Demo: Outline,
  },
  {
    id: "background",
    name: "Background",
    description: "연한 배경색을 깔아 주변과 구분합니다. 알림함처럼 비어 있는 게 정상인 곳에 씁니다.",
    Demo: Background,
  },
  {
    id: "with-avatar",
    name: "With Avatar",
    description: "아이콘 대신 사람 프로필 사진을 넣습니다. 상대가 오프라인일 때 같은 상황에 씁니다.",
    Demo: WithAvatar,
  },
  {
    id: "with-avatar-group",
    name: "With Avatar Group",
    description: "프로필 사진 여러 개를 겹쳐 보여줍니다. 팀원 초대를 유도할 때 씁니다.",
    Demo: WithAvatarGroup,
  },
  {
    id: "with-input-group",
    name: "With Input Group",
    description: "검색창을 함께 넣어 바로 다음 행동을 하게 합니다. 404 페이지에 잘 어울립니다.",
    Demo: WithInputGroup,
  },
  {
    id: "rtl",
    name: "RTL",
    description: "아랍어처럼 오른쪽에서 왼쪽으로 읽는 언어용 배치입니다. 글자 정렬과 화살표 방향이 뒤집힙니다.",
    Demo: Rtl,
  },
]
