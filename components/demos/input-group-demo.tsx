"use client"

import * as React from "react"
import {
  CheckIcon,
  ChevronDownIcon,
  CopyIcon,
  CornerDownLeftIcon,
  CreditCardIcon,
  EyeOffIcon,
  FileCodeIcon,
  InfoIcon,
  LoaderIcon,
  MailIcon,
  MoreHorizontalIcon,
  RefreshCwIcon,
  SearchIcon,
  StarIcon,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Spinner } from "@/components/ui/spinner"

export function Basic() {
  return (
    <InputGroup className="max-w-xs">
      <InputGroupInput placeholder="검색..." />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">12건</InputGroupAddon>
    </InputGroup>
  )
}

export function InlineStart() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="ig-inline-start">입력칸</FieldLabel>
      <InputGroup>
        <InputGroupInput id="ig-inline-start" placeholder="검색..." />
        <InputGroupAddon align="inline-start">
          <SearchIcon className="text-muted-foreground" />
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>아이콘을 앞쪽에 둔 형태입니다.</FieldDescription>
    </Field>
  )
}

export function InlineEnd() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="ig-inline-end">입력칸</FieldLabel>
      <InputGroup>
        <InputGroupInput id="ig-inline-end" type="password" placeholder="비밀번호 입력" />
        <InputGroupAddon align="inline-end">
          <EyeOffIcon />
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>아이콘을 뒤쪽에 둔 형태입니다.</FieldDescription>
    </Field>
  )
}

export function BlockStart() {
  return (
    <FieldGroup className="max-w-sm">
      <Field>
        <FieldLabel htmlFor="ig-block-start">입력칸</FieldLabel>
        <InputGroup className="h-auto">
          <InputGroupInput id="ig-block-start" placeholder="이름을 입력하세요" />
          <InputGroupAddon align="block-start">
            <InputGroupText>이름</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>입력칸 위쪽에 머리글을 붙였습니다.</FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="ig-block-start-textarea">여러 줄 입력칸</FieldLabel>
        <InputGroup>
          <InputGroupTextarea
            id="ig-block-start-textarea"
            placeholder="console.log('Hello, world!');"
            className="font-mono text-sm"
          />
          <InputGroupAddon align="block-start">
            <FileCodeIcon className="text-muted-foreground" />
            <InputGroupText className="font-mono">script.js</InputGroupText>
            <InputGroupButton size="icon-xs" className="ml-auto">
              <CopyIcon />
              <span className="sr-only">복사</span>
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>여러 줄 입력칸 위쪽에 머리글을 붙였습니다.</FieldDescription>
      </Field>
    </FieldGroup>
  )
}

export function BlockEnd() {
  return (
    <FieldGroup className="max-w-sm">
      <Field>
        <FieldLabel htmlFor="ig-block-end">입력칸</FieldLabel>
        <InputGroup className="h-auto">
          <InputGroupInput id="ig-block-end" placeholder="금액 입력" />
          <InputGroupAddon align="block-end">
            <InputGroupText>USD</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>입력칸 아래쪽에 바닥글을 붙였습니다.</FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="ig-block-end-textarea">여러 줄 입력칸</FieldLabel>
        <InputGroup>
          <InputGroupTextarea id="ig-block-end-textarea" placeholder="댓글을 남겨 보세요..." />
          <InputGroupAddon align="block-end">
            <InputGroupText>0/280</InputGroupText>
            <InputGroupButton variant="default" size="sm" className="ml-auto">
              게시
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>여러 줄 입력칸 아래쪽에 바닥글을 붙였습니다.</FieldDescription>
      </Field>
    </FieldGroup>
  )
}

export function Icon() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="검색..." />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput type="email" placeholder="이메일 입력" />
        <InputGroupAddon>
          <MailIcon />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="카드 번호" />
        <InputGroupAddon>
          <CreditCardIcon />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <CheckIcon />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="카드 번호" />
        <InputGroupAddon align="inline-end">
          <StarIcon />
          <InfoIcon />
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

export function Text() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="0.00" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="example" className="pl-0.5!" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="아이디 입력" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>@company.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="메시지 입력" />
        <InputGroupAddon align="block-end">
          <InputGroupText className="text-xs text-muted-foreground">120자 남음</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

export function Button() {
  const [copied, setCopied] = React.useState(false)
  const [favorite, setFavorite] = React.useState(false)

  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="https://x.com/shadcn" readOnly />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            aria-label="복사"
            title="복사"
            size="icon-xs"
            onClick={() => {
              navigator.clipboard?.writeText("https://x.com/shadcn")
              setCopied(true)
              setTimeout(() => setCopied(false), 1500)
            }}
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup className="[--radius:9999px]">
        <Popover>
          <PopoverTrigger render={<InputGroupAddon />}>
            <InputGroupButton variant="secondary" size="icon-xs">
              <InfoIcon />
            </InputGroupButton>
          </PopoverTrigger>
          <PopoverContent align="start" className="flex flex-col gap-1 rounded-xl text-sm">
            <p className="font-medium">안전하지 않은 연결입니다.</p>
            <p>이 사이트에는 민감한 정보를 입력하지 마세요.</p>
          </PopoverContent>
        </Popover>
        <InputGroupAddon className="pl-1.5 text-muted-foreground">https://</InputGroupAddon>
        <InputGroupInput id="ig-secure" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton onClick={() => setFavorite(!favorite)} size="icon-xs" aria-label="즐겨찾기">
            <StarIcon
              data-favorite={favorite}
              className="data-[favorite=true]:fill-blue-600 data-[favorite=true]:stroke-blue-600"
            />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="검색어 입력..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="secondary">검색</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

export function WithKbd() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupInput placeholder="검색..." />
      <InputGroupAddon>
        <SearchIcon className="text-muted-foreground" />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <Kbd>⌘K</Kbd>
      </InputGroupAddon>
    </InputGroup>
  )
}

export function Dropdown() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup>
        <InputGroupInput placeholder="파일 이름 입력" />
        <InputGroupAddon align="inline-end">
          <DropdownMenu>
            <DropdownMenuTrigger render={<InputGroupButton variant="ghost" aria-label="더 보기" size="icon-xs" />}>
              <MoreHorizontalIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" sideOffset={8} alignOffset={-4}>
              <DropdownMenuGroup>
                <DropdownMenuItem>설정</DropdownMenuItem>
                <DropdownMenuItem>경로 복사</DropdownMenuItem>
                <DropdownMenuItem>위치 열기</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="검색어 입력" />
        <InputGroupAddon align="inline-end">
          <DropdownMenu>
            <DropdownMenuTrigger render={<InputGroupButton variant="ghost" className="pr-1.5! text-xs" />}>
              검색 범위 <ChevronDownIcon className="size-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" sideOffset={8} alignOffset={-4}>
              <DropdownMenuGroup>
                <DropdownMenuItem>문서</DropdownMenuItem>
                <DropdownMenuItem>블로그</DropdownMenuItem>
                <DropdownMenuItem>변경 이력</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

export function WithSpinner() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup>
        <InputGroupInput placeholder="검색 중..." />
        <InputGroupAddon align="inline-end">
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="처리 중..." />
        <InputGroupAddon>
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="변경 사항 저장 중..." />
        <InputGroupAddon align="inline-end">
          <InputGroupText>저장 중...</InputGroupText>
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="데이터 새로고침 중..." />
        <InputGroupAddon>
          <LoaderIcon className="animate-spin" />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupText className="text-muted-foreground">잠시만 기다려 주세요...</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

export function Textarea() {
  return (
    <div className="grid w-full max-w-md gap-4">
      <InputGroup>
        <InputGroupTextarea
          id="ig-code"
          placeholder="console.log('Hello, world!');"
          className="min-h-[200px]"
        />
        <InputGroupAddon align="block-end" className="border-t">
          <InputGroupText>1행, 1열</InputGroupText>
          <InputGroupButton size="sm" className="ml-auto" variant="default">
            실행 <CornerDownLeftIcon />
          </InputGroupButton>
        </InputGroupAddon>
        <InputGroupAddon align="block-start" className="border-b">
          <InputGroupText className="font-mono font-medium">
            <FileCodeIcon />
            script.js
          </InputGroupText>
          <InputGroupButton className="ml-auto" size="icon-xs" aria-label="새로고침">
            <RefreshCwIcon />
          </InputGroupButton>
          <InputGroupButton variant="ghost" size="icon-xs" aria-label="복사">
            <CopyIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

export function Custom() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <textarea
          data-slot="input-group-control"
          className="flex field-sizing-content min-h-16 w-full resize-none rounded-md bg-transparent px-3 py-2.5 text-base outline-none md:text-sm"
          placeholder="입력한 만큼 높이가 자동으로 늘어나는 입력칸..."
        />
        <InputGroupAddon align="block-end">
          <InputGroupButton className="ml-auto" size="sm" variant="default">
            보내기
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

export function Rtl() {
  return (
    <div dir="rtl" className="flex w-full max-w-xs flex-col gap-3">
      <InputGroup>
        <InputGroupInput placeholder="بحث..." />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">12 نتيجة</InputGroupAddon>
      </InputGroup>
      <p className="text-xs text-muted-foreground">아이콘과 글자 위치가 오른쪽에서 왼쪽으로 뒤집힙니다.</p>
    </div>
  )
}
