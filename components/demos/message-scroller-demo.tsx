"use client"

import * as React from "react"
import { ArrowUpIcon, RotateCwIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
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
import { Marker, MarkerContent } from "@/components/ui/marker"
import { Message, MessageContent, MessageHeader } from "@/components/ui/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
  useMessageScroller,
  useMessageScrollerScrollable,
  useMessageScrollerVisibility,
} from "@/components/ui/message-scroller"

type Role = "user" | "assistant"
type Msg = { id: string; role: Role; text: string }

const script: { user: string; assistant: string }[] = [
  {
    user: "채팅 화면을 만드는데, AI 답변이 흘러나올 때마다 화면이 위아래로 튀어요.",
    assistant:
      "스트리밍 채팅에서 흔한 문제예요. 메시지 목록을 MessageScroller로 감싸면, 글자가 도착하는 동안 화면이 맨 아래에 붙어 있어서 항상 최신 내용이 보입니다. 단, 사용자가 위로 올려 예전 내용을 읽는 중이면 자동 스크롤을 멈춰서 읽던 자리를 지켜 줍니다.",
  },
  {
    user: "새 메시지를 보내면 대화 전체가 처음부터 다시 그려지는 느낌도 들어요.",
    assistant:
      "메시지 하나에 scrollAnchor를 주면, 그 메시지가 화면 위쪽에 자리를 잡고 답변은 그 아래에서 자연스럽게 이어집니다. 바로 위 메시지도 살짝 보이게 남겨 두어서 맥락이 끊기지 않아요.",
  },
  {
    user: "위로 올려서 예전 답을 다시 읽는 중이면 억지로 끌어내리지 않았으면 해요.",
    assistant:
      "그렇게 동작합니다. 위로 올린 상태에서는 새 글자가 와도 자리가 유지되고, 대신 아래쪽에 '맨 아래로' 버튼이 뜹니다. 한 번 누르면 최신 메시지로 돌아가고 자동 스크롤도 다시 켜집니다.",
  },
  {
    user: "좋네요. 그럼 화면 리더 사용자에게도 새 메시지가 전달되나요?",
    assistant:
      "네. 목록에 role=\"log\"와 aria-relevant=\"additions\"가 기본으로 붙어서, 새 메시지가 추가되면 화면 리더가 읽어 줍니다. 스크롤 버튼도 진짜 버튼이라 키보드로 다룰 수 있어요.",
  },
]

function ChatItem({
  msg,
  scrollAnchor,
  animate,
}: {
  msg: Msg
  scrollAnchor?: boolean
  animate?: boolean
}) {
  return (
    <MessageScrollerItem
      messageId={msg.id}
      scrollAnchor={scrollAnchor}
      className={animate ? "animate-in duration-300 fade-in slide-in-from-bottom-2" : undefined}
    >
      <Message align={msg.role === "user" ? "end" : "start"}>
        <MessageContent>
          <Bubble variant={msg.role === "user" ? "default" : "muted"}>
            <BubbleContent>{msg.text}</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    </MessageScrollerItem>
  )
}

function ChatFrame({
  title,
  description,
  onReset,
  resetDisabled,
  children,
  footer,
}: {
  title: string
  description: string
  onReset?: () => void
  resetDisabled?: boolean
  children: React.ReactNode
  footer?: React.ReactNode
}) {
  return (
    <Card className="mx-auto h-[28rem] w-full max-w-sm gap-0">
      <CardHeader className="gap-1 border-b">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        {onReset && (
          <CardAction>
            <Button variant="outline" size="icon" aria-label="대화 초기화" onClick={onReset} disabled={resetDisabled}>
              <RotateCwIcon />
            </Button>
          </CardAction>
        )}
      </CardHeader>
      <CardContent className="min-h-0 flex-1 overflow-hidden p-0">{children}</CardContent>
      {footer && <CardFooter className="border-t">{footer}</CardFooter>}
    </Card>
  )
}

function useScriptedChat(streaming = true) {
  const [messages, setMessages] = React.useState<Msg[]>([])
  const [turn, setTurn] = React.useState(0)
  const [busy, setBusy] = React.useState(false)
  const timer = React.useRef<ReturnType<typeof setInterval> | null>(null)

  const stop = () => {
    if (timer.current) clearInterval(timer.current)
    timer.current = null
  }

  React.useEffect(() => stop, [])

  const send = () => {
    const next = script[turn]
    if (!next || busy) return
    const userId = `u-${turn}`
    const assistantId = `a-${turn}`
    setMessages((m) => [...m, { id: userId, role: "user", text: next.user }])
    setTurn(turn + 1)
    if (!streaming) {
      setMessages((m) => [...m, { id: assistantId, role: "assistant", text: next.assistant }])
      return
    }
    setBusy(true)
    let i = 0
    setTimeout(() => {
      setMessages((m) => [...m, { id: assistantId, role: "assistant", text: "" }])
      timer.current = setInterval(() => {
        i += 2
        const text = next.assistant.slice(0, i)
        setMessages((m) => m.map((x) => (x.id === assistantId ? { ...x, text } : x)))
        if (i >= next.assistant.length) {
          stop()
          setBusy(false)
        }
      }, 30)
    }, 400)
  }

  const reset = () => {
    stop()
    setMessages([])
    setTurn(0)
    setBusy(false)
  }

  return { messages, send, reset, busy, done: turn >= script.length }
}

function SendFooter({ onSend, disabled, hint }: { onSend: () => void; disabled: boolean; hint: string }) {
  return (
    <div className="flex w-full items-center gap-2">
      <span className="line-clamp-1 flex-1 text-sm text-muted-foreground">{hint}</span>
      <Button size="icon" aria-label="메시지 보내기" onClick={onSend} disabled={disabled}>
        <ArrowUpIcon />
      </Button>
    </div>
  )
}

export function Basic() {
  const chat = useScriptedChat()
  const hint = chat.done ? "보낼 메시지가 없습니다. 초기화하세요." : script[chat.messages.length / 2]?.user ?? ""

  return (
    <MessageScrollerProvider>
      <ChatFrame title="새 대화" description="보내기를 눌러 대화를 이어 가 보세요." onReset={chat.reset} resetDisabled={chat.messages.length === 0}
        footer={<SendFooter onSend={chat.send} disabled={chat.busy || chat.done} hint={hint} />}
      >
        <MessageScroller>
          <MessageScrollerViewport>
            <MessageScrollerContent aria-busy={chat.busy} className="p-4">
              {chat.messages.map((m) => (
                <ChatItem key={m.id} msg={m} scrollAnchor={m.role === "user"} animate />
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
      </ChatFrame>
    </MessageScrollerProvider>
  )
}

export function Anchoring() {
  const [anchorRole, setAnchorRole] = React.useState<Role>("user")
  const chat = useScriptedChat(false)

  const pick = (role: Role) => {
    setAnchorRole(role)
    chat.reset()
  }

  return (
    <MessageScrollerProvider>
      <ChatFrame
        title="기준 메시지 정하기"
        description="어느 쪽 메시지가 화면 위쪽에 자리 잡을지 고릅니다."
        onReset={chat.reset}
        resetDisabled={chat.messages.length === 0}
        footer={
          <div className="flex w-full items-center gap-2">
            <Button variant={anchorRole === "user" ? "default" : "outline"} size="sm" onClick={() => pick("user")}>
              내 메시지
            </Button>
            <Button variant={anchorRole === "assistant" ? "default" : "outline"} size="sm" onClick={() => pick("assistant")}>
              답변
            </Button>
            <Button size="icon" className="ml-auto" aria-label="메시지 보내기" onClick={chat.send} disabled={chat.done}>
              <ArrowUpIcon />
            </Button>
          </div>
        }
      >
        <MessageScroller>
          <MessageScrollerViewport>
            <MessageScrollerContent className="p-4">
              {chat.messages.map((m) => (
                <ChatItem key={m.id} msg={m} scrollAnchor={m.role === anchorRole} />
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
      </ChatFrame>
    </MessageScrollerProvider>
  )
}

type GroupItem =
  | { id: string; type: "event"; text: string }
  | { id: string; type: "message"; sender: string; mine?: boolean; text: string }

const groupBase: GroupItem[] = [
  { id: "g1", type: "message", sender: "그레이스", mine: true, text: "이번 주 배포 일정 다들 확인했나요?" },
  { id: "g2", type: "message", sender: "메리 (에이전트)", text: "목요일 오후 3시로 잡혀 있습니다. 릴리스 노트는 위키에 정리해 두었어요." },
  { id: "g3", type: "message", sender: "그레이스", mine: true, text: "@로키 확인 부탁해요" },
]
const rockyJoin: GroupItem = { id: "g4", type: "event", text: "로키 님이 참여했습니다" }
const rockyMsg: GroupItem = { id: "g5", type: "message", sender: "로키", text: "확인했어요! 목요일 괜찮습니다. 테스트 결과도 그 전에 공유할게요." }

export function GroupChat() {
  const [step, setStep] = React.useState<0 | 1 | 2>(0)
  const items = step === 2 ? [...groupBase, rockyJoin, rockyMsg] : step === 1 ? [...groupBase, rockyJoin] : groupBase

  return (
    <MessageScrollerProvider>
      <ChatFrame
        title="단체 대화"
        description="여러 사람이 참여하는 대화입니다. 입장 안내도 기준 메시지가 될 수 있습니다."
        onReset={() => setStep(0)}
        resetDisabled={step === 0}
        footer={
          <Button className="w-full" onClick={() => setStep((s) => (s < 2 ? ((s + 1) as 1 | 2) : s))} disabled={step === 2}>
            {step === 0 ? "로키 초대하기" : step === 1 ? "로키로 메시지 보내기" : "완료"}
          </Button>
        }
      >
        <MessageScroller>
          <MessageScrollerViewport>
            <MessageScrollerContent className="p-4">
              {items.map((item) =>
                item.type === "event" ? (
                  <MessageScrollerItem key={item.id} messageId={item.id} scrollAnchor>
                    <Marker variant="separator">
                      <MarkerContent>{item.text}</MarkerContent>
                    </Marker>
                  </MessageScrollerItem>
                ) : (
                  <MessageScrollerItem key={item.id} messageId={item.id} scrollAnchor={item.mine}>
                    <Message align={item.mine ? "end" : "start"}>
                      <MessageContent>
                        {!item.mine && <MessageHeader>{item.sender}</MessageHeader>}
                        <Bubble variant={item.mine ? "default" : "muted"}>
                          <BubbleContent>{item.text}</BubbleContent>
                        </Bubble>
                      </MessageContent>
                    </Message>
                  </MessageScrollerItem>
                )
              )}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
      </ChatFrame>
    </MessageScrollerProvider>
  )
}

export function PreviousContext() {
  const [peek, setPeek] = React.useState(48)
  const chat = useScriptedChat(false)

  return (
    <MessageScrollerProvider key={peek} scrollPreviousItemPeek={peek}>
      <ChatFrame
        title="이전 맥락 남기기"
        description="새 메시지가 위로 올라올 때 바로 앞 메시지를 얼마나 보여 둘지 정합니다."
        onReset={chat.reset}
        resetDisabled={chat.messages.length === 0}
        footer={
          <div className="flex w-full items-center gap-2">
            {[0, 48, 96].map((v) => (
              <Button key={v} size="sm" variant={peek === v ? "default" : "outline"} onClick={() => { setPeek(v); chat.reset() }}>
                {v}px
              </Button>
            ))}
            <Button size="icon" className="ml-auto" aria-label="메시지 보내기" onClick={chat.send} disabled={chat.done}>
              <ArrowUpIcon />
            </Button>
          </div>
        }
      >
        <MessageScroller>
          <MessageScrollerViewport>
            <MessageScrollerContent className="p-4">
              {chat.messages.map((m) => (
                <ChatItem key={m.id} msg={m} scrollAnchor={m.role === "user"} />
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
      </ChatFrame>
    </MessageScrollerProvider>
  )
}

export function Streaming() {
  const chat = useScriptedChat(true)

  return (
    <MessageScrollerProvider>
      <ChatFrame
        title="실시간 답변 따라가기"
        description="글자가 도착하는 동안 화면이 맨 아래에 붙어 있습니다. 위로 올리면 멈춥니다."
        onReset={chat.reset}
        resetDisabled={chat.messages.length === 0}
        footer={<SendFooter onSend={chat.send} disabled={chat.busy || chat.done} hint={chat.busy ? "답변 생성 중..." : "보내기를 눌러 답변을 받아 보세요"} />}
      >
        <MessageScroller>
          <MessageScrollerViewport>
            <MessageScrollerContent aria-busy={chat.busy} className="p-4">
              {chat.messages.map((m) => (
                <ChatItem key={m.id} msg={m} />
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
      </ChatFrame>
    </MessageScrollerProvider>
  )
}

const savedThread: Msg[] = script.flatMap((t, i) => [
  { id: `s-u-${i}`, role: "user" as const, text: t.user },
  { id: `s-a-${i}`, role: "assistant" as const, text: t.assistant },
])

export function OpeningPosition() {
  const [position, setPosition] = React.useState<"end" | "start" | "last-anchor">("end")
  const labels = { end: "맨 아래", start: "맨 위", "last-anchor": "마지막 기준" } as const

  return (
    <MessageScrollerProvider key={position} defaultScrollPosition={position}>
      <ChatFrame
        title="저장된 대화 열기"
        description="대화를 열 때 어느 위치에서 시작할지 정합니다."
        footer={
          <div className="flex w-full gap-2">
            {(Object.keys(labels) as (keyof typeof labels)[]).map((p) => (
              <Button key={p} size="sm" variant={position === p ? "default" : "outline"} onClick={() => setPosition(p)}>
                {labels[p]}
              </Button>
            ))}
          </div>
        }
      >
        <MessageScroller>
          <MessageScrollerViewport>
            <MessageScrollerContent className="p-4">
              {savedThread.map((m) => (
                <ChatItem key={m.id} msg={m} scrollAnchor={m.role === "user"} />
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
      </ChatFrame>
    </MessageScrollerProvider>
  )
}

export function LoadHistory() {
  const [older, setOlder] = React.useState(0)
  const history: Msg[] = Array.from({ length: older * 3 }, (_, i) => ({
    id: `h-${i}`,
    role: i % 2 === 0 ? "assistant" : "user",
    text: `이전 메시지 ${older * 3 - i}`,
  }))

  return (
    <MessageScrollerProvider>
      <ChatFrame
        title="이전 메시지 불러오기"
        description="위쪽에 옛 메시지를 붙여 넣어도 읽던 위치가 그대로 유지됩니다."
        onReset={() => setOlder(0)}
        resetDisabled={older === 0}
        footer={
          <Button className="w-full" variant="outline" onClick={() => setOlder((n) => n + 1)} disabled={older >= 3}>
            {older >= 3 ? "더 이상 없음" : "이전 메시지 3개 불러오기"}
          </Button>
        }
      >
        <MessageScroller>
          <MessageScrollerViewport preserveScrollOnPrepend>
            <MessageScrollerContent className="p-4">
              {[...history, ...savedThread].map((m) => (
                <ChatItem key={m.id} msg={m} />
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton direction="start" />
          <MessageScrollerButton />
        </MessageScroller>
      </ChatFrame>
    </MessageScrollerProvider>
  )
}

export function Animation() {
  const chat = useScriptedChat(false)

  return (
    <MessageScrollerProvider>
      <ChatFrame
        title="새 메시지 애니메이션"
        description="새 메시지가 아래에서 살짝 떠오르며 나타납니다."
        onReset={chat.reset}
        resetDisabled={chat.messages.length === 0}
        footer={<SendFooter onSend={chat.send} disabled={chat.done} hint="보내기를 눌러 보세요" />}
      >
        <MessageScroller>
          <MessageScrollerViewport>
            <MessageScrollerContent className="p-4">
              {chat.messages.map((m) => (
                <ChatItem key={m.id} msg={m} scrollAnchor={m.role === "user"} animate />
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
      </ChatFrame>
    </MessageScrollerProvider>
  )
}

function CommandBar() {
  const { scrollToStart, scrollToEnd, scrollToMessage } = useMessageScroller()
  return (
    <div className="flex w-full flex-wrap gap-2">
      <Button size="sm" variant="outline" onClick={() => scrollToStart({ behavior: "smooth" })}>
        맨 위로
      </Button>
      <Button size="sm" variant="outline" onClick={() => scrollToMessage("s-u-2", { align: "start", behavior: "smooth" })}>
        세 번째 질문으로
      </Button>
      <Button size="sm" variant="outline" onClick={() => scrollToEnd({ behavior: "smooth" })}>
        맨 아래로
      </Button>
    </div>
  )
}

export function Commands() {
  return (
    <MessageScrollerProvider>
      <ChatFrame title="원하는 곳으로 이동" description="코드에서 특정 메시지나 맨 위·아래로 스크롤을 옮깁니다." footer={<CommandBar />}>
        <MessageScroller>
          <MessageScrollerViewport>
            <MessageScrollerContent className="p-4">
              {savedThread.map((m) => (
                <ChatItem key={m.id} msg={m} scrollAnchor={m.role === "user"} />
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
      </ChatFrame>
    </MessageScrollerProvider>
  )
}

function VisibilityStatus() {
  const { visibleMessageIds, currentAnchorId } = useMessageScrollerVisibility()
  return (
    <div className="flex w-full flex-wrap items-center gap-2 text-sm text-muted-foreground">
      <Badge variant="secondary" data-testid="visible-count">보이는 메시지 {visibleMessageIds.length}개</Badge>
      <span>현재 기준: {currentAnchorId ?? "없음"}</span>
    </div>
  )
}

export function Visibility() {
  return (
    <MessageScrollerProvider>
      <ChatFrame title="읽는 위치 추적" description="스크롤하면 지금 화면에 보이는 메시지 수와 기준 메시지가 바뀝니다." footer={<VisibilityStatus />}>
        <MessageScroller>
          <MessageScrollerViewport>
            <MessageScrollerContent className="p-4">
              {savedThread.map((m) => (
                <ChatItem key={m.id} msg={m} scrollAnchor={m.role === "user"} />
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
      </ChatFrame>
    </MessageScrollerProvider>
  )
}

function ScrollableStatus() {
  const { start, end } = useMessageScrollerScrollable()
  return (
    <div className="flex w-full gap-2">
      <Badge variant={start ? "default" : "outline"} data-testid="scrollable-start">위로 더 있음: {start ? "예" : "아니오"}</Badge>
      <Badge variant={end ? "default" : "outline"} data-testid="scrollable-end">아래로 더 있음: {end ? "예" : "아니오"}</Badge>
    </div>
  )
}

export function Scrollable() {
  return (
    <MessageScrollerProvider>
      <ChatFrame title="스크롤 여지 읽기" description="위나 아래로 더 내릴 내용이 있는지 코드에서 읽어 옵니다." footer={<ScrollableStatus />}>
        <MessageScroller>
          <MessageScrollerViewport>
            <MessageScrollerContent className="p-4">
              {savedThread.map((m) => (
                <ChatItem key={m.id} msg={m} />
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
      </ChatFrame>
    </MessageScrollerProvider>
  )
}
