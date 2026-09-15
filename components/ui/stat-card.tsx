import * as React from "react"
import { cn } from "cn"
import { MinusIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react"

function StatCard({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="stat-card"
      className={cn(
        "flex min-w-0 flex-col gap-1.5 rounded-xl border bg-card p-4",
        className
      )}
      {...props}
    />
  )
}

function StatCardLabel({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="stat-card-label"
      className={cn(
        "flex items-center gap-1.5 text-sm text-muted-foreground [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function StatCardValue({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="stat-card-value"
      className={cn(
        "text-2xl font-semibold tracking-tight tabular-nums",
        className
      )}
      {...props}
    />
  )
}

function StatCardDelta({
  className,
  direction = "flat",
  children,
  ...props
}: React.ComponentProps<"div"> & {
  direction?: "up" | "down" | "flat"
}) {
  const Icon =
    direction === "up"
      ? TrendingUpIcon
      : direction === "down"
        ? TrendingDownIcon
        : MinusIcon

  return (
    <div
      data-slot="stat-card-delta"
      data-direction={direction}
      className={cn(
        "flex items-center gap-1 text-xs font-medium",
        direction === "up" && "text-emerald-600 dark:text-emerald-400",
        direction === "down" && "text-destructive",
        direction === "flat" && "text-muted-foreground",
        "[&_svg:not([class*='size-'])]:size-3.5",
        className
      )}
      {...props}
    >
      <Icon aria-hidden="true" />
      {children}
    </div>
  )
}

function StatCardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="stat-card-footer"
      className={cn("mt-1 text-xs text-muted-foreground", className)}
      {...props}
    />
  )
}

function StatCardGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="stat-card-group"
      className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-4", className)}
      {...props}
    />
  )
}

export {
  StatCard,
  StatCardGroup,
  StatCardLabel,
  StatCardValue,
  StatCardDelta,
  StatCardFooter,
}
