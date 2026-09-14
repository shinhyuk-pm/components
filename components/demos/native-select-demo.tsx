"use client"

import { NativeSelect, NativeSelectOptGroup, NativeSelectOption } from "@/components/ui/native-select"

export function Basic() {
  return (
    <NativeSelect>
      <NativeSelectOption value="">상태 선택</NativeSelectOption>
      <NativeSelectOption value="todo">할 일</NativeSelectOption>
      <NativeSelectOption value="in-progress">진행 중</NativeSelectOption>
      <NativeSelectOption value="done">완료</NativeSelectOption>
      <NativeSelectOption value="cancelled">취소됨</NativeSelectOption>
    </NativeSelect>
  )
}

export function Groups() {
  return (
    <NativeSelect>
      <NativeSelectOption value="">부서 선택</NativeSelectOption>
      <NativeSelectOptGroup label="개발">
        <NativeSelectOption value="frontend">프론트엔드</NativeSelectOption>
        <NativeSelectOption value="backend">백엔드</NativeSelectOption>
        <NativeSelectOption value="devops">데브옵스</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="영업">
        <NativeSelectOption value="sales-rep">영업 담당</NativeSelectOption>
        <NativeSelectOption value="account-manager">고객 관리</NativeSelectOption>
        <NativeSelectOption value="sales-director">영업 이사</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="운영">
        <NativeSelectOption value="support">고객 지원</NativeSelectOption>
        <NativeSelectOption value="product-manager">프로덕트 매니저</NativeSelectOption>
        <NativeSelectOption value="ops-manager">운영 매니저</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  )
}

export function Disabled() {
  return (
    <NativeSelect disabled>
      <NativeSelectOption value="">비활성화</NativeSelectOption>
      <NativeSelectOption value="apple">사과</NativeSelectOption>
      <NativeSelectOption value="banana">바나나</NativeSelectOption>
      <NativeSelectOption value="blueberry">블루베리</NativeSelectOption>
    </NativeSelect>
  )
}

export function Invalid() {
  return (
    <NativeSelect aria-invalid="true">
      <NativeSelectOption value="">오류 상태</NativeSelectOption>
      <NativeSelectOption value="apple">사과</NativeSelectOption>
      <NativeSelectOption value="banana">바나나</NativeSelectOption>
      <NativeSelectOption value="blueberry">블루베리</NativeSelectOption>
    </NativeSelect>
  )
}

export function Rtl() {
  return (
    <div dir="rtl" className="flex flex-col items-center gap-3">
      <NativeSelect>
        <NativeSelectOption value="">اختر الحالة</NativeSelectOption>
        <NativeSelectOption value="todo">قيد الانتظار</NativeSelectOption>
        <NativeSelectOption value="in-progress">قيد التنفيذ</NativeSelectOption>
        <NativeSelectOption value="done">مكتمل</NativeSelectOption>
      </NativeSelect>
      <p className="text-xs text-muted-foreground">글자와 화살표 위치가 오른쪽에서 왼쪽으로 뒤집힙니다.</p>
    </div>
  )
}
