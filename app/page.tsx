import { ExternalLinkIcon } from "lucide-react"

import { components } from "@/components/component-registry"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function Page() {
  return (
    <div className="mx-auto flex min-h-svh w-full max-w-7xl gap-10 px-6 py-10 lg:px-10">
      <aside className="sticky top-10 hidden h-[calc(100svh-5rem)] w-56 shrink-0 overflow-y-auto lg:block">
        <p className="mb-3 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
          컴포넌트 22개
        </p>
        <nav className="flex flex-col gap-0.5">
          {components.map((component, index) => (
            <a
              key={component.slug}
              href={`#${component.slug}`}
              className="flex items-baseline gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <span className="w-5 shrink-0 font-mono text-xs tabular-nums opacity-60">
                {String(index + 1).padStart(2, "0")}
              </span>
              {component.name}
            </a>
          ))}
        </nav>
      </aside>

      <main className="min-w-0 flex-1">
        <header className="mb-12">
          <Badge variant="secondary" className="mb-4">
            Base UI 변형
          </Badge>
          <h1 className="text-3xl font-semibold tracking-tight text-balance">
            shadcn/ui 컴포넌트 22개 미리보기
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            공식 shadcn CLI로 Accordion부터 Date Picker까지 22개를 Base UI 변형으로
            내려받아 한 페이지에 모았습니다. 각 항목은 실제로 동작하니 직접 눌러 보고
            비교해 보세요.
          </p>
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
            페이지에서{" "}
            <kbd className="rounded border px-1.5 py-0.5 font-mono">d</kbd> 키를
            누르면 다크 모드로 전환됩니다.
          </p>
        </header>

        <div className="flex flex-col gap-16">
          {components.map((component, index) => {
            const { Demo } = component

            return (
              <section
                key={component.slug}
                id={component.slug}
                className="scroll-mt-10"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-xl font-semibold tracking-tight">
                    {component.name}
                  </h2>
                  <a
                    href={component.docs}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                  >
                    공식 문서
                    <ExternalLinkIcon className="size-3" />
                  </a>
                </div>

                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {component.summary}
                </p>

                {component.note ? (
                  <p className="mt-3 max-w-2xl rounded-md border border-dashed px-3 py-2 text-xs leading-relaxed text-muted-foreground">
                    {component.note}
                  </p>
                ) : null}

                <div className="mt-5 flex min-h-40 w-full items-center justify-center rounded-xl border bg-card p-8">
                  <Demo />
                </div>

                <pre className="mt-3 overflow-x-auto rounded-lg bg-muted px-4 py-3 text-xs text-muted-foreground">
                  <code>{component.command}</code>
                </pre>

                {index < components.length - 1 ? (
                  <Separator className="mt-16" />
                ) : null}
              </section>
            )
          })}
        </div>

        <footer className="mt-16 border-t pt-6 text-xs text-muted-foreground">
          모든 컴포넌트는 공식 shadcn CLI(v4)로 내려받았으며, 소스는{" "}
          <code className="font-mono">components/ui/</code> 안에 그대로 들어 있어
          자유롭게 수정할 수 있습니다.
        </footer>
      </main>
    </div>
  )
}
