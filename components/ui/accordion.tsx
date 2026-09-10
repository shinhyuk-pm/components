"use client";

import { Accordion as AccordionPrimitive } from "@base-ui-components/react/accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

function Accordion({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return (
    <AccordionPrimitive.Root data-slot="accordion" className={cn("w-full", className)} {...props} />
  );
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "token-border border-x-0 border-t-0 last:border-b-0 [border-bottom-style:var(--t3-border-style)]",
        className,
      )}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header data-slot="accordion-header" className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex flex-1 items-center justify-between gap-(--t3-pad-3) py-(--t3-pad-3) text-left text-(--t2-text) text-sm outline-offset-2 focus-visible:outline-2 focus-visible:outline-(--t2-ring) [&[data-panel-open]>svg]:rotate-180",
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDown className="size-4 shrink-0 text-(--t2-muted) transition-transform" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Panel>) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className={cn("overflow-hidden text-(--t2-muted) text-sm", className)}
      {...props}
    >
      <div className="pb-(--t3-pad-3) leading-relaxed">{children}</div>
    </AccordionPrimitive.Panel>
  );
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
