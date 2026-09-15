import type { DemoVariant } from "@/components/demo-types"
import { Basic, LinkOnly } from "@/components/demos/navigation-menu-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "사이트 상단 메뉴입니다. 항목에 마우스를 올리면 하위 링크 목록이 넓게 펼쳐집니다. 홈페이지 헤더에 씁니다.",
    Demo: Basic,
  },
  {
    id: "link",
    name: "Link",
    description:
      "펼침 없이 링크만 나란히 둔 가장 단순한 형태입니다. 페이지 이동용 Link와 연결됩니다.",
    Demo: LinkOnly,
  },
]
