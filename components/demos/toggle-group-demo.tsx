"use client"

import * as React from "react"
import {
  BoldIcon,
  ItalicIcon,
  ListIcon,
  ListOrderedIcon,
  StrikethroughIcon,
  UnderlineIcon,
} from "lucide-react"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export function Basic() {
  return (
    <ToggleGroup defaultValue={["bold"]}>
      <ToggleGroupItem value="bold" aria-label="굵게">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="기울임">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="밑줄">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

export function Single() {
  const [value, setValue] = React.useState<readonly string[]>(["bullet"])

  return (
    <div className="flex flex-col items-center gap-3">
      <ToggleGroup
        variant="outline"
        value={value}
        onValueChange={setValue}
        spacing={0}
      >
        <ToggleGroupItem value="bullet" aria-label="글머리 기호 목록">
          <ListIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="number" aria-label="번호 매기기 목록">
          <ListOrderedIcon />
        </ToggleGroupItem>
      </ToggleGroup>
      <p className="text-xs text-muted-foreground">
        하나만 고를 수 있어, 다른 것을 누르면 앞의 것이 풀립니다.
      </p>
    </div>
  )
}

export function Multiple() {
  const [value, setValue] = React.useState<readonly string[]>([
    "bold",
    "underline",
  ])

  return (
    <div className="flex flex-col items-center gap-3">
      <ToggleGroup
        variant="outline"
        multiple
        value={value}
        onValueChange={setValue}
      >
        <ToggleGroupItem value="bold" aria-label="굵게">
          <BoldIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="기울임">
          <ItalicIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="밑줄">
          <UnderlineIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="strike" aria-label="취소선">
          <StrikethroughIcon />
        </ToggleGroupItem>
      </ToggleGroup>
      <p className="text-xs text-muted-foreground">
        지금 켜진 것: {value.length ? value.join(", ") : "없음"}
      </p>
    </div>
  )
}

export function Attached() {
  return (
    <div className="flex flex-col items-center gap-4">
      <ToggleGroup variant="outline" spacing={0} defaultValue={["day"]}>
        <ToggleGroupItem value="day">일</ToggleGroupItem>
        <ToggleGroupItem value="week">주</ToggleGroupItem>
        <ToggleGroupItem value="month">월</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup defaultValue={["week"]}>
        <ToggleGroupItem value="day">일</ToggleGroupItem>
        <ToggleGroupItem value="week">주</ToggleGroupItem>
        <ToggleGroupItem value="month">월</ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}

export function Vertical() {
  return (
    <ToggleGroup variant="outline" orientation="vertical" spacing={0}>
      <ToggleGroupItem value="bold" aria-label="굵게">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="기울임">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="밑줄">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

export function Size() {
  return (
    <div className="flex flex-col items-center gap-3">
      {(["sm", "default", "lg"] as const).map((size) => (
        <ToggleGroup
          key={size}
          variant="outline"
          size={size}
          spacing={0}
          defaultValue={["bold"]}
        >
          <ToggleGroupItem value="bold" aria-label="굵게">
            <BoldIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="기울임">
            <ItalicIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="밑줄">
            <UnderlineIcon />
          </ToggleGroupItem>
        </ToggleGroup>
      ))}
    </div>
  )
}
