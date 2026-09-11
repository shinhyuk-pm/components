/**
 * 스킨 표
 *
 * AI가 디자인을 만들 때 채우는 유일한 대상이다.
 * AI는 CSS를 쓰지 않고 색상값도 직접 정하지 않는다. 아래 칸만 고른다.
 *
 * 각 칸은 정해진 후보 중 하나이므로 출력 공간이 유한하고 검증할 수 있다.
 * 표에서 실제 CSS 변수로 확장하는 것은 lib/skin-generator.ts 의 결정론적 함수가 한다.
 * 색 조화, 대비 보정, 여백 리듬은 AI의 감각이 아니라 그 함수가 책임진다.
 */

export const CHROMA_LEVELS = ["zero", "muted", "balanced", "vivid"] as const;
export const RADIUS_LEVELS = ["none", "sm", "md", "lg", "full"] as const;
export const ELEVATION_LEVELS = ["flat", "subtle", "lifted", "dramatic"] as const;
export const BORDER_LEVELS = ["hairline", "strong", "dashed"] as const;
export const MOOD_LEVELS = ["light", "dark"] as const;
export const FONT_ROLES = ["sans", "serif"] as const;
export const DENSITY_LEVELS = ["compact", "comfortable", "airy"] as const;

export type SkinTable = {
  /** 사람이 알아볼 이름. 화면에만 쓰인다. */
  name: string;
  /** 브랜드 색조. 0-360. 채도가 zero면 무시된다. */
  brandHue: number;
  /** 채도 세기 */
  chroma: (typeof CHROMA_LEVELS)[number];
  /** 배경이 밝은지 어두운지 */
  mood: (typeof MOOD_LEVELS)[number];
  /** 모서리 기본값 */
  radius: (typeof RADIUS_LEVELS)[number];
  /** 그림자 세기 */
  elevation: (typeof ELEVATION_LEVELS)[number];
  /** 테두리 성격 */
  border: (typeof BORDER_LEVELS)[number];
  /** 제목 글꼴 역할 */
  headingFont: (typeof FONT_ROLES)[number];
  /** 기본 여백 밀도 */
  density: (typeof DENSITY_LEVELS)[number];
  /** 버튼만 다르게 하고 싶을 때. 비우면 radius 를 따른다. */
  buttonRadius?: (typeof RADIUS_LEVELS)[number];
};

function inList<T extends readonly string[]>(list: T, value: unknown): value is T[number] {
  return typeof value === "string" && (list as readonly string[]).includes(value);
}

export function validateSkinTable(input: unknown): {
  ok: boolean;
  errors: string[];
  table?: SkinTable;
} {
  const errors: string[] = [];
  if (typeof input !== "object" || input === null || Array.isArray(input)) {
    return { ok: false, errors: ["스킨 표는 객체여야 합니다."] };
  }
  const t = input as Record<string, unknown>;

  if (typeof t.name !== "string" || t.name.trim() === "") {
    errors.push("name 은 비어 있지 않은 문자열이어야 합니다.");
  }
  if (typeof t.brandHue !== "number" || t.brandHue < 0 || t.brandHue > 360) {
    errors.push("brandHue 는 0에서 360 사이의 숫자여야 합니다.");
  }
  if (!inList(CHROMA_LEVELS, t.chroma)) {
    errors.push(`chroma 는 ${CHROMA_LEVELS.join(" / ")} 중 하나여야 합니다.`);
  }
  if (!inList(MOOD_LEVELS, t.mood)) {
    errors.push(`mood 는 ${MOOD_LEVELS.join(" / ")} 중 하나여야 합니다.`);
  }
  if (!inList(RADIUS_LEVELS, t.radius)) {
    errors.push(`radius 는 ${RADIUS_LEVELS.join(" / ")} 중 하나여야 합니다.`);
  }
  if (!inList(ELEVATION_LEVELS, t.elevation)) {
    errors.push(`elevation 은 ${ELEVATION_LEVELS.join(" / ")} 중 하나여야 합니다.`);
  }
  if (!inList(BORDER_LEVELS, t.border)) {
    errors.push(`border 는 ${BORDER_LEVELS.join(" / ")} 중 하나여야 합니다.`);
  }
  if (!inList(FONT_ROLES, t.headingFont)) {
    errors.push(`headingFont 는 ${FONT_ROLES.join(" / ")} 중 하나여야 합니다.`);
  }
  if (!inList(DENSITY_LEVELS, t.density)) {
    errors.push(`density 는 ${DENSITY_LEVELS.join(" / ")} 중 하나여야 합니다.`);
  }
  if (t.buttonRadius !== undefined && !inList(RADIUS_LEVELS, t.buttonRadius)) {
    errors.push(`buttonRadius 는 ${RADIUS_LEVELS.join(" / ")} 중 하나여야 합니다.`);
  }

  return errors.length > 0
    ? { ok: false, errors }
    : { ok: true, errors: [], table: input as SkinTable };
}

/** 예시 표. AI 출력의 형태를 보여주는 기준점이다. */
export const SAMPLE_TABLES: SkinTable[] = [
  {
    name: "핀테크 B2B",
    brandHue: 255,
    chroma: "muted",
    mood: "light",
    radius: "sm",
    elevation: "subtle",
    border: "hairline",
    headingFont: "sans",
    density: "compact",
  },
  {
    name: "감성 커머스",
    brandHue: 25,
    chroma: "vivid",
    mood: "light",
    radius: "lg",
    elevation: "lifted",
    border: "hairline",
    headingFont: "serif",
    density: "airy",
    buttonRadius: "full",
  },
  {
    name: "야간 관제 콘솔",
    brandHue: 150,
    chroma: "balanced",
    mood: "dark",
    radius: "sm",
    elevation: "flat",
    border: "strong",
    headingFont: "sans",
    density: "compact",
  },
];
