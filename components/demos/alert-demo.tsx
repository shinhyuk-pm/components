"use client"

import { AlertCircleIcon, TerminalIcon } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function AlertDemo() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-4">
      <Alert>
        <TerminalIcon />
        <AlertTitle>안내</AlertTitle>
        <AlertDescription>
          CLI로 컴포넌트를 추가하면 소스가 프로젝트 안에 복사됩니다.
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>결제에 실패했습니다</AlertTitle>
        <AlertDescription>
          카드 정보를 확인한 뒤 다시 시도해 주세요.
        </AlertDescription>
      </Alert>
    </div>
  )
}
