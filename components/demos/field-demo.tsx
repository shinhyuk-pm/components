"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

const months = [
  { label: "MM", value: null },
  ...Array.from({ length: 12 }, (_, i) => {
    const m = String(i + 1).padStart(2, "0")
    return { label: m, value: m }
  }),
]

const years = [
  { label: "YYYY", value: null },
  ...["2026", "2027", "2028", "2029", "2030"].map((y) => ({ label: y, value: y })),
]

export function Basic() {
  return (
    <div className="w-full max-w-md">
      <form onSubmit={(e) => e.preventDefault()}>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>결제 수단</FieldLegend>
            <FieldDescription>모든 거래는 안전하게 암호화됩니다.</FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="field-card-name">카드 소유자 이름</FieldLabel>
                <Input id="field-card-name" placeholder="홍길동" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="field-card-number">카드 번호</FieldLabel>
                <Input id="field-card-number" placeholder="1234 5678 9012 3456" required />
                <FieldDescription>16자리 카드 번호를 입력하세요.</FieldDescription>
              </Field>
              <div className="grid grid-cols-3 gap-4">
                <Field>
                  <FieldLabel htmlFor="field-exp-month">월</FieldLabel>
                  <Select items={months}>
                    <SelectTrigger id="field-exp-month">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {months.map((item) => (
                          <SelectItem key={item.label} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="field-exp-year">연도</FieldLabel>
                  <Select items={years}>
                    <SelectTrigger id="field-exp-year">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {years.map((item) => (
                          <SelectItem key={item.label} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="field-cvv">CVV</FieldLabel>
                  <Input id="field-cvv" placeholder="123" required />
                </Field>
              </div>
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />
          <FieldSet>
            <FieldLegend>청구 주소</FieldLegend>
            <FieldDescription>결제 수단에 연결된 청구 주소입니다.</FieldDescription>
            <FieldGroup>
              <Field orientation="horizontal">
                <Checkbox id="field-same-address" defaultChecked />
                <FieldLabel htmlFor="field-same-address" className="font-normal">
                  배송 주소와 동일
                </FieldLabel>
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="field-comments">요청 사항</FieldLabel>
                <Textarea id="field-comments" placeholder="추가 요청 사항을 적어 주세요" className="resize-none" />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <Button type="submit">제출</Button>
            <Button variant="outline" type="button">
              취소
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}

export function WithInput() {
  return (
    <FieldSet className="w-full max-w-xs">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="field-username">아이디</FieldLabel>
          <Input id="field-username" type="text" placeholder="gildong" />
          <FieldDescription>계정에서 쓸 고유한 아이디를 정하세요.</FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="field-password">비밀번호</FieldLabel>
          <FieldDescription>8자 이상이어야 합니다.</FieldDescription>
          <Input id="field-password" type="password" placeholder="••••••••" />
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}

export function WithTextarea() {
  return (
    <FieldSet className="w-full max-w-xs">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="field-feedback">의견</FieldLabel>
          <Textarea id="field-feedback" placeholder="여러분의 의견이 서비스를 더 좋게 만듭니다..." rows={4} />
          <FieldDescription>서비스에 대한 생각을 자유롭게 적어 주세요.</FieldDescription>
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}

const departments = [
  { label: "부서 선택", value: null },
  { label: "개발", value: "engineering" },
  { label: "디자인", value: "design" },
  { label: "마케팅", value: "marketing" },
  { label: "영업", value: "sales" },
  { label: "고객 지원", value: "support" },
  { label: "인사", value: "hr" },
  { label: "재무", value: "finance" },
]

export function WithSelect() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel>부서</FieldLabel>
      <Select items={departments}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {departments.map((item) => (
              <SelectItem key={item.label} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <FieldDescription>소속 부서를 고르세요.</FieldDescription>
    </Field>
  )
}

export function WithSlider() {
  const [value, setValue] = React.useState([200, 800])

  return (
    <Field className="w-full max-w-xs">
      <FieldTitle>가격 범위</FieldTitle>
      <FieldDescription>
        예산 범위를 정하세요 (<span className="font-medium tabular-nums">{value[0]}</span> –{" "}
        <span className="font-medium tabular-nums">{value[1]}</span>달러).
      </FieldDescription>
      <Slider
        value={value}
        onValueChange={(v) => setValue(v as number[])}
        max={1000}
        min={0}
        step={10}
        className="mt-2 w-full"
        aria-label="가격 범위"
      />
    </Field>
  )
}

export function Fieldset() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend>주소 정보</FieldLegend>
      <FieldDescription>주문을 배송하려면 주소가 필요합니다.</FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="field-street">도로명 주소</FieldLabel>
          <Input id="field-street" type="text" placeholder="테헤란로 123" />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="field-city">시/도</FieldLabel>
            <Input id="field-city" type="text" placeholder="서울" />
          </Field>
          <Field>
            <FieldLabel htmlFor="field-zip">우편번호</FieldLabel>
            <Input id="field-zip" type="text" placeholder="06234" />
          </Field>
        </div>
      </FieldGroup>
    </FieldSet>
  )
}

export function WithCheckbox() {
  return (
    <FieldGroup className="w-full max-w-xs">
      <FieldSet>
        <FieldLegend variant="label">바탕화면에 표시할 항목</FieldLegend>
        <FieldDescription>바탕화면에 보일 항목을 고르세요.</FieldDescription>
        <FieldGroup className="gap-3">
          {["하드 디스크", "외장 디스크", "CD·DVD", "연결된 서버"].map((label, i) => (
            <Field key={label} orientation="horizontal">
              <Checkbox id={`field-desktop-${i}`} />
              <FieldLabel htmlFor={`field-desktop-${i}`} className="font-normal">
                {label}
              </FieldLabel>
            </Field>
          ))}
        </FieldGroup>
      </FieldSet>
      <FieldSeparator />
      <Field orientation="horizontal">
        <Checkbox id="field-sync" defaultChecked />
        <FieldContent>
          <FieldLabel htmlFor="field-sync">바탕화면·문서 폴더 동기화</FieldLabel>
          <FieldDescription>
            바탕화면과 문서 폴더가 클라우드와 동기화되어 다른 기기에서도 열 수 있습니다.
          </FieldDescription>
        </FieldContent>
      </Field>
    </FieldGroup>
  )
}

export function WithRadio() {
  return (
    <FieldSet className="w-full max-w-xs">
      <FieldLegend variant="label">구독 요금제</FieldLegend>
      <FieldDescription>연간·평생 요금제가 훨씬 저렴합니다.</FieldDescription>
      <RadioGroup defaultValue="monthly">
        <Field orientation="horizontal">
          <RadioGroupItem value="monthly" id="field-plan-monthly" />
          <FieldLabel htmlFor="field-plan-monthly" className="font-normal">
            월간 (9,900원/월)
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="yearly" id="field-plan-yearly" />
          <FieldLabel htmlFor="field-plan-yearly" className="font-normal">
            연간 (99,000원/년)
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="lifetime" id="field-plan-lifetime" />
          <FieldLabel htmlFor="field-plan-lifetime" className="font-normal">
            평생 (299,000원)
          </FieldLabel>
        </Field>
      </RadioGroup>
    </FieldSet>
  )
}

export function WithSwitch() {
  return (
    <Field orientation="horizontal" className="w-fit">
      <FieldLabel htmlFor="field-2fa">2단계 인증</FieldLabel>
      <Switch id="field-2fa" />
    </Field>
  )
}

export function ChoiceCard() {
  return (
    <FieldGroup className="w-full max-w-xs">
      <FieldSet>
        <FieldLegend variant="label">실행 환경</FieldLegend>
        <FieldDescription>클러스터의 실행 환경을 고르세요.</FieldDescription>
        <RadioGroup defaultValue="kubernetes">
          <FieldLabel htmlFor="field-env-k8s">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>Kubernetes</FieldTitle>
                <FieldDescription>K8s 클러스터에서 GPU 작업을 실행합니다.</FieldDescription>
              </FieldContent>
              <RadioGroupItem value="kubernetes" id="field-env-k8s" />
            </Field>
          </FieldLabel>
          <FieldLabel htmlFor="field-env-vm">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>가상 머신</FieldTitle>
                <FieldDescription>GPU 작업용 클러스터에 접속합니다.</FieldDescription>
              </FieldContent>
              <RadioGroupItem value="vm" id="field-env-vm" />
            </Field>
          </FieldLabel>
        </RadioGroup>
      </FieldSet>
    </FieldGroup>
  )
}

export function Group() {
  return (
    <FieldGroup className="w-full max-w-xs">
      <FieldSet>
        <FieldLabel>답변</FieldLabel>
        <FieldDescription>
          조사나 이미지 생성처럼 시간이 걸리는 요청에 답이 오면 알려 드립니다.
        </FieldDescription>
        <FieldGroup data-slot="checkbox-group">
          <Field orientation="horizontal">
            <Checkbox id="field-push" defaultChecked disabled />
            <FieldLabel htmlFor="field-push" className="font-normal">
              푸시 알림
            </FieldLabel>
          </Field>
        </FieldGroup>
      </FieldSet>
      <FieldSeparator />
      <FieldSet>
        <FieldLabel>작업</FieldLabel>
        <FieldDescription>
          만들어 둔 작업에 변동이 생기면 알려 드립니다. <a href="#">작업 관리</a>
        </FieldDescription>
        <FieldGroup data-slot="checkbox-group">
          <Field orientation="horizontal">
            <Checkbox id="field-push-tasks" />
            <FieldLabel htmlFor="field-push-tasks" className="font-normal">
              푸시 알림
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="field-email-tasks" />
            <FieldLabel htmlFor="field-email-tasks" className="font-normal">
              이메일 알림
            </FieldLabel>
          </Field>
        </FieldGroup>
      </FieldSet>
    </FieldGroup>
  )
}

export function Responsive() {
  return (
    <div className="w-full max-w-lg">
      <form onSubmit={(e) => e.preventDefault()}>
        <FieldSet>
          <FieldLegend>프로필</FieldLegend>
          <FieldDescription>프로필 정보를 입력하세요. 화면이 넓으면 라벨과 입력칸이 나란히 놓입니다.</FieldDescription>
          <FieldGroup>
            <Field orientation="responsive">
              <FieldContent>
                <FieldLabel htmlFor="field-resp-name">이름</FieldLabel>
                <FieldDescription>본인 확인을 위한 실명을 적어 주세요.</FieldDescription>
              </FieldContent>
              <Input id="field-resp-name" placeholder="홍길동" required />
            </Field>
            <Field orientation="responsive">
              <Button type="submit">제출</Button>
              <Button type="button" variant="outline">
                취소
              </Button>
            </Field>
          </FieldGroup>
        </FieldSet>
      </form>
    </div>
  )
}

export function Rtl() {
  return (
    <div dir="rtl" className="flex w-full max-w-xs flex-col gap-3">
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="field-rtl-username">اسم المستخدم</FieldLabel>
            <Input id="field-rtl-username" type="text" placeholder="Max Leiter" />
            <FieldDescription>اختر اسم مستخدم فريدًا لحسابك.</FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="field-rtl-password">كلمة المرور</FieldLabel>
            <FieldDescription>يجب أن تتكون من 8 أحرف على الأقل.</FieldDescription>
            <Input id="field-rtl-password" type="password" placeholder="••••••••" />
          </Field>
        </FieldGroup>
      </FieldSet>
      <p className="text-xs text-muted-foreground">라벨과 설명이 오른쪽 정렬로 뒤집힙니다.</p>
    </div>
  )
}
