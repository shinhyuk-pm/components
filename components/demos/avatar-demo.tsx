"use client"

import { CheckIcon, LogOutIcon, SettingsIcon, UserIcon } from "lucide-react"

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const SRC = "https://github.com/shadcn.png"

export function Basic() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src={SRC} alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>KO</AvatarFallback>
      </Avatar>
    </div>
  )
}

export function Sizes() {
  return (
    <div className="flex items-center gap-4">
      <Avatar size="sm">
        <AvatarImage src={SRC} alt="@shadcn" />
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src={SRC} alt="@shadcn" />
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src={SRC} alt="@shadcn" />
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
    </div>
  )
}

export function WithBadge() {
  return (
    <div className="flex items-center gap-6">
      <Avatar>
        <AvatarImage src={SRC} alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
        <AvatarBadge className="bg-emerald-500" />
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>KO</AvatarFallback>
        <AvatarBadge>
          <CheckIcon />
        </AvatarBadge>
      </Avatar>
    </div>
  )
}

export function Group() {
  return (
    <div className="flex flex-col gap-6">
      <AvatarGroup>
        <Avatar>
          <AvatarImage src={SRC} alt="@shadcn" />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
      </AvatarGroup>
      <AvatarGroup>
        <Avatar size="sm">
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
        <AvatarGroupCount className="size-6 text-xs">+8</AvatarGroupCount>
      </AvatarGroup>
    </div>
  )
}

export function WithDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <button type="button" className="rounded-full outline-none focus-visible:ring-3 focus-visible:ring-ring/50" />
        }
      >
        <Avatar>
          <AvatarImage src={SRC} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-44">
        <DropdownMenuLabel>내 계정</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <UserIcon />
          프로필
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SettingsIcon />
          설정
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOutIcon />
          로그아웃
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
