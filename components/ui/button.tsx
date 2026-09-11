import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-(--t3-pad-2) text-sm font-medium transition-colors rounded-(--t3-button-radius) shadow-(--t3-button-shadow) outline-offset-2 focus-visible:outline-2 focus-visible:outline-(--t2-ring) disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-(--t2-brand) text-(--t2-brand-fg) hover:bg-(--t2-brand-hover)",
        secondary: "token-border bg-(--t2-raised) text-(--t2-text) hover:bg-(--t2-tint)",
        ghost: "text-(--t2-text) hover:bg-(--t2-tint)",
      },
      size: {
        sm: "px-(--t3-pad-3) py-(--t3-pad-1)",
        md: "px-(--t3-pad-4) py-(--t3-pad-2)",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

function Button({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return (
    <button
      type="button"
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
