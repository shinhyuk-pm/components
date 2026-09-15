import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const descriptionListVariants = cva("text-sm", {
  variants: {
    variant: {
      stacked: "grid gap-x-6 gap-y-4",
      inline: "grid gap-x-6 gap-y-3",
      divided: "divide-y divide-border",
    },
  },
  defaultVariants: {
    variant: "stacked",
  },
})

function DescriptionList({
  className,
  variant = "stacked",
  columns = 1,
  style,
  ...props
}: React.ComponentProps<"dl"> &
  VariantProps<typeof descriptionListVariants> & {
    /** 한 줄에 몇 칸으로 나눌지 (divided 에서는 무시) */
    columns?: 1 | 2 | 3
  }) {
  return (
    <dl
      data-slot="description-list"
      data-variant={variant}
      className={cn(descriptionListVariants({ variant }), className)}
      style={
        variant === "divided"
          ? style
          : {
              gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
              ...style,
            }
      }
      {...props}
    />
  )
}

function DescriptionListItem({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="description-list-item"
      className={cn(
        "min-w-0 group-data-[variant=divided]/dl:py-3",
        "[[data-variant=inline]_&]:grid [[data-variant=inline]_&]:grid-cols-[minmax(0,7rem)_1fr] [[data-variant=inline]_&]:items-baseline [[data-variant=inline]_&]:gap-3",
        "[[data-variant=divided]_&]:grid [[data-variant=divided]_&]:grid-cols-[minmax(0,7rem)_1fr] [[data-variant=divided]_&]:items-baseline [[data-variant=divided]_&]:gap-3 [[data-variant=divided]_&]:py-2.5 [[data-variant=divided]_&]:first:pt-0 [[data-variant=divided]_&]:last:pb-0",
        className
      )}
      {...props}
    />
  )
}

function DescriptionListTerm({
  className,
  ...props
}: React.ComponentProps<"dt">) {
  return (
    <dt
      data-slot="description-list-term"
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  )
}

function DescriptionListDetail({
  className,
  ...props
}: React.ComponentProps<"dd">) {
  return (
    <dd
      data-slot="description-list-detail"
      className={cn(
        "wrap-break-word text-foreground [[data-variant=stacked]_&]:mt-1.5",
        className
      )}
      {...props}
    />
  )
}

export {
  DescriptionList,
  DescriptionListItem,
  DescriptionListTerm,
  DescriptionListDetail,
  descriptionListVariants,
}
