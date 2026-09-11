"use client";

import { useEffect, useMemo, useState } from "react";
import { Screen } from "@/components/blocks/screen";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SAMPLE_SPECS } from "@/lib/sample-specs";
import { validateScreenSpec } from "@/lib/screen-spec";

const SKINS = [
  { id: "wireframe", label: "와이어프레임" },
  { id: "saas", label: "SaaS 브랜드" },
  { id: "bold", label: "극단 브랜드" },
];

const DENSITIES = [
  { id: "compact", label: "촘촘하게" },
  { id: "comfortable", label: "보통" },
  { id: "airy", label: "넓게" },
];

const FIELD_LAYOUTS = [
  { id: "stacked", label: "라벨 위" },
  { id: "inline", label: "라벨 왼쪽" },
];

const STAT_LAYOUTS = [
  { id: "stacked", label: "세로" },
  { id: "icon-left", label: "아이콘 왼쪽" },
  { id: "horizontal", label: "가로" },
];

function Switcher({
  title,
  options,
  value,
  onChange,
}: {
  title: string;
  options: { id: string; label: string }[];
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-(--t3-pad-2)">
      <span className="w-16 shrink-0 text-(--t2-muted) text-xs">{title}</span>
      {options.map((o) => (
        <Button
          key={o.id}
          variant={value === o.id ? "primary" : "secondary"}
          size="sm"
          onClick={() => onChange(o.id)}
        >
          {o.label}
        </Button>
      ))}
    </div>
  );
}

export default function Home() {
  const [skin, setSkin] = useState("wireframe");
  const [density, setDensity] = useState("comfortable");
  const [fieldLayout, setFieldLayout] = useState("stacked");
  const [statLayout, setStatLayout] = useState("stacked");
  const [source, setSource] = useState(() => JSON.stringify(SAMPLE_SPECS[0].spec, null, 2));

  useEffect(() => {
    document.documentElement.dataset.skin = skin;
    document.documentElement.dataset.density = density;
  }, [skin, density]);

  const result = useMemo(() => {
    try {
      return validateScreenSpec(JSON.parse(source));
    } catch {
      return { ok: false as const, errors: ["JSON 형식이 올바르지 않습니다."], spec: undefined };
    }
  }, [source]);

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-(--t3-pad-5) p-(--t3-pad-5)">
      <section className="flex flex-col gap-(--t3-pad-2)">
        <div className="flex flex-wrap items-center gap-(--t3-pad-2)">
          <span className="w-16 shrink-0 text-(--t2-muted) text-xs">예시</span>
          {SAMPLE_SPECS.map((s) => (
            <Button
              key={s.id}
              variant="secondary"
              size="sm"
              onClick={() => setSource(JSON.stringify(s.spec, null, 2))}
            >
              {s.label}
            </Button>
          ))}
        </div>
        <Switcher title="스킨" options={SKINS} value={skin} onChange={setSkin} />
        <Switcher title="밀도" options={DENSITIES} value={density} onChange={setDensity} />
        <Switcher
          title="필드"
          options={FIELD_LAYOUTS}
          value={fieldLayout}
          onChange={setFieldLayout}
        />
        <Switcher title="통계" options={STAT_LAYOUTS} value={statLayout} onChange={setStatLayout} />
      </section>

      <div className="grid gap-(--t3-pad-4) lg:grid-cols-[minmax(0,22rem)_1fr]">
        <section className="flex flex-col gap-(--t3-pad-2)">
          <p className="text-(--t2-muted) text-xs">화면 명세 — 고치면 오른쪽이 바뀝니다</p>
          <Textarea
            value={source}
            onChange={(e) => setSource(e.target.value)}
            rows={24}
            spellCheck={false}
            className="font-mono text-xs"
          />
          {result.ok ? (
            <p data-slot="validation-ok" className="text-(--t2-brand) text-xs">
              검증 통과
            </p>
          ) : (
            <ul data-slot="validation-errors" className="flex flex-col gap-(--t3-pad-1)">
              {result.errors.map((e) => (
                <li key={e} className="text-(--t2-muted) text-xs">
                  {e}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section>
          {result.ok && result.spec ? (
            <Screen
              spec={result.spec}
              options={{
                fieldLayout: fieldLayout as "stacked" | "inline",
                statLayout: statLayout as "stacked" | "icon-left" | "horizontal",
              }}
            />
          ) : (
            <p className="text-(--t2-muted) text-sm">
              명세에 문제가 있어 화면을 그리지 않았습니다. 왼쪽 목록을 확인해주세요.
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
