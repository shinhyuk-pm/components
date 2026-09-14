"use client"

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function Slide({ label }: { label: React.ReactNode }) {
  return (
    <Card>
      <CardContent className="flex aspect-square items-center justify-center p-6">
        <span className="text-3xl font-semibold">{label}</span>
      </CardContent>
    </Card>
  )
}

export function Basic() {
  return (
    <Carousel className="mx-auto w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Slide label={index + 1} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export function Sizes() {
  return (
    <Carousel className="mx-auto w-full max-w-sm">
      <CarouselContent>
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/2 md:basis-1/3">
            <div className="p-1">
              <Slide label={index + 1} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export function Spacing() {
  return (
    <Carousel className="mx-auto w-full max-w-sm">
      <CarouselContent className="-ml-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/3 pl-2">
            <Slide label={index + 1} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export function Vertical() {
  return (
    <Carousel orientation="vertical" className="mx-auto w-full max-w-xs py-14">
      <CarouselContent className="-mt-1 h-[240px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export function Loop() {
  return (
    <Carousel opts={{ loop: true }} className="mx-auto w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 4 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Slide label={index + 1} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export function WithCounter() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1))
  }, [api])

  return (
    <div className="mx-auto w-full max-w-xs">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Slide label={index + 1} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <p className="mt-3 text-center text-sm text-muted-foreground tabular-nums">
        {count === 0 ? "—" : `${current} / ${count}`}
      </p>
    </div>
  )
}
