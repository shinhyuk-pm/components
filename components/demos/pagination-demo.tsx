"use client"

import * as React from "react"

import { Field, FieldLabel } from "@/components/ui/field"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function usePage(total: number, initial = 2) {
  const [page, setPage] = React.useState(initial)
  const go = (n: number) => (e: React.MouseEvent) => {
    e.preventDefault()
    setPage(Math.min(total, Math.max(1, n)))
  }
  return { page, go }
}

export function Basic() {
  const { page, go } = usePage(10)

  return (
    <div className="flex flex-col items-center gap-3">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" onClick={go(page - 1)} />
          </PaginationItem>
          {[1, 2, 3].map((n) => (
            <PaginationItem key={n}>
              <PaginationLink href="#" isActive={page === n} onClick={go(n)}>
                {n}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" onClick={go(page + 1)} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <p className="text-xs text-muted-foreground" data-testid="page-status">
        현재 {page}페이지 / 전체 10페이지
      </p>
    </div>
  )
}

export function Simple() {
  const { page, go } = usePage(5)

  return (
    <Pagination>
      <PaginationContent>
        {[1, 2, 3, 4, 5].map((n) => (
          <PaginationItem key={n}>
            <PaginationLink href="#" isActive={page === n} onClick={go(n)}>
              {n}
            </PaginationLink>
          </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  )
}

export function IconsOnly() {
  const { page, go } = usePage(4, 1)

  return (
    <div className="flex w-full max-w-md items-center justify-between gap-4">
      <Field orientation="horizontal" className="w-fit">
        <FieldLabel htmlFor="pagination-rows">페이지당 행 수</FieldLabel>
        <Select defaultValue="25">
          <SelectTrigger className="w-20" id="pagination-rows">
            <SelectValue />
          </SelectTrigger>
          <SelectContent align="start">
            <SelectGroup>
              {["10", "25", "50", "100"].map((v) => (
                <SelectItem key={v} value={v}>
                  {v}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground" data-testid="page-status">
          {page} / 4
        </span>
        <Pagination className="mx-0 w-auto">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" onClick={go(page - 1)} />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" onClick={go(page + 1)} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}

export function Rtl() {
  const { page, go } = usePage(10)

  return (
    <div dir="rtl" className="flex flex-col items-center gap-3">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" onClick={go(page - 1)} />
          </PaginationItem>
          {[1, 2, 3].map((n) => (
            <PaginationItem key={n}>
              <PaginationLink href="#" isActive={page === n} onClick={go(n)}>
                {n}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" onClick={go(page + 1)} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <p className="text-xs text-muted-foreground">이전·다음 화살표와 숫자 순서가 오른쪽에서 왼쪽으로 뒤집힙니다.</p>
    </div>
  )
}
