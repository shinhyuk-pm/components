"use client"

import * as React from "react"
import {
  type ColumnDef,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type Payment = {
  id: string
  status: "성공" | "처리중" | "실패"
  email: string
  amount: number
}

const data: Payment[] = [
  { id: "1", status: "성공", email: "ken99@example.com", amount: 316 },
  { id: "2", status: "성공", email: "abe45@example.com", amount: 242 },
  { id: "3", status: "처리중", email: "monserrat44@example.com", amount: 837 },
  { id: "4", status: "실패", email: "carmella@example.com", amount: 721 },
]

const columns: ColumnDef<Payment>[] = [
  { accessorKey: "status", header: "상태" },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <Button
        variant="ghost"
        size="sm"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        이메일
        <ArrowUpDownIcon />
      </Button>
    ),
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">금액</div>,
    cell: ({ row }) => (
      <div className="text-right font-medium">
        {new Intl.NumberFormat("ko-KR", {
          style: "currency",
          currency: "USD",
        }).format(row.getValue("amount"))}
      </div>
    ),
  },
]

export default function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <div className="w-full max-w-xl overflow-hidden rounded-lg border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
