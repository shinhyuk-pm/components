"use client"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Spinner } from "@/components/ui/spinner"

export function Basic() {
  return (
    <div className="flex items-center gap-2 text-sm">
      <Spinner />
      결제를 처리하고 있습니다…
    </div>
  )
}

export function Size() {
  return (
    <div className="flex items-center gap-6">
      <Spinner className="size-3" />
      <Spinner className="size-4" />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
    </div>
  )
}

export function WithEmpty() {
  return (
    <Empty className="w-full max-w-sm">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Spinner />
        </EmptyMedia>
        <EmptyTitle>내역을 불러오는 중입니다</EmptyTitle>
        <EmptyDescription>
          잠시만 기다려 주세요. 오래 걸리면 새로고침해 주세요.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          취소
        </Button>
      </EmptyContent>
    </Empty>
  )
}
