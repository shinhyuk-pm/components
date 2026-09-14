"use client"

import { CopyIcon, DownloadIcon, FileTextIcon, RefreshCcwIcon, ThumbsDownIcon, ThumbsUpIcon } from "lucide-react"

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bubble, BubbleContent, BubbleGroup, BubbleReactions } from "@/components/ui/bubble"
import { Button } from "@/components/ui/button"
import { Marker, MarkerContent } from "@/components/ui/marker"
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
} from "@/components/ui/message"

const me = { src: "https://github.com/shadcn.png", alt: "@me", fallback: "나" }
const rabbit = { src: "https://github.com/evilrabbit.png", alt: "@rabbit", fallback: "R" }

function Who({ src, alt, fallback }: typeof me) {
  return (
    <MessageAvatar>
      <Avatar>
        <AvatarImage src={src} alt={alt} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
    </MessageAvatar>
  )
}

export function Basic() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6 py-4">
      <Message align="end">
        <Who {...me} />
        <MessageContent>
          <Bubble>
            <BubbleContent>지금 바로 운영 서버에 배포할게요.</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message>
        <Who {...rabbit} />
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>지금 금요일 오후 4시 55분인데요.</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message align="end">
        <Who {...me} />
        <MessageContent>
          <Bubble>
            <BubbleContent>한 줄만 바꾸는 거예요.</BubbleContent>
          </Bubble>
          <MessageFooter>전송됨</MessageFooter>
        </MessageContent>
      </Message>
      <Message>
        <Who {...rabbit} />
        <MessageContent>
          <BubbleGroup>
            <Bubble variant="muted">
              <BubbleContent>항상 한 줄이라고 하죠 😭</BubbleContent>
            </Bubble>
            <Bubble variant="muted">
              <BubbleContent>알겠어요, 한번 볼게요.</BubbleContent>
              <BubbleReactions aria-label="반응: 좋아요">
                <span>👍</span>
              </BubbleReactions>
            </Bubble>
          </BubbleGroup>
        </MessageContent>
      </Message>
      <Marker role="status">
        <MarkerContent className="shimmer">
          <span className="font-medium">올리버</span>님이 입력 중...
        </MarkerContent>
      </Marker>
    </div>
  )
}

export function WithAvatar() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6 py-4">
      <Message>
        <Who {...rabbit} />
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>의존성 설치 단계에서 빌드가 실패했어요.</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message align="end">
        <Who {...me} />
        <MessageContent>
          <Bubble>
            <BubbleContent>정확한 에러 메시지를 보여줄 수 있나요?</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message>
        <Who {...rabbit} />
        <MessageContent>
          <BubbleGroup>
            <Bubble variant="muted">
              <BubbleContent>로그에 찍힌 에러예요</BubbleContent>
            </Bubble>
            <Bubble variant="muted">
              <BubbleContent>
                빌드 중 문제가 발생했습니다. 라이브러리가 제대로 설치되지 않았습니다. 다시 빌드해 보세요.
              </BubbleContent>
            </Bubble>
          </BubbleGroup>
        </MessageContent>
      </Message>
    </div>
  )
}

export function Group() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6 py-4">
      <MessageGroup>
        <Message>
          <MessageAvatar />
          <MessageContent>
            <Bubble variant="muted">
              <BubbleContent>레지스트리 주소를 확인했어요.</BubbleContent>
            </Bubble>
          </MessageContent>
        </Message>
        <Message>
          <Who {...rabbit} />
          <MessageContent>
            <Bubble variant="muted">
              <BubbleContent>컴포넌트와 예시 JSON은 이제 UI 레지스트리 아래에 있어요.</BubbleContent>
            </Bubble>
          </MessageContent>
        </Message>
      </MessageGroup>
    </div>
  )
}

export function HeaderFooter() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-4">
      <Message>
        <MessageContent>
          <MessageHeader>올리비아</MessageHeader>
          <Bubble variant="muted">
            <BubbleContent>로그는 이미 확인했어요.</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageContent>
          <Bubble>
            <BubbleContent>보고서를 팀에 보내 주세요. 도움이 필요하면 @shadcn을 불러 주세요.</BubbleContent>
          </Bubble>
          <MessageFooter>
            <div>
              읽음 <span className="font-normal">어제</span>
            </div>
          </MessageFooter>
        </MessageContent>
      </Message>
    </div>
  )
}

export function Actions() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-4">
      <Message>
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>설치 실패는 워크스페이스 패키지에서 나오고 있어요.</BubbleContent>
          </Bubble>
          <MessageFooter>
            <Button variant="ghost" size="icon" aria-label="복사" title="복사">
              <CopyIcon />
            </Button>
            <Button variant="ghost" size="icon" aria-label="좋아요" title="좋아요">
              <ThumbsUpIcon />
            </Button>
            <Button variant="ghost" size="icon" aria-label="싫어요" title="싫어요">
              <ThumbsDownIcon />
            </Button>
          </MessageFooter>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageContent>
          <Bubble>
            <BubbleContent>링크 보내 주세요. 확인해 볼게요...</BubbleContent>
          </Bubble>
          <MessageFooter className="gap-2">
            <span className="font-normal text-destructive">전송 실패</span>
            <Button variant="ghost" size="icon-xs" title="다시 보내기" aria-label="다시 보내기">
              <RefreshCcwIcon />
            </Button>
          </MessageFooter>
        </MessageContent>
      </Message>
    </div>
  )
}

export function WithAttachment() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-4">
      <Message align="end">
        <MessageContent>
          <Attachment orientation="vertical">
            <AttachmentMedia variant="image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://avatar.vercel.sh/workspace?size=400" alt="작업 공간" />
            </AttachmentMedia>
          </Attachment>
          <Bubble>
            <BubbleContent>이미지 보냈어요. PDF 표지에 넣어 줄 수 있나요?</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message>
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>완료했어요. 표지에 이미지를 넣은 PDF입니다.</BubbleContent>
          </Bubble>
          <Attachment>
            <AttachmentMedia>
              <FileTextIcon />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>sales-dashboard.pdf</AttachmentTitle>
              <AttachmentDescription>PDF · 2.4 MB</AttachmentDescription>
            </AttachmentContent>
            <AttachmentActions>
              <AttachmentAction type="button" title="다운로드" aria-label="다운로드" size="icon-sm" variant="secondary">
                <DownloadIcon />
              </AttachmentAction>
            </AttachmentActions>
          </Attachment>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageContent>
          <Bubble>
            <BubbleContent>고마워요. 좋아 보이네요.</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    </div>
  )
}
