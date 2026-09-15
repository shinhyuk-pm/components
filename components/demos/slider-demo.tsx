"use client"

import * as React from "react"

import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function Basic() {
  return (
    <div className="w-full max-w-sm">
      <Slider defaultValue={[33]} max={100} step={1} />
    </div>
  )
}

export function Range() {
  return (
    <Field className="w-full max-w-sm">
      <FieldLabel>가격대</FieldLabel>
      <Slider defaultValue={[20, 80]} max={100} step={1} />
      <FieldDescription>
        손잡이가 두 개라 최저값과 최고값을 함께 고릅니다.
      </FieldDescription>
    </Field>
  )
}

export function MultipleThumbs() {
  return (
    <div className="w-full max-w-sm">
      <Slider defaultValue={[15, 40, 70, 90]} max={100} step={1} />
    </div>
  )
}

export function Vertical() {
  return (
    <div className="flex h-48 items-center gap-8">
      <Slider orientation="vertical" defaultValue={[40]} max={100} step={1} />
      <Slider orientation="vertical" defaultValue={[70]} max={100} step={1} />
      <Slider orientation="vertical" defaultValue={[25]} max={100} step={1} />
    </div>
  )
}

export function Controlled() {
  const [value, setValue] = React.useState<number[]>([30])

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex items-center justify-between text-sm">
        <Label htmlFor="slider-volume">볼륨</Label>
        <span className="font-mono text-muted-foreground tabular-nums">
          {value[0]}
        </span>
      </div>
      <Slider
        id="slider-volume"
        value={value}
        onValueChange={(next) =>
          setValue(Array.isArray(next) ? next : [next as number])
        }
        max={100}
        step={1}
      />
      <p className="text-xs text-muted-foreground">
        값을 코드에서 들고 있어, 옮기는 즉시 숫자가 같이 바뀝니다.
      </p>
    </div>
  )
}

export function Disabled() {
  return (
    <Field className="w-full max-w-sm" data-disabled>
      <FieldLabel>밝기</FieldLabel>
      <Slider defaultValue={[50]} max={100} step={1} disabled />
      <FieldDescription>
        자동 밝기가 켜져 있어 직접 옮길 수 없습니다.
      </FieldDescription>
    </Field>
  )
}
