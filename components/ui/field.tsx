import { cn } from "@/lib/utils";

/**
 * 계약: 라벨 1개, 입력 1개.
 * 배치는 styles/layouts/field.css 가 담당한다.
 */
type FieldLayout = "stacked" | "inline";

function Field({
  className,
  layout = "stacked",
  ...props
}: React.ComponentProps<"div"> & { layout?: FieldLayout }) {
  return <div data-slot="field" data-layout={layout} className={cn(className)} {...props} />;
}

export { Field };
