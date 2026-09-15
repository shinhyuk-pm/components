"use client"

import {
  BoxIcon,
  CreditCardIcon,
  ShoppingCartIcon,
  UsersIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Spinner } from "@/components/ui/spinner"
import {
  StatCard,
  StatCardDelta,
  StatCardFooter,
  StatCardGroup,
  StatCardLabel,
  StatCardValue,
} from "@/components/ui/stat-card"

export function Basic() {
  return (
    <StatCard className="w-full max-w-56">
      <StatCardLabel>이번 달 주문</StatCardLabel>
      <StatCardValue>1,284</StatCardValue>
      <StatCardDelta direction="up">전월 대비 12.5%</StatCardDelta>
    </StatCard>
  )
}

export function Group() {
  const items = [
    {
      label: "이번 달 주문",
      icon: <ShoppingCartIcon />,
      value: "1,284",
      delta: "12.5%",
      direction: "up" as const,
    },
    {
      label: "신규 회원",
      icon: <UsersIcon />,
      value: "312",
      delta: "3.1%",
      direction: "down" as const,
    },
    {
      label: "매출",
      icon: <CreditCardIcon />,
      value: "48,200,000원",
      delta: "8.4%",
      direction: "up" as const,
    },
    {
      label: "대여 중 상품",
      icon: <BoxIcon />,
      value: "96",
      delta: "변동 없음",
      direction: "flat" as const,
    },
  ]

  return (
    <StatCardGroup className="w-full">
      {items.map((item) => (
        <StatCard key={item.label}>
          <StatCardLabel>
            {item.icon}
            {item.label}
          </StatCardLabel>
          <StatCardValue>{item.value}</StatCardValue>
          <StatCardDelta direction={item.direction}>
            {item.direction === "flat" ? item.delta : `전월 대비 ${item.delta}`}
          </StatCardDelta>
        </StatCard>
      ))}
    </StatCardGroup>
  )
}

export function WithFooter() {
  return (
    <StatCardGroup className="w-full sm:grid-cols-2 lg:grid-cols-2">
      <StatCard>
        <StatCardLabel>정산 대기</StatCardLabel>
        <StatCardValue>5건</StatCardValue>
        <StatCardDelta direction="up">어제보다 2건 늘었습니다</StatCardDelta>
        <StatCardFooter>기준 2026년 9월 15일 오전 9시</StatCardFooter>
      </StatCard>
      <StatCard>
        <StatCardLabel>반품 요청</StatCardLabel>
        <StatCardValue>3건</StatCardValue>
        <StatCardDelta direction="down">어제보다 1건 줄었습니다</StatCardDelta>
        <StatCardFooter>기준 2026년 9월 15일 오전 9시</StatCardFooter>
      </StatCard>
    </StatCardGroup>
  )
}

export function WithProgress() {
  return (
    <StatCard className="w-full max-w-64">
      <StatCardLabel>이번 달 목표 달성률</StatCardLabel>
      <StatCardValue>68%</StatCardValue>
      <Progress value={68} className="mt-1" />
      <StatCardFooter>목표 5,000만원 중 3,400만원</StatCardFooter>
    </StatCard>
  )
}

export function WithAction() {
  return (
    <StatCard className="w-full max-w-64">
      <StatCardLabel>입점 심사 대기</StatCardLabel>
      <StatCardValue>8건</StatCardValue>
      <StatCardDelta direction="up">이번 주 5건 접수</StatCardDelta>
      <Button variant="outline" size="sm" className="mt-2 w-fit">
        심사하러 가기
      </Button>
    </StatCard>
  )
}

export function Loading() {
  return (
    <StatCardGroup className="w-full sm:grid-cols-2 lg:grid-cols-2">
      <StatCard>
        <StatCardLabel>이번 달 주문</StatCardLabel>
        <StatCardValue className="flex items-center gap-2 text-muted-foreground">
          <Spinner />
          <span className="text-base font-normal">불러오는 중</span>
        </StatCardValue>
      </StatCard>
      <StatCard>
        <StatCardLabel>매출</StatCardLabel>
        <StatCardValue className="flex items-center gap-2 text-muted-foreground">
          <Spinner />
          <span className="text-base font-normal">불러오는 중</span>
        </StatCardValue>
      </StatCard>
    </StatCardGroup>
  )
}
