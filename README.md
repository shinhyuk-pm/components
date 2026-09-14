# shadcn/ui Base UI 컴포넌트 카탈로그

shadcn/ui 문서의 Components 목록에서 **Accordion부터 Date Picker까지 22개**를 내려받아, 한 페이지에서 모두 확인할 수 있게 만든 Next.js 프로젝트입니다.

모든 컴포넌트는 **Base UI 변형**(`base`)으로 받았습니다. `components.json`의 `style` 값이 `base-nova`인 것으로 확인할 수 있습니다.

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 을 열면 22개가 한 페이지에 나옵니다.

> `npm install`을 반드시 먼저 실행해 주세요. 이 저장소에는 `package-lock.json`과 `node_modules`가 포함되어 있지 않습니다.

## 수록된 22개

| # | 컴포넌트 | 받은 방식 |
|---|---|---|
| 1 | Accordion | CLI 설치 |
| 2 | Alert | CLI 설치 |
| 3 | Alert Dialog | CLI 설치 |
| 4 | Aspect Ratio | CLI 설치 |
| 5 | Attachment | CLI 설치 |
| 6 | Avatar | CLI 설치 |
| 7 | Badge | CLI 설치 |
| 8 | Breadcrumb | CLI 설치 |
| 9 | Bubble | CLI 설치 |
| 10 | Button | CLI 설치 |
| 11 | Button Group | CLI 설치 |
| 12 | Calendar | CLI 설치 |
| 13 | Card | CLI 설치 |
| 14 | Carousel | CLI 설치 |
| 15 | Chart | CLI 설치 |
| 16 | Checkbox | CLI 설치 |
| 17 | Collapsible | CLI 설치 |
| 18 | Combobox | CLI 설치 |
| 19 | Command | CLI 설치 |
| 20 | Context Menu | CLI 설치 |
| 21 | Data Table | 조합 패턴 |
| 22 | Date Picker | 조합 패턴 |

### "조합 패턴"이란

22개 중 **Data Table과 Date Picker는 shadcn CLI로 받을 수 없습니다.** 레지스트리에 해당 항목이 아예 없습니다.

이 둘은 공식 문서에서도 완성된 부품이 아니라 *"기본 부품을 조합해서 직접 만드는 방법 안내"* 로 되어 있기 때문입니다.

- **Data Table** = `Table` + TanStack Table 라이브러리 (정렬·검색·선택·페이지 넘김)
- **Date Picker** = `Calendar` + `Popover` + `Button`

그래서 이 2개는 문서에 나온 조합 방식대로 직접 작성해 넣었습니다. 화면에서 보이는 결과는 나머지 20개와 동일합니다.

## 폴더 구조

```
app/
  page.tsx                 22개를 모두 보여주는 문서 페이지
  layout.tsx               전체 레이아웃 (다크모드 포함)
  globals.css              테마 색상 정의
components/
  component-registry.tsx   22개 목록과 설명을 모아둔 파일
  demos/                   컴포넌트별 예시 22개
  ui/                      CLI로 받은 컴포넌트 원본 소스
lib/utils.ts
```

`components/ui/`에는 22개보다 파일이 많습니다. CLI가 설치할 때 함께 필요한 부품(`dialog`, `popover`, `input`, `table` 등)을 자동으로 같이 받기 때문입니다.

## 사용한 버전

- Next.js 16.3.4
- React 19.2.8
- Tailwind CSS 4
- `@base-ui/react` 1.8.0
- `@tanstack/react-table` 8.21.3 (Data Table용)
- `recharts` 3.8.0 (Chart용)

## 참고

- 원본 문서: https://ui.shadcn.com/docs/components/base/accordion
- 다크 모드는 키보드 `D` 키로 전환됩니다.
