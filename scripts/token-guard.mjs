#!/usr/bin/env node
/**
 * token-guard
 *
 * 컴포넌트 코드가 디자인 값을 직접 갖는 것을 금지한다.
 * 색상, 모서리 반경, 그림자, 테두리 두께는 반드시 토큰(CSS 변수)을 경유해야 한다.
 * 이 규칙이 지켜지는 동안에만 "컴포넌트를 건드리지 않고 스킨을 100% 교체한다"가 성립한다.
 *
 * 사용법
 *   node scripts/token-guard.mjs            컴포넌트 소스 검사
 *   node scripts/token-guard.mjs --selftest 규칙 자체가 작동하는지 검사
 *
 * 리터럴이 허용되는 곳
 *   styles/tokens/**  토큰 정의 (Tier 1은 리터럴 hex가 있어야 한다)
 *   styles/skins/**   스킨 정의 (스킨은 값의 집합이다)
 *
 * 한 줄만 예외를 두려면 그 줄에 사유를 적는다
 *   token-guard-allow: 외부 SDK가 hex만 받는다
 */

import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const ROOT = process.cwd();

const SCAN_DIRS = ["registry", "components", "app", "lib"];
const EXEMPT_DIRS = ["styles/tokens", "styles/skins", "node_modules", ".next"];
const EXTENSIONS = [".ts", ".tsx", ".js", ".jsx", ".css"];

const PALETTE =
  "slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose";
const PROPS =
  "bg|text|border|ring|fill|stroke|from|via|to|outline|decoration|divide|shadow|accent|caret|placeholder";

const RULES = [
  {
    id: "hex-color",
    pattern: /#(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})(?![0-9a-zA-Z])/g,
    skipLine: /href=|xlink:href=|import |from ["']/,
    hint: "Tier 1 토큰(styles/tokens/tier1.css)에 이름을 주고 var()로 참조한다",
  },
  {
    id: "color-function",
    pattern: /\b(?:rgb|rgba|hsl|hsla|oklch|oklab|lab|lch|color-mix)\s*\(/g,
    hint: "색상 계산은 토큰 레이어의 일이다. 컴포넌트는 var(--t2-*)만 읽는다",
  },
  {
    id: "palette-utility",
    pattern: new RegExp(`\\b(?:${PROPS})-(?:${PALETTE})-\\d{2,3}\\b`, "g"),
    hint: "의미 토큰으로 바꾼다. 예: bg-blue-500 -> bg-(--t2-brand)",
  },
  {
    id: "absolute-color-utility",
    pattern: /\b(?:bg|text|border|ring|fill|stroke|divide)-(?:white|black)\b/g,
    hint: "흰색/검정도 스킨에 따라 달라진다. bg-(--t2-raised) 처럼 쓴다",
  },
  {
    id: "radius-literal",
    pattern:
      /\brounded(?:-(?:t|b|l|r|tl|tr|bl|br|s|e|ss|se|es|ee))?-(?:none|xs|sm|md|lg|xl|2xl|3xl|4xl|full)\b/g,
    hint: "모서리는 Tier 3 토큰이다. rounded-(--t3-card-radius) 처럼 쓴다",
  },
  {
    id: "shadow-literal",
    pattern: /\bshadow-(?:2xs|xs|sm|md|lg|xl|2xl|inner|none)\b/g,
    hint: "그림자는 Tier 3 토큰이다. shadow-(--t3-card-shadow) 처럼 쓴다",
  },
  {
    id: "border-width-literal",
    pattern: /\bborder-(?:0|2|4|8)\b/g,
    hint: "테두리 두께는 Tier 3 토큰이다. border-(length:--t3-border-width) 처럼 쓴다",
  },
];

const ALLOW_MARKER = /token-guard-allow\s*:\s*\S/;
const ALLOW_FILE_MARKER = /token-guard-allow-file\s*:\s*\S/;

function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const rel = relative(ROOT, full).split(sep).join("/");
    if (EXEMPT_DIRS.some((d) => rel === d || rel.startsWith(`${d}/`))) continue;
    if (statSync(full).isDirectory()) walk(full, out);
    else if (EXTENSIONS.some((e) => entry.endsWith(e))) out.push(full);
  }
  return out;
}

function inspect(source, label) {
  const findings = [];
  if (ALLOW_FILE_MARKER.test(source)) return findings;

  source.split("\n").forEach((line, i) => {
    if (ALLOW_MARKER.test(line)) return;
    for (const rule of RULES) {
      if (rule.skipLine?.test(line)) continue;
      for (const match of line.matchAll(rule.pattern)) {
        findings.push({
          file: label,
          line: i + 1,
          column: (match.index ?? 0) + 1,
          rule: rule.id,
          text: match[0],
          hint: rule.hint,
          source: line.trim(),
        });
      }
    }
  });
  return findings;
}

function scan() {
  const files = SCAN_DIRS.flatMap((d) => walk(join(ROOT, d)));
  const findings = files.flatMap((f) =>
    inspect(readFileSync(f, "utf8"), relative(ROOT, f).split(sep).join("/")),
  );

  if (files.length === 0) {
    console.log("token-guard: 검사할 컴포넌트 파일이 아직 없습니다.");
    return 0;
  }

  if (findings.length === 0) {
    console.log(`token-guard: 통과 (파일 ${files.length}개, 리터럴 0건)`);
    return 0;
  }

  console.error(`token-guard: 하드코딩된 디자인 값 ${findings.length}건\n`);
  for (const f of findings) {
    console.error(`  ${f.file}:${f.line}:${f.column}  [${f.rule}]  ${f.text}`);
    console.error(`    ${f.source}`);
    console.error(`    -> ${f.hint}\n`);
  }
  console.error(
    "컴포넌트는 디자인 값을 갖지 않습니다. 값은 styles/tokens 와 styles/skins 에만 둡니다.",
  );
  return 1;
}

const FIXTURES = [
  { code: `<div className="bg-blue-500" />`, rule: "palette-utility" },
  { code: `<div className="text-gray-100" />`, rule: "palette-utility" },
  { code: `const c = "#3B82F6"`, rule: "hex-color" },
  { code: `const c = "#fff"`, rule: "hex-color" },
  { code: `box-shadow: 0 1px 2px rgba(0,0,0,.1);`, rule: "color-function" },
  { code: `color: oklch(0.5 0.2 265);`, rule: "color-function" },
  { code: `<div className="bg-white" />`, rule: "absolute-color-utility" },
  { code: `<div className="rounded-lg" />`, rule: "radius-literal" },
  { code: `<div className="rounded-full" />`, rule: "radius-literal" },
  { code: `<div className="shadow-md" />`, rule: "shadow-literal" },
  { code: `<div className="border-2" />`, rule: "border-width-literal" },
  { code: `<div className="bg-(--t2-surface) rounded-(--t3-card-radius)" />`, rule: null },
  { code: `<div className="shadow-(--t3-card-shadow) border-(--t2-border)" />`, rule: null },
  { code: `<a href="#faq">FAQ</a>`, rule: null },
  { code: `<a href="#abc">anchor</a>`, rule: null },
  { code: `<div className="flex items-center gap-2 p-4" />`, rule: null },
  { code: `const c = "#3B82F6" // token-guard-allow: 외부 SDK 요구사항`, rule: null },
];

function selftest() {
  let failed = 0;
  for (const { code, rule } of FIXTURES) {
    const found = inspect(code, "fixture");
    const ok = rule === null ? found.length === 0 : found.some((f) => f.rule === rule);
    if (!ok) {
      failed += 1;
      console.error(
        `  실패: ${JSON.stringify(code)}\n    기대: ${rule ?? "위반 없음"}, 실제: ${
          found.map((f) => f.rule).join(", ") || "없음"
        }`,
      );
    }
  }
  if (failed > 0) {
    console.error(`\ntoken-guard selftest: ${failed}/${FIXTURES.length} 실패`);
    return 1;
  }
  console.log(`token-guard selftest: 통과 (${FIXTURES.length}개 케이스)`);
  return 0;
}

process.exit(process.argv.includes("--selftest") ? selftest() : scan());
