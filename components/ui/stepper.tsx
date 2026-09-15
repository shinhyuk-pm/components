import * as React from "react"
import { cn } from "cn"
import { CheckIcon } from "lucide-react"

function Stepper({
  className,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<"ol"> & {
  orientation?: "horizontal" | "vertical"
}) {
  return (
    <ol
      data-slot="stepper"
      data-orientation={orientation}
      className={cn(
        "group/stepper flex data-horizontal:w-full data-horizontal:items-center data-vertical:flex-col data-vertical:items-stretch data-vertical:gap-1",
        className
      )}
      {...props}
    />
  )
}

function StepperItem({
  className,
  state = "upcoming",
  ...props
}: React.ComponentProps<"li"> & {
  state?: "complete" | "current" | "upcoming"
}) {
  return (
    <li
      data-slot="stepper-item"
      data-state={state}
      aria-current={state === "current" ? "step" : undefined}
      className={cn(
        "flex min-w-0 items-center gap-2 group-data-horizontal/stepper:shrink-0 group-data-vertical/stepper:py-1",
        className
      )}
      {...props}
    />
  )
}

function StepperIndicator({
  className,
  children,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="stepper-indicator"
      aria-hidden="true"
      className={cn(
        "flex size-6 shrink-0 items-center justify-center rounded-full border text-xs font-medium tabular-nums transition-colors",
        "group-data-[state=upcoming]/stepper:border-input",
        "[[data-state=upcoming]_&]:border-input [[data-state=upcoming]_&]:text-muted-foreground",
        "[[data-state=current]_&]:border-primary [[data-state=current]_&]:bg-primary [[data-state=current]_&]:text-primary-foreground",
        "[[data-state=complete]_&]:border-primary/30 [[data-state=complete]_&]:bg-primary/10 [[data-state=complete]_&]:text-primary [[data-state=complete]_&]:dark:text-foreground",
        "[&_svg:not([class*='size-'])]:size-3.5",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

function StepperCheck(props: React.ComponentProps<typeof CheckIcon>) {
  return <CheckIcon {...props} />
}

function StepperContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="stepper-content"
      className={cn("flex min-w-0 flex-col", className)}
      {...props}
    />
  )
}

function StepperTitle({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="stepper-title"
      className={cn(
        "truncate text-sm [[data-state=current]_&]:font-medium [[data-state=current]_&]:text-foreground [[data-state=upcoming]_&]:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function StepperDescription({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="stepper-description"
      className={cn("truncate text-xs text-muted-foreground", className)}
      {...props}
    />
  )
}

function StepperSeparator({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="stepper-separator"
      aria-hidden="true"
      className={cn(
        "bg-border group-data-horizontal/stepper:mx-2 group-data-horizontal/stepper:h-px group-data-horizontal/stepper:min-w-6 group-data-horizontal/stepper:flex-1 group-data-vertical/stepper:ml-3 group-data-vertical/stepper:h-4 group-data-vertical/stepper:w-px",
        className
      )}
      {...props}
    />
  )
}

export {
  Stepper,
  StepperItem,
  StepperIndicator,
  StepperCheck,
  StepperContent,
  StepperTitle,
  StepperDescription,
  StepperSeparator,
}
