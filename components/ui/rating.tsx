"use client"

import * as React from "react"
import { cn } from "cn"
import { StarIcon } from "lucide-react"

const sizes = {
  sm: "size-3.5",
  default: "size-4",
  lg: "size-5",
} as const

function Rating({
  className,
  value,
  defaultValue = 0,
  max = 5,
  size = "default",
  readOnly = false,
  label = "별점",
  onValueChange,
  ...props
}: Omit<React.ComponentProps<"div">, "onChange"> & {
  value?: number
  defaultValue?: number
  max?: number
  size?: keyof typeof sizes
  readOnly?: boolean
  label?: string
  onValueChange?: (value: number) => void
}) {
  const [internal, setInternal] = React.useState(defaultValue)
  const [hover, setHover] = React.useState<number | null>(null)
  const current = value ?? internal
  const shown = hover ?? current

  const set = (next: number) => {
    if (readOnly) return
    if (value === undefined) setInternal(next)
    onValueChange?.(next)
  }

  const stars = Array.from({ length: max }, (_, i) => i + 1)

  if (readOnly) {
    return (
      <div
        data-slot="rating"
        data-readonly=""
        role="img"
        aria-label={`${label} ${max}점 만점에 ${current}점`}
        className={cn("inline-flex items-center gap-0.5", className)}
        {...props}
      >
        {stars.map((n) => (
          <Star key={n} filled={n <= Math.round(current)} size={size} />
        ))}
      </div>
    )
  }

  return (
    <div
      data-slot="rating"
      role="radiogroup"
      aria-label={label}
      className={cn("inline-flex items-center gap-0.5", className)}
      onMouseLeave={() => setHover(null)}
      {...props}
    >
      {stars.map((n) => (
        <button
          key={n}
          type="button"
          role="radio"
          aria-checked={current === n}
          aria-label={`${n}점`}
          data-slot="rating-item"
          className="rounded-sm p-0.5 text-muted-foreground transition-colors outline-none hover:text-amber-500 focus-visible:ring-3 focus-visible:ring-ring/50"
          onMouseEnter={() => setHover(n)}
          onFocus={() => setHover(n)}
          onBlur={() => setHover(null)}
          onClick={() => set(current === n ? 0 : n)}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
              e.preventDefault()
              set(Math.max(0, current - 1))
            }
            if (e.key === "ArrowRight" || e.key === "ArrowUp") {
              e.preventDefault()
              set(Math.min(max, current + 1))
            }
          }}
        >
          <Star filled={n <= shown} size={size} />
        </button>
      ))}
    </div>
  )
}

function Star({ filled, size }: { filled: boolean; size: keyof typeof sizes }) {
  return (
    <StarIcon
      data-slot="rating-star"
      data-filled={filled || undefined}
      className={cn(
        sizes[size],
        "shrink-0 transition-colors",
        filled ? "fill-amber-400 text-amber-400" : "fill-transparent"
      )}
    />
  )
}

function RatingValue({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="rating-value"
      className={cn("text-sm text-muted-foreground tabular-nums", className)}
      {...props}
    />
  )
}

export { Rating, RatingValue }
