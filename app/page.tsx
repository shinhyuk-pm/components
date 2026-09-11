"use client";

import { TrendingUp, Users, Wallet } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import {
  StatCard,
  StatCardDelta,
  StatCardIcon,
  StatCardLabel,
  StatCardValue,
} from "@/components/ui/stat-card";

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

const LAYOUTS = [
  { id: "stacked", label: "세로 쌓기" },
  { id: "icon-left", label: "아이콘 왼쪽" },
  { id: "horizontal", label: "가로 배치" },
] as const;

const FIELD_LAYOUTS = [
  { id: "stacked", label: "라벨 위" },
  { id: "inline", label: "라벨 왼쪽" },
] as const;

const STATS = [
  { icon: Users, label: "총 회원", value: "12,480", delta: "+4.2%" },
  { icon: Wallet, label: "이번 달 매출", value: "₩4,280만", delta: "+12.4%" },
  { icon: TrendingUp, label: "재방문율", value: "68.2%", delta: "+1.1%" },
];

const GRADES = [
  { value: "all", label: "전체 등급" },
  { value: "vip", label: "VIP" },
  { value: "regular", label: "일반" },
];

function Switcher({
  title,
  options,
  value,
  onChange,
}: {
  title: string;
  options: readonly { id: string; label: string }[];
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-(--t3-pad-2)">
      <span className="w-20 shrink-0 text-(--t2-muted) text-xs">{title}</span>
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
  const [statLayout, setStatLayout] = useState<(typeof LAYOUTS)[number]["id"]>("stacked");
  const [fieldLayout, setFieldLayout] = useState<(typeof FIELD_LAYOUTS)[number]["id"]>("stacked");
  const [structure, setStructure] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.skin = skin;
    document.documentElement.dataset.density = density;
  }, [skin, density]);

  return (
    <div className={structure ? "structure-view" : undefined}>
      <div className="mx-auto flex max-w-3xl flex-col gap-(--t3-pad-6) p-(--t3-pad-6)">
        <section className="flex flex-col gap-(--t3-pad-2)">
          <Switcher title="스킨" options={SKINS} value={skin} onChange={setSkin} />
          <Switcher title="밀도" options={DENSITIES} value={density} onChange={setDensity} />
          <Switcher
            title="카드 배치"
            options={LAYOUTS}
            value={statLayout}
            onChange={(id) => setStatLayout(id as typeof statLayout)}
          />
          <Switcher
            title="필드 배치"
            options={FIELD_LAYOUTS}
            value={fieldLayout}
            onChange={(id) => setFieldLayout(id as typeof fieldLayout)}
          />
          <div className="flex items-center gap-(--t3-pad-2)">
            <span className="w-20 shrink-0 text-(--t2-muted) text-xs">확인</span>
            <Button variant="ghost" size="sm" onClick={() => setStructure((v) => !v)}>
              구조 보기 {structure ? "끄기" : "켜기"}
            </Button>
          </div>
        </section>

        <div className="grid gap-(--t3-pad-3) sm:grid-cols-3">
          {STATS.map((s) => {
            const Icon = s.icon;
            return (
              <StatCard key={s.label} layout={statLayout}>
                <StatCardIcon>
                  <Icon className="size-4" />
                </StatCardIcon>
                <StatCardLabel>{s.label}</StatCardLabel>
                <StatCardValue>{s.value}</StatCardValue>
                <StatCardDelta>{s.delta}</StatCardDelta>
              </StatCard>
            );
          })}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>회원 검색</CardTitle>
            <Badge>활성</Badge>
          </CardHeader>
          <CardContent>
            <CardDescription>
              이메일과 등급으로 회원을 조회합니다. 결과는 최근 가입순으로 정렬됩니다.
            </CardDescription>
            <Field layout={fieldLayout}>
              <Label htmlFor="email">이메일</Label>
              <Input id="email" placeholder="name@company.com" />
            </Field>
            <Field layout={fieldLayout}>
              <Label>등급</Label>
              <Select defaultValue="all" items={GRADES}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {GRADES.map((g) => (
                    <SelectItem key={g.value} value={g.value}>
                      {g.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
          </CardContent>
          <CardFooter>
            <Button>검색</Button>
            <Button variant="secondary">초기화</Button>
            <Dialog>
              <DialogTrigger
                render={
                  <Button variant="ghost" className="ml-auto">
                    도움말
                  </Button>
                }
              />
              <DialogContent>
                <DialogTitle>검색 범위 안내</DialogTitle>
                <DialogDescription>
                  탈퇴 후 30일이 지난 회원은 조회되지 않습니다. 통계 데이터는 비식별 처리되어 별도
                  보관됩니다.
                </DialogDescription>
                <DialogFooter>
                  <DialogClose render={<Button variant="secondary">닫기</Button>} />
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>

        <Accordion defaultValue={["q1"]}>
          <AccordionItem value="q1">
            <AccordionTrigger>등급은 어떻게 산정되나요</AccordionTrigger>
            <AccordionContent>
              최근 6개월 누적 결제액과 방문 빈도를 합산해 매월 1일 자동으로 재산정됩니다.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q2">
            <AccordionTrigger>탈퇴 회원 데이터는 언제 삭제되나요</AccordionTrigger>
            <AccordionContent>
              탈퇴 후 30일간 보관하며, 이후 개인정보는 완전 삭제되고 통계 데이터만 비식별 처리로
              남습니다.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
