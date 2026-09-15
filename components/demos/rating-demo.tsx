"use client"

import * as React from "react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Rating, RatingValue } from "@/components/ui/rating"
import { Textarea } from "@/components/ui/textarea"

export function Basic() {
  return <Rating defaultValue={3} />
}

export function ReadOnly() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Rating value={4} readOnly />
        <RatingValue>4.0</RatingValue>
      </div>
      <div className="flex items-center gap-2">
        <Rating value={5} readOnly size="sm" />
        <RatingValue>5.0 · 리뷰 128건</RatingValue>
      </div>
    </div>
  )
}

export function Size() {
  return (
    <div className="flex flex-col items-start gap-3">
      <Rating defaultValue={4} size="sm" />
      <Rating defaultValue={4} />
      <Rating defaultValue={4} size="lg" />
    </div>
  )
}

export function Controlled() {
  const [value, setValue] = React.useState(0)
  const labels = [
    "",
    "별로예요",
    "그저 그래요",
    "괜찮아요",
    "좋아요",
    "최고예요",
  ]

  return (
    <div className="flex flex-col items-center gap-2">
      <Rating value={value} onValueChange={setValue} size="lg" />
      <p className="text-sm text-muted-foreground">
        {value ? labels[value] : "별을 눌러 점수를 매겨 보세요"}
      </p>
    </div>
  )
}

export function Distribution() {
  const rows = [
    { score: 5, count: 82 },
    { score: 4, count: 28 },
    { score: 3, count: 11 },
    { score: 2, count: 4 },
    { score: 1, count: 3 },
  ]
  const total = rows.reduce((sum, r) => sum + r.count, 0)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex items-center gap-2">
        <Rating value={4} readOnly />
        <RatingValue>4.4 · 리뷰 {total}건</RatingValue>
      </div>
      {rows.map((row) => (
        <div key={row.score} className="flex items-center gap-2 text-xs">
          <span className="w-8 shrink-0 text-muted-foreground tabular-nums">
            {row.score}점
          </span>
          <span className="h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-muted">
            <span
              className="block h-full rounded-full bg-amber-400"
              style={{ width: `${(row.count / total) * 100}%` }}
            />
          </span>
          <span className="w-8 shrink-0 text-right text-muted-foreground tabular-nums">
            {row.count}
          </span>
        </div>
      ))}
    </div>
  )
}

export function ReviewForm() {
  const [value, setValue] = React.useState(0)

  return (
    <form
      className="flex w-full max-w-sm flex-col gap-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <Field>
        <FieldLabel>이 상품은 어떠셨나요?</FieldLabel>
        <Rating value={value} onValueChange={setValue} size="lg" />
        <FieldDescription>별을 눌러 점수를 매겨 주세요.</FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="rating-comment">한 줄 평</FieldLabel>
        <Textarea
          id="rating-comment"
          placeholder="어떤 점이 좋았는지 적어 주세요."
          className="resize-none"
        />
      </Field>
      <Button type="submit" size="sm" className="self-end" disabled={!value}>
        리뷰 등록
      </Button>
    </form>
  )
}

export function InList() {
  const reviews = [
    {
      name: "김한빛",
      initial: "한",
      score: 5,
      text: "튼튼하고 조립이 쉬웠어요.",
    },
    {
      name: "정수아",
      initial: "수",
      score: 4,
      text: "배송이 조금 늦었지만 만족합니다.",
    },
    {
      name: "강채원",
      initial: "채",
      score: 3,
      text: "생각보다 크기가 작습니다.",
    },
  ]

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      {reviews.map((r) => (
        <div key={r.name} className="flex gap-3">
          <Avatar className="size-8 shrink-0">
            <AvatarFallback>{r.initial}</AvatarFallback>
          </Avatar>
          <div className="flex min-w-0 flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{r.name}</span>
              <Rating value={r.score} readOnly size="sm" />
            </div>
            <p className="text-sm text-muted-foreground">{r.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
