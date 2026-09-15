"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Stepper,
  StepperCheck,
  StepperContent,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
} from "@/components/ui/stepper"

const steps = [
  { title: "약관 동의", description: "필수 항목 확인" },
  { title: "본인 인증", description: "휴대폰 인증" },
  { title: "정보 입력", description: "이름·연락처" },
  { title: "가입 완료", description: "확인 메일 발송" },
]

function stateOf(index: number, current: number) {
  if (index < current) return "complete" as const
  if (index === current) return "current" as const
  return "upcoming" as const
}

export function Basic() {
  const current = 1

  return (
    <Stepper className="w-full max-w-xl">
      {steps.map((step, i) => (
        <React.Fragment key={step.title}>
          <StepperItem state={stateOf(i, current)}>
            <StepperIndicator>
              {i < current ? <StepperCheck /> : i + 1}
            </StepperIndicator>
            <StepperTitle>{step.title}</StepperTitle>
          </StepperItem>
          {i < steps.length - 1 ? <StepperSeparator /> : null}
        </React.Fragment>
      ))}
    </Stepper>
  )
}

export function WithDescription() {
  const current = 2

  return (
    <Stepper className="w-full max-w-2xl">
      {steps.map((step, i) => (
        <React.Fragment key={step.title}>
          <StepperItem state={stateOf(i, current)}>
            <StepperIndicator>
              {i < current ? <StepperCheck /> : i + 1}
            </StepperIndicator>
            <StepperContent>
              <StepperTitle>{step.title}</StepperTitle>
              <StepperDescription>{step.description}</StepperDescription>
            </StepperContent>
          </StepperItem>
          {i < steps.length - 1 ? <StepperSeparator /> : null}
        </React.Fragment>
      ))}
    </Stepper>
  )
}

export function Vertical() {
  const current = 2

  return (
    <Stepper orientation="vertical" className="w-full max-w-xs">
      {steps.map((step, i) => (
        <React.Fragment key={step.title}>
          <StepperItem state={stateOf(i, current)}>
            <StepperIndicator>
              {i < current ? <StepperCheck /> : i + 1}
            </StepperIndicator>
            <StepperContent>
              <StepperTitle>{step.title}</StepperTitle>
              <StepperDescription>{step.description}</StepperDescription>
            </StepperContent>
          </StepperItem>
          {i < steps.length - 1 ? <StepperSeparator /> : null}
        </React.Fragment>
      ))}
    </Stepper>
  )
}

export function Controlled() {
  const [current, setCurrent] = React.useState(0)

  return (
    <div className="flex w-full max-w-xl flex-col gap-5">
      <Stepper>
        {steps.map((step, i) => (
          <React.Fragment key={step.title}>
            <StepperItem state={stateOf(i, current)}>
              <StepperIndicator>
                {i < current ? <StepperCheck /> : i + 1}
              </StepperIndicator>
              <StepperTitle>{step.title}</StepperTitle>
            </StepperItem>
            {i < steps.length - 1 ? <StepperSeparator /> : null}
          </React.Fragment>
        ))}
      </Stepper>
      <div className="rounded-lg border border-dashed px-4 py-6 text-center text-sm text-muted-foreground">
        {steps[current].title} 화면입니다.
      </div>
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          disabled={current === 0}
          onClick={() => setCurrent((c) => c - 1)}
        >
          이전
        </Button>
        <span className="text-xs text-muted-foreground tabular-nums">
          {current + 1} / {steps.length}
        </span>
        <Button
          size="sm"
          disabled={current === steps.length - 1}
          onClick={() => setCurrent((c) => c + 1)}
        >
          다음
        </Button>
      </div>
    </div>
  )
}

export function Compact() {
  const current = 2

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">{steps[current].title}</span>
        <span className="text-xs text-muted-foreground tabular-nums">
          {current + 1} / {steps.length}
        </span>
      </div>
      <Stepper>
        {steps.map((step, i) => (
          <React.Fragment key={step.title}>
            <StepperItem state={stateOf(i, current)} className="flex-1">
              <span
                aria-hidden="true"
                className={
                  "h-1 w-full rounded-full " +
                  (i <= current ? "bg-primary" : "bg-muted")
                }
              />
              <span className="sr-only">{step.title}</span>
            </StepperItem>
            {i < steps.length - 1 ? (
              <span aria-hidden="true" className="w-1.5 shrink-0" />
            ) : null}
          </React.Fragment>
        ))}
      </Stepper>
    </div>
  )
}
