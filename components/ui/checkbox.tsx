"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui-components/react/checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "token-border flex size-4 shrink-0 items-center justify-center rounded-(--t3-badge-radius) bg-(--t2-raised) outline-offset-2 focus-visible:outline-2 focus-visible:outline-(--t2-ring) data-checked:bg-(--t2-brand)",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator data-slot="checkbox-indicator">
        <Check className="size-3 text-(--t2-brand-fg)" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
