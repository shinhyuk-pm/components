import type { DemoVariant } from "@/components/demo-types"
import {
  Basic,
  Nested,
  NonModal,
  ResponsiveDialog,
  Sides,
  SnapPoints,
  SwipeHandle,
} from "@/components/demos/drawer-demo"

export const variants: DemoVariant[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "화면 가장자리에서 밀려 나오는 패널입니다. 작은 화면에서는 아래에서, 큰 화면에서는 오른쪽에서 나옵니다.",
    Demo: Basic,
  },
  {
    id: "sides",
    name: "Sides",
    description: "위·아래·왼쪽·오른쪽 네 방향 중 어디서 나올지 고를 수 있습니다.",
    Demo: Sides,
  },
  {
    id: "swipe-handle",
    name: "Swipe Handle",
    description: "위쪽에 손잡이 막대를 보여 손가락으로 끌어 닫을 수 있음을 알립니다.",
    Demo: SwipeHandle,
  },
  {
    id: "nested",
    name: "Nested",
    description: "드로어 안에서 또 다른 드로어를 엽니다. 앞의 것은 뒤로 살짝 밀려 겹쳐 보입니다.",
    Demo: Nested,
  },
  {
    id: "non-modal",
    name: "Non Modal",
    description: "배경을 가리지 않아 드로어를 열어 둔 채로 뒤쪽 화면을 계속 쓸 수 있습니다.",
    Demo: NonModal,
  },
  {
    id: "snap-points",
    name: "Snap Points",
    description: "끌어 올리면 정해진 높이(살짝 열림·거의 꽉 참)에서 착 붙습니다. 지도 앱 하단 패널에 흔합니다.",
    Demo: SnapPoints,
  },
  {
    id: "responsive-dialog",
    name: "Responsive Dialog",
    description:
      "큰 화면에서는 가운데 창(Dialog), 작은 화면에서는 드로어로 자동 전환됩니다. 브라우저 폭을 줄여 보세요.",
    Demo: ResponsiveDialog,
  },
]
