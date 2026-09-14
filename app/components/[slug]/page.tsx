import Link from "next/link"
import { notFound } from "next/navigation"

import { components } from "@/components/component-registry"
import { Separator } from "@/components/ui/separator"

export function generateStaticParams() {
  return components.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const component = components.find((c) => c.slug === slug)

  return {
    title: component ? `${component.name} — 컴포넌트 모음` : "찾을 수 없음",
    description: component?.summary,
  }
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const index = components.findIndex((c) => c.slug === slug)

  if (index === -1) {
    notFound()
  }

  const component = components[index]
  const prev = index > 0 ? components[index - 1] : null
  const next = index < components.length - 1 ? components[index + 1] : null

  const variants = component.variants ?? [
    { id: "basic", name: "기본", Demo: component.Demo! },
  ]

  return (
    <>
      <header className="mb-10">
        <p className="font-mono text-xs text-muted-foreground tabular-nums">
          {String(index + 1).padStart(2, "0")} / {components.length}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          {component.name}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {component.summary}
        </p>

        {component.note ? (
          <p className="mt-4 max-w-2xl rounded-md border border-dashed px-3 py-2 text-xs leading-relaxed text-muted-foreground">
            {component.note}
          </p>
        ) : null}

        {variants.length > 1 ? (
          <nav className="mt-6 flex flex-wrap gap-2">
            {variants.map((variant) => (
              <a
                key={variant.id}
                href={`#${variant.id}`}
                className="rounded-md border px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {variant.name}
              </a>
            ))}
          </nav>
        ) : null}
      </header>

      <div className="flex flex-col gap-14">
        {variants.map((variant) => {
          const { Demo } = variant

          return (
            <section key={variant.id} id={variant.id} className="scroll-mt-10">
              <h2 className="text-lg font-semibold tracking-tight">
                {variant.name}
              </h2>
              {variant.description ? (
                <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {variant.description}
                </p>
              ) : null}
              <div className="mt-4 flex min-h-40 w-full items-center justify-center rounded-xl border bg-card p-8">
                <Demo />
              </div>
            </section>
          )
        })}
      </div>

      <nav className="mt-16 flex items-center justify-between gap-4 border-t pt-6 text-sm">
        {prev ? (
          <Link
            href={`/components/${prev.slug}`}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            ← {prev.name}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/components/${next.slug}`}
            className="ml-auto text-muted-foreground transition-colors hover:text-foreground"
          >
            {next.name} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </>
  )
}
