import { cn } from "@/lib/utils";

function Alert({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert"
      className={cn(
        "token-border flex flex-col gap-(--t3-pad-1) rounded-(--t3-card-radius) bg-(--t2-tint) p-(--t3-pad-3) text-(--t2-text) text-sm",
        className,
      )}
      {...props}
    />
  );
}

export { Alert };
