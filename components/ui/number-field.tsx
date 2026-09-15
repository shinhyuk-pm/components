"use client"

import { NumberField as NumberFieldPrimitive } from "@base-ui/react/number-field"
import { cn } from "cn"
import { MinusIcon, PlusIcon } from "lucide-react"

function NumberField({ className, ...props }: NumberFieldPrimitive.Root.Props) {
  return (
    <NumberFieldPrimitive.Root
      data-slot="number-field"
      className={cn("w-full", className)}
      {...props}
    />
  )
}

function NumberFieldGroup({
  className,
  ...props
}: NumberFieldPrimitive.Group.Props) {
  return (
    <NumberFieldPrimitive.Group
      data-slot="number-field-group"
      className={cn(
        "flex w-fit items-center rounded-lg border border-input bg-transparent transition-colors has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/50 dark:bg-input/30",
        className
      )}
      {...props}
    />
  )
}

const stepperClasses =
  "flex size-8 shrink-0 items-center justify-center text-muted-foreground transition-colors outline-none select-none hover:bg-accent hover:text-foreground focus-visible:bg-accent disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0"

function NumberFieldDecrement({
  className,
  children,
  ...props
}: NumberFieldPrimitive.Decrement.Props) {
  return (
    <NumberFieldPrimitive.Decrement
      data-slot="number-field-decrement"
      aria-label="줄이기"
      className={cn(
        stepperClasses,
        "rounded-l-lg border-r border-input",
        className
      )}
      {...props}
    >
      {children ?? <MinusIcon />}
    </NumberFieldPrimitive.Decrement>
  )
}

function NumberFieldIncrement({
  className,
  children,
  ...props
}: NumberFieldPrimitive.Increment.Props) {
  return (
    <NumberFieldPrimitive.Increment
      data-slot="number-field-increment"
      aria-label="늘리기"
      className={cn(
        stepperClasses,
        "rounded-r-lg border-l border-input",
        className
      )}
      {...props}
    >
      {children ?? <PlusIcon />}
    </NumberFieldPrimitive.Increment>
  )
}

function NumberFieldInput({
  className,
  ...props
}: NumberFieldPrimitive.Input.Props) {
  return (
    <NumberFieldPrimitive.Input
      data-slot="number-field-input"
      className={cn(
        "h-8 w-16 min-w-0 bg-transparent px-2 text-center text-sm tabular-nums outline-none disabled:cursor-not-allowed",
        className
      )}
      {...props}
    />
  )
}

function NumberFieldScrubArea({
  className,
  ...props
}: NumberFieldPrimitive.ScrubArea.Props) {
  return (
    <NumberFieldPrimitive.ScrubArea
      data-slot="number-field-scrub-area"
      className={cn("cursor-ew-resize select-none", className)}
      {...props}
    />
  )
}

export {
  NumberField,
  NumberFieldGroup,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldScrubArea,
}
