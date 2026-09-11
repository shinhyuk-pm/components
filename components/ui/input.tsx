import { cn } from "@/lib/utils";

function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      data-slot="input"
      className={cn(
        "token-border w-full rounded-(--t3-input-radius) bg-(--t2-raised) px-(--t3-pad-3) py-(--t3-pad-2) text-(--t2-text) text-sm outline-offset-2 placeholder:text-(--t2-muted) focus-visible:outline-2 focus-visible:outline-(--t2-ring)",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
