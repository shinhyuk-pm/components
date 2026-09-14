"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function AspectRatioDemo() {
  return (
    <div className="w-full max-w-sm">
      <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg border">
        <div className="flex size-full items-center justify-center bg-muted text-sm text-muted-foreground">
          16 / 9 비율 영역
        </div>
      </AspectRatio>
    </div>
  )
}
