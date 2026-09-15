"use client"

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function Basic() {
  return (
    <RadioGroup defaultValue="comfortable" className="w-fit">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="default" id="rg-r1" />
        <Label htmlFor="rg-r1">기본</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="comfortable" id="rg-r2" />
        <Label htmlFor="rg-r2">여유 있게</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="compact" id="rg-r3" />
        <Label htmlFor="rg-r3">촘촘하게</Label>
      </div>
    </RadioGroup>
  )
}

export function Description() {
  return (
    <RadioGroup defaultValue="comfortable" className="w-fit">
      <Field orientation="horizontal">
        <RadioGroupItem value="default" id="rg-desc-1" />
        <FieldContent>
          <FieldLabel htmlFor="rg-desc-1">기본</FieldLabel>
          <FieldDescription>
            대부분의 경우에 맞는 표준 간격입니다.
          </FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="comfortable" id="rg-desc-2" />
        <FieldContent>
          <FieldLabel htmlFor="rg-desc-2">여유 있게</FieldLabel>
          <FieldDescription>요소 사이가 더 넓습니다.</FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="compact" id="rg-desc-3" />
        <FieldContent>
          <FieldLabel htmlFor="rg-desc-3">촘촘하게</FieldLabel>
          <FieldDescription>
            빽빽한 화면을 위한 최소 간격입니다.
          </FieldDescription>
        </FieldContent>
      </Field>
    </RadioGroup>
  )
}

export function ChoiceCard() {
  const plans = [
    {
      value: "plus",
      id: "rg-plan-plus",
      title: "Plus",
      description: "개인과 소규모 팀용",
    },
    {
      value: "pro",
      id: "rg-plan-pro",
      title: "Pro",
      description: "성장하는 비즈니스용",
    },
    {
      value: "enterprise",
      id: "rg-plan-enterprise",
      title: "Enterprise",
      description: "대규모 팀과 기업용",
    },
  ]

  return (
    <RadioGroup defaultValue="plus" className="w-full max-w-sm">
      {plans.map((plan) => (
        <FieldLabel key={plan.value} htmlFor={plan.id}>
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>{plan.title}</FieldTitle>
              <FieldDescription>{plan.description}</FieldDescription>
            </FieldContent>
            <RadioGroupItem value={plan.value} id={plan.id} />
          </Field>
        </FieldLabel>
      ))}
    </RadioGroup>
  )
}

export function Disabled() {
  return (
    <RadioGroup defaultValue="option2" className="w-fit">
      <Field orientation="horizontal" data-disabled>
        <RadioGroupItem value="option1" id="rg-disabled-1" disabled />
        <FieldLabel htmlFor="rg-disabled-1" className="font-normal">
          비활성화
        </FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="option2" id="rg-disabled-2" />
        <FieldLabel htmlFor="rg-disabled-2" className="font-normal">
          선택지 2
        </FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="option3" id="rg-disabled-3" />
        <FieldLabel htmlFor="rg-disabled-3" className="font-normal">
          선택지 3
        </FieldLabel>
      </Field>
    </RadioGroup>
  )
}

export function Invalid() {
  return (
    <FieldSet className="w-full max-w-xs">
      <FieldLegend variant="label">알림 설정</FieldLegend>
      <FieldDescription>알림을 어떻게 받을지 고르세요.</FieldDescription>
      <RadioGroup defaultValue="email">
        <Field orientation="horizontal" data-invalid>
          <RadioGroupItem value="email" id="rg-invalid-email" aria-invalid />
          <FieldLabel htmlFor="rg-invalid-email" className="font-normal">
            이메일만
          </FieldLabel>
        </Field>
        <Field orientation="horizontal" data-invalid>
          <RadioGroupItem value="sms" id="rg-invalid-sms" aria-invalid />
          <FieldLabel htmlFor="rg-invalid-sms" className="font-normal">
            문자만
          </FieldLabel>
        </Field>
        <Field orientation="horizontal" data-invalid>
          <RadioGroupItem value="both" id="rg-invalid-both" aria-invalid />
          <FieldLabel htmlFor="rg-invalid-both" className="font-normal">
            이메일과 문자 모두
          </FieldLabel>
        </Field>
      </RadioGroup>
    </FieldSet>
  )
}
