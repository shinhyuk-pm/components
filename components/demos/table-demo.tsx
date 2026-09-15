"use client"

import { SearchXIcon } from "lucide-react"

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
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  {
    id: "INV001",
    status: "결제 완료",
    method: "신용카드",
    amount: "250,000원",
  },
  { id: "INV002", status: "미결제", method: "계좌이체", amount: "150,000원" },
  { id: "INV003", status: "환불", method: "간편결제", amount: "350,000원" },
  {
    id: "INV004",
    status: "결제 완료",
    method: "신용카드",
    amount: "450,000원",
  },
  {
    id: "INV005",
    status: "결제 완료",
    method: "간편결제",
    amount: "550,000원",
  },
]

export function Basic() {
  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableCaption>최근 청구 내역입니다.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-28">청구번호</TableHead>
            <TableHead>상태</TableHead>
            <TableHead>결제 수단</TableHead>
            <TableHead className="text-right">금액</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.id}</TableCell>
              <TableCell>{invoice.status}</TableCell>
              <TableCell>{invoice.method}</TableCell>
              <TableCell className="text-right tabular-nums">
                {invoice.amount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export function Footer() {
  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-28">청구번호</TableHead>
            <TableHead>상태</TableHead>
            <TableHead>결제 수단</TableHead>
            <TableHead className="text-right">금액</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.id}</TableCell>
              <TableCell>{invoice.status}</TableCell>
              <TableCell>{invoice.method}</TableCell>
              <TableCell className="text-right tabular-nums">
                {invoice.amount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>합계</TableCell>
            <TableCell className="text-right tabular-nums">
              1,750,000원
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}

export function EmptyState() {
  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-28">청구번호</TableHead>
            <TableHead>상태</TableHead>
            <TableHead>결제 수단</TableHead>
            <TableHead className="text-right">금액</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="hover:bg-transparent">
            <TableCell colSpan={4} className="h-40 p-0">
              <Empty className="border-0 bg-transparent">
                <EmptyHeader>
                  <EmptyMedia variant="icon">
                    <SearchXIcon />
                  </EmptyMedia>
                  <EmptyTitle>검색 결과가 없습니다</EmptyTitle>
                  <EmptyDescription>
                    조건을 바꾸거나 검색어를 지우고 다시 찾아 보세요.
                  </EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                  <Button variant="outline" size="sm">
                    검색 조건 초기화
                  </Button>
                </EmptyContent>
              </Empty>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
