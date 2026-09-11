"use client";

import { PageHeader } from "@/components/blocks/page-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import { StatCard, StatCardDelta, StatCardLabel, StatCardValue } from "@/components/ui/stat-card";
import { Table, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import type {
  DetailPageSpec,
  FieldSpec,
  FormPageSpec,
  ListPageSpec,
  ScreenSpec,
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

      <Card>
        <Table>
          <thead>
            <TableRow>
              {spec.table.columns.map((c) => (
                <TableHead key={c}>{c}</TableHead>
              ))}
            </TableRow>
          </thead>
          <tbody>
            {spec.table.rows.map((row) => (
              <TableRow key={row.join("|")}>
                {row.map((cell, i) => (
                  <TableCell key={`${spec.table.columns[i]}-${cell}`}>{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </tbody>
        </Table>
      </Card>
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

/**
 * 명세 하나를 받아 화면을 그린다.
 *
 * 스킨과 밀도는 여기서 다루지 않는다. 상위 문서 요소의 속성으로 적용된다.
 * 그래서 같은 명세가 와이어프레임으로도, 완성된 디자인으로도 나온다.
 */
export function Screen({ spec, options = {} }: { spec: ScreenSpec; options?: RenderOptions }) {
  if (spec.archetype === "list") return <ListPage spec={spec} options={options} />;
  if (spec.archetype === "detail") return <DetailPage spec={spec} options={options} />;
  return <FormPage spec={spec} options={options} />;
}
