"use client"

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

export default function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>프로젝트 생성</CardTitle>
        <CardDescription>새 프로젝트를 한 번에 설정합니다.</CardDescription>
        <CardAction>
          <Button variant="ghost" size="sm">
            도움말
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Card는 제목, 설명, 본문, 하단 버튼 영역을 조합해서 쓰는 상자입니다.
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline">취소</Button>
        <Button>만들기</Button>
      </CardFooter>
    </Card>
  )
}
