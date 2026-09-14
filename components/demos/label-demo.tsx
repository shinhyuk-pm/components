"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Basic() {
  return (
    <div className="flex gap-2">
      <Checkbox id="label-terms" />
      <Label htmlFor="label-terms">이용약관에 동의합니다</Label>
    </div>
  )
}

export function InField() {
  return (
    <FieldGroup className="w-full max-w-xs">
      <Field>
        <FieldLabel htmlFor="label-field-email">이메일</FieldLabel>
        <Input id="label-field-email" type="email" placeholder="name@example.com" />
        <FieldDescription>라벨을 누르면 입력칸에 커서가 들어갑니다.</FieldDescription>
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="label-field-news" />
        <FieldLabel htmlFor="label-field-news" className="font-normal">
          소식 메일 받기
        </FieldLabel>
      </Field>
    </FieldGroup>
  )
}

export function Rtl() {
  return (
    <div dir="rtl" className="flex flex-col items-center gap-3">
      <div className="flex gap-2">
        <Checkbox id="label-terms-rtl" />
        <Label htmlFor="label-terms-rtl">قبول الشروط والأحكام</Label>
      </div>
      <p className="text-xs text-muted-foreground">체크박스가 오른쪽, 글자가 왼쪽으로 뒤집힙니다.</p>
    </div>
  )
}
