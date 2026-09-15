import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  Dropdown,
  Group,
  Header,
  Icon,
  Image,
  Link,
  Size,
  Variant,
  WithAvatar,
} from "@/components/demos/item-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "제목·설명·버튼을 한 줄에 정돈한 목록 한 칸입니다. 설정·알림 목록의 기본 단위입니다.",
    Demo: Basic,
  },
  {
    id: "variant",
    name: "Variant",
    description: "투명·테두리·연한 배경 세 가지 겉모양을 고를 수 있습니다.",
    Demo: Variant,
  },
  {
    id: "size",
    name: "Size",
    description:
      "기본·작게·아주 작게 세 크기입니다. 촘촘한 목록일수록 작은 크기를 씁니다.",
    Demo: Size,
  },
  {
    id: "icon",
    name: "Icon",
    description: "왼쪽에 아이콘을 넣어 항목 종류를 바로 알립니다.",
    Demo: Icon,
  },
  {
    id: "avatar",
    name: "Avatar",
    description: "왼쪽에 프로필 사진을 넣습니다. 사람 목록에 씁니다.",
    Demo: WithAvatar,
  },
  {
    id: "image",
    name: "Image",
    description: "왼쪽에 썸네일 이미지를 넣습니다. 음악·상품 목록에 씁니다.",
    Demo: Image,
  },
  {
    id: "group",
    name: "Group",
    description: "항목 여러 개를 하나의 목록으로 묶습니다.",
    Demo: Group,
  },
  {
    id: "header",
    name: "Header",
    description:
      "위쪽에 큰 이미지를 두고 아래에 제목·설명을 쓰는 카드 모양입니다.",
    Demo: Header,
  },
  {
    id: "link",
    name: "Link",
    description:
      "항목 전체가 링크가 되어 누르면 이동합니다. 새 탭 열기도 가능합니다.",
    Demo: Link,
  },
  {
    id: "dropdown",
    name: "Dropdown",
    description:
      "드롭다운 메뉴 안의 각 항목을 Item으로 꾸며 사진·이메일까지 보여줍니다.",
    Demo: Dropdown,
  },
]
