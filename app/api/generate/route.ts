import { catalogAsText } from "@/lib/component-catalog";
import { validateScreenSpec } from "@/lib/screen-spec";
import { validateSkinTable } from "@/lib/skin-table";

/**
 * AI에게 두 가지만 시킨다. 화면 명세와 스킨 표.
 *
 * 받은 결과는 사용자에게 보내기 전에 여기서 검증한다.
 * 형식이 틀리면 화면을 그리지 않고 무엇이 틀렸는지 돌려준다.
 * AI가 무엇을 내놓든 잘못된 데이터가 화면까지 도달하지 않는다.
 */

const MODEL = process.env.ANTHROPIC_MODEL ?? "claude-sonnet-5";

const SPEC_RULES = `너는 기획 문서를 화면 명세(JSON)로 옮긴다.

출력은 JSON 객체 하나뿐이다. 설명도 마크다운 코드펜스도 붙이지 않는다.
CSS, 색상, 배치, 크기는 절대 포함하지 않는다. 그것들은 네 일이 아니다.

archetype 은 list, detail, form 중 하나다. 세 가지 중 어느 것도 맞지 않으면
{"error": "이유"} 형태로 답하고 화면을 지어내지 않는다.

list: header 와 table 필수. table.rows 의 각 줄은 columns 와 칸 수가 같아야 한다.
      표 내용은 그럴듯한 예시 데이터로 4줄 정도 채운다.
detail: header 필수. summary, sections, faq 중 최소 하나.
form: header, groups, submit 필수. kind 가 select 면 options 최소 1개.

필드 kind 는 text, select, textarea 중 하나다.`;

const SKIN_RULES = `너는 서비스 설명을 스킨 표(JSON)로 옮긴다.

출력은 JSON 객체 하나뿐이다. 설명도 코드펜스도 붙이지 않는다.
색상값을 직접 쓰지 않는다. 아래 칸만 채운다. 색은 생성 함수가 만든다.

{
  "name": 짧은 이름,
  "brandHue": 0-360 숫자,
  "chroma": "zero" | "muted" | "balanced" | "vivid",
  "mood": "light" | "dark",
  "radius": "none" | "sm" | "md" | "lg" | "full",
  "elevation": "flat" | "subtle" | "lifted" | "dramatic",
  "border": "hairline" | "strong" | "dashed",
  "headingFont": "sans" | "serif",
  "density": "compact" | "comfortable" | "airy",
  "buttonRadius": 선택
}

색조 참고: 0 빨강, 30 주황, 60 노랑, 140 초록, 200 청록, 255 파랑, 300 보라.
신뢰·금융·관리도구는 파랑 계열에 낮은 채도와 compact 밀도가 어울린다.
감성·리테일·브랜드 사이트는 따뜻한 색조에 큰 모서리와 airy 밀도가 어울린다.`;

function extractJson(text: string) {
  const trimmed = text
    .trim()
    .replace(/^```(?:json)?/i, "")
    .replace(/```$/, "")
    .trim();
  return JSON.parse(trimmed);
}

export async function POST(request: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return Response.json(
      {
        ok: false,
        errors: [
          "ANTHROPIC_API_KEY 가 설정되지 않았습니다.",
          "Vercel 프로젝트 설정의 Environment Variables 에 키를 추가하면 생성 기능이 켜집니다.",
          "키 없이도 아래 편집기에서 직접 명세와 스킨 표를 고칠 수 있습니다.",
        ],
      },
      { status: 200 },
    );
  }

  let kind: string;
  let prompt: string;
  try {
    const body = await request.json();
    kind = String(body.kind);
    prompt = String(body.prompt ?? "");
  } catch {
    return Response.json({ ok: false, errors: ["요청 형식이 올바르지 않습니다."] }, { status: 400 });
  }

  if (prompt.trim() === "") {
    return Response.json({ ok: false, errors: ["설명을 입력해주세요."] }, { status: 200 });
  }

  const system =
    kind === "skin" ? SKIN_RULES : `${SPEC_RULES}\n\n## 컴포넌트 참고\n\n${catalogAsText()}`;

  let raw: string;
  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 2000,
        system,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      return Response.json(
        { ok: false, errors: [`모델 호출 실패 (${response.status})`, detail.slice(0, 200)] },
        { status: 200 },
      );
    }

    const data = await response.json();
    raw = (data.content ?? [])
      .filter((b: { type: string }) => b.type === "text")
      .map((b: { text: string }) => b.text)
      .join("\n");
  } catch (error) {
    return Response.json(
      { ok: false, errors: ["모델 호출 중 오류가 발생했습니다.", String(error).slice(0, 200)] },
      { status: 200 },
    );
  }

  let parsed: unknown;
  try {
    parsed = extractJson(raw);
  } catch {
    return Response.json(
      { ok: false, errors: ["모델이 JSON 이 아닌 응답을 보냈습니다.", raw.slice(0, 200)] },
      { status: 200 },
    );
  }

  if (typeof parsed === "object" && parsed !== null && "error" in parsed) {
    return Response.json({
      ok: false,
      errors: [
        "모델이 세 가지 원형 중 어느 것도 맞지 않는다고 판단했습니다.",
        String((parsed as { error: unknown }).error),
      ],
    });
  }

  const result = kind === "skin" ? validateSkinTable(parsed) : validateScreenSpec(parsed);

  return Response.json(
    result.ok
      ? { ok: true, data: parsed }
      : { ok: false, errors: ["모델 출력이 검증을 통과하지 못했습니다.", ...result.errors] },
  );
}
