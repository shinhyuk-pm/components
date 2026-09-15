"use client"

import * as React from "react"

import { CheckIcon, LogOutIcon, SettingsIcon, UserIcon } from "lucide-react"

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
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
          <button
            type="button"
            className="rounded-full outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          />
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

export function Upload() {
  const [preview, setPreview] = React.useState<string | null>(SRC)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const pick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) setPreview(URL.createObjectURL(file))
  }

  return (
    <div className="flex items-center gap-4">
      <Avatar className="size-16">
        {preview ? <AvatarImage src={preview} alt="프로필 사진" /> : null}
        <AvatarFallback>
          <UserIcon className="size-6 text-muted-foreground" />
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => inputRef.current?.click()}
          >
            사진 변경
          </Button>
          <Button
            size="sm"
            variant="ghost"
            disabled={!preview}
            onClick={() => setPreview(null)}
          >
            삭제
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          JPG·PNG, 5MB 이하. 지우면 이니셜이 대신 보입니다.
        </p>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={pick}
      />
    </div>
  )
}
