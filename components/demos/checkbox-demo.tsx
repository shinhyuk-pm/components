"use client"

import * as React from "react"

import { Checkbox } from "@/components/ui/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function Basic() {
  const [checked, setChecked] = React.useState(true)

  return (
    <div className="flex flex-col gap-3">
      <label className="flex items-center gap-2 text-sm">
        <Checkbox checked={checked} onCheckedChange={setChecked} />
        이용약관에 동의합니다
      </label>
      <label className="flex items-center gap-2 text-sm">
        <Checkbox defaultChecked />
        마케팅 정보 수신에 동의합니다
      </label>
    </div>
  )
}

export function WithDescription() {
  return (
    <label className="flex w-full max-w-sm items-start gap-3 rounded-lg border p-3 text-sm">
      <Checkbox defaultChecked className="mt-0.5" />
      <span>
        <span className="block font-medium">주간 요약 메일 받기</span>
        <span className="mt-0.5 block text-muted-foreground">
          매주 월요일 아침에 지난주 활동 요약을 보내드립니다.
        </span>
      </span>
    </label>
  )
}

export function Disabled() {
  return (
    <div className="flex flex-col gap-3 text-muted-foreground">
      <label className="flex items-center gap-2 text-sm">
        <Checkbox disabled />
        선택할 수 없는 항목
      </label>
      <label className="flex items-center gap-2 text-sm">
        <Checkbox disabled defaultChecked />
        이미 적용되어 바꿀 수 없는 항목
      </label>
    </div>
  )
}

const OPTIONS = ["이메일", "문자", "앱 푸시"]

export function Group() {
  const [selected, setSelected] = React.useState<string[]>(["이메일"])

  const allChecked = selected.length === OPTIONS.length
  const someChecked = selected.length > 0 && !allChecked

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <label className="flex items-center gap-2 text-sm font-medium">
        <Checkbox
          checked={allChecked}
          indeterminate={someChecked}
          onCheckedChange={(value) => setSelected(value ? [...OPTIONS] : [])}
        />
        전체 선택
      </label>
      <div className="flex flex-col gap-2 pl-6">
        {OPTIONS.map((option) => (
          <label key={option} className="flex items-center gap-2 text-sm">
            <Checkbox
              checked={selected.includes(option)}
              onCheckedChange={(value) =>
                setSelected((prev) =>
                  value ? [...prev, option] : prev.filter((o) => o !== option)
                )
              }
            />
            {option}
          </label>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">
        선택됨: {selected.length === 0 ? "없음" : selected.join(", ")}
      </p>
    </div>
  )
}

const ROWS = [
  { id: "1", name: "김서연", role: "디자이너" },
  { id: "2", name: "박지훈", role: "개발자" },
  { id: "3", name: "이하늘", role: "기획자" },
]

export function InTable() {
  const [selected, setSelected] = React.useState<string[]>(["2"])
  const allChecked = selected.length === ROWS.length

  return (
    <div className="w-full max-w-md overflow-hidden rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10">
              <Checkbox
                checked={allChecked}
                indeterminate={selected.length > 0 && !allChecked}
                onCheckedChange={(value) =>
                  setSelected(value ? ROWS.map((r) => r.id) : [])
                }
                aria-label="전체 선택"
              />
            </TableHead>
            <TableHead>이름</TableHead>
            <TableHead>역할</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ROWS.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <Checkbox
                  checked={selected.includes(row.id)}
                  onCheckedChange={(value) =>
                    setSelected((prev) =>
                      value ? [...prev, row.id] : prev.filter((id) => id !== row.id)
                    )
                  }
                  aria-label={`${row.name} 선택`}
                />
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell className="text-muted-foreground">{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
