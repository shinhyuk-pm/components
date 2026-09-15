"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export function Basic() {
  return (
    <Button
      variant="outline"
      onClick={() => toast("변경 사항을 저장했습니다.")}
    >
      알림 띄우기
    </Button>
  )
}

export function Types() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => toast.success("저장했습니다.")}
      >
        성공
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => toast.error("저장하지 못했습니다.")}
      >
        오류
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => toast.warning("용량이 얼마 남지 않았습니다.")}
      >
        주의
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => toast.info("새 버전이 나왔습니다.")}
      >
        안내
      </Button>
    </div>
  )
}

export function WithDescription() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast.success("청구서를 보냈습니다.", {
          description: "2026년 9월 15일 오후 3시 · 받는 사람 3명",
        })
      }
    >
      설명 붙은 알림
    </Button>
  )
}

export function WithAction() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("항목 1건을 삭제했습니다.", {
          action: {
            label: "실행 취소",
            onClick: () => toast.success("삭제를 되돌렸습니다."),
          },
        })
      }
    >
      되돌리기 버튼
    </Button>
  )
}

export function Promise() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        const work = new window.Promise((resolve) => setTimeout(resolve, 1800))
        toast.promise(work, {
          loading: "엑셀 파일을 만드는 중…",
          success: "내려받기가 시작됩니다.",
          error: "파일을 만들지 못했습니다.",
        })
      }}
    >
      처리 중 → 완료
    </Button>
  )
}

export function Persistent() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          toast("직접 닫아야 사라집니다.", {
            duration: Infinity,
            closeButton: true,
          })
        }
      >
        안 사라지는 알림
      </Button>
      <Button variant="ghost" size="sm" onClick={() => toast.dismiss()}>
        모두 닫기
      </Button>
    </div>
  )
}
