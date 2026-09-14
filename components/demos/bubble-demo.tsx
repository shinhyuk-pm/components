"use client"

import { ThumbsUpIcon } from "lucide-react"

import { Bubble, BubbleContent, BubbleGroup, BubbleReactions } from "@/components/ui/bubble"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

export function Variants() {
  return (
    <BubbleGroup className="w-full max-w-md">
      <Bubble>
        <BubbleContent>Default</BubbleContent>
      </Bubble>
      <Bubble variant="secondary">
        <BubbleContent>Secondary</BubbleContent>
      </Bubble>
      <Bubble variant="muted">
        <BubbleContent>Muted</BubbleContent>
      </Bubble>
      <Bubble variant="tinted">
        <BubbleContent>Tinted</BubbleContent>
      </Bubble>
      <Bubble variant="outline">
        <BubbleContent>Outline</BubbleContent>
      </Bubble>
      <Bubble variant="destructive">
        <BubbleContent>Destructive</BubbleContent>
      </Bubble>
    </BubbleGroup>
  )
}

export function Alignment() {
  return (
    <BubbleGroup className="w-full max-w-md">
      <Bubble variant="secondary">
        <BubbleContent>왼쪽은 상대방이 보낸 말풍선입니다.</BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>오른쪽은 내가 보낸 말풍선입니다.</BubbleContent>
      </Bubble>
      <Bubble variant="secondary">
        <BubbleContent>정렬만 바꾸면 대화처럼 보입니다.</BubbleContent>
      </Bubble>
    </BubbleGroup>
  )
}

export function Conversation() {
  return (
    <BubbleGroup className="w-full max-w-md">
      <Bubble variant="secondary">
        <BubbleContent>shadcn 컴포넌트를 22개 받으려면 어떻게 하나요?</BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>CLI의 add 명령에 이름을 나열하면 한 번에 받을 수 있어요.</BubbleContent>
      </Bubble>
      <Bubble variant="secondary">
        <BubbleContent>Data Table도 그렇게 받나요?</BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>
          그건 조합 패턴이라 Table을 받고 직접 이어 붙여야 합니다.
        </BubbleContent>
      </Bubble>
    </BubbleGroup>
  )
}

export function LinksAndButtons() {
  return (
    <BubbleGroup className="w-full max-w-md">
      <Bubble variant="outline">
        <BubbleContent render={<a href="#" />}>
          첨부한 문서 열기 →
        </BubbleContent>
      </Bubble>
      <Bubble variant="secondary" align="end">
        <BubbleContent render={<button type="button" />}>
          다시 보내기
        </BubbleContent>
      </Bubble>
    </BubbleGroup>
  )
}

export function Reactions() {
  return (
    <BubbleGroup className="w-full max-w-md pb-4">
      <Bubble variant="secondary">
        <BubbleContent>배포가 방금 끝났습니다.</BubbleContent>
        <BubbleReactions>
          <span>🎉 3</span>
        </BubbleReactions>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>확인했습니다. 고생하셨어요.</BubbleContent>
        <BubbleReactions align="start">
          <ThumbsUpIcon className="size-3.5" />
          <span>2</span>
        </BubbleReactions>
      </Bubble>
    </BubbleGroup>
  )
}

export function WithTooltip() {
  return (
    <BubbleGroup className="w-full max-w-md">
      <Bubble variant="secondary">
        <Tooltip>
          <TooltipTrigger render={<BubbleContent />}>
            마우스를 올려 보세요.
          </TooltipTrigger>
          <TooltipContent>오후 2:31에 받음</TooltipContent>
        </Tooltip>
      </Bubble>
      <Bubble align="end">
        <Tooltip>
          <TooltipTrigger render={<BubbleContent />}>
            보낸 시각도 이렇게 숨겨 둘 수 있습니다.
          </TooltipTrigger>
          <TooltipContent>오후 2:32에 보냄</TooltipContent>
        </Tooltip>
      </Bubble>
    </BubbleGroup>
  )
}
