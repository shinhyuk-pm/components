"use client"

import {
  CheckIcon,
  GitBranchIcon,
  InfoIcon,
  PencilIcon,
  UserPlusIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker"
import { Spinner } from "@/components/ui/spinner"

export function Variants() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Marker>
        <MarkerContent>
          기본: 대화 사이에 끼워 넣는 안내 줄입니다.
        </MarkerContent>
      </Marker>
      <Marker variant="separator">
        <MarkerContent>구분선: 좌우로 선이 뻗습니다</MarkerContent>
      </Marker>
      <Marker variant="border">
        <MarkerContent>테두리: 아래쪽에만 선이 그어집니다</MarkerContent>
      </Marker>
    </div>
  )
}

export function Status() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Marker>
        <MarkerIcon>
          <Spinner />
        </MarkerIcon>
        <MarkerContent>답변을 생각하는 중…</MarkerContent>
      </Marker>
      <Marker>
        <MarkerIcon>
          <CheckIcon />
        </MarkerIcon>
        <MarkerContent>파일 3개를 모두 올렸습니다.</MarkerContent>
      </Marker>
    </div>
  )
}

export function Shimmer() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Marker>
        <MarkerIcon>
          <Spinner />
        </MarkerIcon>
        <MarkerContent className="shimmer">문서를 읽고 있습니다…</MarkerContent>
      </Marker>
      <Marker>
        <MarkerContent className="shimmer">답변을 쓰는 중…</MarkerContent>
      </Marker>
    </div>
  )
}

export function Separator() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Marker variant="separator">
        <MarkerContent>2026년 9월 14일</MarkerContent>
      </Marker>
      <Marker variant="separator">
        <MarkerContent>여기서부터 읽지 않은 메시지</MarkerContent>
      </Marker>
      <Marker variant="separator">
        <MarkerContent>오늘</MarkerContent>
      </Marker>
    </div>
  )
}

export function Border() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Marker variant="border">
        <MarkerIcon>
          <UserPlusIcon />
        </MarkerIcon>
        <MarkerContent>김한빛 님이 대화에 참여했습니다.</MarkerContent>
      </Marker>
      <Marker variant="border">
        <MarkerIcon>
          <PencilIcon />
        </MarkerIcon>
        <MarkerContent>
          제목이 &lsquo;9월 정산 문의&rsquo;로 바뀌었습니다.
        </MarkerContent>
      </Marker>
    </div>
  )
}

export function WithIcon() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Marker>
        <MarkerIcon>
          <InfoIcon />
        </MarkerIcon>
        <MarkerContent>아이콘을 글 왼쪽에 나란히 둡니다.</MarkerContent>
      </Marker>
      <Marker className="flex-col items-center gap-1">
        <MarkerIcon>
          <GitBranchIcon />
        </MarkerIcon>
        <MarkerContent className="text-center">
          아이콘을 글 위에 쌓아 올릴 수도 있습니다.
        </MarkerContent>
      </Marker>
    </div>
  )
}

export function LinksAndButtons() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Marker render={<a href="#links-and-buttons" />}>
        <MarkerIcon>
          <InfoIcon />
        </MarkerIcon>
        <MarkerContent>눌러서 지난 대화 더 보기</MarkerContent>
      </Marker>
      <Marker variant="border">
        <MarkerContent>이 답변이 도움이 되었나요?</MarkerContent>
        <Button variant="ghost" size="sm" className="ml-auto">
          예
        </Button>
        <Button variant="ghost" size="sm">
          아니오
        </Button>
      </Marker>
    </div>
  )
}
