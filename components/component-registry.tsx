import type * as React from "react"

import type { DemoVariant } from "@/components/demo-types"

import AccordionDemo from "@/components/demos/accordion-demo"
import AlertDemo from "@/components/demos/alert-demo"
import AlertDialogDemo from "@/components/demos/alert-dialog-demo"
import AspectRatioDemo from "@/components/demos/aspect-ratio-demo"
import AttachmentDemo from "@/components/demos/attachment-demo"
import AvatarDemo from "@/components/demos/avatar-demo"
import BadgeDemo from "@/components/demos/badge-demo"
import BreadcrumbDemo from "@/components/demos/breadcrumb-demo"
import BubbleDemo from "@/components/demos/bubble-demo"
import ButtonDemo from "@/components/demos/button-demo"
import ButtonGroupDemo from "@/components/demos/button-group-demo"
import CalendarDemo from "@/components/demos/calendar-demo"
import CardDemo from "@/components/demos/card-demo"
import CarouselDemo from "@/components/demos/carousel-demo"
import ChartDemo from "@/components/demos/chart-demo"
import CheckboxDemo from "@/components/demos/checkbox-demo"
import CollapsibleDemo from "@/components/demos/collapsible-demo"
import ComboboxDemo from "@/components/demos/combobox-demo"
import CommandDemo from "@/components/demos/command-demo"
import ContextMenuDemo from "@/components/demos/context-menu-demo"
import DataTableDemo from "@/components/demos/data-table-demo"
import DatePickerDemo from "@/components/demos/date-picker-demo"

export type ComponentEntry = {
  /** 문서 페이지 안에서 쓰는 앵커 id */
  slug: string
  /** 공식 문서에 표기된 이름 */
  name: string
  /** 비개발자용 한 줄 설명 */
  summary: string
  /** 설치 방식에 대한 추가 메모 (조합형 컴포넌트일 때만) */
  note?: string
  /** 유형이 아직 하나뿐인 컴포넌트의 단일 예시 */
  Demo?: React.ComponentType
  /** 사용 유형별 예시 목록 */
  variants?: DemoVariant[]
}

export const components: ComponentEntry[] = [
  {
    slug: "accordion",
    name: "Accordion",
    summary:
      "제목을 누르면 아래 내용이 펼쳐지고 접히는 목록입니다. FAQ처럼 항목이 많을 때 화면을 짧게 유지해 줍니다.",
    Demo: AccordionDemo,
  },
  {
    slug: "alert",
    name: "Alert",
    summary:
      "화면 안에 머무르는 알림 상자입니다. 안내나 오류 메시지를 눈에 띄게 보여줄 때 씁니다.",
    Demo: AlertDemo,
  },
  {
    slug: "alert-dialog",
    name: "Alert Dialog",
    summary:
      "화면을 덮고 뜨는 확인 창입니다. 삭제처럼 되돌릴 수 없는 작업 전에 한 번 더 묻습니다.",
    Demo: AlertDialogDemo,
  },
  {
    slug: "aspect-ratio",
    name: "Aspect Ratio",
    summary:
      "영역의 가로세로 비율을 고정합니다. 이미지나 영상이 기기마다 찌그러지지 않게 잡아 줍니다.",
    Demo: AspectRatioDemo,
  },
  {
    slug: "attachment",
    name: "Attachment",
    summary:
      "첨부한 파일을 이름·형식·크기와 함께 보여주는 카드입니다. 제거 버튼 같은 동작을 붙일 수 있습니다.",
    Demo: AttachmentDemo,
  },
  {
    slug: "avatar",
    name: "Avatar",
    summary:
      "사용자 프로필 사진입니다. 사진이 없으면 이니셜로 대체되고, 여러 명을 겹쳐 묶을 수도 있습니다.",
    Demo: AvatarDemo,
  },
  {
    slug: "badge",
    name: "Badge",
    summary:
      "상태나 분류를 표시하는 작은 라벨입니다. '신규', '진행중' 같은 짧은 꼬리표에 씁니다.",
    Demo: BadgeDemo,
  },
  {
    slug: "breadcrumb",
    name: "Breadcrumb",
    summary:
      "지금 보고 있는 페이지가 어느 경로에 있는지 보여주는 이동 경로입니다. 상위 단계로 바로 돌아갈 수 있습니다.",
    Demo: BreadcrumbDemo,
  },
  {
    slug: "bubble",
    name: "Bubble",
    summary:
      "메신저 같은 대화 말풍선입니다. 보내는 쪽과 받는 쪽을 색과 정렬로 구분합니다.",
    Demo: BubbleDemo,
  },
  {
    slug: "button",
    name: "Button",
    summary:
      "가장 기본이 되는 클릭 버튼입니다. 강조 정도와 크기를 옵션으로 바꿔 씁니다.",
    Demo: ButtonDemo,
  },
  {
    slug: "button-group",
    name: "Button Group",
    summary:
      "버튼 여러 개를 하나로 붙여 묶습니다. 정렬 방식 전환처럼 선택지가 나란할 때 좋습니다.",
    Demo: ButtonGroupDemo,
  },
  {
    slug: "calendar",
    name: "Calendar",
    summary:
      "달력에서 날짜를 고르는 컴포넌트입니다. 하루만 고르거나 기간으로 고를 수 있습니다.",
    Demo: CalendarDemo,
  },
  {
    slug: "card",
    name: "Card",
    summary:
      "제목·설명·본문·버튼을 담는 상자입니다. 화면을 구역으로 나눌 때 가장 많이 쓰입니다.",
    Demo: CardDemo,
  },
  {
    slug: "carousel",
    name: "Carousel",
    summary:
      "좌우로 넘겨 보는 슬라이드입니다. 이미지나 카드가 많을 때 자리를 아껴 줍니다.",
    Demo: CarouselDemo,
  },
  {
    slug: "chart",
    name: "Chart",
    summary:
      "막대·선·영역 그래프를 그립니다. 색과 범례가 테마에 맞춰 자동으로 맞춰집니다.",
    Demo: ChartDemo,
  },
  {
    slug: "checkbox",
    name: "Checkbox",
    summary:
      "켜고 끄는 체크 상자입니다. 약관 동의처럼 여러 개를 동시에 고를 때 씁니다.",
    Demo: CheckboxDemo,
  },
  {
    slug: "collapsible",
    name: "Collapsible",
    summary:
      "내용을 접었다 펴는 가장 단순한 형태입니다. Accordion과 달리 항목이 하나일 때 씁니다.",
    Demo: CollapsibleDemo,
  },
  {
    slug: "combobox",
    name: "Combobox",
    summary:
      "직접 입력해서 걸러내며 고르는 선택 상자입니다. 항목이 많을 때 드롭다운보다 편합니다.",
    Demo: ComboboxDemo,
  },
  {
    slug: "command",
    name: "Command",
    summary:
      "검색해서 기능을 실행하는 명령 팔레트입니다. 단축키로 띄우는 빠른 검색창에 쓰입니다.",
    Demo: CommandDemo,
  },
  {
    slug: "context-menu",
    name: "Context Menu",
    summary:
      "마우스 오른쪽 버튼을 눌렀을 때 나오는 메뉴입니다. 항목별 추가 동작을 숨겨 둘 때 씁니다.",
    Demo: ContextMenuDemo,
  },
  {
    slug: "data-table",
    name: "Data Table",
    summary:
      "정렬·필터가 되는 데이터 표입니다. 목록 화면에서 많은 행을 다룰 때 씁니다.",
    note: "Data Table은 단독 컴포넌트가 아니라 Table과 TanStack Table을 조합해 만든 것입니다.",
    Demo: DataTableDemo,
  },
  {
    slug: "date-picker",
    name: "Date Picker",
    summary:
      "버튼을 누르면 달력이 떠서 날짜를 고르는 입력칸입니다. 고른 날짜가 버튼에 바로 표시됩니다.",
    note: "Date Picker는 단독 컴포넌트가 아니라 Popover와 Calendar를 조합해 만든 것입니다.",
    Demo: DatePickerDemo,
  },
]
