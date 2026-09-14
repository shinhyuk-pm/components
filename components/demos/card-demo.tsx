"use client"

import { MoreHorizontalIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Basic() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>프로젝트 생성</CardTitle>
        <CardDescription>새 프로젝트를 한 번에 설정합니다.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Card는 제목, 설명, 본문, 하단 버튼 영역을 조합해서 쓰는 상자입니다.
        </p>
      </CardContent>
    </Card>
  )
}

export function WithAction() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>이번 달 사용량</CardTitle>
        <CardDescription>9월 1일 ~ 9월 14일</CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon-sm" aria-label="더 보기">
            <MoreHorizontalIcon />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-semibold tabular-nums">402.3 GB</p>
        <p className="mt-1 text-sm text-muted-foreground">전체 1 TB 중 40%</p>
      </CardContent>
    </Card>
  )
}

export function WithFooter() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>요금제 변경</CardTitle>
        <CardDescription>
          변경한 요금제는 다음 결제일부터 적용됩니다.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          프로 요금제로 올리면 저장 용량이 1 TB에서 5 TB로 늘어납니다.
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline">취소</Button>
        <Button>변경하기</Button>
      </CardFooter>
    </Card>
  )
}

export function Small() {
  return (
    <Card size="sm" className="w-full max-w-xs">
      <CardHeader>
        <CardTitle>알림</CardTitle>
        <CardDescription>읽지 않은 메시지 3건</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          여백이 좁아 목록 안에 여러 장을 넣기 좋습니다.
        </p>
      </CardContent>
    </Card>
  )
}

export function Spacing() {
  return (
    <Card className="w-full max-w-sm [--card-spacing:--spacing(6)]">
      <CardHeader>
        <CardTitle>여백 조절</CardTitle>
        <CardDescription>
          --card-spacing 값을 바꾸면 안쪽 여백이 한껴번에 달라집니다.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          이 카드는 기본보다 여백을 넓게 잡았습니다.
        </p>
      </CardContent>
    </Card>
  )
}
