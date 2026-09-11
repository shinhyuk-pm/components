"use client";

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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SKINS = [
  { id: "wireframe", label: "와이어프레임" },
  { id: "saas", label: "SaaS 브랜드" },
  { id: "bold", label: "극단 브랜드" },
];

const GRADES = [
  { value: "all", label: "전체 등급" },
  { value: "vip", label: "VIP" },
  { value: "regular", label: "일반" },
];

export default function Home() {
  const [skin, setSkin] = useState("wireframe");
  const [structure, setStructure] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.skin = skin;
  }, [skin]);

  return (
    <div className={structure ? "structure-view" : undefined}>
      <div className="mx-auto flex max-w-3xl flex-col gap-(--t3-pad-6) p-(--t3-pad-6)">
        <header className="flex flex-wrap items-center gap-(--t3-pad-2)">
          {SKINS.map((s) => (
            <Button
              key={s.id}
              variant={skin === s.id ? "primary" : "secondary"}
              size="sm"
              onClick={() => setSkin(s.id)}
            >
              {s.label}
            </Button>
          ))}
          <Button
            variant="ghost"
            size="sm"
            className="ml-auto"
            onClick={() => setStructure((v) => !v)}
          >
            구조 보기 {structure ? "끄기" : "켜기"}
          </Button>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>회원 검색</CardTitle>
            <Badge>활성</Badge>
          </CardHeader>
          <CardContent>
            <CardDescription>
              이메일과 등급으로 회원을 조회합니다. 결과는 최근 가입순으로 정렬됩니다.
            </CardDescription>
            <div className="flex flex-col gap-(--t3-pad-2)">
              <Label htmlFor="email">이메일</Label>
              <Input id="email" placeholder="name@company.com" />
            </div>
            <div className="flex flex-col gap-(--t3-pad-2)">
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
            </div>
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
          <AccordionItem value="q3">
            <AccordionTrigger>등급별 혜택을 변경할 수 있나요</AccordionTrigger>
            <AccordionContent>
              설정에서 등급별 할인율과 적립률을 개별 지정할 수 있고, 변경 사항은 다음 산정 주기부터
              적용됩니다.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
