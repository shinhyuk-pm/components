"use client"

import { Bubble, BubbleContent, BubbleGroup } from "@/components/ui/bubble"

export default function BubbleDemo() {
  return (
    <BubbleGroup className="w-full max-w-md">
      <Bubble variant="secondary">
        <BubbleContent>shadcn 컴포넌트를 22개 받으려면 어떻게 하나요?</BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>CLI의 add 명령에 이름을 나열하면 한 번에 받을 수 있어요.</BubbleContent>
      </Bubble>
      <Bubble variant="muted">
        <BubbleContent>방금 22개 설치가 끝났습니다.</BubbleContent>
      </Bubble>
    </BubbleGroup>
  )
}
