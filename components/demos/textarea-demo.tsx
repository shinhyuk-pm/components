"use client"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

export function Basic() {
  return (
    <Textarea
      placeholder="메시지를 입력해 주세요."
      className="w-full max-w-sm"
    />
  )
}

export function WithField() {
  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="textarea-bio">자기소개</FieldLabel>
      <Textarea id="textarea-bio" placeholder="간단히 소개해 주세요." />
      <FieldDescription>
        다른 사람에게 보이는 소개글입니다. 언제든 고칠 수 있습니다.
      </FieldDescription>
    </Field>
  )
}

export function Disabled() {
  return (
    <Field className="w-full max-w-sm" data-disabled>
      <FieldLabel htmlFor="textarea-disabled">메모</FieldLabel>
      <Textarea
        id="textarea-disabled"
        placeholder="지금은 입력할 수 없습니다."
        disabled
      />
      <FieldDescription>
        권한이 없어 잠긴 상태입니다. 배경이 흐려지고 입력이 막힙니다.
      </FieldDescription>
    </Field>
  )
}

export function Invalid() {
  return (
    <Field className="w-full max-w-sm" data-invalid>
      <FieldLabel htmlFor="textarea-invalid">문의 내용</FieldLabel>
      <Textarea
        id="textarea-invalid"
        placeholder="문의 내용을 적어 주세요."
        aria-invalid
      />
      <FieldError>문의 내용은 10자 이상 적어 주세요.</FieldError>
    </Field>
  )
}

export function WithButton() {
  return (
    <form
      className="flex w-full max-w-sm flex-col gap-3"
      onSubmit={(e) => e.preventDefault()}
    >
      <Field>
        <FieldLabel htmlFor="textarea-message">메시지</FieldLabel>
        <Textarea
          id="textarea-message"
          placeholder="보낼 메시지를 입력해 주세요."
          className="resize-none"
        />
      </Field>
      <Button type="submit" className="self-end">
        보내기
      </Button>
    </form>
  )
}
