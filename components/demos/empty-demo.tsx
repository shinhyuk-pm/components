"use client"

import {
  ArrowUpRightIcon,
  BellIcon,
  CloudIcon,
  FolderCodeIcon,
  PlusIcon,
  RefreshCcwIcon,
  SearchIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
import { Kbd } from "@/components/ui/kbd"

export function Basic() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderCodeIcon />
        </EmptyMedia>
        <EmptyTitle>아직 프로젝트가 없습니다</EmptyTitle>
        <EmptyDescription>첫 프로젝트를 만들어 시작해 보세요.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">
        <Button>프로젝트 만들기</Button>
        <Button variant="outline">가져오기</Button>
      </EmptyContent>
      <Button
        variant="link"
        render={<a href="#" />}
        className="text-muted-foreground"
        size="sm"
        nativeButton={false}
      >
        더 알아보기 <ArrowUpRightIcon />
      </Button>
    </Empty>
  )
}

export function Outline() {
  return (
    <Empty className="border border-dashed">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <CloudIcon />
        </EmptyMedia>
        <EmptyTitle>클라우드 저장소가 비어 있습니다</EmptyTitle>
        <EmptyDescription>
          파일을 올리면 어디서든 열어 볼 수 있습니다.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          파일 올리기
        </Button>
      </EmptyContent>
    </Empty>
  )
}

export function Background() {
  return (
    <Empty className="h-full bg-muted/30">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <BellIcon />
        </EmptyMedia>
        <EmptyTitle>새 알림이 없습니다</EmptyTitle>
        <EmptyDescription className="max-w-xs text-pretty">
          모두 확인했습니다. 새 알림이 오면 여기에 표시됩니다.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">
          <RefreshCcwIcon data-icon="inline-start" />
          새로고침
        </Button>
      </EmptyContent>
    </Empty>
  )
}

export function WithAvatar() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="default">
          <Avatar className="size-12">
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="grayscale"
            />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>
        </EmptyMedia>
        <EmptyTitle>오프라인 사용자</EmptyTitle>
        <EmptyDescription>
          지금은 접속해 있지 않습니다. 메시지를 남기거나 나중에 다시 시도하세요.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">메시지 남기기</Button>
      </EmptyContent>
    </Empty>
  )
}

export function WithAvatarGroup() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia>
          <div className="flex -space-x-2 *:data-[slot=avatar]:size-12 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/maxleiter.png"
                alt="@maxleiter"
              />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </div>
        </EmptyMedia>
        <EmptyTitle>팀원이 없습니다</EmptyTitle>
        <EmptyDescription>팀원을 초대해 함께 작업해 보세요.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">
          <PlusIcon />
          팀원 초대
        </Button>
      </EmptyContent>
    </Empty>
  )
}

export function WithInputGroup() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>404 - 페이지를 찾을 수 없습니다</EmptyTitle>
        <EmptyDescription>
          찾으시는 페이지가 없습니다. 아래에서 검색해 보세요.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <InputGroup className="sm:w-3/4">
          <InputGroupInput placeholder="페이지 검색..." />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <Kbd>/</Kbd>
          </InputGroupAddon>
        </InputGroup>
        <EmptyDescription>
          도움이 필요하신가요? <a href="#">고객 지원 문의</a>
        </EmptyDescription>
      </EmptyContent>
    </Empty>
  )
}
