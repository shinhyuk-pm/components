"use client"

import {
  BadgeCheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
  InboxIcon,
  PlusIcon,
  ShieldAlertIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

export function Basic() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>기본 항목</ItemTitle>
          <ItemDescription>제목과 설명만 있는 단순한 항목입니다.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            동작
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline" size="sm" render={<a href="#" />}>
        <ItemMedia>
          <BadgeCheckIcon className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>프로필 인증이 완료되었습니다.</ItemTitle>
        </ItemContent>
        <ItemActions>
          <ChevronRightIcon className="size-4" />
        </ItemActions>
      </Item>
    </div>
  )
}

export function Variant() {
  const variants = [
    { variant: "default", title: "기본", description: "배경도 테두리도 없는 투명한 형태입니다." },
    { variant: "outline", title: "테두리", description: "테두리가 보이는 형태입니다." },
    { variant: "muted", title: "연한 배경", description: "덜 중요한 내용에 쓰는 연한 배경 형태입니다." },
  ] as const

  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      {variants.map((v) => (
        <Item key={v.variant} variant={v.variant}>
          <ItemMedia variant="icon">
            <InboxIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>{v.title}</ItemTitle>
            <ItemDescription>{v.description}</ItemDescription>
          </ItemContent>
        </Item>
      ))}
    </div>
  )
}

export function Size() {
  const sizes = [
    { size: "default", title: "기본 크기", description: "대부분의 경우에 쓰는 표준 크기입니다." },
    { size: "sm", title: "작은 크기", description: "촘촘한 목록에 맞는 크기입니다." },
    { size: "xs", title: "아주 작은 크기", description: "가장 촘촘한 크기입니다." },
  ] as const

  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      {sizes.map((s) => (
        <Item key={s.size} variant="outline" size={s.size}>
          <ItemMedia variant="icon">
            <InboxIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>{s.title}</ItemTitle>
            <ItemDescription>{s.description}</ItemDescription>
          </ItemContent>
        </Item>
      ))}
    </div>
  )
}

export function Icon() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-6">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <ShieldAlertIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>보안 알림</ItemTitle>
          <ItemDescription>알 수 없는 기기에서 새 로그인이 감지되었습니다.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            확인
          </Button>
        </ItemActions>
      </Item>
    </div>
  )
}

export function WithAvatar() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-6">
      <Item variant="outline">
        <ItemMedia>
          <Avatar className="size-10">
            <AvatarImage src="https://github.com/evilrabbit.png" />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Evil Rabbit</ItemTitle>
          <ItemDescription>5개월 전 마지막 접속</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="icon-sm" variant="outline" className="rounded-full" aria-label="초대">
            <PlusIcon />
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline">
        <ItemMedia>
          <div className="flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale">
            <Avatar className="hidden sm:flex">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="hidden sm:flex">
              <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </div>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>팀원이 없습니다</ItemTitle>
          <ItemDescription>팀원을 초대해 함께 작업해 보세요.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            초대
          </Button>
        </ItemActions>
      </Item>
    </div>
  )
}

const music = [
  { title: "Midnight City Lights", artist: "Neon Dreams", album: "Electric Nights", duration: "3:45" },
  { title: "Coffee Shop Conversations", artist: "The Morning Brew", album: "Urban Stories", duration: "4:05" },
  { title: "Digital Rain", artist: "Cyber Symphony", album: "Binary Beats", duration: "3:30" },
]

export function Image() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <ItemGroup className="gap-4">
        {music.map((song) => (
          <Item key={song.title} variant="outline" render={<a href="#" />} role="listitem">
            <ItemMedia variant="image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://avatar.vercel.sh/${encodeURIComponent(song.title)}`}
                alt={song.title}
                width={32}
                height={32}
                className="object-cover grayscale"
              />
            </ItemMedia>
            <ItemContent>
              <ItemTitle className="line-clamp-1">
                {song.title} - <span className="text-muted-foreground">{song.album}</span>
              </ItemTitle>
              <ItemDescription>{song.artist}</ItemDescription>
            </ItemContent>
            <ItemContent className="flex-none text-center">
              <ItemDescription>{song.duration}</ItemDescription>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </div>
  )
}

const people = [
  { username: "shadcn", avatar: "https://github.com/shadcn.png", email: "shadcn@vercel.com" },
  { username: "maxleiter", avatar: "https://github.com/maxleiter.png", email: "maxleiter@vercel.com" },
  { username: "evilrabbit", avatar: "https://github.com/evilrabbit.png", email: "evilrabbit@vercel.com" },
]

export function Group() {
  return (
    <ItemGroup className="w-full max-w-sm">
      {people.map((person) => (
        <Item key={person.username} variant="outline">
          <ItemMedia>
            <Avatar>
              <AvatarImage src={person.avatar} className="grayscale" />
              <AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent className="gap-1">
            <ItemTitle>{person.username}</ItemTitle>
            <ItemDescription>{person.email}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="ghost" size="icon" className="rounded-full" aria-label="추가">
              <PlusIcon />
            </Button>
          </ItemActions>
        </Item>
      ))}
    </ItemGroup>
  )
}

const models = [
  { name: "v0-1.5-sm", description: "일상 작업과 UI 생성용." },
  { name: "v0-1.5-lg", description: "깊은 사고와 추론용." },
  { name: "v0-2.0-mini", description: "누구나 쓰는 오픈 소스 모델." },
]

export function Header() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-6">
      <ItemGroup className="grid grid-cols-3 gap-4">
        {models.map((model) => (
          <Item key={model.name} variant="outline">
            <ItemHeader>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://avatar.vercel.sh/${model.name}?size=256`}
                alt={model.name}
                width={128}
                height={128}
                className="aspect-square w-full rounded-sm object-cover"
              />
            </ItemHeader>
            <ItemContent>
              <ItemTitle>{model.name}</ItemTitle>
              <ItemDescription>{model.description}</ItemDescription>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </div>
  )
}

export function Link() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Item render={<a href="#" />}>
        <ItemContent>
          <ItemTitle>문서 보러 가기</ItemTitle>
          <ItemDescription>컴포넌트 시작 방법을 알아보세요.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <ChevronRightIcon className="size-4" />
        </ItemActions>
      </Item>
      <Item variant="outline" render={<a href="#" target="_blank" rel="noopener noreferrer" />}>
        <ItemContent>
          <ItemTitle>외부 자료</ItemTitle>
          <ItemDescription>새 탭에서 안전하게 열립니다.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <ExternalLinkIcon className="size-4" />
        </ItemActions>
      </Item>
    </div>
  )
}

export function Dropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        선택 <ChevronDownIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48" align="end">
        <DropdownMenuGroup>
          {people.map((person) => (
            <DropdownMenuItem key={person.username}>
              <Item size="xs" className="w-full p-2">
                <ItemMedia>
                  <Avatar className="size-[--spacing(6.5)]">
                    <AvatarImage src={person.avatar} className="grayscale" />
                    <AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
                  </Avatar>
                </ItemMedia>
                <ItemContent className="gap-0">
                  <ItemTitle>{person.username}</ItemTitle>
                  <ItemDescription className="leading-none">{person.email}</ItemDescription>
                </ItemContent>
              </Item>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function Rtl() {
  return (
    <div dir="rtl" className="flex w-full max-w-md flex-col gap-3">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <ShieldAlertIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>تنبيه أمني</ItemTitle>
          <ItemDescription>تم اكتشاف تسجيل دخول جديد من جهاز غير معروف.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            مراجعة
          </Button>
        </ItemActions>
      </Item>
      <p className="text-xs text-muted-foreground">아이콘·글자·버튼 순서가 오른쪽에서 왼쪽으로 뒤집힙니다.</p>
    </div>
  )
}
