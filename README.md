# components

기획 에이전트가 사용할 UI 컴포넌트 라이브러리입니다.

목적은 컴포넌트를 많이 만드는 것이 아니라, **하나의 구조에 여러 디자인을 입힐 수 있게** 만드는 것입니다.
IA에서 생성한 화면이 와이어프레임으로 나오고, 같은 화면에 실제 디자인이 입혀지고,
그 과정에서 구조가 흔들리지 않아야 합니다.

설계 배경과 결정 근거는 [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)에 있습니다.

## 지금 어디까지 되어 있나

**Phase 0 — 완료.** 프로젝트 틀, 토큰 3계층 골격, 하드코딩 차단 검사, 자동 검사 설정.

**Phase 1 — 검토 중.** 컴포넌트 8종(Button, Input, Label, Card, Badge, Accordion, Select, Dialog)과
스킨 3종(와이어프레임, SaaS 브랜드, 극단 브랜드). 첫 화면에서 스킨을 바꿔가며
컴포넌트 코드가 전혀 바뀌지 않는데도 디자인이 완전히 달라지는 것을 확인할 수 있습니다.

다음은 Phase 2입니다. 레이아웃 프리셋을 도입해 배치 변경까지 흡수되는지 확인합니다.

## 실행 방법

```bash
npm install
npm run dev
```

http://localhost:3000 에서 확인합니다.

## 검사 명령

```bash
npm run verify
```

다섯 가지를 순서대로 검사합니다.

| 명령 | 검사하는 것 |
| --- | --- |
| `npm run guard:selftest` | 차단 규칙 자체가 고장나지 않았는지 |
| `npm run guard` | 컴포넌트에 디자인 값이 하드코딩되어 있지 않은지 |
| `npm run lint` | 코드 스타일 |
| `npm run typecheck` | 타입 오류 |
| `npm run build` | 실제로 빌드되는지 |

같은 검사가 GitHub에서 자동으로 돌아갑니다. Pull Request를 올리면 결과가 표시되고,
하나라도 실패하면 빨간 X가 뜹니다.

## 가장 중요한 규칙 하나

컴포넌트 코드에는 **색상, 모서리 반경, 그림자, 테두리 두께를 직접 쓸 수 없습니다.**

```tsx
// 안 됨
<div className="rounded-lg bg-blue-500 shadow-md" />

// 됨
<div className="rounded-(--t3-card-radius) bg-(--t2-brand) shadow-(--t3-card-shadow)" />
```

이 규칙이 지켜지는 동안에만 "디자인을 100% 교체한다"가 성립합니다.
값은 `styles/tokens/`와 `styles/skins/`에만 존재합니다.

규칙을 위반한 코드를 올리면 `npm run guard`가 위치와 수정 방법을 알려주고 실패합니다.
불가피한 예외는 그 줄에 사유를 적습니다.

```tsx
const color = "#3B82F6"; // token-guard-allow: 외부 SDK가 hex만 받는다
```

## 새 컴포넌트를 추가할 때

1. `components/ui/` 에 파일을 만든다
2. 모든 파트에 `data-slot` 을 붙인다 — 외부에서 스타일을 덮어쓸 수 있는 지점이 된다
3. `className` 은 항상 `cn()` 으로 병합한다. 덮어쓰지 않는다
4. 디자인 값이 필요하면 `styles/tokens/tier3.css` 에 토큰을 먼저 추가한다
5. `npm run verify` 로 확인한다

## 폴더 구조

```
app/                  Next.js 앱 — 문서 사이트 겸 레지스트리 호스팅
components/ui/        컴포넌트. 디자인 값을 갖지 않는다
lib/                  공용 유틸리티
styles/
  tokens/
    tier1.css         원시 토큰. 리터럴 값이 존재하는 유일한 곳
    tier2.css         의미 토큰. 컴포넌트가 읽는 계층
    tier3.css         컴포넌트 토큰. 개별 예외를 흡수하는 곳
  skins/              스킨 정의. 값의 집합이며 구조 지식이 없다
scripts/
  token-guard.mjs     하드코딩 차단 검사
docs/
  ARCHITECTURE.md     설계 배경과 결정 근거
```

## 기술 선택

Next.js 16, React 19, TypeScript, Tailwind CSS 4, Base UI, Biome.

Base UI는 현재 `1.0.0-rc` 단계입니다. 정식 출시 전이므로 버전을 고정해두었고,
올릴 때는 별도로 확인이 필요합니다.
