import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "컴포넌트 라이브러리",
  description: "하나의 구조에 여러 스킨을 입히는 기획용 컴포넌트 라이브러리",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" data-skin="wireframe">
      <body className="antialiased">{children}</body>
    </html>
  );
}
