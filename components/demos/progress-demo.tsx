"use client"

import * as React from "react"

import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"

export function Basic() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} className="w-[60%]" />
}

export function WithLabel() {
  return (
    <Progress value={56} className="w-full max-w-sm">
      <ProgressLabel>업로드 진행률</ProgressLabel>
      <ProgressValue />
    </Progress>
  )
}

export function Controlled() {
  const [value, setValue] = React.useState(50)

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Progress value={value} className="w-full">
        <ProgressLabel>슬라이더를 움직여 보세요</ProgressLabel>
        <ProgressValue />
      </Progress>
      <Slider
        value={[value]}
        onValueChange={(v) => setValue((v as number[])[0])}
        min={0}
        max={100}
        step={1}
        aria-label="진행률"
      />
    </div>
  )
}
