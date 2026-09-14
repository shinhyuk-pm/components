"use client"

import * as React from "react"
import {
  CalendarIcon,
  CreditCardIcon,
  FileIcon,
  SettingsIcon,
  SmileIcon,
  UserIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export function Basic() {
  return (
    <Command className="w-full max-w-sm rounded-lg border">
      <CommandInput placeholder="명령을 입력하거나 검색하세요..." />
      <CommandList>
        <CommandEmpty>결과가 없습니다.</CommandEmpty>
        <CommandItem>
          <CalendarIcon />
          <span>캘린더</span>
        </CommandItem>
        <CommandItem>
          <SmileIcon />
          <span>이모지 검색</span>
        </CommandItem>
        <CommandItem>
          <FileIcon />
          <span>새 문서</span>
        </CommandItem>
      </CommandList>
    </Command>
  )
}

export function Groups() {
  return (
    <Command className="w-full max-w-sm rounded-lg border">
      <CommandInput placeholder="검색..." />
      <CommandList>
        <CommandEmpty>결과가 없습니다.</CommandEmpty>
        <CommandGroup heading="추천">
          <CommandItem>
            <CalendarIcon />
            <span>캘린더</span>
          </CommandItem>
          <CommandItem>
            <SmileIcon />
            <span>이모지 검색</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="설정">
          <CommandItem>
            <UserIcon />
            <span>프로필</span>
          </CommandItem>
          <CommandItem>
            <SettingsIcon />
            <span>환경설정</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}

export function Shortcuts() {
  return (
    <Command className="w-full max-w-sm rounded-lg border">
      <CommandInput placeholder="검색..." />
      <CommandList>
        <CommandEmpty>결과가 없습니다.</CommandEmpty>
        <CommandGroup heading="바로가기">
          <CommandItem>
            <UserIcon />
            <span>프로필</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCardIcon />
            <span>결제</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <SettingsIcon />
            <span>환경설정</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}

const MANY = [
  "대시보드", "프로젝트", "이슈", "풀 리퀘스트", "배포", "환경 변수",
  "도메인", "로그", "사용량", "결제", "팀원", "권한", "알림", "보안",
]

export function Scrollable() {
  return (
    <Command className="w-full max-w-sm rounded-lg border">
      <CommandInput placeholder="항목이 많을 때..." />
      <CommandList>
        <CommandEmpty>결과가 없습니다.</CommandEmpty>
        <CommandGroup heading="전체 메뉴">
          {MANY.map((item) => (
            <CommandItem key={item}>
              <FileIcon />
              <span>{item}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}

export function AsDialog() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setOpen((v) => !v)
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <div className="flex flex-col items-center gap-3">
      <Button variant="outline" onClick={() => setOpen(true)}>
        명령 팔레트 열기
      </Button>
      <p className="text-xs text-muted-foreground">
        <kbd className="rounded border px-1.5 py-0.5 font-mono">⌘K</kbd> 로도
        열립니다.
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="무엇을 찾으시나요?" />
        <CommandList>
          <CommandEmpty>결과가 없습니다.</CommandEmpty>
          <CommandGroup heading="이동">
            <CommandItem>
              <CalendarIcon />
              <span>캘린더</span>
            </CommandItem>
            <CommandItem>
              <UserIcon />
              <span>프로필</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  )
}
