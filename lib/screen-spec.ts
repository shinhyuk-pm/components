/**
 * 화면 명세
 *
 * IA에서 생성되어 와이어프레임과 최종 디자인까지 그대로 흘러가는 단일 산출물이다.
 * 여기에는 배치도 색도 없다. "무엇이 들어가는가"만 있다.
 * 그래서 스킨과 배치가 바뀌어도 이 명세는 한 글자도 바뀌지 않는다.
 *
 * AI는 이 형식에 맞는 데이터만 만들면 된다. 코드를 쓰지 않는다.
 * 형식이 정해져 있으므로 검증할 수 있고, 사람이 읽고 고칠 수 있다.
 */

export type ActionSpec = {
  label: string;
  emphasis?: "primary" | "secondary" | "ghost";
};

export type FieldSpec = {
  label: string;
  kind: "text" | "select" | "textarea";
  placeholder?: string;
  options?: string[];
  required?: boolean;
};

export type HeaderSpec = {
  title: string;
  description?: string;
  badge?: string;
  actions?: ActionSpec[];
};

export type StatSpec = { label: string; value: string; delta?: string };

export type TableSpec = {
  columns: string[];
  /** 직접 적은 내용. 없으면 sampleRows 만큼 가짜 데이터가 생성된다. */
  rows?: string[][];
  /** 생성할 줄 수. 명세를 짧게 유지하려고 쓴다. */
  sampleRows?: number;
};

export type ListPageSpec = {
  archetype: "list";
  header: HeaderSpec;
  stats?: StatSpec[];
  filters?: FieldSpec[];
  table: TableSpec;
};

export type DashboardPageSpec = {
  archetype: "dashboard";
  header: HeaderSpec;
  stats: StatSpec[];
  panels?: { title: string; description?: string; items?: { label: string; value: string }[] }[];
  table?: TableSpec;
};

export type SettingsPageSpec = {
  archetype: "settings";
  header: HeaderSpec;
  groups: {
    title: string;
    description?: string;
    options: { label: string; description?: string; enabled?: boolean }[];
  }[];
};

export type WizardPageSpec = {
  archetype: "wizard";
  header: HeaderSpec;
  steps: { title: string; description?: string; fields: FieldSpec[] }[];
  submit: ActionSpec;
};

export type DetailPageSpec = {
  archetype: "detail";
  header: HeaderSpec;
  summary?: { label: string; value: string }[];
  sections?: { title: string; description?: string }[];
  faq?: { question: string; answer: string }[];
};

export type FormPageSpec = {
  archetype: "form";
  header: HeaderSpec;
  groups: { title: string; description?: string; fields: FieldSpec[] }[];
  submit: ActionSpec;
  cancel?: ActionSpec;
};

/**
 * 원형에 맞지 않는 화면.
 *
 * AI가 억지로 맞추는 대신 이 형태로 답한다. 잘못 맞춘 화면은 빈 화면보다 나쁘다.
 * 사람이 이 화면을 만들고 나면 새 원형이나 새 프리젠테이션으로 등록한다.
 */
export type HandoffSpec = {
  archetype: "handoff";
  header: HeaderSpec;
  reason: string;
  suggestion?: string;
};

export type ScreenSpec =
  | ListPageSpec
  | DetailPageSpec
  | FormPageSpec
  | DashboardPageSpec
  | SettingsPageSpec
  | WizardPageSpec
  | HandoffSpec;

export const ARCHETYPES = [
  "list",
  "detail",
  "form",
  "dashboard",
  "settings",
  "wizard",
  "handoff",
] as const;
export const FIELD_KINDS = ["text", "select", "textarea"] as const;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function checkHeader(value: unknown, errors: string[]) {
  if (!isRecord(value)) {
    errors.push("header 가 없습니다. 모든 화면에는 제목이 필요합니다.");
    return;
  }
  if (typeof value.title !== "string" || value.title.trim() === "") {
    errors.push("header.title 은 비어 있지 않은 문자열이어야 합니다.");
  }
  if (value.actions !== undefined) {
    if (!Array.isArray(value.actions)) {
      errors.push("header.actions 는 배열이어야 합니다.");
    } else {
      value.actions.forEach((a, i) => {
        if (!isRecord(a) || typeof a.label !== "string") {
          errors.push(`header.actions[${i}].label 이 없습니다.`);
        }
      });
    }
  }
}

function checkFields(value: unknown, path: string, errors: string[]) {
  if (!Array.isArray(value)) {
    errors.push(`${path} 는 배열이어야 합니다.`);
    return;
  }
  value.forEach((f, i) => {
    if (!isRecord(f)) {
      errors.push(`${path}[${i}] 가 객체가 아닙니다.`);
      return;
    }
    if (typeof f.label !== "string" || f.label.trim() === "") {
      errors.push(`${path}[${i}].label 이 없습니다.`);
    }
    if (
      typeof f.kind !== "string" ||
      !FIELD_KINDS.includes(f.kind as (typeof FIELD_KINDS)[number])
    ) {
      errors.push(`${path}[${i}].kind 는 ${FIELD_KINDS.join(" / ")} 중 하나여야 합니다.`);
    }
    if (f.kind === "select" && (!Array.isArray(f.options) || f.options.length === 0)) {
      errors.push(`${path}[${i}] 는 select 이므로 options 가 최소 1개 필요합니다.`);
    }
  });
}

function checkTable(value: unknown, path: string, errors: string[]) {
  if (!isRecord(value)) {
    errors.push(`${path} 이 객체가 아닙니다.`);
    return;
  }
  const columns = value.columns;
  if (!Array.isArray(columns) || columns.length === 0) {
    errors.push(`${path}.columns 는 최소 1개가 필요합니다.`);
    return;
  }
  if (value.rows === undefined) {
    if (value.sampleRows !== undefined && typeof value.sampleRows !== "number") {
      errors.push(`${path}.sampleRows 는 숫자여야 합니다.`);
    }
    return;
  }
  if (!Array.isArray(value.rows)) {
    errors.push(`${path}.rows 는 배열이어야 합니다.`);
    return;
  }
  value.rows.forEach((row, i) => {
    if (!Array.isArray(row)) {
      errors.push(`${path}.rows[${i}] 가 배열이 아닙니다.`);
    } else if (row.length !== columns.length) {
      errors.push(
        `${path}.rows[${i}] 의 칸 수(${row.length})가 columns 개수(${columns.length})와 다릅니다.`,
      );
    }
  });
}

/**
 * 명세가 구조적으로 올바른지 검사한다.
 *
 * 이 검사가 AI 환각의 방어선이다. 존재하지 않는 유형을 쓰거나
 * 필수 항목을 빠뜨리면 화면을 그리기 전에 여기서 걸린다.
 */
export function validateScreenSpec(input: unknown): {
  ok: boolean;
  errors: string[];
  spec?: ScreenSpec;
} {
  const errors: string[] = [];

  if (!isRecord(input)) {
    return { ok: false, errors: ["명세는 객체여야 합니다."] };
  }

  const archetype = input.archetype;
  if (
    typeof archetype !== "string" ||
    !ARCHETYPES.includes(archetype as (typeof ARCHETYPES)[number])
  ) {
    errors.push(
      `archetype 은 ${ARCHETYPES.join(" / ")} 중 하나여야 합니다. 받은 값: ${String(archetype)}`,
    );
    return { ok: false, errors };
  }

  checkHeader(input.header, errors);

  if (archetype === "list") {
    if (input.table === undefined) errors.push("list 유형에는 table 이 필요합니다.");
    else checkTable(input.table, "table", errors);
    if (input.filters !== undefined) checkFields(input.filters, "filters", errors);
  }

  if (archetype === "dashboard") {
    if (!Array.isArray(input.stats) || input.stats.length === 0) {
      errors.push("dashboard 유형에는 stats 가 최소 1개 필요합니다.");
    }
    if (input.table !== undefined) checkTable(input.table, "table", errors);
  }

  if (archetype === "settings") {
    if (!Array.isArray(input.groups) || input.groups.length === 0) {
      errors.push("settings 유형에는 groups 가 최소 1개 필요합니다.");
    } else {
      input.groups.forEach((g, i) => {
        if (!isRecord(g)) {
          errors.push(`groups[${i}] 가 객체가 아닙니다.`);
          return;
        }
        if (typeof g.title !== "string") errors.push(`groups[${i}].title 이 없습니다.`);
        if (!Array.isArray(g.options) || g.options.length === 0) {
          errors.push(`groups[${i}].options 는 최소 1개가 필요합니다.`);
        }
      });
    }
  }

  if (archetype === "wizard") {
    if (!Array.isArray(input.steps) || input.steps.length === 0) {
      errors.push("wizard 유형에는 steps 가 최소 1개 필요합니다.");
    } else {
      input.steps.forEach((s, i) => {
        if (!isRecord(s)) {
          errors.push(`steps[${i}] 가 객체가 아닙니다.`);
          return;
        }
        if (typeof s.title !== "string") errors.push(`steps[${i}].title 이 없습니다.`);
        checkFields(s.fields, `steps[${i}].fields`, errors);
      });
    }
    if (!isRecord(input.submit) || typeof input.submit.label !== "string") {
      errors.push("wizard 유형에는 submit.label 이 필요합니다.");
    }
  }

  if (archetype === "form") {
    if (!Array.isArray(input.groups) || input.groups.length === 0) {
      errors.push("form 유형에는 groups 가 최소 1개 필요합니다.");
    } else {
      input.groups.forEach((g, i) => {
        if (!isRecord(g)) {
          errors.push(`groups[${i}] 가 객체가 아닙니다.`);
          return;
        }
        if (typeof g.title !== "string") errors.push(`groups[${i}].title 이 없습니다.`);
        checkFields(g.fields, `groups[${i}].fields`, errors);
      });
    }
    if (!isRecord(input.submit) || typeof input.submit.label !== "string") {
      errors.push("form 유형에는 submit.label 이 필요합니다.");
    }
  }

  if (archetype === "handoff") {
    if (typeof input.reason !== "string" || input.reason.trim() === "") {
      errors.push("handoff 유형에는 reason 이 필요합니다. 왜 원형에 맞지 않는지 적어야 합니다.");
    }
  }

  if (archetype === "detail") {
    const hasContent =
      Array.isArray(input.summary) || Array.isArray(input.sections) || Array.isArray(input.faq);
    if (!hasContent) {
      errors.push("detail 유형에는 summary, sections, faq 중 최소 하나가 필요합니다.");
    }
  }

  return errors.length > 0
    ? { ok: false, errors }
    : { ok: true, errors: [], spec: input as unknown as ScreenSpec };
}
