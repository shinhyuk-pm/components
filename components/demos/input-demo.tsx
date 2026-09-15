"use client"

import * as React from "react"

import { InfoIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Basic() {
  return <Input placeholder="내용을 입력하세요" className="max-w-xs" />
}

export function WithField() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="input-field-username">아이디</FieldLabel>
      <Input
        id="input-field-username"
        type="text"
        placeholder="아이디를 입력하세요"
      />
      <FieldDescription>계정에서 쓸 고유한 아이디를 정하세요.</FieldDescription>
    </Field>
  )
}

export function WithFieldGroup() {
  return (
    <FieldGroup className="max-w-xs">
      <Field>
        <FieldLabel htmlFor="input-fg-name">이름</FieldLabel>
        <Input id="input-fg-name" placeholder="홍길동" />
      </Field>
      <Field>
        <FieldLabel htmlFor="input-fg-email">이메일</FieldLabel>
        <Input
          id="input-fg-email"
          type="email"
          placeholder="name@example.com"
        />
        <FieldDescription>이 주소로 소식을 보내 드립니다.</FieldDescription>
      </Field>
      <Field orientation="horizontal">
        <Button type="reset" variant="outline">
          초기화
        </Button>
        <Button type="button">제출</Button>
      </Field>
    </FieldGroup>
  )
}

export function Disabled() {
  return (
    <Field data-disabled className="max-w-xs">
      <FieldLabel htmlFor="input-disabled">이메일</FieldLabel>
      <Input id="input-disabled" type="email" placeholder="이메일" disabled />
      <FieldDescription>지금은 수정할 수 없는 항목입니다.</FieldDescription>
    </Field>
  )
}

export function Invalid() {
  return (
    <Field data-invalid className="max-w-xs">
      <FieldLabel htmlFor="input-invalid">잘못된 입력</FieldLabel>
      <Input id="input-invalid" placeholder="오류" aria-invalid />
      <FieldDescription>입력값에 오류가 있습니다.</FieldDescription>
    </Field>
  )
}

export function File() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="input-picture">사진</FieldLabel>
      <Input id="input-picture" type="file" />
      <FieldDescription>올릴 사진을 고르세요.</FieldDescription>
    </Field>
  )
}

export function Inline() {
  return (
    <Field orientation="horizontal" className="max-w-xs">
      <Input type="search" placeholder="검색..." />
      <Button>검색</Button>
    </Field>
  )
}

export function Grid() {
  return (
    <FieldGroup className="grid max-w-sm grid-cols-2">
      <Field>
        <FieldLabel htmlFor="input-first-name">이름</FieldLabel>
        <Input id="input-first-name" placeholder="길동" />
      </Field>
      <Field>
        <FieldLabel htmlFor="input-last-name">성</FieldLabel>
        <Input id="input-last-name" placeholder="홍" />
      </Field>
    </FieldGroup>
  )
}

export function Required() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="input-required">
        필수 항목 <span className="text-destructive">*</span>
      </FieldLabel>
      <Input
        id="input-required"
        placeholder="반드시 입력해야 합니다"
        required
      />
      <FieldDescription>비워 둘 수 없는 항목입니다.</FieldDescription>
    </Field>
  )
}

export function WithBadge() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="input-badge">
        Webhook URL{" "}
        <Badge variant="secondary" className="ml-auto">
          베타
        </Badge>
      </FieldLabel>
      <Input
        id="input-badge"
        type="url"
        placeholder="https://api.example.com/webhook"
      />
    </Field>
  )
}

export function WithInputGroup() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="input-group-url">웹사이트 주소</FieldLabel>
      <InputGroup>
        <InputGroupInput id="input-group-url" placeholder="example.com" />
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InfoIcon />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}

export function WithButtonGroup() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="input-button-group">검색</FieldLabel>
      <ButtonGroup>
        <Input id="input-button-group" placeholder="검색어 입력..." />
        <Button variant="outline">검색</Button>
      </ButtonGroup>
    </Field>
  )
}

const countries = [
  { label: "대한민국", value: "kr" },
  { label: "미국", value: "us" },
  { label: "일본", value: "jp" },
]

export function Form() {
  return (
    <form className="w-full max-w-sm" onSubmit={(e) => e.preventDefault()}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="input-form-name">이름</FieldLabel>
          <Input
            id="input-form-name"
            type="text"
            placeholder="홍길동"
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="input-form-email">이메일</FieldLabel>
          <Input
            id="input-form-email"
            type="email"
            placeholder="gildong@example.com"
          />
          <FieldDescription>
            이메일은 다른 곳에 공유하지 않습니다.
          </FieldDescription>
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="input-form-phone">전화번호</FieldLabel>
            <Input
              id="input-form-phone"
              type="tel"
              placeholder="010-1234-5678"
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="input-form-country">국가</FieldLabel>
            <Select items={countries} defaultValue="kr">
              <SelectTrigger id="input-form-country">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {countries.map((country) => (
                    <SelectItem key={country.value} value={country.value}>
                      {country.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
        </div>
        <Field>
          <FieldLabel htmlFor="input-form-address">주소</FieldLabel>
          <Input
            id="input-form-address"
            type="text"
            placeholder="테헤란로 123"
          />
        </Field>
        <Field orientation="horizontal">
          <Button type="button" variant="outline">
            취소
          </Button>
          <Button type="submit">제출</Button>
        </Field>
      </FieldGroup>
    </form>
  )
}

export function Masked() {
  const [phone, setPhone] = React.useState("")
  const [rrn, setRrn] = React.useState("")
  const [amount, setAmount] = React.useState("")

  const formatPhone = (raw: string) => {
    const d = raw.replace(/\D/g, "").slice(0, 11)
    if (d.length < 4) return d
    if (d.length < 8) return `${d.slice(0, 3)}-${d.slice(3)}`
    return `${d.slice(0, 3)}-${d.slice(3, 7)}-${d.slice(7)}`
  }

  const formatRrn = (raw: string) => {
    const d = raw.replace(/\D/g, "").slice(0, 13)
    return d.length < 7 ? d : `${d.slice(0, 6)}-${d.slice(6)}`
  }

  const formatAmount = (raw: string) => {
    const d = raw.replace(/\D/g, "").slice(0, 12)
    return d ? Number(d).toLocaleString("ko-KR") : ""
  }

  return (
    <FieldGroup className="max-w-xs">
      <Field>
        <FieldLabel htmlFor="input-masked-phone">휴대폰 번호</FieldLabel>
        <Input
          id="input-masked-phone"
          inputMode="numeric"
          placeholder="010-0000-0000"
          value={phone}
          onChange={(e) => setPhone(formatPhone(e.target.value))}
        />
        <FieldDescription>
          숫자만 치면 하이픈(-)이 저절로 들어갑니다.
        </FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="input-masked-rrn">주민등록번호</FieldLabel>
        <Input
          id="input-masked-rrn"
          inputMode="numeric"
          placeholder="000000-0000000"
          value={rrn}
          onChange={(e) => setRrn(formatRrn(e.target.value))}
        />
        <FieldDescription>앞 6자리 뒤에 하이픈이 붙습니다.</FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="input-masked-amount">금액</FieldLabel>
        <InputGroup>
          <InputGroupInput
            id="input-masked-amount"
            inputMode="numeric"
            placeholder="0"
            value={amount}
            onChange={(e) => setAmount(formatAmount(e.target.value))}
            className="text-right"
          />
          <InputGroupAddon align="inline-end">
            <InputGroupText>원</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>천 단위마다 쉼표가 저절로 찍힙니다.</FieldDescription>
      </Field>
    </FieldGroup>
  )
}
