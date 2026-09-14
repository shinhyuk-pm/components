"use client"

import * as React from "react"
import { DirectionProvider } from "@base-ui/react/direction-provider"

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

const fruits = [
  { label: "과일 선택", value: null },
  { label: "사과", value: "apple" },
  { label: "바나나", value: "banana" },
  { label: "블루베리", value: "blueberry" },
  { label: "포도", value: "grapes" },
  { label: "파인애플", value: "pineapple" },
]

function Items({ items }: { items: { label: string; value: string | null; disabled?: boolean }[] }) {
  return (
    <>
      {items.map((item) => (
        <SelectItem key={item.label} value={item.value} disabled={item.disabled}>
          {item.label}
        </SelectItem>
      ))}
    </>
  )
}

export function Basic() {
  return (
    <Select items={fruits}>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>과일</SelectLabel>
          <Items items={fruits} />
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export function AlignItem() {
  const [alignItemWithTrigger, setAlignItemWithTrigger] = React.useState(true)

  return (
    <FieldGroup className="w-full max-w-xs">
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="select-align-item">항목 맞추기</FieldLabel>
          <FieldDescription>켜면 고른 항목이 버튼 위치에 딱 맞춰 열립니다.</FieldDescription>
        </FieldContent>
        <Switch id="select-align-item" checked={alignItemWithTrigger} onCheckedChange={setAlignItemWithTrigger} />
      </Field>
      <Field>
        <Select items={fruits} defaultValue="banana">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent alignItemWithTrigger={alignItemWithTrigger}>
            <SelectGroup>
              <Items items={fruits} />
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
    </FieldGroup>
  )
}

const fruitOnly = [
  { label: "사과", value: "apple" },
  { label: "바나나", value: "banana" },
  { label: "블루베리", value: "blueberry" },
]
const vegetables = [
  { label: "당근", value: "carrot" },
  { label: "브로콜리", value: "broccoli" },
  { label: "시금치", value: "spinach" },
]

export function Groups() {
  const allItems = [{ label: "식재료 선택", value: null }, ...fruitOnly, ...vegetables]

  return (
    <Select items={allItems}>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>과일</SelectLabel>
          <Items items={fruitOnly} />
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>채소</SelectLabel>
          <Items items={vegetables} />
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

const timezoneGroups = [
  {
    label: "북아메리카",
    items: [
      { label: "동부 표준시", value: "est" },
      { label: "중부 표준시", value: "cst" },
      { label: "산악 표준시", value: "mst" },
      { label: "태평양 표준시", value: "pst" },
      { label: "알래스카 표준시", value: "akst" },
      { label: "하와이 표준시", value: "hst" },
    ],
  },
  {
    label: "유럽·아프리카",
    items: [
      { label: "그리니치 표준시", value: "gmt" },
      { label: "중앙유럽 시간", value: "cet" },
      { label: "동유럽 시간", value: "eet" },
      { label: "중앙아프리카 시간", value: "cat" },
      { label: "동아프리카 시간", value: "eat" },
    ],
  },
  {
    label: "아시아",
    items: [
      { label: "모스크바 시간", value: "msk" },
      { label: "인도 표준시", value: "ist" },
      { label: "중국 표준시", value: "cst_china" },
      { label: "일본 표준시", value: "jst" },
      { label: "한국 표준시", value: "kst" },
    ],
  },
  {
    label: "오세아니아",
    items: [
      { label: "호주 서부 표준시", value: "awst" },
      { label: "호주 동부 표준시", value: "aest" },
      { label: "뉴질랜드 표준시", value: "nzst" },
    ],
  },
]

export function Scrollable() {
  const items = [{ label: "시간대 선택", value: null }, ...timezoneGroups.flatMap((g) => g.items)]

  return (
    <Select items={items}>
      <SelectTrigger className="w-full max-w-64">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {timezoneGroups.map((group) => (
          <SelectGroup key={group.label}>
            <SelectLabel>{group.label}</SelectLabel>
            <Items items={group.items} />
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  )
}

export function Disabled() {
  const items = [
    { label: "과일 선택", value: null },
    { label: "사과", value: "apple" },
    { label: "바나나", value: "banana" },
    { label: "포도", value: "grapes", disabled: true },
    { label: "파인애플", value: "pineapple" },
  ]

  return (
    <Select items={items} disabled>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <Items items={items} />
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export function Invalid() {
  return (
    <Field data-invalid className="w-full max-w-48">
      <FieldLabel>과일</FieldLabel>
      <Select items={fruits}>
        <SelectTrigger aria-invalid>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <Items items={fruits} />
          </SelectGroup>
        </SelectContent>
      </Select>
      <FieldError>과일을 골라 주세요.</FieldError>
    </Field>
  )
}

const fruitsAr = [
  { label: "اختر فاكهة", value: null },
  { label: "تفاح", value: "apple" },
  { label: "موز", value: "banana" },
  { label: "عنب", value: "grapes" },
]

export function Rtl() {
  return (
    <div dir="rtl" className="flex flex-col items-center gap-3">
      <DirectionProvider direction="rtl">
        <Select items={fruitsAr}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent dir="rtl">
            <SelectGroup>
              <SelectLabel>الفواكه</SelectLabel>
              <Items items={fruitsAr} />
            </SelectGroup>
          </SelectContent>
        </Select>
      </DirectionProvider>
      <p className="text-xs text-muted-foreground">글자와 화살표·체크 표시 위치가 오른쪽에서 왼쪽으로 뒤집힙니다.</p>
    </div>
  )
}
