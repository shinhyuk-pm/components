"use client";

import { PageHeader } from "@/components/blocks/page-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { StatCard, StatCardDelta, StatCardLabel, StatCardValue } from "@/components/ui/stat-card";
import { Switch } from "@/components/ui/switch";
import { Table, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { mockRows } from "@/lib/mock-data";
import type {
  DashboardPageSpec,
  DetailPageSpec,
  FieldSpec,
  FormPageSpec,
  HandoffSpec,
  ListPageSpec,
  ScreenSpec,
  SettingsPageSpec,
  TableSpec,
  WizardPageSpec,
} from "@/lib/screen-spec";

export type FieldLayout = "stacked" | "inline";
export type StatLayout = "stacked" | "icon-left" | "horizontal";

type RenderOptions = {
  fieldLayout?: FieldLayout;
  statLayout?: StatLayout;
};

/**
 * 명세의 필드 하나를 그린다.
 * 명세에는 "무엇을 입력받는가"만 있고 배치는 없다. 배치는 호출부가 정한다.
 */
function SpecField({ field, layout }: { field: FieldSpec; layout: FieldLayout }) {
  const label = field.required ? `${field.label} *` : field.label;

  return (
    <Field layout={layout}>
      <Label>{label}</Label>
      {field.kind === "select" ? (
        <Select
          defaultValue={field.options?.[0]}
          items={(field.options ?? []).map((o) => ({ value: o, label: o }))}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {(field.options ?? []).map((o) => (
              <SelectItem key={o} value={o}>
                {o}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : field.kind === "textarea" ? (
        <Textarea rows={3} placeholder={field.placeholder} />
      ) : (
        <Input placeholder={field.placeholder} />
      )}
    </Field>
  );
}

/** 표를 그린다. rows 가 없으면 열 이름으로 그럴듯한 값을 만들어 채운다. */
function SpecTable({ table }: { table: TableSpec }) {
  const rows = table.rows ?? mockRows(table.columns, table.sampleRows ?? 5);

  return (
    <Card>
      <Table>
        <thead>
          <TableRow>
            {table.columns.map((c) => (
              <TableHead key={c}>{c}</TableHead>
            ))}
          </TableRow>
        </thead>
        <tbody>
          {rows.map((row) => (
            <TableRow key={row.join("|")}>
              {row.map((cell, i) => (
                <TableCell key={`${table.columns[i]}-${cell}`}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Card>
  );
}

function ListPage({ spec, options }: { spec: ListPageSpec; options: RenderOptions }) {
  const fieldLayout = options.fieldLayout ?? "stacked";
  const statLayout = options.statLayout ?? "stacked";

  return (
    <div data-slot="screen" data-archetype="list" className="flex flex-col gap-(--t3-pad-5)">
      <PageHeader {...spec.header} />

      {spec.stats?.length ? (
        <div data-slot="screen-stats" className="grid gap-(--t3-pad-3) sm:grid-cols-3">
          {spec.stats.map((s) => (
            <StatCard key={s.label} layout={statLayout}>
              <StatCardLabel>{s.label}</StatCardLabel>
              <StatCardValue>{s.value}</StatCardValue>
              {s.delta ? <StatCardDelta>{s.delta}</StatCardDelta> : null}
            </StatCard>
          ))}
        </div>
      ) : null}

      {spec.filters?.length ? (
        <Card>
          <CardContent>
            {spec.filters.map((f) => (
              <SpecField key={f.label} field={f} layout={fieldLayout} />
            ))}
          </CardContent>
        </Card>
      ) : null}

      <SpecTable table={spec.table} />
    </div>
  );
}

function DetailPage({ spec, options }: { spec: DetailPageSpec; options: RenderOptions }) {
  const fieldLayout = options.fieldLayout ?? "stacked";

  return (
    <div data-slot="screen" data-archetype="detail" className="flex flex-col gap-(--t3-pad-5)">
      <PageHeader {...spec.header} />

      {spec.summary?.length ? (
        <Card>
          <CardContent>
            {spec.summary.map((s) => (
              <Field key={s.label} layout={fieldLayout}>
                <Label>{s.label}</Label>
                <p data-slot="summary-value" className="text-(--t2-text) text-sm">
                  {s.value}
                </p>
              </Field>
            ))}
          </CardContent>
        </Card>
      ) : null}

      {spec.sections?.map((section) => (
        <Card key={section.title}>
          <CardHeader>
            <CardTitle>{section.title}</CardTitle>
          </CardHeader>
          {section.description ? (
            <CardContent>
              <CardDescription>{section.description}</CardDescription>
            </CardContent>
          ) : null}
        </Card>
      ))}

      {spec.faq?.length ? (
        <Accordion defaultValue={[spec.faq[0].question]}>
          {spec.faq.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : null}
    </div>
  );
}

function FormPage({ spec, options }: { spec: FormPageSpec; options: RenderOptions }) {
  const fieldLayout = options.fieldLayout ?? "stacked";

  return (
    <div data-slot="screen" data-archetype="form" className="flex flex-col gap-(--t3-pad-5)">
      <PageHeader {...spec.header} />

      {spec.groups.map((group) => (
        <Card key={group.title}>
          <CardHeader>
            <CardTitle>{group.title}</CardTitle>
          </CardHeader>
          <CardContent>
            {group.description ? <CardDescription>{group.description}</CardDescription> : null}
            {group.fields.map((f) => (
              <SpecField key={f.label} field={f} layout={fieldLayout} />
            ))}
          </CardContent>
        </Card>
      ))}

      <div data-slot="screen-actions" className="flex justify-end gap-(--t3-pad-2)">
        {spec.cancel ? (
          <Button variant={spec.cancel.emphasis ?? "secondary"}>{spec.cancel.label}</Button>
        ) : null}
        <Button variant={spec.submit.emphasis ?? "primary"}>{spec.submit.label}</Button>
      </div>
    </div>
  );
}

function DashboardPage({ spec, options }: { spec: DashboardPageSpec; options: RenderOptions }) {
  const statLayout = options.statLayout ?? "icon-left";

  return (
    <div data-slot="screen" data-archetype="dashboard" className="flex flex-col gap-(--t3-pad-5)">
      <PageHeader {...spec.header} />

      <div data-slot="screen-stats" className="grid gap-(--t3-pad-3) sm:grid-cols-3">
        {spec.stats.map((s) => (
          <StatCard key={s.label} layout={statLayout}>
            <StatCardLabel>{s.label}</StatCardLabel>
            <StatCardValue>{s.value}</StatCardValue>
            {s.delta ? <StatCardDelta>{s.delta}</StatCardDelta> : null}
          </StatCard>
        ))}
      </div>

      {spec.panels?.length ? (
        <div className="grid gap-(--t3-pad-3) md:grid-cols-2">
          {spec.panels.map((panel) => (
            <Card key={panel.title}>
              <CardHeader>
                <CardTitle>{panel.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {panel.description ? <CardDescription>{panel.description}</CardDescription> : null}
                {panel.items?.map((item) => (
                  <div key={item.label} className="flex items-center justify-between text-sm">
                    <span className="text-(--t2-muted)">{item.label}</span>
                    <span className="text-(--t2-text)">{item.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : null}

      {spec.table ? <SpecTable table={spec.table} /> : null}
    </div>
  );
}

function SettingsPage({ spec }: { spec: SettingsPageSpec }) {
  return (
    <div data-slot="screen" data-archetype="settings" className="flex flex-col gap-(--t3-pad-5)">
      <PageHeader {...spec.header} />

      {spec.groups.map((group) => (
        <Card key={group.title}>
          <CardHeader>
            <CardTitle>{group.title}</CardTitle>
          </CardHeader>
          <CardContent>
            {group.description ? <CardDescription>{group.description}</CardDescription> : null}
            {group.options.map((option) => (
              <div
                key={option.label}
                data-slot="settings-option"
                className="flex items-start justify-between gap-(--t3-pad-3)"
              >
                <div className="flex flex-col gap-(--t3-pad-1)">
                  <span className="text-(--t2-text) text-sm">{option.label}</span>
                  {option.description ? (
                    <span className="text-(--t2-muted) text-xs">{option.description}</span>
                  ) : null}
                </div>
                <Switch defaultChecked={option.enabled ?? false} />
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function WizardPage({ spec, options }: { spec: WizardPageSpec; options: RenderOptions }) {
  const fieldLayout = options.fieldLayout ?? "stacked";

  return (
    <div data-slot="screen" data-archetype="wizard" className="flex flex-col gap-(--t3-pad-5)">
      <PageHeader {...spec.header} />

      <Alert data-slot="wizard-progress">
        전체 {spec.steps.length}단계 — {spec.steps.map((s) => s.title).join(" · ")}
      </Alert>

      {spec.steps.map((step, index) => (
        <Card key={step.title}>
          <CardHeader>
            <CardTitle>
              {index + 1}. {step.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {step.description ? <CardDescription>{step.description}</CardDescription> : null}
            {step.fields.map((f) => (
              <SpecField key={f.label} field={f} layout={fieldLayout} />
            ))}
          </CardContent>
        </Card>
      ))}

      <Separator />

      <div data-slot="screen-actions" className="flex justify-end gap-(--t3-pad-2)">
        <Button variant={spec.submit.emphasis ?? "primary"}>{spec.submit.label}</Button>
      </div>
    </div>
  );
}

/**
 * 원형에 맞지 않아 사람에게 넘어온 화면.
 *
 * 빈 화면을 보여주는 것이 목적이 아니라, 무엇이 왜 막혔는지 남기는 것이 목적이다.
 * 여기 쌓인 사유가 다음에 추가할 원형의 후보가 된다.
 */
function HandoffPage({ spec }: { spec: HandoffSpec }) {
  return (
    <div data-slot="screen" data-archetype="handoff" className="flex flex-col gap-(--t3-pad-4)">
      <PageHeader {...spec.header} />
      <Alert data-slot="handoff-reason">
        <span className="heading-font font-medium">자동 생성하지 않았습니다</span>
        <span>{spec.reason}</span>
      </Alert>
      {spec.suggestion ? (
        <Card>
          <CardHeader>
            <CardTitle>제안</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{spec.suggestion}</CardDescription>
          </CardContent>
        </Card>
      ) : null}
      <Card>
        <CardHeader>
          <CardTitle>다음 절차</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            사람이 이 화면을 만든 뒤 docs/EXTENDING.md 의 절차에 따라 새 원형이나 새 배치 프리셋으로
            등록합니다. 등록하면 다음 프로젝트에서는 자동으로 생성됩니다.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}

/**
 * 명세 하나를 받아 화면을 그린다.
 *
 * 스킨과 밀도는 여기서 다루지 않는다. 상위 문서 요소의 속성으로 적용된다.
 * 그래서 같은 명세가 와이어프레임으로도, 완성된 디자인으로도 나온다.
 */
export function Screen({ spec, options = {} }: { spec: ScreenSpec; options?: RenderOptions }) {
  if (spec.archetype === "list") return <ListPage spec={spec} options={options} />;
  if (spec.archetype === "detail") return <DetailPage spec={spec} options={options} />;
  if (spec.archetype === "dashboard") return <DashboardPage spec={spec} options={options} />;
  if (spec.archetype === "settings") return <SettingsPage spec={spec} />;
  if (spec.archetype === "wizard") return <WizardPage spec={spec} options={options} />;
  if (spec.archetype === "handoff") return <HandoffPage spec={spec} />;
  return <FormPage spec={spec} options={options} />;
}
