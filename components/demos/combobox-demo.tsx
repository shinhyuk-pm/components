"use client"

import * as React from "react"
import { DirectionProvider } from "@base-ui/react/direction-provider"
import { GlobeIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox"
import { InputGroupAddon } from "@/components/ui/input-group"

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"]

export function Basic() {
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

export function Multiple() {
  const anchor = useComboboxAnchor()

  return (
    <div className="w-full max-w-xs">
      <Combobox multiple autoHighlight items={frameworks} defaultValue={[frameworks[0]]}>
        <ComboboxChips ref={anchor}>
          <ComboboxValue>
            {(values: string[]) => (
              <React.Fragment>
                {values.map((value) => (
                  <ComboboxChip key={value}>{value}</ComboboxChip>
                ))}
                <ComboboxChipsInput />
              </React.Fragment>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxContent anchor={anchor}>
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

export function ClearButton() {
  return (
    <div className="w-full max-w-xs">
      <Combobox items={frameworks} defaultValue={frameworks[0]}>
        <ComboboxInput placeholder="프레임워크 선택" showClear />
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

const cityGroups = [
  {
    value: "아메리카",
    items: ["뉴욕 (GMT-5)", "로스앤젤레스 (GMT-8)", "토론토 (GMT-5)", "상파울루 (GMT-3)"],
  },
  {
    value: "유럽",
    items: ["런던 (GMT+0)", "파리 (GMT+1)", "베를린 (GMT+1)", "로마 (GMT+1)"],
  },
  {
    value: "아시아·태평양",
    items: ["도쿄 (GMT+9)", "서울 (GMT+9)", "싱가포르 (GMT+8)", "시드니 (GMT+11)"],
  },
]

export function Groups() {
  return (
    <div className="w-full max-w-xs">
      <Combobox items={cityGroups}>
        <ComboboxInput placeholder="시간대 선택" />
        <ComboboxContent>
          <ComboboxEmpty>결과가 없습니다.</ComboboxEmpty>
          <ComboboxList>
            {(group: { value: string; items: string[] }) => (
              <ComboboxGroup key={group.value} items={group.items}>
                <ComboboxLabel>{group.value}</ComboboxLabel>
                <ComboboxCollection>
                  {(city: string) => (
                    <ComboboxItem key={city} value={city}>
                      {city}
                    </ComboboxItem>
                  )}
                </ComboboxCollection>
                <ComboboxSeparator />
              </ComboboxGroup>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}

type Country = { code: string; label: string; continent: string }

const countries: Country[] = [
  { code: "kr", label: "대한민국", continent: "아시아" },
  { code: "us", label: "미국", continent: "북아메리카" },
  { code: "jp", label: "일본", continent: "아시아" },
  { code: "de", label: "독일", continent: "유럽" },
  { code: "fr", label: "프랑스", continent: "유럽" },
  { code: "br", label: "브라질", continent: "남아메리카" },
  { code: "au", label: "호주", continent: "오세아니아" },
  { code: "eg", label: "이집트", continent: "아프리카" },
]

export function CustomItems() {
  return (
    <div className="w-full max-w-xs">
      <Combobox
        items={countries}
        itemToStringLabel={(country: Country) => country.label}
        itemToStringValue={(country: Country) => country.label}
      >
        <ComboboxInput placeholder="국가 검색" />
        <ComboboxContent>
          <ComboboxEmpty>결과가 없습니다.</ComboboxEmpty>
          <ComboboxList>
            {(country: Country) => (
              <ComboboxItem key={country.code} value={country}>
                <div className="flex flex-col">
                  <span>{country.label}</span>
                  <span className="text-xs text-muted-foreground">
                    {country.continent} · {country.code.toUpperCase()}
                  </span>
                </div>
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}

export function Invalid() {
  return (
    <div className="w-full max-w-xs">
      <Combobox items={frameworks}>
        <ComboboxInput placeholder="프레임워크 선택" aria-invalid />
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

export function Disabled() {
  return (
    <div className="w-full max-w-xs">
      <Combobox items={frameworks}>
        <ComboboxInput placeholder="프레임워크 선택" disabled />
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

export function AutoHighlight() {
  return (
    <div className="w-full max-w-xs">
      <Combobox items={frameworks} autoHighlight>
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

export function Popup() {
  return (
    <Combobox
      items={countries}
      defaultValue={countries[0]}
      itemToStringLabel={(country: Country) => country.label}
      itemToStringValue={(country: Country) => country.label}
    >
      <ComboboxTrigger render={<Button variant="outline" className="w-52 justify-between font-normal" />}>
        <ComboboxValue />
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput showTrigger={false} placeholder="검색" />
        <ComboboxEmpty>결과가 없습니다.</ComboboxEmpty>
        <ComboboxList>
          {(country: Country) => (
            <ComboboxItem key={country.code} value={country}>
              {country.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

export function InputGroup() {
  return (
    <Combobox items={cityGroups}>
      <ComboboxInput placeholder="시간대 선택">
        <InputGroupAddon>
          <GlobeIcon />
        </InputGroupAddon>
      </ComboboxInput>
      <ComboboxContent alignOffset={-28} className="w-60">
        <ComboboxEmpty>결과가 없습니다.</ComboboxEmpty>
        <ComboboxList>
          {(group: { value: string; items: string[] }) => (
            <ComboboxGroup key={group.value} items={group.items}>
              <ComboboxLabel>{group.value}</ComboboxLabel>
              <ComboboxCollection>
                {(city: string) => (
                  <ComboboxItem key={city} value={city}>
                    {city}
                  </ComboboxItem>
                )}
              </ComboboxCollection>
            </ComboboxGroup>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

const fruitsAr = ["تفاح", "موز", "برتقال", "عنب", "مانجو"]

export function Rtl() {
  return (
    <div dir="rtl" className="flex w-full max-w-xs flex-col items-end gap-2">
      <DirectionProvider direction="rtl">
        <Combobox items={fruitsAr}>
          <ComboboxInput placeholder="اختر فاكهة" />
          <ComboboxContent>
            <ComboboxEmpty>لا توجد نتائج.</ComboboxEmpty>
            <ComboboxList>
              {(item: string) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </DirectionProvider>
      <p className="text-xs text-muted-foreground">
        글자와 화살표 방향이 오른쪽에서 왼쪽으로 뒤집힙니다.
      </p>
    </div>
  )
}
