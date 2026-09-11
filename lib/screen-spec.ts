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

export type ListPageSpec = {
  archetype: "list";
  header: HeaderSpec;
  stats?: { label: string; value: string; delta?: string }[];
  filters?: FieldSpec[];
  table: {
    columns: string[];
    rows: string[][];
  };
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

export type ScreenSpec = ListPageSpec | DetailPageSpec | FormPageSpec;

export const ARCHETYPES = ["list", "detail", "form"] as const;
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
    const table = input.table;
    if (!isRecord(table)) {
      errors.push("list 유형에는 table 이 필요합니다.");
    } else {
      if (!Array.isArray(table.columns) || table.columns.length === 0) {
        errors.push("table.columns 는 최소 1개가 필요합니다.");
      }
      if (!Array.isArray(table.rows)) {
        errors.push("table.rows 는 배열이어야 합니다.");
      } else if (Array.isArray(table.columns)) {
        table.rows.forEach((row, i) => {
          if (!Array.isArray(row)) {
            errors.push(`table.rows[${i}] 가 배열이 아닙니다.`);
          } else if (row.length !== (table.columns as unknown[]).length) {
            errors.push(
              `table.rows[${i}] 의 칸 수(${row.length})가 columns 개수(${(table.columns as unknown[]).length})와 다릅니다.`,
            );
          }
        });
      }
    }
    if (input.filters !== undefined) checkFields(input.filters, "filters", errors);
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
