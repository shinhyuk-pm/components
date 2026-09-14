"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Basic() {
  return (
    <Accordion defaultValue={["item-1"]} className="w-full max-w-xl">
      <AccordionItem value="item-1">
        <AccordionTrigger>비밀번호는 어떻게 재설정하나요?</AccordionTrigger>
        <AccordionContent>
          로그인 화면에서 &lsquo;비밀번호 찾기&rsquo;를 누르고 이메일을 입력하면
          재설정 링크를 보내드립니다. 링크는 24시간 뒤 만료됩니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>요금제를 바꿀 수 있나요?</AccordionTrigger>
        <AccordionContent>
          언제든 변경할 수 있고, 남은 기간은 일할 계산으로 정산됩니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>어떤 결제 수단을 쓸 수 있나요?</AccordionTrigger>
        <AccordionContent>
          국내 신용·체크카드와 계좌이체를 지원합니다.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export function Multiple() {
  return (
    <Accordion
      multiple
      defaultValue={["item-1", "item-2"]}
      className="w-full max-w-xl"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>알림 설정</AccordionTrigger>
        <AccordionContent>
          이메일 알림과 모바일 푸시를 각각 켜고 끕 수 있습니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>개인정보 및 보안</AccordionTrigger>
        <AccordionContent>
          2단계 인증과 로그인 기기 관리를 여기서 설정합니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>결제 및 구독</AccordionTrigger>
        <AccordionContent>
          결제 수단 변경과 영수증 내려받기를 지원합니다.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export function Disabled() {
  return (
    <Accordion defaultValue={["item-1"]} className="w-full max-w-xl">
      <AccordionItem value="item-1">
        <AccordionTrigger>계정 이용 내역을 볼 수 있나요?</AccordionTrigger>
        <AccordionContent>
          최근 12개월치 이용 내역을 설정 화면에서 확인할 수 있습니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" disabled>
        <AccordionTrigger>프리미엄 전용 안내</AccordionTrigger>
        <AccordionContent>
          프리미엄 요금제에서만 열람할 수 있는 항목입니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>이메일 주소는 어떻게 바꾸나요?</AccordionTrigger>
        <AccordionContent>
          설정 &rsaquo; 계정에서 변경한 뒤 인증 메일을 확인하면 됩니다.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export function Borders() {
  return (
    <Accordion
      defaultValue={["item-1"]}
      className="w-full max-w-xl rounded-lg border px-4"
    >
      <AccordionItem value="item-1" className="border-b last:border-b-0">
        <AccordionTrigger>결제는 어떻게 이뤄지나요?</AccordionTrigger>
        <AccordionContent>
          월간·연간 요금제가 있으며 매 주기 시작일에 결제됩니다. 언제든 해지할 수
          있고 모든 요금제에 자동 백업과 24시간 지원이 포함됩니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-b last:border-b-0">
        <AccordionTrigger>데이터는 안전한가요?</AccordionTrigger>
        <AccordionContent>
          전송 구간과 저장 데이터를 모두 암호화합니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border-b last:border-b-0">
        <AccordionTrigger>어떤 연동을 지원하나요?</AccordionTrigger>
        <AccordionContent>
          Slack, Notion, GitHub 등 주요 도구와 연결할 수 있습니다.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export function InCard() {
  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle>구독 및 결제</CardTitle>
        <CardDescription>
          계정, 요금제, 결제, 해지에 대해 자주 묻는 질문입니다.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion defaultValue={["item-1"]}>
          <AccordionItem value="item-1">
            <AccordionTrigger>어떤 요금제가 있나요?</AccordionTrigger>
            <AccordionContent>
              스타터·프로·엔터프라이즈 세 가지가 있고, 위로 갈수록 저장 용량과
              팀 인원 제한이 늘어납니다.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>결제 주기는 어떻게 되나요?</AccordionTrigger>
            <AccordionContent>
              매월 같은 날짜에 결제되며 연간 결제 시 두 달치가 할인됩니다.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>해지는 어떻게 하나요?</AccordionTrigger>
            <AccordionContent>
              설정에서 바로 해지할 수 있고 남은 기간까지는 계속 이용됩니다.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}
