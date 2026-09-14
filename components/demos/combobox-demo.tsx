"use client"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"]

export default function ComboboxDemo() {
  return (
    <div className="w-full max-w-xs">
      <Combobox items={frameworks}>
        <ComboboxInput placeholder="프레임워크 선택" />
        <ComboboxContent>
          <ComboboxEmpty>결과가 없습니다.</ComboboxEmpty>
          <ComboboxList>
            {(item: string) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}
