"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

type Item = { slug: string; name: string }

export function DocsSidebar({ items }: { items: Item[] }) {
  const pathname = usePathname()

  return (
    <aside className="sticky top-10 hidden h-[calc(100svh-5rem)] w-56 shrink-0 overflow-y-auto lg:block">
      <Link
        href="/"
        className={cn(
          "mb-3 block text-xs font-semibold tracking-wide uppercase transition-colors",
          pathname === "/"
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        Components
      </Link>
      <nav className="flex flex-col gap-0.5">
        {items.map((item, index) => {
          const href = `/components/${item.slug}`
          const active = pathname === href

          return (
            <Link
              key={item.slug}
              href={href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex items-baseline gap-2 rounded-md px-2 py-1.5 text-sm transition-colors",
                active
                  ? "bg-accent font-medium text-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              )}
            >
              <span className="w-5 shrink-0 font-mono text-xs tabular-nums opacity-60">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.name}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
