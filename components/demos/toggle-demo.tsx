"use client"

import * as React from "react"
import {
  BellIcon,
  BellOffIcon,
  BoldIcon,
  ItalicIcon,
  StarIcon,
  UnderlineIcon,
} from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

export function Basic() {
  return (
    <Toggle aria-label="굵게">
      <BoldIcon />
    </Toggle>
  )
}

export function Variants() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle aria-label="굵게">
        <BoldIcon />
      </Toggle>
      <Toggle variant="outline" aria-label="기울임">
        <ItalicIcon />
      </Toggle>
      <Toggle variant="outline" defaultPressed aria-label="밑줄">
        <UnderlineIcon />
      </Toggle>
    </div>
  )
}

export function Size() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle size="sm" variant="outline" aria-label="작게">
        <BoldIcon />
      </Toggle>
      <Toggle variant="outline" aria-label="보통">
        <BoldIcon />
      </Toggle>
      <Toggle size="lg" variant="outline" aria-label="크게">
        <BoldIcon />
      </Toggle>
    </div>
  )
}

export function WithText() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle variant="outline">
        <StarIcon />
        즐겨찾기
      </Toggle>
      <Toggle variant="outline" defaultPressed>
        <BellIcon />
        알림 켜짐
      </Toggle>
    </div>
  )
}

export function Controlled() {
  const [pressed, setPressed] = React.useState(false)

  return (
    <div className="flex flex-col items-center gap-3">
      <Toggle variant="outline" pressed={pressed} onPressedChange={setPressed}>
        {pressed ? <BellIcon /> : <BellOffIcon />}
        {pressed ? "알림 받는 중" : "알림 꺼짐"}
      </Toggle>
      <p className="text-xs text-muted-foreground">
        눌린 상태를 코드가 들고 있어 아이콘과 글자가 함께 바뀝니다.
      </p>
    </div>
  )
}

export function Disabled() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle variant="outline" disabled aria-label="굵게">
        <BoldIcon />
      </Toggle>
      <Toggle variant="outline" disabled defaultPressed aria-label="기울임">
        <ItalicIcon />
      </Toggle>
    </div>
  )
}
