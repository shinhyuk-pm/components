"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AppShell } from "@/components/blocks/app-shell";
import { Screen } from "@/components/blocks/screen";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { leafNodes } from "@/lib/ia-tree";
import { SAMPLE_SCREENS, SAMPLE_TREE } from "@/lib/sample-project";
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

function Messages({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <ul className="flex flex-col gap-(--t3-pad-1)">
      {items.map((m) => (
        <li key={m} className="text-(--t2-muted) text-xs">
          {m}
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  const [skinSource, setSkinSource] = useState(() => JSON.stringify(WIREFRAME_TABLE, null, 2));
  const [specSource, setSpecSource] = useState(() => JSON.stringify(SAMPLE_SPECS[0].spec, null, 2));
  const [brandPrompt, setBrandPrompt] = useState("");
  const [iaPrompt, setIaPrompt] = useState("");
  const [activeId, setActiveId] = useState(leafNodes(SAMPLE_TREE)[0].id);

  const skinGen = useGenerator();
  const specGen = useGenerator();

  const skinResult = useMemo(() => {
    try {
      return validateSkinTable(JSON.parse(skinSource));
    } catch {
      return { ok: false as const, errors: ["JSON 형식이 올바르지 않습니다."], table: undefined };
    }
  }, [skinSource]);

  const specResult = useMemo(() => {
    try {
      return validateScreenSpec(JSON.parse(specSource));
    } catch {
      return { ok: false as const, errors: ["JSON 형식이 올바르지 않습니다."], spec: undefined };
    }
  }, [specSource]);

  const generated = useMemo(
    () => (skinResult.ok && skinResult.table ? generateSkin(skinResult.table) : null),
    [skinResult],
  );

  useEffect(() => {
    if (!generated) return;
    const root = document.documentElement;
    for (const [key, value] of Object.entries(generated.variables)) {
      root.style.setProperty(key, value);
    }
  }, [generated]);

  const activeSpec = SAMPLE_SCREENS[activeId];

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-(--t3-pad-5) p-(--t3-pad-5)">
      <Card>
        <CardHeader>
          <CardTitle>디자인</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-(--t3-pad-2)">
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
          <div className="flex flex-wrap items-center gap-(--t3-pad-2)">
            <Input
              value={brandPrompt}
              onChange={(e) => setBrandPrompt(e.target.value)}
              placeholder="예: B2B 금융 관리 도구, 신뢰감, 정보 밀도 높게"
              className="max-w-md"
            />
            <Button
              size="sm"
              disabled={skinGen.busy}
              onClick={async () => {
                const data = await skinGen.run("skin", brandPrompt);
                if (data) setSkinSource(JSON.stringify(data, null, 2));
              }}
            >
              {skinGen.busy ? "만드는 중" : "AI로 만들기"}
            </Button>
          </div>
          <Messages items={skinGen.errors} />
          <Messages items={skinResult.errors} />
          {generated ? (
            <p className="text-(--t2-muted) text-xs">
              대비 검사 통과 — {generated.contrast.map((c) => `${c.pair} ${c.ratio}`).join(" · ")}
            </p>
          ) : null}
        </CardContent>
      </Card>

      <Tabs defaultValue="project">
        <TabsList>
          <TabsTab value="project">프로젝트 전체</TabsTab>
          <TabsTab value="single">화면 하나</TabsTab>
        </TabsList>

        <TabsPanel value="project">
          <AppShell tree={SAMPLE_TREE} activeId={activeId} onSelect={setActiveId}>
            {activeSpec ? (
              <Screen spec={activeSpec} />
            ) : (
              <p className="text-(--t2-muted) text-sm">이 항목에는 아직 화면 명세가 없습니다.</p>
            )}
          </AppShell>
        </TabsPanel>

        <TabsPanel value="single">
          <div className="grid gap-(--t3-pad-4) lg:grid-cols-[minmax(0,22rem)_1fr]">
            <div className="flex flex-col gap-(--t3-pad-2)">
              <Textarea
                value={iaPrompt}
                onChange={(e) => setIaPrompt(e.target.value)}
                rows={3}
                placeholder="예: 쿠폰 관리 페이지. 쿠폰 이름, 할인율, 사용 기간을 목록으로 본다."
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
                  {specGen.busy ? "만드는 중" : "AI로 만들기"}
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
              <Messages items={specGen.errors} />
              <Textarea
                value={specSource}
                onChange={(e) => setSpecSource(e.target.value)}
                rows={22}
                spellCheck={false}
                className="font-mono text-xs"
              />
              <Messages items={specResult.errors} />
            </div>

            <div>
              {specResult.ok && specResult.spec ? (
                <Screen spec={specResult.spec} />
              ) : (
                <p className="text-(--t2-muted) text-sm">
                  명세에 문제가 있어 화면을 그리지 않았습니다.
                </p>
              )}
            </div>
          </div>
        </TabsPanel>
      </Tabs>
    </div>
  );
}
