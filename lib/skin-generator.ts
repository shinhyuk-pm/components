/**
 * 스킨 생성기
 *
 * 스킨 표(20칸 미만)를 받아 컴포넌트가 읽는 CSS 변수 전부를 만든다.
 * 같은 표를 넣으면 항상 같은 결과가 나온다. 무작위성이 없다.
 *
 * 여기가 품질의 하한선을 책임지는 곳이다.
 * AI가 이상한 조합을 내놓아도 대비 미달, 색 충돌, 여백 불균형은
 * 이 함수를 통과하면서 구조적으로 제거된다.
 * 못생길 수는 있어도 망가지지는 않는다.
 *
 * token-guard-allow-file: 이 파일이 토큰을 생성하는 계층이다.
 * 색상 리터럴이 존재해야 하는 유일한 코드 파일이며, 컴포넌트는 여전히 결과만 읽는다.
 */

import type { SkinTable } from "@/lib/skin-table";

const CHROMA_SCALE = { zero: 0, muted: 0.04, balanced: 0.09, vivid: 0.16 } as const;
const RADIUS_PX = { none: 0, sm: 6, md: 10, lg: 18, full: 999 } as const;
const DENSITY_SCALE = { compact: 0.75, comfortable: 1, airy: 1.7 } as const;

const HEADING_STACK = {
  sans: "ui-sans-serif, system-ui, sans-serif",
  serif: 'Georgia, "Times New Roman", serif',
} as const;

const BODY_STACK = "ui-sans-serif, system-ui, sans-serif";

/** WCAG AA 본문 기준 */
const MIN_CONTRAST_BODY = 4.5;
/** WCAG AA 큰 글씨 및 보조 텍스트 기준 */
const MIN_CONTRAST_MUTED = 3;

type Oklch = { l: number; c: number; h: number };

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

/** oklch 를 sRGB 로 변환한다. 대비 계산에만 쓰인다. */
function oklchToSrgb({ l, c, h }: Oklch): [number, number, number] {
  const hr = (h * Math.PI) / 180;
  const a = c * Math.cos(hr);
  const b = c * Math.sin(hr);

  const l_ = l + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = l - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = l - 0.0894841775 * a - 1.291485548 * b;

  const L = l_ * l_ * l_;
  const M = m_ * m_ * m_;
  const S = s_ * s_ * s_;

  const lin = [
    4.0767416621 * L - 3.3077115913 * M + 0.2309699292 * S,
    -1.2684380046 * L + 2.6097574011 * M - 0.3413193965 * S,
    -0.0041960863 * L - 0.7034186147 * M + 1.707614701 * S,
  ];

  return lin.map((v) => clamp(v, 0, 1)) as [number, number, number];
}

/** 상대 휘도. WCAG 정의를 따른다. */
function relativeLuminance(rgb: [number, number, number]) {
  const [r, g, b] = rgb.map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrastRatio(a: Oklch, b: Oklch) {
  const la = relativeLuminance(oklchToSrgb(a));
  const lb = relativeLuminance(oklchToSrgb(b));
  const [hi, lo] = la > lb ? [la, lb] : [lb, la];
  return (hi + 0.05) / (lo + 0.05);
}

/**
 * 배경 대비 기준을 넘길 때까지 전경색의 밝기를 밀어낸다.
 * 밝은 배경이면 어둡게, 어두운 배경이면 밝게 간다.
 */
function ensureContrast(fg: Oklch, bg: Oklch, minimum: number): Oklch {
  const goDarker = relativeLuminance(oklchToSrgb(bg)) > 0.35;
  let candidate = { ...fg };

  for (let step = 0; step < 60; step += 1) {
    if (contrastRatio(candidate, bg) >= minimum) return candidate;
    candidate = {
      ...candidate,
      l: clamp(candidate.l + (goDarker ? -0.015 : 0.015), 0, 1),
    };
  }
  return { ...candidate, l: goDarker ? 0 : 1 };
}

function fmt({ l, c, h }: Oklch) {
  const round = (n: number, digits: number) => Number(n.toFixed(digits));
  return c === 0
    ? `oklch(${round(l, 3)} 0 0)`
    : `oklch(${round(l, 3)} ${round(c, 3)} ${round(h, 1)})`;
}

function shadow(level: SkinTable["elevation"], hue: number, dark: boolean) {
  if (level === "flat") return "none";
  const tint = dark ? "oklch(0 0 0" : `oklch(0.3 0.05 ${hue.toFixed(1)}`;
  if (level === "subtle") return `0 1px 2px ${tint} / ${dark ? 0.4 : 0.08})`;
  if (level === "lifted") return `0 6px 16px -6px ${tint} / ${dark ? 0.5 : 0.16})`;
  return `0 16px 40px -12px ${tint} / ${dark ? 0.65 : 0.28})`;
}

export type GeneratedSkin = {
  /** data-skin 속성에 넣을 값 */
  id: string;
  /** CSS 변수 이름과 값 */
  variables: Record<string, string>;
  /** 대비 검사 결과. 보정 후 최종 수치다. */
  contrast: { pair: string; ratio: number; minimum: number }[];
};

export function generateSkin(table: SkinTable, id = "generated"): GeneratedSkin {
  const dark = table.mood === "dark";
  const chroma = CHROMA_SCALE[table.chroma];
  const hue = chroma === 0 ? 0 : table.brandHue;

  // 배경 계열. 색조를 아주 옅게만 섞어 중성을 유지한다.
  const surfaceChroma = chroma === 0 ? 0 : Math.min(chroma * 0.06, 0.02);
  const surface: Oklch = { l: dark ? 0.2 : 0.98, c: surfaceChroma, h: hue };
  const raised: Oklch = { l: dark ? 0.25 : 1, c: surfaceChroma, h: hue };
  const overlay: Oklch = { l: dark ? 0.12 : 0.22, c: surfaceChroma, h: hue };
  const tint: Oklch = { l: dark ? 0.32 : 0.94, c: chroma * 0.35, h: hue };

  const borderLightness = dark ? 0.4 : 0.89;
  const borderBoost = table.border === "strong" ? (dark ? 0.12 : -0.14) : 0;
  const border: Oklch = { l: borderLightness + borderBoost, c: chroma * 0.12, h: hue };

  // 전경 계열. 시작값을 잡고 대비 기준까지 밀어낸다.
  const text = ensureContrast(
    { l: dark ? 0.96 : 0.24, c: chroma * 0.12, h: hue },
    surface,
    MIN_CONTRAST_BODY,
  );
  const muted = ensureContrast(
    { l: dark ? 0.73 : 0.53, c: chroma * 0.2, h: hue },
    surface,
    MIN_CONTRAST_MUTED,
  );
  const brand = ensureContrast(
    { l: dark ? 0.79 : 0.52, c: chroma, h: hue },
    surface,
    MIN_CONTRAST_MUTED,
  );
  const brandHover: Oklch = { ...brand, l: clamp(brand.l + (dark ? 0.07 : -0.07), 0, 1) };
  const brandFg = ensureContrast(
    { l: dark ? 0.22 : 0.99, c: chroma * 0.25, h: hue },
    brand,
    MIN_CONTRAST_BODY,
  );

  const radius = RADIUS_PX[table.radius];
  const buttonRadius = RADIUS_PX[table.buttonRadius ?? table.radius];

  const variables: Record<string, string> = {
    "--t2-surface": fmt(surface),
    "--t2-raised": fmt(raised),
    "--t2-overlay": fmt(overlay),
    "--t2-border": fmt(border),
    "--t2-text": fmt(text),
    "--t2-muted": fmt(muted),
    "--t2-brand": fmt(brand),
    "--t2-brand-hover": fmt(brandHover),
    "--t2-brand-fg": fmt(brandFg),
    "--t2-tint": fmt(tint),
    "--t2-ring": fmt(brand),

    "--t3-scale": String(DENSITY_SCALE[table.density]),
    "--t3-border-width": table.border === "dashed" ? "1.5px" : "1px",
    "--t3-border-style": table.border === "dashed" ? "dashed" : "solid",
    "--t3-body-font": BODY_STACK,
    "--t3-heading-font": HEADING_STACK[table.headingFont],

    "--t3-button-radius": `${buttonRadius}px`,
    "--t3-button-shadow": table.elevation === "dramatic" ? shadow("subtle", hue, dark) : "none",
    "--t3-card-radius": `${radius}px`,
    "--t3-card-shadow": shadow(table.elevation, hue, dark),
    "--t3-input-radius": `${Math.min(radius, 14)}px`,
    "--t3-badge-radius": `${buttonRadius === 999 ? 999 : Math.min(radius, 8)}px`,
    "--t3-dialog-radius": `${Math.min(radius * 1.4, 28)}px`,
    "--t3-dialog-shadow": shadow(
      table.elevation === "flat" ? "lifted" : table.elevation,
      hue,
      dark,
    ),
  };

  const contrast = [
    { pair: "본문 / 배경", ratio: contrastRatio(text, surface), minimum: MIN_CONTRAST_BODY },
    { pair: "보조 / 배경", ratio: contrastRatio(muted, surface), minimum: MIN_CONTRAST_MUTED },
    { pair: "브랜드 / 배경", ratio: contrastRatio(brand, surface), minimum: MIN_CONTRAST_MUTED },
    { pair: "버튼 글자 / 버튼", ratio: contrastRatio(brandFg, brand), minimum: MIN_CONTRAST_BODY },
    { pair: "본문 / 카드", ratio: contrastRatio(text, raised), minimum: MIN_CONTRAST_BODY },
  ].map((c) => ({ ...c, ratio: Number(c.ratio.toFixed(2)) }));

  return { id, variables, contrast };
}

/** 생성 결과를 style 속성에 바로 넣을 수 있는 형태로 바꾼다. */
export function toStyleObject(skin: GeneratedSkin): Record<string, string> {
  return skin.variables;
}
