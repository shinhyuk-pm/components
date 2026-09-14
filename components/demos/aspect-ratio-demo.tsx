"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio"

function Box({ label }: { label: string }) {
  return (
    <div className="flex size-full items-center justify-center bg-muted text-sm text-muted-foreground">
      {label}
    </div>
  )
}

export function Square() {
  return (
    <div className="w-full max-w-xs">
      <AspectRatio ratio={1} className="overflow-hidden rounded-lg border">
        <Box label="1 : 1 (정사각형)" />
      </AspectRatio>
    </div>
  )
}

export function Video() {
  return (
    <div className="w-full max-w-sm">
      <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg border">
        <Box label="16 : 9 (영상)" />
      </AspectRatio>
    </div>
  )
}

export function Portrait() {
  return (
    <div className="w-full max-w-[220px]">
      <AspectRatio ratio={3 / 4} className="overflow-hidden rounded-lg border">
        <Box label="3 : 4 (세로)" />
      </AspectRatio>
    </div>
  )
}

export function Grid() {
  return (
    <div className="grid w-full max-w-2xl grid-cols-3 gap-3">
      {[1, 4 / 3, 16 / 9].map((ratio, index) => (
        <AspectRatio
          key={index}
          ratio={ratio}
          className="overflow-hidden rounded-lg border"
        >
          <Box label={["1:1", "4:3", "16:9"][index]} />
        </AspectRatio>
      ))}
    </div>
  )
}
