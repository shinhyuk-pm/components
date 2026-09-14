import Link from "next/link"

import { components } from "@/components/component-registry"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <>
      <header className="mb-12">
        <h1 className="text-3xl font-semibold tracking-tight text-balance">
          신혁이의 컴포넌트 모음집
        </h1>
        <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <div>
            <dt className="text-muted-foreground">기반 라이브러리</dt>
            <dd className="font-medium">@base-ui/react</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">프레임워크</dt>
            <dd className="font-medium">Next.js (App Router)</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">스타일</dt>
            <dd className="font-medium">Tailwind CSS v4 · base-nova</dd>
          </div>
        </dl>
        <p className="mt-6 text-xs text-muted-foreground">
          어느 페이지에서든{" "}
          <kbd className="rounded border px-1.5 py-0.5 font-mono">d</kbd> 키를
          누르면 다크 모드로 전환됩니다.
        </p>
      </header>

      <div className="grid gap-3 sm:grid-cols-2">
        {components.map((component, index) => {
          const count = component.variants?.length ?? 1

          return (
            <Link
              key={component.slug}
              href={`/components/${component.slug}`}
              className="group flex flex-col gap-1.5 rounded-xl border bg-card p-4 transition-colors hover:bg-accent"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-muted-foreground tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-medium">{component.name}</span>
                <Badge variant="outline" className="ml-auto">
                  유형 {count}
                </Badge>
              </div>
              <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                {component.summary}
              </p>
            </Link>
          )
        })}
      </div>
    </>
  )
}
