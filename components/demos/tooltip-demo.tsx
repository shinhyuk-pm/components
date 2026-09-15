"use client"

import { Button } from "@/components/ui/button"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function Basic() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" />}>
        마우스를 올려 보세요
      </TooltipTrigger>
      <TooltipContent>버튼을 설명하는 짧은 말풍선입니다.</TooltipContent>
    </Tooltip>
  )
}

export function Sides() {
  const sides = [
    { side: "top", label: "위" },
    { side: "right", label: "오른쪽" },
    { side: "bottom", label: "아래" },
    { side: "left", label: "왼쪽" },
  ] as const

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {sides.map(({ side, label }) => (
        <Tooltip key={side}>
          <TooltipTrigger render={<Button variant="outline" size="sm" />}>
            {label}
          </TooltipTrigger>
          <TooltipContent side={side}>{label}에 나타납니다</TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}

export function WithShortcut() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" />}>
          저장
        </TooltipTrigger>
        <TooltipContent>
          변경 사항 저장
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <Kbd>S</Kbd>
          </KbdGroup>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" />}>
          검색
        </TooltipTrigger>
        <TooltipContent>
          빠른 검색 열기
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}

export function DisabledButton() {
  return (
    <Tooltip>
      <TooltipTrigger render={<span className="inline-flex" />}>
        <Button disabled>제출</Button>
      </TooltipTrigger>
      <TooltipContent>
        필수 항목을 모두 채워야 제출할 수 있습니다.
      </TooltipContent>
    </Tooltip>
  )
}
