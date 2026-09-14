"use client"

import * as React from "react"
import Link from "next/link"
import { DirectionProvider } from "@base-ui/react/direction-provider"
import { CircleAlertIcon, CircleCheckIcon, CircleDashedIcon } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components = [
  { title: "Alert Dialog", href: "/components/alert-dialog", description: "중요한 내용을 띄우고 응답을 요구하는 확인 창입니다." },
  { title: "Hover Card", href: "/components/hover-card", description: "링크에 마우스를 올리면 뜨는 미리보기 카드입니다." },
  { title: "Combobox", href: "/components/combobox", description: "입력해서 걸러내며 고르는 선택 상자입니다." },
  { title: "Data Table", href: "/components/data-table", description: "정렬·필터가 되는 데이터 표입니다." },
  { title: "Dialog", href: "/components/dialog", description: "화면 가운데 뜨는 모달 창입니다." },
  { title: "Drawer", href: "/components/drawer", description: "가장자리에서 밀려 나오는 패널입니다." },
]

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink render={<Link href={href} />}>
        <div className="flex flex-col gap-1 text-sm">
          <div className="leading-none font-medium">{title}</div>
          <div className="line-clamp-2 text-muted-foreground">{children}</div>
        </div>
      </NavigationMenuLink>
    </li>
  )
}

export function Basic() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>시작하기</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-96">
              <ListItem href="/" title="소개">
                Tailwind CSS로 만든 재사용 가능한 컴포넌트 모음입니다.
              </ListItem>
              <ListItem href="/components/button" title="설치">
                의존성을 설치하고 앱 구조를 잡는 방법입니다.
              </ListItem>
              <ListItem href="/components/badge" title="타이포그래피">
                제목·문단·목록 등의 글자 스타일입니다.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger>컴포넌트</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((c) => (
                <ListItem key={c.title} title={c.title} href={c.href}>
                  {c.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>아이콘 포함</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px]">
              <li>
                <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2" />}>
                  <CircleAlertIcon />
                  백로그
                </NavigationMenuLink>
                <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2" />}>
                  <CircleDashedIcon />
                  할 일
                </NavigationMenuLink>
                <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2" />}>
                  <CircleCheckIcon />
                  완료
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink render={<Link href="/" />} className={navigationMenuTriggerStyle()}>
            문서
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export function LinkOnly() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {[
          { label: "홈", href: "/" },
          { label: "버튼", href: "/components/button" },
          { label: "카드", href: "/components/card" },
          { label: "아바타", href: "/components/avatar" },
        ].map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink render={<Link href={item.href} />} className={navigationMenuTriggerStyle()}>
              {item.label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export function Rtl() {
  return (
    <div dir="rtl" className="flex flex-col items-center gap-3">
      <DirectionProvider direction="rtl">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>البدء</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-80" dir="rtl">
                  <ListItem href="/" title="مقدمة">
                    مكونات قابلة لإعادة الاستخدام مبنية بـ Tailwind CSS.
                  </ListItem>
                  <ListItem href="/components/button" title="التثبيت">
                    كيفية تثبيت التبعيات وهيكلة تطبيقك.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink render={<Link href="/" />} className={navigationMenuTriggerStyle()}>
                الوثائق
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </DirectionProvider>
      <p className="text-xs text-muted-foreground">메뉴 순서와 화살표 방향이 오른쪽에서 왼쪽으로 뒤집힙니다.</p>
    </div>
  )
}
