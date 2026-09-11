"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Screen } from "@/components/blocks/screen";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SAMPLE_SPECS } from "@/lib/sample-specs";
import { validateScreenSpec } from "@/lib/screen-spec";
import { generateSkin } from "@/lib/skin-generator";
import { SAMPLE_TABLES, validateSkinTable } from "@/lib/skin-table";

const WIREFRAME_TABLE = {
  name: "와이어프레임",
  brandHue: 0,
  chroma: "zero" as const,
  mood: "light" as const,
  radius: "none" as const,
  elevation: "flat" as const,
  border: "dashed" as const,
  headingFont: "sans" as const,
  density: "comfortable" as const,
};

function useGenerator() {
  const [busy, setBusy] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const run = useCallback(async (kind: "spec" | "skin", prompt: string) => {
    setBusy(true);
    setErrors([]);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ kind, prompt }),
      });
      const json = await res.json();
      if (!json.ok) {
        setErrors(json.errors ?? ["알 수 없는 오류입니다."]);
        return null;
      }
      return json.data;
    } catch {
      setErrors(["요청을 보내지 못했습니다."]);
      return null;
    } finally {
      setBusy(false);
    }
  }, []);

  return { run, busy, errors };
}

function Messages({ items, tone }: { items: string[]; tone: "ok" | "warn" }) {
  if (items.length === 0) return null;
  return (
    <ul className="flex flex-col gap-(--t3-pad-1)">
      {items.map((m) => (
        <li
          key={m}
          className={tone === "ok" ? "text-(--t2-brand) text-xs" : "text-(--t2-muted) text-xs"}
        >
          {m}
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  const [specSource, setSpecSource] = useState(() => JSON.stringify(SAMPLE_SPECS[0].spec, null, 2));
  const [skinSource, setSkinSource] = useState(() => JSON.stringify(WIREFRAME_TABLE, null, 2));
  const [iaPrompt, setIaPrompt] = useState("");
  const [brandPrompt, setBrandPrompt] = useState("");

  const specGen = useGenerator();
  const skinGen = useGenerator();

  const specResult = useMemo(() => {
    try {
      return validateScreenSpec(JSON.parse(specSource));
    } catch {
      return { ok: false as const, errors: ["JSON 형식이 올바르지 않습니다."], spec: undefined };
    }
  }, [specSource]);

  const skinResult = useMemo(() => {
    try {
      return validateSkinTable(JSON.parse(skinSource));
    } catch {
      return { ok: false as const, errors: ["JSON 형식이 올바르지 않습니다."], table: undefined };
    }
  }, [skinSource]);

  const generated = useMemo(
    () => (skinResult.ok && skinResult.table ? generateSkin(skinResult.table) : null),
    [skinResult],
  );

  useEffect(() => {
    if (!generated) return;
    const root = document.documentElement;
    root.removeAttribute("data-skin");
    root.removeAttribute("data-density");
    for (const [key, value] of Object.entries(generated.variables)) {
      root.style.setProperty(key, value);
    }
  }, [generated]);

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-(--t3-pad-5) p-(--t3-pad-5)">
      <div className="grid gap-(--t3-pad-4) lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>서비스 성격에서 디자인 만들기</CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              value={brandPrompt}
              onChange={(e) => setBrandPrompt(e.target.value)}
              placeholder="예: B2B 금융 관리 도구, 신뢰감, 정보 밀도 높게"
            />
            <div className="flex flex-wrap gap-(--t3-pad-2)">
              <Button
                size="sm"
                disabled={skinGen.busy}
                onClick={async () => {
                  const data = await skinGen.run("skin", brandPrompt);
                  if (data) setSkinSource(JSON.stringify(data, null, 2));
                }}
              >
                {skinGen.busy ? "만드는 중" : "스킨 표 생성"}
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setSkinSource(JSON.stringify(WIREFRAME_TABLE, null, 2))}
              >
                와이어프레임
              </Button>
              {SAMPLE_TABLES.map((t) => (
                <Button
                  key={t.name}
                  variant="secondary"
                  size="sm"
                  onClick={() => setSkinSource(JSON.stringify(t, null, 2))}
                >
                  {t.name}
                </Button>
              ))}
            </div>
            <Messages items={skinGen.errors} tone="warn" />
            <Textarea
              value={skinSource}
              onChange={(e) => setSkinSource(e.target.value)}
              rows={12}
              spellCheck={false}
              className="font-mono text-xs"
            />
            <Messages items={skinResult.errors} tone="warn" />
            {generated ? (
              <div className="flex flex-col gap-(--t3-pad-1)">
                {generated.contrast.map((c) => (
                  <p key={c.pair} className="text-(--t2-muted) text-xs">
                    {c.pair} — 대비 {c.ratio} (기준 {c.minimum} 이상)
                  </p>
                ))}
              </div>
            ) : null}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>기획 설명에서 화면 만들기</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={iaPrompt}
              onChange={(e) => setIaPrompt(e.target.value)}
              rows={3}
              placeholder="예: 쿠폰 관리 페이지. 쿠폰 이름, 할인율, 사용 기간, 발급 수량을 목록으로 보고 새 쿠폰을 만들 수 있어야 한다."
            />
            <div className="flex flex-wrap gap-(--t3-pad-2)">
              <Button
                size="sm"
                disabled={specGen.busy}
                onClick={async () => {
                  const data = await specGen.run("spec", iaPrompt);
                  if (data) setSpecSource(JSON.stringify(data, null, 2));
                }}
              >
                {specGen.busy ? "만드는 중" : "화면 명세 생성"}
              </Button>
              {SAMPLE_SPECS.map((s) => (
                <Button
                  key={s.id}
                  variant="secondary"
                  size="sm"
                  onClick={() => setSpecSource(JSON.stringify(s.spec, null, 2))}
                >
                  {s.label}
                </Button>
              ))}
            </div>
            <Messages items={specGen.errors} tone="warn" />
            <Textarea
              value={specSource}
              onChange={(e) => setSpecSource(e.target.value)}
              rows={12}
              spellCheck={false}
              className="font-mono text-xs"
            />
            <Messages items={specResult.errors} tone="warn" />
          </CardContent>
        </Card>
      </div>

      <section>
        {specResult.ok && specResult.spec ? (
          <Screen spec={specResult.spec} />
        ) : (
          <p className="text-(--t2-muted) text-sm">
            명세에 문제가 있어 화면을 그리지 않았습니다. 위 목록을 확인해주세요.
          </p>
        )}
      </section>
    </div>
  );
}
