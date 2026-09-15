"use client"

import { Badge } from "@/components/ui/badge"
import {
  DescriptionList,
  DescriptionListDetail,
  DescriptionListItem,
  DescriptionListTerm,
} from "@/components/ui/description-list"

const rows = [
  { term: "그룹사", detail: "한빛그룹" },
  { term: "고객사 코드", detail: "HBE001" },
  { term: "기업명", detail: "한빛엔지니어링" },
  { term: "사업자등록번호", detail: "123-45-67890" },
  { term: "대표자", detail: "김한빛" },
  { term: "가입일", detail: "2024년 3월 12일" },
]

export function Basic() {
  return (
    <DescriptionList className="w-full max-w-sm">
      {rows.slice(0, 3).map((row) => (
        <DescriptionListItem key={row.term}>
          <DescriptionListTerm>{row.term}</DescriptionListTerm>
          <DescriptionListDetail>{row.detail}</DescriptionListDetail>
        </DescriptionListItem>
      ))}
    </DescriptionList>
  )
}

export function Columns() {
  return (
    <DescriptionList columns={3} className="w-full max-w-xl">
      {rows.map((row) => (
        <DescriptionListItem key={row.term}>
          <DescriptionListTerm>{row.term}</DescriptionListTerm>
          <DescriptionListDetail>{row.detail}</DescriptionListDetail>
        </DescriptionListItem>
      ))}
    </DescriptionList>
  )
}

export function Inline() {
  return (
    <DescriptionList variant="inline" className="w-full max-w-sm">
      {rows.slice(0, 4).map((row) => (
        <DescriptionListItem key={row.term}>
          <DescriptionListTerm>{row.term}</DescriptionListTerm>
          <DescriptionListDetail>{row.detail}</DescriptionListDetail>
        </DescriptionListItem>
      ))}
    </DescriptionList>
  )
}

export function Divided() {
  return (
    <DescriptionList variant="divided" className="w-full max-w-sm">
      {rows.slice(0, 4).map((row) => (
        <DescriptionListItem key={row.term}>
          <DescriptionListTerm>{row.term}</DescriptionListTerm>
          <DescriptionListDetail>{row.detail}</DescriptionListDetail>
        </DescriptionListItem>
      ))}
    </DescriptionList>
  )
}

export function RichValue() {
  return (
    <DescriptionList variant="divided" className="w-full max-w-sm">
      <DescriptionListItem>
        <DescriptionListTerm>계정 상태</DescriptionListTerm>
        <DescriptionListDetail>
          <Badge className="bg-emerald-500/15 text-emerald-700 dark:text-emerald-300">
            가입 완료
          </Badge>
        </DescriptionListDetail>
      </DescriptionListItem>
      <DescriptionListItem>
        <DescriptionListTerm>담당자 이메일</DescriptionListTerm>
        <DescriptionListDetail>
          <a
            href="#rich-value"
            className="underline underline-offset-3 hover:text-foreground"
          >
            insured01@hanbit.example
          </a>
        </DescriptionListDetail>
      </DescriptionListItem>
      <DescriptionListItem>
        <DescriptionListTerm>메모</DescriptionListTerm>
        <DescriptionListDetail>
          값이 길어지면 줄이 바뀌고 이름표는 위쪽에 붙은 채로 유지됩니다.
        </DescriptionListDetail>
      </DescriptionListItem>
    </DescriptionList>
  )
}
