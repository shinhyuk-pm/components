"use client"

import * as React from "react"
import { addDays, format } from "date-fns"
import { ko } from "date-fns/locale"
import { CalendarIcon } from "lucide-react"
import type { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function Basic() {
  const [date, setDate] = React.useState<Date | undefined>()

  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            variant="outline"
            className={cn(
              "w-[260px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {date ? format(date, "PPP", { locale: ko }) : "날짜를 선택하세요"}
          </Button>
        }
      />
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          locale={ko}
        />
      </PopoverContent>
    </Popover>
  )
}

export function Range() {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 6),
  })

  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            variant="outline"
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !range?.from && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {range?.from ? (
              range.to ? (
                <>
                  {format(range.from, "PPP", { locale: ko })} –{" "}
                  {format(range.to, "PPP", { locale: ko })}
                </>
              ) : (
                format(range.from, "PPP", { locale: ko })
              )
            ) : (
              "기간을 선택하세요"
            )}
          </Button>
        }
      />
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="range"
          selected={range}
          onSelect={setRange}
          numberOfMonths={2}
          locale={ko}
        />
      </PopoverContent>
    </Popover>
  )
}

export function DateOfBirth() {
  const [date, setDate] = React.useState<Date | undefined>()

  return (
    <div className="flex w-[260px] flex-col gap-2">
      <span className="text-sm font-medium">생년월일</span>
      <Popover>
        <PopoverTrigger
          render={
            <Button
              variant="outline"
              className={cn(
                "justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon />
              {date ? format(date, "PPP", { locale: ko }) : "생년월일 선택"}
            </Button>
          }
        />
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            captionLayout="dropdown"
            startMonth={new Date(1930, 0)}
            endMonth={new Date()}
            locale={ko}
          />
        </PopoverContent>
      </Popover>
      <span className="text-xs text-muted-foreground">
        상단 연도·월 목록으로 먼 과거도 빠르게 이동할 수 있습니다.
      </span>
    </div>
  )
}

const PRESETS = [
  { label: "오늘", days: 0 },
  { label: "내일", days: 1 },
  { label: "일주일 뒤", days: 7 },
  { label: "한 달 뒤", days: 30 },
]

export function WithPresets() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            variant="outline"
            className={cn(
              "w-[260px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {date ? format(date, "PPP", { locale: ko }) : "날짜를 선택하세요"}
          </Button>
        }
      />
      <PopoverContent className="flex w-auto flex-col gap-2 p-2" align="start">
        <div className="flex flex-wrap gap-1">
          {PRESETS.map((preset) => (
            <Button
              key={preset.label}
              variant="outline"
              size="xs"
              onClick={() => setDate(addDays(new Date(), preset.days))}
            >
              {preset.label}
            </Button>
          ))}
        </div>
        <div className="rounded-md border">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            locale={ko}
          />
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function Disabled() {
  const [date, setDate] = React.useState<Date | undefined>()

  return (
    <div className="flex w-[260px] flex-col gap-2">
      <Popover>
        <PopoverTrigger
          render={
            <Button
              variant="outline"
              className={cn(
                "justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon />
              {date ? format(date, "PPP", { locale: ko }) : "예약일 선택"}
            </Button>
          }
        />
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={{ before: new Date() }}
            locale={ko}
          />
        </PopoverContent>
      </Popover>
      <span className="text-xs text-muted-foreground">
        지난 날짜는 고를 수 없게 막았습니다.
      </span>
    </div>
  )
}

export function TwoInputs() {
  const [from, setFrom] = React.useState<Date | undefined>(new Date())
  const [to, setTo] = React.useState<Date | undefined>(addDays(new Date(), 14))

  const Cell = ({
    value,
    onSelect,
    label,
  }: {
    value: Date | undefined
    onSelect: (d: Date | undefined) => void
    label: string
  }) => (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            variant="outline"
            aria-label={label}
            className={cn(
              "w-full justify-start px-2.5 text-left font-normal",
              !value && "text-muted-foreground"
            )}
          />
        }
      >
        <CalendarIcon />
        {value ? format(value, "yyyy-MM-dd") : "YYYY-MM-DD"}
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={value}
          onSelect={onSelect}
          locale={ko}
        />
      </PopoverContent>
    </Popover>
  )

  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <Cell value={from} onSelect={setFrom} label="시작일" />
      <span className="shrink-0 text-sm text-muted-foreground">~</span>
      <Cell value={to} onSelect={setTo} label="종료일" />
    </div>
  )
}
