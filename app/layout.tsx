import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { components } from "@/components/component-registry"
import { DocsSidebar } from "@/components/docs-sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata = {
  title: "shadcn/ui 컴포넌트 모음",
  description: "Base UI 변형으로 받은 컴포넌트 22개를 한곳에서 확인합니다.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const items = components.map(({ slug, name }) => ({ slug, name }))

  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body>
        <ThemeProvider>
          <TooltipProvider>
            <div className="mx-auto flex min-h-svh w-full max-w-7xl gap-10 px-6 py-10 lg:px-10">
              <DocsSidebar items={items} />
              <main className="min-w-0 flex-1">{children}</main>
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
