"use client"

import {
  AlertCircleIcon,
  CheckCircle2Icon,
  InfoIcon,
  TerminalIcon,
} from "lucide-react"

import { Alert, AlertAction, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export function Basic() {
  return (
    <Alert className="w-full max-w-xl">
      <TerminalIcon />
      <AlertTitle>안내</AlertTitle>
      <AlertDescription>
        CLI로 컴포넌트를 추가하면 소스가 프로젝트 안에 그대로 복사됩니다.
      </AlertDescription>
    </Alert>
  )
}

export function Destructive() {
  return (
    <Alert variant="destructive" className="w-full max-w-xl">
      <AlertCircleIcon />
      <AlertTitle>결제에 실패했습니다</AlertTitle>
      <AlertDescription>
        카드 유효기간과 잔액을 확인한 뒤 다시 시도해 주세요.
      </AlertDescription>
    </Alert>
  )
}

export function WithAction() {
  return (
    <Alert className="w-full max-w-xl">
      <InfoIcon />
      <AlertTitle>새 버전이 나왔습니다</AlertTitle>
      <AlertDescription>
        지금 업데이트하면 속도 개선과 버그 수정이 적용됩니다.
      </AlertDescription>
      <AlertAction>
        <Button size="sm" variant="outline">
          업데이트
        </Button>
      </AlertAction>
    </Alert>
  )
}

export function TitleOnly() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>변경사항이 저장되었습니다.</AlertTitle>
      </Alert>
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>연결이 끊어졌습니다.</AlertTitle>
      </Alert>
    </div>
  )
}

export function CustomColors() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
      <Alert className="border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200">
        <CheckCircle2Icon />
        <AlertTitle>배포가 완료되었습니다</AlertTitle>
        <AlertDescription className="text-emerald-900/80 dark:text-emerald-200/80">
          약 40초가 걸렸고 오류는 없었습니다.
        </AlertDescription>
      </Alert>
      <Alert className="border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200">
        <InfoIcon />
        <AlertTitle>사용량이 80%를 넘었습니다</AlertTitle>
        <AlertDescription className="text-amber-900/80 dark:text-amber-200/80">
          이번 달 한도에 가까워지고 있습니다.
        </AlertDescription>
      </Alert>
    </div>
  )
}
