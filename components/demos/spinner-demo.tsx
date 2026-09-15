"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
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

export function WithButton() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button disabled>
        <Spinner />
        저장 중
      </Button>
      <Button variant="outline" disabled>
        불러오는 중
        <Spinner />
      </Button>
      <Button variant="ghost" size="icon" disabled aria-label="처리 중">
        <Spinner />
      </Button>
    </div>
  )
}

export function WithBadge() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge>
        <Spinner className="size-3" />
        동기화 중
      </Badge>
      <Badge variant="secondary">
        <Spinner className="size-3" />
        대기열 처리 중
      </Badge>
      <Badge variant="outline">
        <Spinner className="size-3" />
        확인 중
      </Badge>
    </div>
  )
}

export function WithInputGroup() {
  return (
    <InputGroup className="w-full max-w-xs">
      <InputGroupInput placeholder="아이디 중복을 확인하는 중…" />
      <InputGroupAddon align="inline-end">
        <Spinner />
      </InputGroupAddon>
    </InputGroup>
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
