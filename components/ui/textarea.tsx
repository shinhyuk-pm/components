import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "token-border w-full rounded-(--t3-input-radius) bg-(--t2-raised) px-(--t3-pad-3) py-(--t3-pad-2) text-(--t2-text) text-sm outline-offset-2 placeholder:text-(--t2-muted) focus-visible:outline-2 focus-visible:outline-(--t2-ring)",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
