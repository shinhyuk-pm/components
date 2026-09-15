"use client"

import { DownloadIcon, PlusIcon, SettingsIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  PageHeader,
  PageHeaderActions,
  PageHeaderContent,
  PageHeaderDescription,
  PageHeaderTitle,
} from "@/components/ui/page-header"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Basic() {
  return (
    <PageHeader className="w-full max-w-2xl">
      <PageHeaderContent>
        <PageHeaderTitle>피보험자 관리</PageHeaderTitle>
        <PageHeaderDescription>
          고객사 직원과 가족의 명부를 등록하고 관리합니다.
        </PageHeaderDescription>
      </PageHeaderContent>
    </PageHeader>
  )
}

export function WithActions() {
  return (
    <PageHeader className="w-full max-w-2xl">
      <PageHeaderContent>
        <PageHeaderTitle>피보험자 관리</PageHeaderTitle>
        <PageHeaderDescription>
          검색 결과 30건 · 마지막 갱신 2026년 9월 15일
        </PageHeaderDescription>
      </PageHeaderContent>
      <PageHeaderActions>
        <Button variant="outline" size="sm">
          <DownloadIcon />
          엑셀 내려받기
        </Button>
        <Button size="sm">
          <PlusIcon />
          피보험자 등록
        </Button>
      </PageHeaderActions>
    </PageHeader>
  )
}

export function WithBadge() {
  return (
    <PageHeader className="w-full max-w-2xl">
      <PageHeaderContent>
        <PageHeaderTitle>
          한빛엔지니어링
          <Badge className="bg-emerald-500/15 text-emerald-700 dark:text-emerald-300">
            계약 중
          </Badge>
        </PageHeaderTitle>
        <PageHeaderDescription>
          고객사 코드 HBE001 · 가입 인원 128명
        </PageHeaderDescription>
      </PageHeaderContent>
      <PageHeaderActions>
        <Button variant="outline" size="sm">
          <SettingsIcon />
          설정
        </Button>
      </PageHeaderActions>
    </PageHeader>
  )
}

export function WithBreadcrumb() {
  return (
    <div className="flex w-full max-w-2xl flex-col gap-3">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#with-breadcrumb">회원 관리</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>피보험자 관리</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <PageHeader>
        <PageHeaderContent>
          <PageHeaderTitle>피보험자 관리</PageHeaderTitle>
          <PageHeaderDescription>
            위쪽에 현재 위치를 함께 보여 줍니다.
          </PageHeaderDescription>
        </PageHeaderContent>
        <PageHeaderActions>
          <Button size="sm">
            <PlusIcon />
            등록
          </Button>
        </PageHeaderActions>
      </PageHeader>
    </div>
  )
}

export function WithTabs() {
  return (
    <div className="flex w-full max-w-2xl flex-col gap-4">
      <PageHeader className="border-b-0 pb-0">
        <PageHeaderContent>
          <PageHeaderTitle>정산 관리</PageHeaderTitle>
          <PageHeaderDescription>
            머리글 아래에 탭을 이어 붙여 하위 화면을 나눕니다.
          </PageHeaderDescription>
        </PageHeaderContent>
        <PageHeaderActions>
          <Button variant="outline" size="sm">
            <DownloadIcon />
            내려받기
          </Button>
        </PageHeaderActions>
      </PageHeader>
      <Tabs defaultValue="list">
        <TabsList variant="line">
          <TabsTrigger value="list">정산 내역</TabsTrigger>
          <TabsTrigger value="statement">명세서</TabsTrigger>
          <TabsTrigger value="tax">세금계산서</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}
