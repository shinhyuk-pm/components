import { cn } from "@/lib/utils";

/**
 * 계약: 라벨 1개, 값 1개, 증감 1개(선택), 아이콘 1개(선택).
 *
 * 배치는 이 파일에 없다. styles/layouts/stat-card.css 가 담당한다.
 * 새 배치를 추가해도 이 파일은 바뀌지 않고, 화면 명세도 바뀌지 않는다.
 */
type StatCardLayout = "stacked" | "icon-left" | "horizontal";

function StatCard({
  className,
  layout = "stacked",
  ...props
}: React.ComponentProps<"div"> & { layout?: StatCardLayout }) {
  return (
    <div
      data-slot="stat-card"
      data-layout={layout}
      className={cn(
        "token-border rounded-(--t3-card-radius) bg-(--t2-raised) p-(--t3-pad-4) shadow-(--t3-card-shadow)",
        className,
      )}
      {...props}
    />
  );
}

function StatCardIcon({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="stat-card-icon"
      className={cn("flex items-center text-(--t2-muted)", className)}
      {...props}
    />
  );
}

function StatCardLabel({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="stat-card-label"
      className={cn("text-(--t2-muted) text-xs", className)}
      {...props}
    />
  );
}

function StatCardValue({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="stat-card-value"
      className={cn("heading-font font-medium text-xl", className)}
      {...props}
    />
  );
}

function StatCardDelta({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="stat-card-delta"
      className={cn("text-(--t2-brand) text-xs", className)}
      {...props}
    />
  );
}

export { StatCard, StatCardDelta, StatCardIcon, StatCardLabel, StatCardValue };
