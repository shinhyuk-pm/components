"use client"

import * as React from "react"
import { RotateCcwIcon, SearchIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  FilterBar,
  FilterBarActions,
  FilterBarField,
  FilterBarLabel,
  FilterBarRow,
} from "@/components/ui/filter-bar"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const statuses = [
  { label: "전체", value: "all" },
  { label: "가입 완료", value: "done" },
  { label: "심사 중", value: "review" },
  { label: "반려", value: "rejected" },
]

function StatusSelect({ id }: { id: string }) {
  return (
    <Select items={statuses} defaultValue="all">
      <SelectTrigger id={id} className="w-full">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {statuses.map((s) => (
            <SelectItem key={s.value} value={s.value}>
              {s.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export function Basic() {
  return (
    <FilterBar
      className="w-full max-w-2xl"
      onSubmit={(e) => e.preventDefault()}
    >
      <FilterBarRow>
        <FilterBarField>
          <FilterBarLabel>계정 상태</FilterBarLabel>
          <StatusSelect id="fb-basic-status" />
        </FilterBarField>
        <FilterBarField className="lg:col-span-2">
          <FilterBarLabel>통합 검색</FilterBarLabel>
          <InputGroup>
            <InputGroupInput placeholder="이름·사번·이메일로 검색" />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
        </FilterBarField>
      </FilterBarRow>
      <FilterBarActions>
        <Button type="reset" variant="ghost" size="sm">
          <RotateCcwIcon />
          초기화
        </Button>
        <Button type="submit" size="sm">
          검색
        </Button>
      </FilterBarActions>
    </FilterBar>
  )
}

export function DateRange() {
  return (
    <FilterBar
      className="w-full max-w-2xl"
      onSubmit={(e) => e.preventDefault()}
    >
      <FilterBarRow>
        <FilterBarField className="sm:col-span-2">
          <FilterBarLabel>계정 등록일자</FilterBarLabel>
          <div className="flex items-center gap-2">
            <Input
              type="date"
              defaultValue="2026-09-01"
              aria-label="시작일"
              className="min-w-0 flex-1"
            />
            <span className="text-sm text-muted-foreground">~</span>
            <Input
              type="date"
              defaultValue="2026-09-15"
              aria-label="종료일"
              className="min-w-0 flex-1"
            />
          </div>
        </FilterBarField>
        <FilterBarField>
          <FilterBarLabel>계정 상태</FilterBarLabel>
          <StatusSelect id="fb-range-status" />
        </FilterBarField>
      </FilterBarRow>
      <FilterBarActions>
        <Button type="reset" variant="ghost" size="sm">
          <RotateCcwIcon />
          초기화
        </Button>
        <Button type="submit" size="sm">
          검색
        </Button>
      </FilterBarActions>
    </FilterBar>
  )
}

export function WithCheckboxes() {
  return (
    <FilterBar
      className="w-full max-w-2xl"
      onSubmit={(e) => e.preventDefault()}
    >
      <FilterBarRow>
        <FilterBarField>
          <FilterBarLabel>계정 상태</FilterBarLabel>
          <StatusSelect id="fb-chk-status" />
        </FilterBarField>
        <FilterBarField className="sm:col-span-2">
          <FilterBarLabel>가입 유형</FilterBarLabel>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 py-1.5">
            {["본인", "배우자", "자녀", "부모"].map((t) => (
              <label key={t} className="flex items-center gap-2 text-sm">
                <Checkbox defaultChecked={t === "본인"} />
                {t}
              </label>
            ))}
          </div>
        </FilterBarField>
      </FilterBarRow>
      <FilterBarActions>
        <Button type="reset" variant="ghost" size="sm">
          <RotateCcwIcon />
          초기화
        </Button>
        <Button type="submit" size="sm">
          검색
        </Button>
      </FilterBarActions>
    </FilterBar>
  )
}

export function AppliedFilters() {
  const [chips, setChips] = React.useState([
    "가입 완료",
    "2026-09-01 ~ 2026-09-15",
    "본인",
  ])

  return (
    <div className="flex w-full max-w-2xl flex-col gap-3">
      <FilterBar onSubmit={(e) => e.preventDefault()}>
        <FilterBarRow>
          <FilterBarField>
            <FilterBarLabel>계정 상태</FilterBarLabel>
            <StatusSelect id="fb-applied-status" />
          </FilterBarField>
          <FilterBarField className="lg:col-span-2">
            <FilterBarLabel>통합 검색</FilterBarLabel>
            <InputGroup>
              <InputGroupInput placeholder="이름·사번·이메일로 검색" />
              <InputGroupAddon>
                <SearchIcon />
              </InputGroupAddon>
            </InputGroup>
          </FilterBarField>
        </FilterBarRow>
        <FilterBarActions>
          <Button type="reset" variant="ghost" size="sm">
            <RotateCcwIcon />
            초기화
          </Button>
          <Button type="submit" size="sm">
            검색
          </Button>
        </FilterBarActions>
      </FilterBar>
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs text-muted-foreground">적용된 조건</span>
        {chips.length === 0 ? (
          <span className="text-xs text-muted-foreground">없음</span>
        ) : (
          chips.map((chip) => (
            <Badge key={chip} variant="secondary" className="gap-1">
              {chip}
              <button
                type="button"
                aria-label={`${chip} 조건 지우기`}
                className="text-muted-foreground hover:text-foreground"
                onClick={() =>
                  setChips((prev) => prev.filter((c) => c !== chip))
                }
              >
                ×
              </button>
            </Badge>
          ))
        )}
      </div>
    </div>
  )
}
