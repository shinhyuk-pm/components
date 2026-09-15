"use client"

import * as React from "react"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export function Basic() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">태그</h4>
        {tags.map((tag) => (
          <React.Fragment key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  )
}

const works = [
  { artist: "Ornella Binni", key: "ornella" },
  { artist: "Tom Byrom", key: "tom" },
  { artist: "Vladimir Malyavko", key: "vladimir" },
  { artist: "Hana Kim", key: "hana" },
]

export function Horizontal() {
  return (
    <ScrollArea className="w-full max-w-96 rounded-md border whitespace-nowrap">
      <div className="flex w-max space-x-4 p-4">
        {works.map((work) => (
          <figure key={work.key} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://avatar.vercel.sh/${work.key}?size=300`}
                alt={`${work.artist}의 사진`}
                className="aspect-[3/4] h-fit w-fit object-cover"
                width={150}
                height={200}
              />
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              사진:{" "}
              <span className="font-semibold text-foreground">
                {work.artist}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
