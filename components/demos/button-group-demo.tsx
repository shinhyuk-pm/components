"use client"

import * as React from "react"
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  ChevronDownIcon,
  CopyIcon,
  MinusIcon,
  PlusIcon,
  SearchIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

export function Basic() {
  return (
    <ButtonGroup>
      <Button variant="outline">왼쪽</Button>
      <Button variant="outline">가운데</Button>
      <Button variant="outline">오른쪽</Button>
    </ButtonGroup>
  )
}

export function Orientation() {
  return (
    <div className="flex items-start gap-8">
      <ButtonGroup>
        <Button variant="outline" size="icon" aria-label="왼쪽 정렬">
          <AlignLeftIcon />
        </Button>
        <Button variant="outline" size="icon" aria-label="가운데 정렬">
          <AlignCenterIcon />
        </Button>
        <Button variant="outline" size="icon" aria-label="오른쪽 정렬">
          <AlignRightIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup orientation="vertical">
        <Button variant="outline">위</Button>
        <Button variant="outline">가운데</Button>
        <Button variant="outline">아래</Button>
      </ButtonGroup>
    </div>
  )
}

export function Sizes() {
  return (
    <div className="flex flex-col items-start gap-3">
      {(["sm", "default", "lg"] as const).map((size) => (
        <ButtonGroup key={size}>
          <Button variant="outline" size={size}>
            하나
          </Button>
          <Button variant="outline" size={size}>
            둘
          </Button>
          <Button variant="outline" size={size}>
            셋
          </Button>
        </ButtonGroup>
      ))}
    </div>
  )
}

export function WithText() {
  return (
    <div className="flex flex-col items-start gap-3">
      <ButtonGroup>
        <ButtonGroupText>정렬</ButtonGroupText>
        <ButtonGroupSeparator />
        <Button variant="outline">최신순</Button>
        <Button variant="outline">인기순</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="icon" aria-label="줄이기">
          <MinusIcon />
        </Button>
        <ButtonGroupText>수량 1</ButtonGroupText>
        <Button variant="outline" size="icon" aria-label="늘리기">
          <PlusIcon />
        </Button>
      </ButtonGroup>
    </div>
  )
}

export function Split() {
  return (
    <ButtonGroup>
      <Button>저장</Button>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={<Button aria-label="저장 옵션 더 보기" />}
        >
          <ChevronDownIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>다른 이름으로 저장</DropdownMenuItem>
          <DropdownMenuItem>사본 저장</DropdownMenuItem>
          <DropdownMenuItem>템플릿으로 저장</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  )
}

export function WithInput() {
  return (
    <ButtonGroup className="w-full max-w-sm">
      <InputGroup>
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput placeholder="검색어를 입력하세요" />
      </InputGroup>
      <Button variant="outline">검색</Button>
    </ButtonGroup>
  )
}

export function Nested() {
  return (
    <ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="icon" aria-label="복사">
          <CopyIcon />
        </Button>
        <Button variant="outline">복사</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">공유</Button>
        <Button variant="outline">내보내기</Button>
      </ButtonGroup>
    </ButtonGroup>
  )
}
