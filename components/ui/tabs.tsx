"use client";

import { Tabs as TabsPrimitive } from "@base-ui-components/react/tabs";
import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

function TabsList({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn("token-border flex gap-(--t3-pad-1) border-x-0 border-t-0", className)}
      {...props}
    />
  );
}

function TabsTab({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Tab>) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-tab"
      className={cn(
        "px-(--t3-pad-3) py-(--t3-pad-2) text-(--t2-muted) text-sm outline-offset-2 focus-visible:outline-2 focus-visible:outline-(--t2-ring) data-selected:text-(--t2-text)",
        className,
      )}
      {...props}
    />
  );
}

function TabsPanel({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Panel>) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-panel"
      className={cn("flex flex-col gap-(--t3-pad-4) pt-(--t3-pad-4)", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsPanel, TabsTab };
