"use client"

import { ArrowUpRightIcon, CheckIcon, XIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Spinner } from "@/components/ui/spinner"

export function Variants() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge variant="link">Link</Badge>
    </div>
  )
}

export function WithIcon() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge>
        <CheckIcon />
        완료
      </Badge>
      <Badge variant="destructive">
        <XIcon />
        실패
      </Badge>
      <Badge variant="outline">
        베타
        <ArrowUpRightIcon />
      </Badge>
    </div>
  )
}

export function WithSpinner() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="secondary">
        <Spinner />
        배포 중
      </Badge>
      <Badge variant="outline">
        <Spinner />
        동기화 중
      </Badge>
    </div>
  )
}

export function AsLink() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge render={<a href="#" />}>문서 보기</Badge>
      <Badge variant="outline" render={<a href="#" />}>
        변경 내역
        <ArrowUpRightIcon />
      </Badge>
    </div>
  )
}

export function CustomColors() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge className="bg-emerald-500/15 text-emerald-700 dark:text-emerald-300">
        정상
      </Badge>
      <Badge className="bg-amber-500/15 text-amber-700 dark:text-amber-300">
        점검 중
      </Badge>
      <Badge className="bg-sky-500/15 text-sky-700 dark:text-sky-300">신규</Badge>
      <Badge className="bg-violet-500/15 text-violet-700 dark:text-violet-300">
        프리미엄
      </Badge>
    </div>
  )
}
