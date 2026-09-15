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
import { variants as messageVariants } from "@/components/demos/message-variants"
import { variants as messageScrollerVariants } from "@/components/demos/message-scroller-variants"
import { variants as nativeSelectVariants } from "@/components/demos/native-select-variants"
import { variants as navigationMenuVariants } from "@/components/demos/navigation-menu-variants"
import { variants as paginationVariants } from "@/components/demos/pagination-variants"
import { variants as popoverVariants } from "@/components/demos/popover-variants"
import { variants as progressVariants } from "@/components/demos/progress-variants"
import { variants as questionnaireVariants } from "@/components/demos/questionnaire-variants"
import { variants as radioGroupVariants } from "@/components/demos/radio-group-variants"
import { variants as resizableVariants } from "@/components/demos/resizable-variants"
import { variants as scrollAreaVariants } from "@/components/demos/scroll-area-variants"
import { variants as selectVariants } from "@/components/demos/select-variants"
import { variants as separatorVariants } from "@/components/demos/separator-variants"
import { variants as switchVariants } from "@/components/demos/switch-variants"
import { variants as tableVariants } from "@/components/demos/table-variants"
import { variants as textareaVariants } from "@/components/demos/textarea-variants"

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
  {
    slug: "message",
    name: "Message",
    summary:
      "메신저 대화 한 줄을 이루는 묶음입니다. 프로필 사진·이름·말풍선·읽음 표시를 한 세트로 배치합니다.",
    variants: messageVariants,
  },
  {
    slug: "message-scroller",
    name: "Message Scroller",
    summary:
      "채팅 메시지 목록의 스크롤을 똑똑하게 다루는 틀입니다. 답변이 흘러나올 때 맨 아래를 따라가고, 사용자가 위로 올리면 자리를 지켜 줍니다.",
    variants: messageScrollerVariants,
  },
  {
    slug: "native-select",
    name: "Native Select",
    summary:
      "브라우저 기본 선택 상자에 모양만 입힌 것입니다. 가볍고, 휴대폰에서는 기기 고유의 선택 화면이 뜹니다.",
    variants: nativeSelectVariants,
  },
  {
    slug: "navigation-menu",
    name: "Navigation Menu",
    summary:
      "사이트 상단에 두는 메뉴입니다. 항목에 마우스를 올리면 하위 링크가 넓게 펼쳐지는 홈페이지 헤더 메뉴에 씁니다.",
    variants: navigationMenuVariants,
  },
  {
    slug: "pagination",
    name: "Pagination",
    summary:
      "긴 목록을 여러 페이지로 나눠 넘겨 보는 페이지 번호 줄입니다. 게시판이나 검색 결과 아래에 씁니다.",
    variants: paginationVariants,
  },
  {
    slug: "popover",
    name: "Popover",
    summary:
      "버튼을 누르면 바로 옆에 뜨는 작은 창입니다. 배경을 가리지 않아 짧은 설정이나 설명을 보여줄 때 씁니다.",
    variants: popoverVariants,
  },
  {
    slug: "progress",
    name: "Progress",
    summary:
      "작업이 얼마나 진행됐는지 보여주는 막대입니다. 업로드·설치·설문 진행률 표시에 씁니다.",
    variants: progressVariants,
  },
  {
    slug: "questionnaire",
    name: "Questionnaire",
    summary:
      "질문을 한 번에 하나씩 보여주며 답을 모으는 설문 흐름입니다. 온보딩이나 AI에게 작업 조건을 묻는 화면에 씁니다.",
    variants: questionnaireVariants,
  },
  {
    slug: "radio-group",
    name: "Radio Group",
    summary:
      "여러 선택지 중 하나만 고르는 동그란 버튼 묶음입니다. 요금제·배송 방식처럼 딱 하나를 고를 때 씁니다.",
    variants: radioGroupVariants,
  },
  {
    slug: "resizable",
    name: "Resizable",
    summary:
      "경계선을 끌어 영역 크기를 바꾸는 분할 화면입니다. 사이드바 너비나 편집기·미리보기 비율 조절에 씁니다.",
    variants: resizableVariants,
  },
  {
    slug: "scroll-area",
    name: "Scroll Area",
    summary:
      "정해진 크기 안에서 내용을 스크롤하는 영역입니다. 브라우저마다 다른 스크롤 막대를 얇고 통일된 모양으로 바꿔 줍니다.",
    variants: scrollAreaVariants,
  },
  {
    slug: "select",
    name: "Select",
    summary:
      "버튼을 누르면 목록이 펼쳐지는 선택 상자입니다. 브라우저 기본 것보다 모양을 자유롭게 꾸밀 수 있어 대부분의 폼에 씁니다.",
    variants: selectVariants,
  },
  {
    slug: "separator",
    name: "Separator",
    summary:
      "내용을 시각적으로 나누는 얇은 구분선입니다. 가로·세로 방향을 모두 지원하며, 화면 낭독기에는 구분선으로 읽힙니다.",
    variants: separatorVariants,
  },
  {
    slug: "switch",
    name: "Switch",
    summary:
      "켜짐·꺼짐 두 상태를 바로 바꾸는 토글입니다. 저장 버튼 없이 즉시 반영되는 설정에 씁니다.",
    variants: switchVariants,
  },
  {
    slug: "table",
    name: "Table",
    summary:
      "데이터를 행과 열로 정리해 보여 주는 표입니다. 정렬·검색 같은 기능이 붙은 것은 Data Table을 쓰고, 이쪽은 단순히 값을 나열할 때 씁니다.",
    variants: tableVariants,
  },
  {
    slug: "textarea",
    name: "Textarea",
    summary:
      "여러 줄을 입력받는 칸입니다. 한 줄짜리 Input과 달리 문의 내용·메모처럼 긴 글을 받을 때 씁니다.",
    variants: textareaVariants,
  },
]
