"use client"

import * as React from "react"
import { ChevronsUpDownIcon, FolderIcon, FileIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export function Basic() {
  return (
    <Collapsible className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-semibold">저장소 3개</span>
        <CollapsibleTrigger
          render={
            <Button variant="ghost" size="icon-sm" aria-label="펼치기">
              <ChevronsUpDownIcon />
            </Button>
          }
        />
      </div>
      <div className="rounded-md border px-4 py-2 font-mono text-sm">components</div>
      <CollapsibleContent className="flex flex-col gap-2">
        <div className="rounded-md border px-4 py-2 font-mono text-sm">design-system</div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm">playground</div>
      </CollapsibleContent>
    </Collapsible>
  )
}

export function Controlled() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Button variant="outline" onClick={() => setOpen((v) => !v)}>
        {open ? "접기" : "펼치기"}
      </Button>
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleContent>
          <p className="rounded-md border p-3 text-sm text-muted-foreground">
            바깥 버튼으로 열고 닫는 상태를 직접 관리합니다. 지금 상태는{" "}
            {open ? "열림" : "닫힘"}입니다.
          </p>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

export function SettingsPanel() {
  return (
    <Collapsible className="w-full max-w-sm rounded-lg border">
      <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 px-4 py-3 text-sm font-medium outline-none">
        고급 설정
        <ChevronsUpDownIcon className="size-4 text-muted-foreground" />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="flex flex-col gap-2 border-t px-4 py-3 text-sm text-muted-foreground">
          <p>자동 백업 주기</p>
          <p>캐시 보관 기간</p>
          <p>실험적 기능 사용</p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

export function FileTree() {
  return (
    <div className="w-full max-w-sm font-mono text-sm">
      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center gap-1.5 rounded-md px-1.5 py-1 outline-none hover:bg-accent">
          <FolderIcon className="size-4 text-muted-foreground" />
          components
        </CollapsibleTrigger>
        <CollapsibleContent className="ml-4 border-l pl-3">
          <Collapsible defaultOpen>
            <CollapsibleTrigger className="flex items-center gap-1.5 rounded-md px-1.5 py-1 outline-none hover:bg-accent">
              <FolderIcon className="size-4 text-muted-foreground" />
              ui
            </CollapsibleTrigger>
            <CollapsibleContent className="ml-4 border-l pl-3">
              <p className="flex items-center gap-1.5 px-1.5 py-1">
                <FileIcon className="size-4 text-muted-foreground" />
                button.tsx
              </p>
              <p className="flex items-center gap-1.5 px-1.5 py-1">
                <FileIcon className="size-4 text-muted-foreground" />
                card.tsx
              </p>
            </CollapsibleContent>
          </Collapsible>
          <p className="flex items-center gap-1.5 px-1.5 py-1">
            <FileIcon className="size-4 text-muted-foreground" />
            demos
          </p>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
