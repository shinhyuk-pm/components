import type * as React from "react"

/** 컴포넌트 하나가 가질 수 있는 사용 유형(예: Basic, Multiple, Disabled) */
export type DemoVariant = {
  /** 페이지 안 앵커 id */
  id: string
  /** 화면에 표시할 유형 이름 */
  name: string
  /** 이 유형을 언제 쓰는지 한 줄 설명 */
  description?: string
  /** 실제로 동작하는 예시 */
  Demo: React.ComponentType
}
