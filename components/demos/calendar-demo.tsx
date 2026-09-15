"use client"

import * as React from "react"
import { addDays } from "date-fns"
import { ko } from "date-fns/locale"
import type { DateRange } from "react-day-picker"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"

export function Basic() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      locale={ko}
      className="rounded-lg border"
    />
  )
}

export function Range() {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 5),
  })

  return (
    <Calendar
      mode="range"
      numberOfMonths={2}
      selected={range}
      onSelect={setRange}
      locale={ko}
      className="rounded-lg border"
    />
  )
}

export function MonthAndYearSelector() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      captionLayout="dropdown"
      selected={date}
      onSelect={setDate}
      locale={ko}
      className="rounded-lg border"
    />
  )
}

const presets = [
  { label: "오늘", days: 0 },
  { label: "내일", days: 1 },
  { label: "3일 뒤", days: 3 },
  { label: "일주일 뒤", days: 7 },
  { label: "2주 뒤", days: 14 },
]

export function Presets() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [month, setMonth] = React.useState<Date>(new Date())

  return (
    <div className="flex flex-col gap-4 rounded-lg border p-3 sm:flex-row sm:items-start">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        month={month}
        onMonthChange={setMonth}
        locale={ko}
        className="p-0"
      />
      <div className="flex flex-wrap gap-2 sm:w-32 sm:flex-col">
        {presets.map((preset) => (
          <Button
            key={preset.label}
            variant="outline"
            size="sm"
            onClick={() => {
              const next = addDays(new Date(), preset.days)
              setDate(next)
              setMonth(next)
            }}
          >
            {preset.label}
          </Button>
        ))}
      </div>
    </div>
  )
}

export function DateAndTimePicker() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="w-fit rounded-lg border">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        locale={ko}
        className="p-2"
      />
      <div className="flex gap-2 border-t p-3">
        <div className="flex flex-1 flex-col gap-1.5">
          <span className="text-xs text-muted-foreground">시작 시각</span>
          <Input type="time" defaultValue="10:00" step="60" />
        </div>
        <div className="flex flex-1 flex-col gap-1.5">
          <span className="text-xs text-muted-foreground">종료 시각</span>
          <Input type="time" defaultValue="11:30" step="60" />
        </div>
      </div>
    </div>
  )
}

export function BookedDates() {
  const [date, setDate] = React.useState<Date | undefined>(undefined)
  const bookedDates = React.useMemo(
    () => [2, 3, 6, 11, 12, 17].map((days) => addDays(new Date(), days)),
    []
  )

  return (
    <div className="flex flex-col items-center gap-3">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={bookedDates}
        modifiers={{ booked: bookedDates }}
        modifiersClassNames={{ booked: "line-through opacity-60" }}
        locale={ko}
        className="rounded-lg border"
      />
      <p className="text-xs text-muted-foreground">
        취소선이 그어진 날짜는 이미 예약되어 고를 수 없습니다.
      </p>
    </div>
  )
}

export function CustomCellSize() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      locale={ko}
      className="rounded-lg border [--cell-size:--spacing(11)] md:[--cell-size:--spacing(12)]"
    />
  )
}

export function WeekNumbers() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      showWeekNumber
      selected={date}
      onSelect={setDate}
      locale={ko}
      className="rounded-lg border"
    />
  )
}
