import type * as React from "react"

import type { DemoVariant } from "@/components/demo-types"

import { variants as accordionVariants } from "@/components/demos/accordion-variants"
import { variants as alertVariants } from "@/components/demos/alert-variants"
import { variants as alertDialogVariants } from "@/components/demos/alert-dialog-variants"
import { variants as aspectRatioVariants } from "@/components/demos/aspect-ratio-variants"
import { variants as attachmentVariants } from "@/components/demos/attachment-variants"
import { variants as avatarVariants } from "@/components/demos/avatar-variants"
import { variants as badgeVariants } from "@/components/demos/badge-variants"
import { variants as breadcrumbVariants } from "@/components/demos/breadcrumb-variants"
import { variants as bubbleVariants } from "@/components/demos/bubble-variants"
import { variants as buttonVariants } from "@/components/demos/button-variants"
import { variants as buttonGroupVariants } from "@/components/demos/button-group-variants"
import { variants as calendarVariants } from "@/components/demos/calendar-variants"
import { variants as cardVariants } from "@/components/demos/card-variants"
import { variants as carouselVariants } from "@/components/demos/carousel-variants"
import { variants as chartVariants } from "@/components/demos/chart-variants"
import { variants as checkboxVariants } from "@/components/demos/checkbox-variants"
import { variants as collapsibleVariants } from "@/components/demos/collapsible-variants"
import { variants as comboboxVariants } from "@/components/demos/combobox-variants"
import { variants as commandVariants } from "@/components/demos/command-variants"
import { variants as contextMenuVariants } from "@/components/demos/context-menu-variants"
import { variants as dataTableVariants } from "@/components/demos/data-table-variants"
import { variants as datePickerVariants } from "@/components/demos/date-picker-variants"
import { variants as dialogVariants } from "@/components/demos/dialog-variants"
import { variants as drawerVariants } from "@/components/demos/drawer-variants"
import { variants as dropdownMenuVariants } from "@/components/demos/dropdown-menu-variants"
import { variants as emptyVariants } from "@/components/demos/empty-variants"
import { variants as fieldVariants } from "@/components/demos/field-variants"
import { variants as hoverCardVariants } from "@/components/demos/hover-card-variants"
import { variants as inputVariants } from "@/components/demos/input-variants"
import { variants as inputGroupVariants } from "@/components/demos/input-group-variants"
import { variants as inputOtpVariants } from "@/components/demos/input-otp-variants"
import { variants as itemVariants } from "@/components/demos/item-variants"
import { variants as kbdVariants } from "@/components/demos/kbd-variants"
import { variants as labelVariants } from "@/components/demos/label-variants"
import { variants as menubarVariants } from "@/components/demos/menubar-variants"

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
    variants: accordionVariants,
  },
  {
    slug: "alert",
    name: "Alert",
    summary:
      "화면 안에 머무르는 알림 상자입니다. 안내나 오류 메시지를 눈에 띄게 보여줄 때 씁니다.",
    variants: alertVariants,
  },
  {
    slug: "alert-dialog",
    name: "Alert Dialog",
    summary:
      "화면을 덮고 뜨는 확인 창입니다. 삭제처럼 되돌릴 수 없는 작업 전에 한 번 더 묻습니다.",
    variants: alertDialogVariants,
  },
  {
    slug: "aspect-ratio",
    name: "Aspect Ratio",
    summary:
      "영역의 가로세로 비율을 고정합니다. 이미지나 영상이 기기마다 찌그러지지 않게 잡아 줍니다.",
    variants: aspectRatioVariants,
  },
  {
    slug: "attachment",
    name: "Attachment",
    summary:
      "첨부한 파일을 이름·형식·크기와 함께 보여주는 카드입니다. 제거 버튼 같은 동작을 붙일 수 있습니다.",
    variants: attachmentVariants,
  },
  {
    slug: "avatar",
    name: "Avatar",
    summary:
      "사용자 프로필 사진입니다. 사진이 없으면 이니셜로 대체되고, 여러 명을 겹쳐 묶을 수도 있습니다.",
    variants: avatarVariants,
  },
  {
    slug: "badge",
    name: "Badge",
    summary:
      "상태나 분류를 표시하는 작은 라벨입니다. '신규', '진행중' 같은 짧은 꼬리표에 씁니다.",
    variants: badgeVariants,
  },
  {
    slug: "breadcrumb",
    name: "Breadcrumb",
    summary:
      "지금 보고 있는 페이지가 어느 경로에 있는지 보여주는 이동 경로입니다. 상위 단계로 바로 돌아갈 수 있습니다.",
    variants: breadcrumbVariants,
  },
  {
    slug: "bubble",
    name: "Bubble",
    summary:
      "메신저 같은 대화 말풍선입니다. 보내는 쪽과 받는 쪽을 색과 정렬로 구분합니다.",
    variants: bubbleVariants,
  },
  {
    slug: "button",
    name: "Button",
    summary:
      "가장 기본이 되는 클릭 버튼입니다. 강조 정도와 크기를 옵션으로 바꿔 씁니다.",
    variants: buttonVariants,
  },
  {
    slug: "button-group",
    name: "Button Group",
    summary:
      "버튼 여러 개를 하나로 붙여 묶습니다. 정렬 방식 전환처럼 선택지가 나란할 때 좋습니다.",
    variants: buttonGroupVariants,
  },
  {
    slug: "calendar",
    name: "Calendar",
    summary:
      "달력에서 날짜를 고르는 컴포넌트입니다. 하루만 고르거나 기간으로 고를 수 있습니다.",
    variants: calendarVariants,
  },
  {
    slug: "card",
    name: "Card",
    summary:
      "제목·설명·본문·버튼을 담는 상자입니다. 화면을 구역으로 나눌 때 가장 많이 쓰입니다.",
    variants: cardVariants,
  },
  {
    slug: "carousel",
    name: "Carousel",
    summary:
      "좌우로 넘겨 보는 슬라이드입니다. 이미지나 카드가 많을 때 자리를 아껴 줍니다.",
    variants: carouselVariants,
  },
  {
    slug: "chart",
    name: "Chart",
    summary:
      "막대·선·영역 그래프를 그립니다. 색과 범례가 테마에 맞춰 자동으로 맞춰집니다.",
    variants: chartVariants,
  },
  {
    slug: "checkbox",
    name: "Checkbox",
    summary:
      "켜고 끄는 체크 상자입니다. 약관 동의처럼 여러 개를 동시에 고를 때 씁니다.",
    variants: checkboxVariants,
  },
  {
    slug: "collapsible",
    name: "Collapsible",
    summary:
      "내용을 접었다 펴는 가장 단순한 형태입니다. Accordion과 달리 항목이 하나일 때 씁니다.",
    variants: collapsibleVariants,
  },
  {
    slug: "combobox",
    name: "Combobox",
    summary:
      "직접 입력해서 걸러내며 고르는 선택 상자입니다. 항목이 많을 때 드롭다운보다 편합니다.",
    variants: comboboxVariants,
  },
  {
    slug: "command",
    name: "Command",
    summary:
      "검색해서 기능을 실행하는 명령 팔레트입니다. 단축키로 띄우는 빠른 검색창에 쓰입니다.",
    variants: commandVariants,
  },
  {
    slug: "context-menu",
    name: "Context Menu",
    summary:
      "마우스 오른쪽 버튼을 눌렀을 때 나오는 메뉴입니다. 항목별 추가 동작을 숨겨 둘 때 씁니다.",
    variants: contextMenuVariants,
  },
  {
    slug: "data-table",
    name: "Data Table",
    summary:
      "정렬·필터가 되는 데이터 표입니다. 목록 화면에서 많은 행을 다룰 때 씁니다.",
    note: "Data Table은 단독 컴포넌트가 아니라 Table과 TanStack Table을 조합해 만든 것입니다.",
    variants: dataTableVariants,
  },
  {
    slug: "date-picker",
    name: "Date Picker",
    summary:
      "버튼을 누르면 달력이 떠서 날짜를 고르는 입력칸입니다. 고른 날짜가 버튼에 바로 표시됩니다.",
    note: "Date Picker는 단독 컴포넌트가 아니라 Popover와 Calendar를 조합해 만든 것입니다.",
    variants: datePickerVariants,
  },
  {
    slug: "dialog",
    name: "Dialog",
    summary:
      "화면 가운데 떠서 배경을 어둡게 가리는 창입니다. 정보 수정이나 확인처럼 잠깐 집중이 필요한 작업에 씁니다.",
    variants: dialogVariants,
  },
  {
    slug: "drawer",
    name: "Drawer",
    summary:
      "화면 가장자리에서 밀려 나오는 패널입니다. 모바일에서 아래에서 올라오는 선택 창에 주로 씁니다.",
    variants: drawerVariants,
  },
  {
    slug: "dropdown-menu",
    name: "Dropdown Menu",
    summary:
      "버튼을 누르면 아래로 펼쳐지는 메뉴입니다. 계정 메뉴나 '더 보기' 버튼처럼 여러 동작을 숨겨 둘 때 씁니다.",
    variants: dropdownMenuVariants,
  },
  {
    slug: "empty",
    name: "Empty",
    summary:
      "목록이나 검색 결과가 비었을 때 보여주는 안내 화면입니다. 왜 비었는지 알려주고 다음 행동을 제안합니다.",
    variants: emptyVariants,
  },
  {
    slug: "field",
    name: "Field",
    summary:
      "라벨·입력칸·설명·오류 메시지를 한 묶음으로 정리하는 폼 조립 부품입니다. 어떤 입력 요소든 같은 모양으로 맞춰 줍니다.",
    variants: fieldVariants,
  },
  {
    slug: "hover-card",
    name: "Hover Card",
    summary:
      "마우스를 올리면 잠깐 뜨는 미리보기 카드입니다. 사용자 이름에 프로필 요약을 붙일 때 씁니다.",
    variants: hoverCardVariants,
  },
  {
    slug: "input",
    name: "Input",
    summary:
      "한 줄짜리 글자 입력칸입니다. 이름·이메일·검색어처럼 짧은 값을 받을 때 씁니다.",
    variants: inputVariants,
  },
  {
    slug: "input-group",
    name: "Input Group",
    summary:
      "입력칸 앞뒤나 위아래에 아이콘·글자·버튼을 붙여 한 덩어리로 만듭니다. 검색창, 금액 입력, 코드 칸에 씁니다.",
    variants: inputGroupVariants,
  },
  {
    slug: "input-otp",
    name: "Input OTP",
    summary:
      "인증번호를 한 칸에 한 글자씩 입력하는 칸입니다. 문자·이메일로 받은 6자리 코드 확인 화면에 씁니다.",
    variants: inputOtpVariants,
  },
  {
    slug: "item",
    name: "Item",
    summary:
      "아이콘·제목·설명·버튼을 한 줄로 정돈한 목록 한 칸입니다. 설정 목록, 알림, 사람 목록의 기본 단위로 씁니다.",
    variants: itemVariants,
  },
  {
    slug: "kbd",
    name: "Kbd",
    summary:
      "키보드 키를 작은 키캡 모양으로 보여줍니다. 단축키를 안내하는 도움말이나 검색창 힌트에 씁니다.",
    variants: kbdVariants,
  },
  {
    slug: "label",
    name: "Label",
    summary:
      "입력 요소 옆에 붙는 이름표입니다. 글자를 눌러도 해당 입력칸이 반응하도록 연결됩니다.",
    variants: labelVariants,
  },
  {
    slug: "menubar",
    name: "Menubar",
    summary:
      "파일·편집·보기처럼 프로그램 상단에 나란히 놓이는 메뉴 막대입니다. 데스크톱 앱 느낌의 화면에 씁니다.",
    variants: menubarVariants,
  },
]
