"use client"

import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

export function Basic() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" className="w-fit" />}>
        팝오버 열기
      </PopoverTrigger>
      <PopoverContent align="start">
        <PopoverHeader>
          <PopoverTitle>크기</PopoverTitle>
          <PopoverDescription>레이어의 크기를 정하세요.</PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  )
}

export function Alignments() {
  const aligns = [
    { align: "start", label: "시작" },
    { align: "center", label: "가운데" },
    { align: "end", label: "끝" },
  ] as const

  return (
    <div className="flex gap-6">
      {aligns.map(({ align, label }) => (
        <Popover key={align}>
          <PopoverTrigger render={<Button variant="outline" size="sm" />}>
            {label}
          </PopoverTrigger>
          <PopoverContent align={align} className="w-40">
            {label} 기준 정렬
          </PopoverContent>
        </Popover>
      ))}
    </div>
  )
}

export function Form() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        팝오버 열기
      </PopoverTrigger>
      <PopoverContent className="w-64" align="start">
        <PopoverHeader>
          <PopoverTitle>크기</PopoverTitle>
          <PopoverDescription>레이어의 크기를 정하세요.</PopoverDescription>
        </PopoverHeader>
        <FieldGroup className="gap-4">
          <Field orientation="horizontal">
            <FieldLabel htmlFor="popover-width" className="w-1/2">
              너비
            </FieldLabel>
            <Input id="popover-width" defaultValue="100%" />
          </Field>
          <Field orientation="horizontal">
            <FieldLabel htmlFor="popover-height" className="w-1/2">
              높이
            </FieldLabel>
            <Input id="popover-height" defaultValue="25px" />
          </Field>
        </FieldGroup>
      </PopoverContent>
    </Popover>
  )
}
