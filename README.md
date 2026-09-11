# components

기획 에이전트가 사용할 UI 컴포넌트 라이브러리입니다.

목적은 컴포넌트를 많이 만드는 것이 아니라, **기획 문서 하나가 와이어프레임과
최종 디자인까지 다시 쓰이지 않고 그대로 흘러가게** 만드는 것입니다.

```
기능·정책 → IA ─┬─→ 화면 명세 ──→ 렌더러 ──→ 화면
                │     (AI 생성)            ↑
                └─→ 앱 셸 구조             │
                                           │
서비스 성격 ────→ 스킨 표 ──→ 생성 함수 ────┘
                  (AI 생성)   (결정론적)
```

AI는 두 곳에만 개입합니다. 화면 명세와 스킨 표. 둘 다 형식이 정해진 데이터이므로
검증할 수 있고 재현됩니다. 나머지는 기계적 변환입니다.

- **처음 보신다면** — [docs/CHECKLIST.md](docs/CHECKLIST.md) 에 브라우저만으로
  전부 확인하는 방법이 단계별로 있습니다
- **설계 근거** — [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
- **없는 화면이 필요할 때** — [docs/EXTENDING.md](docs/EXTENDING.md)

## 지금 어디까지 되어 있나

| Phase | 내용 | 상태 |
| --- | --- | --- |
| 0 | 하드코딩 차단 검사, 프로젝트 틀 | 완료 |
| 1 | 토큰 3계층, 컴포넌트 8종, 스킨 교체 | 완료 |
| 2 | 레이아웃 프리셋, 밀도 축 | 완료 |
| 3 | 화면 명세와 렌더러, 페이지 원형 3종 | 완료 |
| 4 | 스킨 생성기, 대비 자동 보정, AI 생성 경로 | 완료 |
| 5 | 원형 7종, 앱 셸, 가짜 데이터, 프로젝트 예시 | 완료 |
| 6 | 원형에 맞지 않는 화면을 넘기는 경로 | 완료 |

## 실행 방법

```bash
npm install
npm run dev
```

http://localhost:3000 에서 확인합니다.

AI 생성 기능을 쓰려면 `ANTHROPIC_API_KEY` 환경 변수가 필요합니다.
없어도 편집기로 명세와 스킨 표를 직접 고칠 수 있습니다.
모델은 `ANTHROPIC_MODEL` 로 바꿀 수 있습니다.

## 검사 명령

```bash
npm run verify
```

| 명령 | 검사하는 것 |
| --- | --- |
| `npm run guard:selftest` | 차단 규칙 자체가 고장나지 않았는지 |
| `npm run guard` | 컴포넌트에 디자인 값이 하드코딩되어 있지 않은지 |
| `npm run skin:check` | 가능한 스킨 조합 전부에서 대비 기준을 지키는지 |
| `npm run lint` | 코드 스타일 |
| `npm run typecheck` | 타입 오류 |
| `npm run build` | 실제로 빌드되는지 |

같은 검사가 GitHub에서 자동으로 돕니다.

## 가장 중요한 규칙 하나

컴포넌트 코드에는 **색상, 모서리 반경, 그림자, 테두리 두께를 직접 쓸 수 없습니다.**

```tsx
// 안 됨
<div className="rounded-lg bg-blue-500 shadow-md" />

// 됨
<div className="rounded-(--t3-card-radius) bg-(--t2-brand) shadow-(--t3-card-shadow)" />
```

이 규칙이 지켜지는 동안에만 "디자인을 100% 교체한다"가 성립합니다.
값은 `styles/tokens/`, `styles/skins/`, 그리고 생성 함수에만 존재합니다.

불가피한 예외는 그 줄에 사유를 적습니다.

```tsx
const color = "#3B82F6"; // token-guard-allow: 외부 SDK가 hex만 받는다
```

## 폴더 구조

```
app/
  page.tsx            확인 화면 — 프로젝트 전체 보기와 화면 하나 보기
  llms.txt/           AI 도구가 읽는 설명서
  api/generate/       화면 명세와 스킨 표 생성
components/
  ui/                 프리미티브. 디자인 값을 갖지 않는다
  blocks/             조합 컴포넌트와 렌더러
lib/
  screen-spec.ts      화면 명세 타입과 검증기
  skin-table.ts       AI가 채우는 스킨 표
  skin-generator.ts   표를 CSS 변수로 확장하고 대비를 보정
  ia-tree.ts          기획서 목차에서 내비게이션 파생
  mock-data.ts        열 이름으로 그럴듯한 값 생성
  component-catalog.ts AI가 읽는 부품 설명
styles/
  tokens/             Tier 1·2·3 과 밀도
  skins/              손으로 적은 스킨
  layouts/            배치 프리셋
scripts/
  token-guard.mjs     하드코딩 차단
  skin-check.mjs      대비 전수 검사
```

## 기술 선택

Next.js 16, React 19, TypeScript, Tailwind CSS 4, Base UI, Biome.

Base UI는 현재 `1.0.0-rc` 단계입니다. 정식 출시 전이므로 버전을 고정해두었습니다.
