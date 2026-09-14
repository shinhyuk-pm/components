"use client"

import { ArrowRightIcon, MailIcon, PlusIcon, Trash2Icon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

export function Variants() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}

export function Sizes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button size="xs">XS</Button>
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
    </div>
  )
}

export function IconOnly() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button size="icon-xs" variant="outline" aria-label="추가">
        <PlusIcon />
      </Button>
      <Button size="icon-sm" variant="outline" aria-label="추가">
        <PlusIcon />
      </Button>
      <Button size="icon" variant="outline" aria-label="추가">
        <PlusIcon />
      </Button>
      <Button size="icon-lg" variant="destructive" aria-label="삭제">
        <Trash2Icon />
      </Button>
    </div>
  )
}

export function WithIcon() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button>
        <MailIcon />
        메일 보내기
      </Button>
      <Button variant="outline">
        다음 단계
        <ArrowRightIcon />
      </Button>
    </div>
  )
}

export function Loading() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button disabled>
        <Spinner />
        저장 중
      </Button>
      <Button variant="outline" disabled>
        <Spinner />
        불러오는 중
      </Button>
    </div>
  )
}

export function Disabled() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button disabled>Default</Button>
      <Button variant="secondary" disabled>
        Secondary
      </Button>
      <Button variant="outline" disabled>
        Outline
      </Button>
      <Button variant="destructive" disabled>
        Destructive
      </Button>
    </div>
  )
}

export function Rounded() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button className="rounded-full">Rounded</Button>
      <Button variant="outline" className="rounded-full">
        Outline
      </Button>
      <Button size="icon" className="rounded-full" aria-label="추가">
        <PlusIcon />
      </Button>
    </div>
  )
}

export function AsLink() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button render={<a href="#" />}>링크 버튼</Button>
      <Button variant="outline" render={<a href="#" />}>
        문서 보기
        <ArrowRightIcon />
      </Button>
    </div>
  )
}
