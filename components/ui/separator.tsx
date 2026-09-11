import { Separator as SeparatorPrimitive } from "@base-ui-components/react/separator";
import { cn } from "@/lib/utils";

function Separator({ className, ...props }: React.ComponentProps<typeof SeparatorPrimitive>) {
  return (
    <SeparatorPrimitive
      data-slot="separator"
      className={cn("h-px w-full bg-(--t2-border)", className)}
      {...props}
    />
  );
}

export { Separator };
