"use client"

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

function Box({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">{children}</span>
    </div>
  )
}

export function Basic() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="w-full max-w-sm rounded-lg border">
      <ResizablePanel defaultSize="50%">
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">하나</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="50%">
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel defaultSize="25%">
            <Box>둘</Box>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize="75%">
            <Box>셋</Box>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export function Vertical() {
  return (
    <ResizablePanelGroup orientation="vertical" className="min-h-[200px] w-full max-w-sm rounded-lg border">
      <ResizablePanel defaultSize="25%">
        <Box>머리글</Box>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="75%">
        <Box>본문</Box>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export function Handle() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="min-h-[200px] w-full max-w-sm rounded-lg border">
      <ResizablePanel defaultSize="25%">
        <Box>사이드바</Box>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="75%">
        <Box>본문</Box>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export function Rtl() {
  return (
    <div dir="rtl" className="flex w-full max-w-sm flex-col items-center gap-3">
      <ResizablePanelGroup orientation="horizontal" className="min-h-[200px] w-full rounded-lg border">
        <ResizablePanel defaultSize="25%">
          <Box>الشريط الجانبي</Box>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize="75%">
          <Box>المحتوى</Box>
        </ResizablePanel>
      </ResizablePanelGroup>
      <p className="text-xs text-muted-foreground">사이드바가 오른쪽에 놓이고 끄는 방향도 뒤집힙니다.</p>
    </div>
  )
}
