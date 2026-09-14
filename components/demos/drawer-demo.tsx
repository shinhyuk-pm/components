"use client"

import * as React from "react"
import { CheckIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"

function useMediaQuery(query: string) {
  return React.useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query)
      mql.addEventListener("change", onChange)
      return () => mql.removeEventListener("change", onChange)
    },
    () => window.matchMedia(query).matches,
    () => false
  )
}

const deliveryTimes = [
  { value: "asap", label: "바로 배달", description: "25–35분 · 기사 배정 완료", badge: "가장 빠름" },
  { value: "17:00", label: "오후 5:00 – 5:15", description: "4:45부터 조리 시작" },
  { value: "17:30", label: "오후 5:30 – 5:45", description: "퇴근길에 받기 좋아요" },
  { value: "18:00", label: "오후 6:00 – 6:15", description: "가장 인기 · 주문 몰림" },
  { value: "18:30", label: "오후 6:30 – 6:45", description: "마감 전 마지막 시간대" },
]

const placeholderBox =
  "rounded-2xl bg-muted group-data-[swipe-axis=x]/drawer-popup:size-full group-data-[swipe-axis=y]/drawer-popup:h-80 group-data-[swipe-axis=y]/drawer-popup:w-full"

export function Basic() {
  const [deliveryTime, setDeliveryTime] = React.useState("asap")
  const isDesktop = useMediaQuery("(min-width: 768px)")

  return (
    <Drawer showSwipeHandle={!isDesktop} swipeDirection={isDesktop ? "right" : "down"}>
      <DrawerTrigger render={<Button variant="secondary" />}>드로어 열기</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>배달 시간 선택</DrawerTitle>
          <DrawerDescription>가능한 한 빨리 준비해 드립니다.</DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-1 flex-col gap-2 overflow-y-auto p-4">
          {deliveryTimes.map((time) => {
            const selected = time.value === deliveryTime
            return (
              <button
                key={time.value}
                type="button"
                onClick={() => setDeliveryTime(time.value)}
                aria-pressed={selected}
                className="flex items-center justify-between rounded-lg border p-3 text-left transition-colors hover:bg-muted aria-pressed:border-primary"
              >
                <div className="flex flex-col gap-0.5">
                  <span className="flex items-center gap-2 text-sm font-medium">
                    {time.label}
                    {time.badge && <Badge variant="secondary">{time.badge}</Badge>}
                  </span>
                  <span className="text-xs text-muted-foreground">{time.description}</span>
                </div>
                {selected && <CheckIcon className="size-4 text-primary" />}
              </button>
            )
          })}
        </div>
        <DrawerFooter>
          <DrawerClose render={<Button />}>배달 시간 확정</DrawerClose>
          <DrawerClose render={<Button variant="outline" />}>취소</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export function Sides() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {(["down", "up", "left", "right"] as const).map((direction) => (
        <Drawer key={direction} swipeDirection={direction}>
          <DrawerTrigger render={<Button variant="secondary" />}>
            {{ down: "아래", up: "위", left: "왼쪽", right: "오른쪽" }[direction]}
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>목표 설정</DrawerTitle>
              <DrawerDescription>하루 활동 목표를 정하세요.</DrawerDescription>
            </DrawerHeader>
            <div className="flex-1 p-4">
              <div className={placeholderBox} />
            </div>
            <DrawerFooter>
              <DrawerClose render={<Button />}>닫기</DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  )
}

export function SwipeHandle() {
  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger render={<Button variant="secondary" />}>드로어 열기</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>드로어</DrawerTitle>
          <DrawerDescription>위쪽 손잡이를 끌어내려 닫을 수 있습니다.</DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 p-4">
          <div className={placeholderBox} />
        </div>
        <DrawerFooter>
          <DrawerClose render={<Button />}>닫기</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function NestedLevel({ level }: { level: number }) {
  const titles = ["드로어", "두 번째 드로어", "세 번째 드로어"]
  const descriptions = [
    "같은 방향으로 드로어를 하나 더 엽니다.",
    "앞의 드로어는 뒤에 그대로 남아 있습니다.",
    "가장 앞에 있는 드로어입니다.",
  ]

  return (
    <Drawer>
      <DrawerTrigger render={<Button variant={level === 0 ? "secondary" : "outline"} />}>
        {level === 0 ? "드로어 열기" : "안쪽 드로어 열기"}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{titles[level]}</DrawerTitle>
          <DrawerDescription>{descriptions[level]}</DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 p-4">
          <div className="aspect-video w-full rounded-2xl bg-muted" />
        </div>
        <DrawerFooter>
          {level < 2 && <NestedLevel level={level + 1} />}
          <DrawerClose render={<Button variant="outline" />}>닫기</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export function Nested() {
  return <NestedLevel level={0} />
}

export function NonModal() {
  return (
    <Drawer modal={false} disablePointerDismissal swipeDirection="right">
      <DrawerTrigger render={<Button variant="outline" />}>비모달 드로어</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>비모달 드로어</DrawerTitle>
          <DrawerDescription>열린 상태에서도 뒤쪽 화면을 그대로 조작할 수 있습니다.</DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 p-4">
          <div className={placeholderBox} />
        </div>
        <DrawerFooter>
          <DrawerClose render={<Button />}>닫기</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

const snapPoints = ["31rem", 1]

export function SnapPoints() {
  return (
    <Drawer snapPoints={snapPoints} showSwipeHandle>
      <DrawerTrigger render={<Button variant="outline" />}>스냅 드로어 열기</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>스냅 포인트</DrawerTitle>
          <DrawerDescription>
            드로어를 끌면 살짝 열린 높이와 거의 꽉 찬 높이 사이에서 착 붙습니다.
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 p-4">
          <div className={placeholderBox} />
        </div>
        <DrawerFooter>
          <DrawerClose render={<Button />}>닫기</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function ProfileForm({ className }: { className?: string }) {
  return (
    <form className={`grid items-start gap-4 ${className ?? ""}`}>
      <div className="grid gap-2">
        <label htmlFor="drawer-email" className="text-sm font-medium">
          이메일
        </label>
        <Input type="email" id="drawer-email" defaultValue="shadcn@example.com" />
      </div>
      <div className="grid gap-2">
        <label htmlFor="drawer-username" className="text-sm font-medium">
          아이디
        </label>
        <Input id="drawer-username" defaultValue="@shadcn" />
      </div>
      <Button type="button">저장</Button>
    </form>
  )
}

export function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger render={<Button variant="outline" />}>프로필 수정</DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>프로필 수정</DialogTitle>
            <DialogDescription>
              큰 화면에서는 가운데 창(Dialog)으로, 작은 화면에서는 아래 드로어로 열립니다.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger render={<Button variant="outline" />}>프로필 수정</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>프로필 수정</DrawerTitle>
          <DrawerDescription>
            큰 화면에서는 가운데 창(Dialog)으로, 작은 화면에서는 아래 드로어로 열립니다.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="p-4" />
      </DrawerContent>
    </Drawer>
  )
}
