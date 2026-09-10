export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center gap-4 p-8">
      <h1 className="text-xl font-medium">컴포넌트 라이브러리</h1>
      <p className="text-sm text-(--t2-muted)">
        Phase 0 완료. 토큰 3계층 골격과 하드코딩 차단 검사가 설정되었습니다.
      </p>
      <p className="text-sm text-(--t2-muted)">
        다음 단계는 Phase 1 — 스킨 3종과 컴포넌트 8개를 올려 스킨 교체가 실제로 되는지 증명합니다.
      </p>
    </main>
  );
}
