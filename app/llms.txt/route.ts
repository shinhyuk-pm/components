import { catalogAsText } from "@/lib/component-catalog";
import { ARCHETYPES, FIELD_KINDS } from "@/lib/screen-spec";
import {
  BORDER_LEVELS,
  CHROMA_LEVELS,
  DENSITY_LEVELS,
  ELEVATION_LEVELS,
  FONT_ROLES,
  MOOD_LEVELS,
  RADIUS_LEVELS,
} from "@/lib/skin-table";

/**
 * AI 도구가 읽는 설명서.
 *
 * 사람용 문서와 다르다. 사람은 화면을 보고 판단하지만
 * AI는 "언제 쓰는가"가 글로 적혀 있어야 고른다.
 */
export function GET() {
  const body = `# 기획 에이전트용 컴포넌트 라이브러리

이 라이브러리는 화면을 코드로 만들지 않는다.
AI는 두 가지 데이터만 생성한다. 나머지는 전부 결정론적 변환이다.

1. 화면 명세 — 무엇이 들어가는가
2. 스킨 표 — 어떤 인상인가

CSS를 쓰지 말 것. 색상값을 직접 정하지 말 것. 배치를 정하지 말 것.

## 화면 명세

archetype 은 다음 중 하나여야 한다: ${ARCHETYPES.join(" | ")}
필드 kind 는 다음 중 하나여야 한다: ${FIELD_KINDS.join(" | ")}

공통 구조:
{
  "archetype": "list",
  "header": { "title": string, "description"?: string, "badge"?: string,
              "actions"?: [{ "label": string, "emphasis"?: "primary"|"secondary"|"ghost" }] }
}

list 는 table 이 필수다:
{ "stats"?: [{"label","value","delta"?}],
  "filters"?: [{"label","kind","options"?,"placeholder"?}],
  "table": { "columns": string[], "rows"?: string[][], "sampleRows"?: number } }
rows 를 직접 적으면 각 줄이 columns 와 칸 수가 정확히 같아야 한다.

detail 은 summary, sections, faq 중 최소 하나가 필요하다:
{ "summary"?: [{"label","value"}],
  "sections"?: [{"title","description"?}],
  "faq"?: [{"question","answer"}] }

form 은 groups 와 submit 이 필수다:
{ "groups": [{"title","description"?,"fields":[{"label","kind","required"?,"options"?,"placeholder"?}]}],
  "submit": {"label"}, "cancel"?: {"label"} }
kind 가 select 이면 options 가 최소 1개 있어야 한다.

dashboard 는 stats 가 필수다:
{ "stats": [{"label","value","delta"?}],
  "panels"?: [{"title","description"?,"items"?:[{"label","value"}]}],
  "table"?: { "columns": string[], "sampleRows"?: number } }

settings 는 groups 가 필수다:
{ "groups": [{"title","description"?,"options":[{"label","description"?,"enabled"?}]}] }

wizard 는 steps 와 submit 이 필수다:
{ "steps": [{"title","description"?,"fields":[...]}], "submit": {"label"} }

표 내용은 직접 적지 않아도 된다. rows 대신 sampleRows 에 줄 수만 적으면
열 이름에 맞는 값이 자동 생성된다. 이름, 이메일, 날짜, 금액, 비율, 상태, 등급을 인식한다.

## 스킨 표

색을 직접 고르지 말고 아래 칸만 채운다. 생성 함수가 색과 대비를 만든다.

{
  "name": string,
  "brandHue": 0-360,
  "chroma": ${CHROMA_LEVELS.join(" | ")},
  "mood": ${MOOD_LEVELS.join(" | ")},
  "radius": ${RADIUS_LEVELS.join(" | ")},
  "elevation": ${ELEVATION_LEVELS.join(" | ")},
  "border": ${BORDER_LEVELS.join(" | ")},
  "headingFont": ${FONT_ROLES.join(" | ")},
  "density": ${DENSITY_LEVELS.join(" | ")},
  "buttonRadius"?: ${RADIUS_LEVELS.join(" | ")}
}

색조 참고: 0 빨강, 30 주황, 60 노랑, 140 초록, 200 청록, 255 파랑, 300 보라.

## 원형에 맞지 않을 때

억지로 맞추지 말 것. 어느 원형도 적절하지 않으면 handoff 로 답한다.
잘못 맞춘 화면은 빈 화면보다 나쁘다.

{ "archetype": "handoff",
  "header": { "title": 화면 이름 },
  "reason": 왜 기존 원형으로 표현할 수 없는지,
  "suggestion"?: 사람이 어떻게 만들면 좋을지 }

## 컴포넌트

${catalogAsText()}`;

  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
