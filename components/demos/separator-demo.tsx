"use client"

import { Separator } from "@/components/ui/separator"

export function Basic() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 text-sm">
      <div className="flex flex-col gap-1.5">
        <div className="leading-none font-medium">shadcn/ui</div>
        <div className="text-muted-foreground">디자인 시스템의 기초</div>
      </div>
      <Separator />
      <div>
        마음대로 고치고 확장해서 쓸 수 있는, 잘 디자인된 컴포넌트 모음입니다.
      </div>
    </div>
  )
}

export function Vertical() {
  return (
    <div className="flex h-5 items-center gap-4 text-sm">
      <div>블로그</div>
      <Separator orientation="vertical" />
      <div>문서</div>
      <Separator orientation="vertical" />
      <div>소스</div>
    </div>
  )
}

export function Menu() {
  return (
    <div className="flex items-center gap-2 text-sm md:gap-4">
      <div className="flex flex-col gap-1">
        <span className="font-medium">설정</span>
        <span className="text-xs text-muted-foreground">환경 설정 관리</span>
      </div>
      <Separator orientation="vertical" />
      <div className="flex flex-col gap-1">
        <span className="font-medium">계정</span>
        <span className="text-xs text-muted-foreground">프로필과 보안</span>
      </div>
      <Separator orientation="vertical" className="hidden md:block" />
      <div className="hidden flex-col gap-1 md:flex">
        <span className="font-medium">도움말</span>
        <span className="text-xs text-muted-foreground">지원과 문서</span>
      </div>
    </div>
  )
}

export function List() {
  const rows = [
    { label: "항목 1", value: "값 1" },
    { label: "항목 2", value: "값 2" },
    { label: "항목 3", value: "값 3" },
  ]

  return (
    <div className="flex w-full max-w-sm flex-col gap-2 text-sm">
      {rows.map((row, i) => (
        <div key={row.label} className="contents">
          {i > 0 && <Separator />}
          <dl className="flex items-center justify-between">
            <dt>{row.label}</dt>
            <dd className="text-muted-foreground">{row.value}</dd>
          </dl>
        </div>
      ))}
    </div>
  )
}
