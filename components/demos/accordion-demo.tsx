"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function AccordionDemo() {
  return (
    <Accordion defaultValue={["item-1"]} className="w-full max-w-xl">
      <AccordionItem value="item-1">
        <AccordionTrigger>배송 옵션은 어떤 게 있나요?</AccordionTrigger>
        <AccordionContent>
          일반(5-7일), 특급(2-3일), 익일 배송을 제공합니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>반품 정책이 어떻게 되나요?</AccordionTrigger>
        <AccordionContent>
          수령 후 30일 이내 미사용 제품에 한해 반품이 가능합니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>고객센터 연락 방법은?</AccordionTrigger>
        <AccordionContent>
          평일 09:00-18:00 채팅 상담과 이메일 문의를 받고 있습니다.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
