"use client"

import * as React from "react"
import { CopyIcon, ScissorsIcon, ShareIcon, Trash2Icon } from "lucide-react"

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

function Trigger({ children }: { children?: React.ReactNode }) {
  return (
    <ContextMenuTrigger className="flex h-32 w-full max-w-sm items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground select-none">
      {children ?? "여기서 마우스 오른쪽 버튼을 눌러보세요"}
    </ContextMenuTrigger>
  )
}

export function Basic() {
  return (
    <ContextMenu>
      <Trigger />
      <ContextMenuContent>
        <ContextMenuItem>뒤로 가기</ContextMenuItem>
        <ContextMenuItem disabled>앞으로 가기</ContextMenuItem>
        <ContextMenuItem>새로고침</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export function WithIconsAndShortcuts() {
  return (
    <ContextMenu>
      <Trigger>아이콘과 단축키가 있는 메뉴</Trigger>
      <ContextMenuContent>
        <ContextMenuItem>
          <CopyIcon />
          복사
          <ContextMenuShortcut>⌘C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <ScissorsIcon />
          잘라내기
          <ContextMenuShortcut>⌘X</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <ShareIcon />
          공유
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export function WithSubmenu() {
  return (
    <ContextMenu>
      <Trigger>하위 메뉴가 펼쳐지는 메뉴</Trigger>
      <ContextMenuContent>
        <ContextMenuItem>이름 바꾸기</ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>공유 대상</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>링크 복사</ContextMenuItem>
            <ContextMenuItem>이메일로 보내기</ContextMenuItem>
            <ContextMenuItem>팀에 공유</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuItem>다운로드</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export function WithCheckboxes() {
  const [bookmarks, setBookmarks] = React.useState(true)
  const [fullUrl, setFullUrl] = React.useState(false)

  return (
    <ContextMenu>
      <Trigger>켜고 끄는 항목이 있는 메뉴</Trigger>
      <ContextMenuContent>
        <ContextMenuLabel>보기 설정</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked={bookmarks} onCheckedChange={setBookmarks}>
          북마크바 표시
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem checked={fullUrl} onCheckedChange={setFullUrl}>
          전체 주소 표시
        </ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export function WithRadio() {
  const [value, setValue] = React.useState("medium")

  return (
    <ContextMenu>
      <Trigger>하나만 고르는 메뉴</Trigger>
      <ContextMenuContent>
        <ContextMenuLabel>글자 크기</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value={value} onValueChange={setValue}>
          <ContextMenuRadioItem value="small">작게</ContextMenuRadioItem>
          <ContextMenuRadioItem value="medium">보통</ContextMenuRadioItem>
          <ContextMenuRadioItem value="large">크게</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export function Destructive() {
  return (
    <ContextMenu>
      <Trigger>삭제가 포함된 메뉴</Trigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuItem>
            <CopyIcon />
            복사
          </ContextMenuItem>
          <ContextMenuItem>이름 바꾸기</ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <Trash2Icon />
          삭제
          <ContextMenuShortcut>⌫</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
