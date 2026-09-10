import { cn } from "@/lib/utils";

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: 범용 래퍼이므로 연결은 사용처에서 htmlFor로 한다
    <label
      data-slot="label"
      className={cn("block text-(--t2-muted) text-sm", className)}
      {...props}
    />
  );
}

export { Label };
