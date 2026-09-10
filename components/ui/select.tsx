"use client";

import { Select as SelectPrimitive } from "@base-ui-components/react/select";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;

function SelectTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger>) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(
        "token-border flex w-full items-center justify-between gap-(--t3-pad-2) rounded-(--t3-input-radius) bg-(--t2-raised) px-(--t3-pad-3) py-(--t3-pad-2) text-(--t2-text) text-sm outline-offset-2 focus-visible:outline-2 focus-visible:outline-(--t2-ring)",
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon data-slot="select-icon">
        <ChevronDown className="size-4 text-(--t2-muted)" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Popup>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner sideOffset={4} className="z-50">
        <SelectPrimitive.Popup
          data-slot="select-content"
          className={cn(
            "token-border min-w-(--anchor-width) rounded-(--t3-card-radius) bg-(--t2-raised) p-(--t3-pad-1) shadow-(--t3-dialog-shadow)",
            className,
          )}
          {...props}
        >
          {children}
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  );
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "flex cursor-default items-center justify-between gap-(--t3-pad-3) rounded-(--t3-button-radius) px-(--t3-pad-3) py-(--t3-pad-2) text-(--t2-text) text-sm data-highlighted:bg-(--t2-tint)",
        className,
      )}
      {...props}
    >
      <SelectPrimitive.ItemText data-slot="select-item-text">{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator data-slot="select-item-indicator">
        <Check className="size-4 text-(--t2-brand)" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
}

export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue };
