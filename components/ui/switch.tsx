"use client";

import { Switch as SwitchPrimitive } from "@base-ui-components/react/switch";
import { cn } from "@/lib/utils";

function Switch({ className, ...props }: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "token-border relative inline-flex h-5 w-9 shrink-0 items-center rounded-(--t3-badge-radius) bg-(--t2-tint) outline-offset-2 transition-colors focus-visible:outline-2 focus-visible:outline-(--t2-ring) data-checked:bg-(--t2-brand)",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="ml-0.5 size-4 rounded-(--t3-badge-radius) bg-(--t2-raised) transition-transform data-checked:translate-x-4"
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
