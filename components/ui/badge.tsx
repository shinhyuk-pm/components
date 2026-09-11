import { cn } from "@/lib/utils";

function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="badge"
      className={cn(
        "inline-flex items-center rounded-(--t3-badge-radius) bg-(--t2-tint) px-(--t3-pad-2) py-(--t3-pad-1) text-(--t2-text) text-xs",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
