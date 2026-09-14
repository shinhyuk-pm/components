"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "1월", desktop: 186, mobile: 80 },
  { month: "2월", desktop: 305, mobile: 200 },
  { month: "3월", desktop: 237, mobile: 120 },
  { month: "4월", desktop: 73, mobile: 190 },
  { month: "5월", desktop: 209, mobile: 130 },
  { month: "6월", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: { label: "데스크톱", color: "var(--chart-1)" },
  mobile: { label: "모바일", color: "var(--chart-2)" },
} satisfies ChartConfig

export default function ChartDemo() {
  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle>월별 방문자</CardTitle>
        <CardDescription>1월 - 6월</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
