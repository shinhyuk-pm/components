"use client"

import { ChevronsUpDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export default function CollapsibleDemo() {
  return (
    <Collapsible className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-semibold">@shinhyuk-pm 저장소 3개</span>
        <CollapsibleTrigger
          render={
            <Button variant="ghost" size="icon" aria-label="펼치기">
              <ChevronsUpDownIcon />
            </Button>
          }
        />
      </div>
      <div className="rounded-md border px-4 py-2 font-mono text-sm">components</div>
      <CollapsibleContent className="flex flex-col gap-2">
        <div className="rounded-md border px-4 py-2 font-mono text-sm">design-system</div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm">playground</div>
      </CollapsibleContent>
    </Collapsible>
  )
}
