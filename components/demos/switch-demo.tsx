"use client"

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function Basic() {
  return (
    <div className="flex items-center gap-2">
      <Switch id="switch-airplane" />
      <Label htmlFor="switch-airplane">비행기 모드</Label>
    </div>
  )
}

export function Description() {
  return (
    <Field orientation="horizontal" className="w-full max-w-sm">
      <FieldContent>
        <FieldLabel htmlFor="switch-marketing">마케팅 알림 받기</FieldLabel>
        <FieldDescription>
          새 소식과 혜택을 이메일로 보내 드립니다. 설명 글을 눌러도 켜집니다.
        </FieldDescription>
      </FieldContent>
      <Switch id="switch-marketing" />
    </Field>
  )
}

export function ChoiceCard() {
  const options = [
    {
      id: "switch-card-email",
      title: "이메일 알림",
      description: "주문·배송 상태를 이메일로 받습니다.",
      defaultChecked: true,
    },
    {
      id: "switch-card-sms",
      title: "문자 알림",
      description: "중요한 안내만 문자로 받습니다.",
      defaultChecked: false,
    },
    {
      id: "switch-card-push",
      title: "앱 푸시 알림",
      description: "앱을 켜지 않아도 알림이 뜹니다.",
      defaultChecked: false,
    },
  ]

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      {options.map((option) => (
        <FieldLabel key={option.id} htmlFor={option.id}>
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>{option.title}</FieldTitle>
              <FieldDescription>{option.description}</FieldDescription>
            </FieldContent>
            <Switch id={option.id} defaultChecked={option.defaultChecked} />
          </Field>
        </FieldLabel>
      ))}
    </div>
  )
}

export function Disabled() {
  return (
    <Field orientation="horizontal" className="w-full max-w-sm" data-disabled>
      <FieldContent>
        <FieldLabel htmlFor="switch-disabled">2단계 인증</FieldLabel>
        <FieldDescription>
          관리자가 잠가 둔 설정이라 직접 바꿀 수 없습니다.
        </FieldDescription>
      </FieldContent>
      <Switch id="switch-disabled" defaultChecked disabled />
    </Field>
  )
}

export function Invalid() {
  return (
    <Field orientation="horizontal" className="w-full max-w-sm" data-invalid>
      <FieldContent>
        <FieldLabel htmlFor="switch-invalid">이용약관 동의</FieldLabel>
        <FieldError>계속하려면 약관에 동의해 주세요.</FieldError>
      </FieldContent>
      <Switch id="switch-invalid" aria-invalid />
    </Field>
  )
}

export function Size() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Switch id="switch-size-sm" size="sm" defaultChecked />
        <Label htmlFor="switch-size-sm">Small</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="switch-size-default" defaultChecked />
        <Label htmlFor="switch-size-default">Default</Label>
      </div>
    </div>
  )
}
