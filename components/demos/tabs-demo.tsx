"use client"

import { BellIcon, CreditCardIcon, UserIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Basic() {
  return (
    <Tabs defaultValue="account" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="account">계정</TabsTrigger>
        <TabsTrigger value="password">비밀번호</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>계정</CardTitle>
            <CardDescription>이름과 아이디를 바꿉니다.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Field>
              <FieldLabel htmlFor="tabs-name">이름</FieldLabel>
              <Input id="tabs-name" defaultValue="김한빛" />
            </Field>
            <Field>
              <FieldLabel htmlFor="tabs-username">아이디</FieldLabel>
              <Input id="tabs-username" defaultValue="hanbit" />
            </Field>
          </CardContent>
          <CardFooter>
            <Button size="sm">저장</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>비밀번호</CardTitle>
            <CardDescription>
              바꾸고 나면 다시 로그인해야 합니다.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Field>
              <FieldLabel htmlFor="tabs-current">현재 비밀번호</FieldLabel>
              <Input id="tabs-current" type="password" />
            </Field>
            <Field>
              <FieldLabel htmlFor="tabs-new">새 비밀번호</FieldLabel>
              <Input id="tabs-new" type="password" />
            </Field>
          </CardContent>
          <CardFooter>
            <Button size="sm">변경</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

export function Line() {
  return (
    <Tabs defaultValue="all" className="w-full max-w-sm">
      <TabsList variant="line">
        <TabsTrigger value="all">전체</TabsTrigger>
        <TabsTrigger value="ongoing">진행중</TabsTrigger>
        <TabsTrigger value="done">완료</TabsTrigger>
      </TabsList>
      <TabsContent value="all" className="text-sm text-muted-foreground">
        전체 주문 24건을 보여 줍니다.
      </TabsContent>
      <TabsContent value="ongoing" className="text-sm text-muted-foreground">
        아직 배송 중인 주문 5건입니다.
      </TabsContent>
      <TabsContent value="done" className="text-sm text-muted-foreground">
        배송이 끝난 주문 19건입니다.
      </TabsContent>
    </Tabs>
  )
}

export function Vertical() {
  return (
    <Tabs
      defaultValue="profile"
      orientation="vertical"
      className="w-full max-w-md"
    >
      <TabsList>
        <TabsTrigger value="profile">프로필</TabsTrigger>
        <TabsTrigger value="billing">결제</TabsTrigger>
        <TabsTrigger value="alerts">알림</TabsTrigger>
      </TabsList>
      <TabsContent value="profile" className="text-sm text-muted-foreground">
        이름·사진·소개를 관리합니다.
      </TabsContent>
      <TabsContent value="billing" className="text-sm text-muted-foreground">
        결제 수단과 청구 내역을 봅니다.
      </TabsContent>
      <TabsContent value="alerts" className="text-sm text-muted-foreground">
        어떤 알림을 받을지 정합니다.
      </TabsContent>
    </Tabs>
  )
}

export function Disabled() {
  return (
    <Tabs defaultValue="basic" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="basic">기본 정보</TabsTrigger>
        <TabsTrigger value="payment" disabled>
          결제 (권한 없음)
        </TabsTrigger>
        <TabsTrigger value="history">이력</TabsTrigger>
      </TabsList>
      <TabsContent value="basic" className="text-sm text-muted-foreground">
        누를 수 없는 탭은 흐리게 보이고 키보드로도 건너뜁니다.
      </TabsContent>
      <TabsContent value="history" className="text-sm text-muted-foreground">
        최근 변경 내역입니다.
      </TabsContent>
    </Tabs>
  )
}

export function Icons() {
  return (
    <Tabs defaultValue="account" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="account">
          <UserIcon />
          계정
        </TabsTrigger>
        <TabsTrigger value="billing">
          <CreditCardIcon />
          결제
        </TabsTrigger>
        <TabsTrigger value="alerts">
          <BellIcon />
          알림
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="text-sm text-muted-foreground">
        아이콘을 함께 두면 좁은 화면에서도 알아보기 쉽습니다.
      </TabsContent>
      <TabsContent value="billing" className="text-sm text-muted-foreground">
        결제 수단을 관리합니다.
      </TabsContent>
      <TabsContent value="alerts" className="text-sm text-muted-foreground">
        알림 설정을 바꿉니다.
      </TabsContent>
    </Tabs>
  )
}
