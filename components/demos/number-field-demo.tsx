"use client"

import * as React from "react"

import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldScrubArea,
} from "@/components/ui/number-field"

export function Basic() {
  return (
    <NumberField defaultValue={1} className="w-fit">
      <NumberFieldGroup>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
      </NumberFieldGroup>
    </NumberField>
  )
}

export function MinMax() {
  return (
    <Field className="w-fit">
      <FieldLabel htmlFor="nf-qty">수량</FieldLabel>
      <NumberField
        id="nf-qty"
        defaultValue={1}
        min={1}
        max={10}
        className="w-fit"
      >
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>
      <FieldDescription>
        1개 아래·10개 위로는 내려가거나 올라가지 않습니다.
      </FieldDescription>
    </Field>
  )
}

export function Step() {
  return (
    <Field className="w-fit">
      <FieldLabel htmlFor="nf-step">대여 일수</FieldLabel>
      <NumberField
        id="nf-step"
        defaultValue={7}
        step={7}
        min={7}
        className="w-fit"
      >
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput className="w-20" />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>
      <FieldDescription>한 번에 7씩 움직입니다(1주 단위).</FieldDescription>
    </Field>
  )
}

export function Format() {
  return (
    <Field className="w-fit">
      <FieldLabel htmlFor="nf-price">판매가</FieldLabel>
      <NumberField
        id="nf-price"
        defaultValue={12000}
        step={1000}
        min={0}
        format={{ style: "currency", currency: "KRW" }}
        className="w-fit"
      >
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput className="w-28" />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>
      <FieldDescription>
        원화 기호와 천 단위 쉼표가 저절로 붙습니다.
      </FieldDescription>
    </Field>
  )
}

export function Scrub() {
  return (
    <NumberField defaultValue={50} min={0} max={100} className="w-fit">
      <NumberFieldScrubArea className="mb-2 block text-sm text-muted-foreground">
        여기를 좌우로 끌어 보세요
      </NumberFieldScrubArea>
      <NumberFieldGroup>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
      </NumberFieldGroup>
    </NumberField>
  )
}

export function Controlled() {
  const [value, setValue] = React.useState<number | null>(3)

  return (
    <div className="flex flex-col items-center gap-3">
      <NumberField
        value={value}
        onValueChange={setValue}
        min={0}
        max={99}
        className="w-fit"
      >
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>
      <p className="text-sm text-muted-foreground">
        합계 {((value ?? 0) * 9900).toLocaleString("ko-KR")}원
      </p>
    </div>
  )
}

export function Disabled() {
  return (
    <div className="flex items-center gap-4">
      <NumberField defaultValue={1} disabled className="w-fit">
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>
      <NumberField defaultValue={5} readOnly className="w-fit">
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>
    </div>
  )
}
