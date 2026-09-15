import * as React from "react"
import { cn } from "cn"

function FilterBar({ className, ...props }: React.ComponentProps<"form">) {
  return (
    <form
      data-slot="filter-bar"
      className={cn(
        "flex flex-col gap-4 rounded-xl border bg-card p-4",
        className
      )}
      {...props}
    />
  )
}

function FilterBarRow({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="filter-bar-row"
      className={cn(
        "grid gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
      {...props}
    />
  )
}

function FilterBarField({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="filter-bar-field"
      className={cn("flex min-w-0 flex-col gap-1.5", className)}
      {...props}
    />
  )
}

function FilterBarLabel({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="filter-bar-label"
      className={cn("text-xs font-medium text-muted-foreground", className)}
      {...props}
    />
  )
}

function FilterBarActions({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="filter-bar-actions"
      className={cn(
        "flex flex-wrap items-center justify-end gap-2 border-t pt-3",
        className
      )}
      {...props}
    />
  )
}

export {
  FilterBar,
  FilterBarRow,
  FilterBarField,
  FilterBarLabel,
  FilterBarActions,
}
