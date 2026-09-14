"use client"

import * as React from "react"

import { Checkbox } from "@/components/ui/checkbox"

export default function CheckboxDemo() {
  const [checked, setChecked] = React.useState(true)

  return (
    <div className="flex flex-col gap-3">
      <label className="flex items-center gap-2 text-sm">
        <Checkbox checked={checked} onCheckedChange={setChecked} />
        이용약관에 동의합니다
      </label>
      <label className="flex items-center gap-2 text-sm">
        <Checkbox defaultChecked />
        마케팅 정보 수신에 동의합니다
      </label>
      <label className="flex items-center gap-2 text-sm text-muted-foreground">
        <Checkbox disabled />
        비활성화된 항목
      </label>
    </div>
  )
}
