"use client"

import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function Basic() {
  return (
    <HoverCard>
      <HoverCardTrigger
        delay={10}
        closeDelay={100}
        render={<Button variant="link" />}
      >
        여기에 마우스를 올려 보세요
      </HoverCardTrigger>
      <HoverCardContent className="flex w-64 flex-col gap-0.5">
        <div className="font-semibold">@nextjs</div>
        <div>@vercel이 만들고 관리하는 React 프레임워크입니다.</div>
        <div className="mt-1 text-xs text-muted-foreground">
          2021년 12월 가입
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

const sides = [
  { side: "left", label: "왼쪽" },
  { side: "top", label: "위" },
  { side: "bottom", label: "아래" },
  { side: "right", label: "오른쪽" },
] as const

export function Sides() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {sides.map(({ side, label }) => (
        <HoverCard key={side}>
          <HoverCardTrigger
            delay={100}
            closeDelay={100}
            render={<Button variant="outline" />}
          >
            {label}
          </HoverCardTrigger>
          <HoverCardContent side={side}>
            <div className="flex flex-col gap-1">
              <h4 className="font-medium">호버 카드</h4>
              <p>버튼의 {label}에 나타나는 카드입니다.</p>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}
