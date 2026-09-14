"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/questionnaire"

type Status = "unanswered" | "answered" | "skipped"

function useResult() {
  const [result, setResult] = React.useState<string | null>(null)
  const submit = (fields: string[], multi: string[] = []) => (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const fd = new FormData(event.currentTarget)
    const parts = fields.map((f) =>
      multi.includes(f) ? `${f}: ${fd.getAll(f).join(", ") || "없음"}` : `${f}: ${fd.get(f) || "없음"}`
    )
    setResult(parts.join(" · "))
  }
  const view = result && (
    <p className="mt-4 text-sm text-muted-foreground" role="status" data-testid="result">
      제출 결과 → {result}
    </p>
  )
  return { submit, view }
}

const basicItems = [
  { name: "direction", required: true, choices: [{ value: "tool-calls" }, { value: "approvals" }, { value: "handoffs" }] },
  { name: "signals", multiple: true, required: false, choices: [{ value: "progress" }, { value: "decisions" }, { value: "risks" }, { value: "next-step" }] },
  { name: "timing", required: true, choices: [{ value: "now" }, { value: "next-cycle" }, { value: "backlog" }] },
] as const

export function Basic() {
  const { submit, view } = useResult()

  return (
    <div className="w-full max-w-md">
      <Questionnaire defaultItem="direction" items={basicItems} shortcuts="letters" onSubmit={submit(["direction", "signals", "timing"], ["signals"])}>
        <QuestionnaireProgress />
        <QuestionnaireItem name="direction" required>
          <QuestionnaireTitle>에이전트가 다음에 무엇을 만들까요?</QuestionnaireTitle>
          <QuestionnaireDescription>방향을 고르거나 다른 작업을 직접 적어 주세요.</QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="tool-calls">
              <span className="font-medium">도구 호출 타임라인</span>
              <span className="text-muted-foreground">에이전트가 무엇을 실행했고 결과가 무엇인지 보여줍니다.</span>
            </QuestionnaireChoice>
            <QuestionnaireChoice value="approvals">
              <span className="font-medium">승인 체크포인트</span>
              <span className="text-muted-foreground">민감하거나 되돌리기 어려운 동작 전에 묻습니다.</span>
            </QuestionnaireChoice>
            <QuestionnaireChoice value="handoffs">
              <span className="font-medium">하위 에이전트 인계</span>
              <span className="text-muted-foreground">위임한 작업과 결과를 따라가기 쉽게 합니다.</span>
            </QuestionnaireChoice>
            <QuestionnaireInput aria-label="다른 기능" placeholder="다른 기능을 적어 주세요…" />
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireItem name="signals" multiple>
          <QuestionnaireTitle>진행 상황 보고에 무엇을 넣을까요?</QuestionnaireTitle>
          <QuestionnaireDescription>해당하는 것을 모두 고르거나 건너뛰어도 됩니다.</QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="progress">진행률</QuestionnaireChoice>
            <QuestionnaireChoice value="decisions">결정 사항</QuestionnaireChoice>
            <QuestionnaireChoice value="risks">위험 요소</QuestionnaireChoice>
            <QuestionnaireChoice value="next-step">다음 단계</QuestionnaireChoice>
          </QuestionnaireChoices>
        </QuestionnaireItem>
        <QuestionnaireItem name="timing" required>
          <QuestionnaireTitle>언제 시작할까요?</QuestionnaireTitle>
          <QuestionnaireDescription>작업을 시작할 시점을 고르세요.</QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="now">지금 바로</QuestionnaireChoice>
            <QuestionnaireChoice value="next-cycle">다음 개발 주기</QuestionnaireChoice>
            <QuestionnaireChoice value="backlog">백로그에 추가</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnairePrevious>이전</QuestionnairePrevious>
          <QuestionnaireSkip>건너뛰기</QuestionnaireSkip>
          <QuestionnaireNext>다음</QuestionnaireNext>
          <QuestionnaireSubmit>계획 저장</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
      {view}
    </div>
  )
}

export function MultipleSelection() {
  const { submit, view } = useResult()

  return (
    <div className="w-full max-w-md">
      <Questionnaire
        items={[{ name: "context", required: true, choices: [{ value: "source" }, { value: "tests" }, { value: "docs" }, { value: "history" }] }]}
        shortcuts="letters"
        onSubmit={submit(["context"], ["context"])}
      >
        <QuestionnaireItem name="context" multiple required>
          <QuestionnaireTitle>에이전트가 어떤 자료를 살펴볼까요?</QuestionnaireTitle>
          <QuestionnaireDescription>구현에 영향을 주는 자료를 모두 고르세요.</QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="source">관련 소스 파일</QuestionnaireChoice>
            <QuestionnaireChoice value="tests">기존 테스트</QuestionnaireChoice>
            <QuestionnaireChoice value="docs">아키텍처 문서</QuestionnaireChoice>
            <QuestionnaireChoice value="history">최근 커밋 이력</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnaireSubmit>자료 공유</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
      {view}
    </div>
  )
}

export function Freeform() {
  const { submit, view } = useResult()

  return (
    <div className="w-full max-w-md">
      <Questionnaire
        items={[{ name: "approach", required: true, choices: [{ value: "incremental" }, { value: "module" }, { value: "rewrite" }] }]}
        shortcuts="letters"
        onSubmit={submit(["approach"])}
      >
        <QuestionnaireItem name="approach" required>
          <QuestionnaireTitle>리팩터링을 어떻게 진행할까요?</QuestionnaireTitle>
          <QuestionnaireDescription>방식을 고르거나 더 구체적인 지시를 적어 주세요.</QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="incremental">가장 작고 안전한 변경</QuestionnaireChoice>
            <QuestionnaireChoice value="module">모듈 하나씩 리팩터링</QuestionnaireChoice>
            <QuestionnaireChoice value="rewrite">구현을 완전히 교체</QuestionnaireChoice>
            <QuestionnaireInput aria-label="다른 방식" placeholder="다른 방식을 적어 주세요…" />
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnaireSubmit>이 방식으로</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
      {view}
    </div>
  )
}

const skipItems = [{ name: "task", required: true }, { name: "constraints" }, { name: "review", required: true }] as const

export function ExplicitSkip() {
  const [constraintStatus, setConstraintStatus] = React.useState<Status>("unanswered")
  const [result, setResult] = React.useState<string | null>(null)

  return (
    <div className="w-full max-w-md">
      <Questionnaire
        defaultItem="task"
        items={skipItems}
        onSubmit={(e) => {
          e.preventDefault()
          const fd = new FormData(e.currentTarget)
          setResult(
            `task: ${fd.get("task")} · constraints: ${constraintStatus === "skipped" ? "건너뜀" : fd.get("constraints") || "없음"} · review: ${fd.get("review")}`
          )
        }}
      >
        <QuestionnaireProgress />
        <QuestionnaireItem name="task" required>
          <QuestionnaireTitle>어떤 종류의 변경인가요?</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="feature">새 기능</QuestionnaireChoice>
            <QuestionnaireChoice value="fix">버그 수정</QuestionnaireChoice>
            <QuestionnaireChoice value="refactor">리팩터링</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireItem name="constraints" onStatusChange={setConstraintStatus}>
          <QuestionnaireTitle>구현 제약이 있나요?</QuestionnaireTitle>
          <QuestionnaireDescription>필요하면 답하고, 아니면 일부러 건너뛸 수 있습니다.</QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="no-dependencies">의존성 추가 금지</QuestionnaireChoice>
            <QuestionnaireChoice value="no-migrations">데이터베이스 변경 금지</QuestionnaireChoice>
            <QuestionnaireChoice value="preserve-api">공개 API 유지</QuestionnaireChoice>
            <QuestionnaireInput aria-label="다른 제약" placeholder="다른 제약을 적어 주세요…" />
          </QuestionnaireChoices>
        </QuestionnaireItem>
        <QuestionnaireItem name="review" required>
          <QuestionnaireTitle>어떻게 검토할까요?</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="tests">테스트 실행</QuestionnaireChoice>
            <QuestionnaireChoice value="diff">최종 변경 내용 검토</QuestionnaireChoice>
            <QuestionnaireChoice value="both">테스트와 변경 검토 모두</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnairePrevious>이전</QuestionnairePrevious>
          <QuestionnaireSkip>건너뛰기</QuestionnaireSkip>
          <QuestionnaireNext>다음</QuestionnaireNext>
          <QuestionnaireSubmit>제출</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
      {result && (
        <p className="mt-4 text-sm text-muted-foreground" role="status" data-testid="result">
          제출 결과 → {result}
        </p>
      )}
    </div>
  )
}

export function Shortcuts() {
  const [shortcuts, setShortcuts] = React.useState<"letters" | "numbers" | undefined>("letters")
  const { submit, view } = useResult()

  return (
    <div className="relative flex w-full max-w-md flex-col gap-4">
      <NativeSelect
        aria-label="단축키 방식"
        className="self-end"
        value={shortcuts ?? "none"}
        onChange={(e) => {
          const v = e.target.value
          setShortcuts(v === "letters" || v === "numbers" ? v : undefined)
        }}
      >
        <NativeSelectOption value="none">단축키 없음</NativeSelectOption>
        <NativeSelectOption value="letters">영문자</NativeSelectOption>
        <NativeSelectOption value="numbers">숫자</NativeSelectOption>
      </NativeSelect>
      <Questionnaire
        items={[{ name: "action", required: true, choices: [{ value: "inspect" }, { value: "tests" }, { value: "patch" }] }]}
        shortcuts={shortcuts}
        onSubmit={submit(["action"])}
      >
        <QuestionnaireItem name="action" required>
          <QuestionnaireTitle>에이전트가 다음에 무엇을 할까요?</QuestionnaireTitle>
          <QuestionnaireDescription>표시된 단축키를 누르거나 키보드로 이동하세요.</QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="inspect">구현 살펴보기</QuestionnaireChoice>
            <QuestionnaireChoice value="tests">관련 테스트 실행</QuestionnaireChoice>
            <QuestionnaireChoice value="patch">패치 준비</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnaireSubmit>확정</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
      {view}
    </div>
  )
}

export function CustomValidation() {
  const [item, setItem] = React.useState("detail")
  const [error, setError] = React.useState<string | null>(null)
  const [result, setResult] = React.useState<string | null>(null)

  return (
    <div className="w-full max-w-md">
      <Questionnaire
        item={item}
        items={[{ name: "detail", required: true }, { name: "audience", required: true }]}
        onItemChange={setItem}
        onSubmit={(e) => {
          e.preventDefault()
          const fd = new FormData(e.currentTarget)
          const detail = fd.get("detail")
          const audience = fd.get("audience")
          if (audience === "public" && detail === "summary") {
            setError("공개용 답변은 충분한 설명이 필요합니다. '완전한 답변'을 고르세요.")
            setItem("detail")
            return
          }
          setError(null)
          setResult(`detail: ${detail} · audience: ${audience}`)
        }}
      >
        <QuestionnaireProgress />
        <QuestionnaireItem invalid={Boolean(error)} name="detail" required>
          <QuestionnaireTitle>답변에 얼마나 자세한 내용을 넣을까요?</QuestionnaireTitle>
          <QuestionnaireDescription>'공개'를 고르면 요약만으로는 제출되지 않습니다.</QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="summary" onChange={() => setError(null)}>
              간단한 요약
            </QuestionnaireChoice>
            <QuestionnaireChoice value="complete" onChange={() => setError(null)}>
              완전한 답변
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError>{error}</QuestionnaireError>
        </QuestionnaireItem>
        <QuestionnaireItem name="audience" required>
          <QuestionnaireTitle>누가 이 답변을 읽나요?</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="team">팀 내부</QuestionnaireChoice>
            <QuestionnaireChoice value="public">공개</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnairePrevious>이전</QuestionnairePrevious>
          <QuestionnaireNext>다음</QuestionnaireNext>
          <QuestionnaireSubmit>제출</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
      {result && (
        <p className="mt-4 text-sm text-muted-foreground" role="status" data-testid="result">
          제출 결과 → {result}
        </p>
      )}
    </div>
  )
}

const labels: Record<string, string> = { scope: "변경 범위", checks: "검증 수준", output: "최종 산출물" }

export function Controlled() {
  const [item, setItem] = React.useState("scope")
  const { submit, view } = useResult()

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <p className="self-end text-sm text-muted-foreground" role="status" data-testid="current-item">
        현재 단계: {labels[item]}
      </p>
      <Questionnaire
        item={item}
        items={[{ name: "scope", required: true }, { name: "checks", required: true }, { name: "output", required: true }]}
        onItemChange={setItem}
        onSubmit={submit(["scope", "checks", "output"])}
      >
        <QuestionnaireProgress />
        <QuestionnaireItem name="scope" required>
          <QuestionnaireTitle>에이전트가 무엇을 바꿔도 되나요?</QuestionnaireTitle>
          <QuestionnaireDescription>현재 단계는 바깥 코드가 기억하고 있습니다.</QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="component">대상 컴포넌트만</QuestionnaireChoice>
            <QuestionnaireChoice value="tests">컴포넌트와 관련 테스트</QuestionnaireChoice>
            <QuestionnaireChoice value="feature">기능 영역 전체</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireItem name="checks" required>
          <QuestionnaireTitle>검증 수준은요?</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="targeted">관련 테스트만</QuestionnaireChoice>
            <QuestionnaireChoice value="package">패키지 테스트와 타입 검사</QuestionnaireChoice>
            <QuestionnaireChoice value="full">전체 검증</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireItem name="output" required>
          <QuestionnaireTitle>끝나면 무엇을 돌려줄까요?</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="summary">간단한 요약</QuestionnaireChoice>
            <QuestionnaireChoice value="diff">요약과 변경 파일</QuestionnaireChoice>
            <QuestionnaireChoice value="handoff">상세 인계 문서</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnairePrevious>이전</QuestionnairePrevious>
          <QuestionnaireNext>다음</QuestionnaireNext>
          <QuestionnaireSubmit>저장</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
      {view}
    </div>
  )
}

export function Resume() {
  const { submit, view } = useResult()

  return (
    <div className="w-full max-w-md">
      <Questionnaire
        defaultItem="verification"
        items={[{ name: "change", required: true }, { name: "verification", required: true }, { name: "notes" }]}
        onSubmit={submit(["change", "verification", "notes"], ["verification"])}
      >
        <QuestionnaireProgress />
        <QuestionnaireItem name="change" required>
          <QuestionnaireTitle>어떤 종류의 이전 작업인가요?</QuestionnaireTitle>
          <QuestionnaireDescription>이 답변은 지난 세션에서 저장된 것입니다.</QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="incremental" defaultChecked>
              단계적 이전
            </QuestionnaireChoice>
            <QuestionnaireChoice value="cutover">한 번에 전환</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireItem name="verification" multiple required>
          <QuestionnaireTitle>어떻게 검증할까요?</QuestionnaireTitle>
          <QuestionnaireDescription>지난 세션에서 고른 항목이 미리 체크되어 있습니다.</QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="tests" defaultChecked>
              이전 테스트 실행
            </QuestionnaireChoice>
            <QuestionnaireChoice value="typecheck" defaultChecked>
              타입 검사 실행
            </QuestionnaireChoice>
            <QuestionnaireChoice value="smoke">수동 확인</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireItem name="notes">
          <QuestionnaireTitle>더 기억해 둘 것이 있나요?</QuestionnaireTitle>
          <QuestionnaireDescription>이 메모도 함께 저장되어 있었습니다.</QuestionnaireDescription>
          <QuestionnaireInput aria-label="저장된 메모" defaultValue="기존 공개 API는 그대로 유지할 것." />
        </QuestionnaireItem>
        <QuestionnaireActions>
          <Button type="reset" variant="outline">
            되돌리기
          </Button>
          <QuestionnairePrevious>이전</QuestionnairePrevious>
          <QuestionnaireNext>다음</QuestionnaireNext>
          <QuestionnaireSubmit>초안 업데이트</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
      {view}
    </div>
  )
}

export function ConditionalItems() {
  const [runtime, setRuntime] = React.useState("local")
  const items = React.useMemo(
    () => [
      { name: "runtime", required: true },
      { disabled: runtime !== "cloud", name: "environment", required: true },
      { name: "approval", required: true },
    ],
    [runtime]
  )
  const { submit, view } = useResult()

  return (
    <div className="w-full max-w-md">
      <Questionnaire defaultItem="runtime" items={items} onSubmit={submit(["runtime", "environment", "approval"])}>
        <QuestionnaireProgress />
        <QuestionnaireItem name="runtime" required>
          <QuestionnaireTitle>에이전트를 어디서 실행할까요?</QuestionnaireTitle>
          <QuestionnaireDescription>'클라우드'를 고르면 환경을 묻는 질문이 하나 추가됩니다.</QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice checked={runtime === "local"} value="local" onChange={() => setRuntime("local")}>
              내 컴퓨터
            </QuestionnaireChoice>
            <QuestionnaireChoice checked={runtime === "cloud"} value="cloud" onChange={() => setRuntime("cloud")}>
              클라우드
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireItem disabled={runtime !== "cloud"} name="environment" required>
          <QuestionnaireTitle>어떤 클라우드 환경을 쓸까요?</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="sandbox">격리된 샌드박스</QuestionnaireChoice>
            <QuestionnaireChoice value="shared">공유 개발 환경</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireItem name="approval" required>
          <QuestionnaireTitle>언제 승인을 요청할까요?</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="write">파일을 쓰기 전</QuestionnaireChoice>
            <QuestionnaireChoice value="commands">명령을 실행하기 전</QuestionnaireChoice>
            <QuestionnaireChoice value="sensitive">민감한 동작에서만</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnairePrevious>이전</QuestionnairePrevious>
          <QuestionnaireNext>다음</QuestionnaireNext>
          <QuestionnaireSubmit>실행 계획 저장</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
      {view}
    </div>
  )
}

export function NavigationState() {
  const [item, setItem] = React.useState<"permission" | "verification">("permission")
  const [statuses, setStatuses] = React.useState<Record<string, Status>>({ permission: "unanswered", verification: "unanswered" })
  const unanswered = statuses[item] === "unanswered"
  const { submit, view } = useResult()

  return (
    <div className="w-full max-w-md">
      <Questionnaire
        item={item}
        items={[{ name: "permission", required: true }, { name: "verification", required: true }]}
        onItemChange={(next) => setItem(next as "permission" | "verification")}
        onSubmit={submit(["permission", "verification"])}
      >
        <QuestionnaireProgress />
        <QuestionnaireItem name="permission" required onStatusChange={(s) => setStatuses((c) => ({ ...c, permission: s }))}>
          <QuestionnaireTitle>에이전트가 무엇을 수정해도 되나요?</QuestionnaireTitle>
          <QuestionnaireDescription>답을 고르기 전까지 '다음' 버튼이 눌리지 않습니다.</QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="files">프로젝트 파일과 테스트</QuestionnaireChoice>
            <QuestionnaireChoice value="config">파일·테스트·설정</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireItem name="verification" required onStatusChange={(s) => setStatuses((c) => ({ ...c, verification: s }))}>
          <QuestionnaireTitle>완료 전에 무엇이 통과해야 하나요?</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="types">테스트와 타입</QuestionnaireChoice>
            <QuestionnaireChoice value="qa">테스트·타입·화면 확인</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnairePrevious>이전</QuestionnairePrevious>
          <QuestionnaireNext className="data-[status=unanswered]:opacity-50" disabled={unanswered} variant="secondary">
            다음
          </QuestionnaireNext>
          <QuestionnaireSubmit disabled={unanswered}>권한 저장</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
      {view}
    </div>
  )
}

export function CustomProgress() {
  const { submit, view } = useResult()

  return (
    <div className="w-full max-w-md">
      <Questionnaire
        defaultItem="scope"
        items={[{ name: "scope", required: true }, { name: "strategy", required: true }, { name: "tests", required: true }, { name: "delivery", required: true }]}
        onSubmit={submit(["scope", "strategy", "tests", "delivery"])}
      >
        <QuestionnaireProgress
          className="w-full"
          render={(props, state) => (
            <div {...props}>
              <div className="mb-2 flex gap-1.5" aria-hidden="true">
                {Array.from({ length: state.total }, (_, i) => (
                  <span key={i} className={i < state.current ? "h-1.5 flex-1 rounded-full bg-primary" : "h-1.5 flex-1 rounded-full bg-muted"} />
                ))}
              </div>
              <span data-testid="custom-progress">
                {state.current} / {state.total} 단계
              </span>
            </div>
          )}
        />
        <QuestionnaireItem name="scope" required>
          <QuestionnaireTitle>변경 규모는 얼마나 되나요?</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="feature">기능 하나 크기</QuestionnaireChoice>
            <QuestionnaireChoice value="cross">여러 패키지에 걸침</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireItem name="strategy" required>
          <QuestionnaireTitle>커밋은 어떻게 나눌까요?</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="single">커밋 하나</QuestionnaireChoice>
            <QuestionnaireChoice value="logical">의미 단위로 나눔</QuestionnaireChoice>
            <QuestionnaireChoice value="squash">리뷰 전에 합침</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireItem name="tests" required>
          <QuestionnaireTitle>어떤 테스트를 돌릴까요?</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="targeted">관련 테스트만</QuestionnaireChoice>
            <QuestionnaireChoice value="package">패키지 전체</QuestionnaireChoice>
            <QuestionnaireChoice value="full">워크스페이스 전체</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireItem name="delivery" required>
          <QuestionnaireTitle>결과는 어떻게 전달할까요?</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="local">로컬 커밋</QuestionnaireChoice>
            <QuestionnaireChoice value="branch">리뷰 브랜치 푸시</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnairePrevious>이전</QuestionnairePrevious>
          <QuestionnaireNext>다음</QuestionnaireNext>
          <QuestionnaireSubmit>계획 완료</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
      {view}
    </div>
  )
}

const animatedItemClass =
  "data-active:animate-in data-active:fade-in-0 data-active:slide-in-from-bottom-2 data-active:duration-300 motion-reduce:animate-none"

export function AnimatedItems() {
  const { submit, view } = useResult()

  return (
    <div className="w-full max-w-md">
      <Questionnaire
        defaultItem="task"
        items={[{ name: "task", required: true }, { name: "review", required: true }, { name: "delivery", required: true }]}
        onSubmit={submit(["task", "review", "delivery"])}
      >
        <QuestionnaireProgress />
        <QuestionnaireItem className={animatedItemClass} name="task" required>
          <QuestionnaireTitle>에이전트가 무엇을 할까요?</QuestionnaireTitle>
          <QuestionnaireDescription>다음을 누르면 질문이 아래에서 떠오르며 바뀝니다.</QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="implement">요청한 변경 구현</QuestionnaireChoice>
            <QuestionnaireChoice value="debug">현재 동작 디버깅</QuestionnaireChoice>
            <QuestionnaireChoice value="review">구현 검토</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireItem className={animatedItemClass} name="review" required>
          <QuestionnaireTitle>어떻게 검토할까요?</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="targeted">핵심만 확인</QuestionnaireChoice>
            <QuestionnaireChoice value="suite">전체 테스트</QuestionnaireChoice>
            <QuestionnaireChoice value="qa">테스트와 수동 확인</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireItem className={animatedItemClass} name="delivery" required>
          <QuestionnaireTitle>결과는 어떻게 전달할까요?</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="summary">간단한 요약</QuestionnaireChoice>
            <QuestionnaireChoice value="files">요약과 변경 파일</QuestionnaireChoice>
            <QuestionnaireChoice value="handoff">상세 인계</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnairePrevious>이전</QuestionnairePrevious>
          <QuestionnaireNext>다음</QuestionnaireNext>
          <QuestionnaireSubmit>저장</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
      {view}
    </div>
  )
}

export function InCard() {
  const taskTitleId = React.useId()
  const outputTitleId = React.useId()
  const { submit, view } = useResult()

  return (
    <div className="w-full max-w-md">
      <Questionnaire
        defaultItem="task"
        items={[
          { name: "task", required: true, choices: [{ value: "fix" }, { value: "refactor" }, { value: "docs" }] },
          { name: "output", required: true, choices: [{ value: "summary" }, { value: "files" }, { value: "review" }] },
        ]}
        shortcuts="numbers"
        onSubmit={submit(["task", "output"])}
      >
        <Card>
          <QuestionnaireItem aria-labelledby={taskTitleId} name="task" required>
            <CardHeader>
              <QuestionnaireTitle id={taskTitleId} render={<CardTitle />}>
                에이전트가 무엇을 처리할까요?
              </QuestionnaireTitle>
              <QuestionnaireDescription render={<CardDescription />}>다음에 처리할 작업을 고르세요.</QuestionnaireDescription>
              <CardAction>
                <QuestionnaireProgress />
              </CardAction>
            </CardHeader>
            <CardContent>
              <QuestionnaireChoices>
                <QuestionnaireChoice value="fix">실패하는 테스트 고치기</QuestionnaireChoice>
                <QuestionnaireChoice value="refactor">데이터 계층 리팩터링</QuestionnaireChoice>
                <QuestionnaireChoice value="docs">연동 가이드 업데이트</QuestionnaireChoice>
              </QuestionnaireChoices>
              <QuestionnaireError />
            </CardContent>
          </QuestionnaireItem>
          <QuestionnaireItem aria-labelledby={outputTitleId} name="output" required>
            <CardHeader>
              <QuestionnaireTitle id={outputTitleId} render={<CardTitle />}>
                최종 인계에 무엇을 넣을까요?
              </QuestionnaireTitle>
              <QuestionnaireDescription render={<CardDescription />}>리뷰에 필요한 상세 수준을 고르세요.</QuestionnaireDescription>
              <CardAction>
                <QuestionnaireProgress />
              </CardAction>
            </CardHeader>
            <CardContent>
              <QuestionnaireChoices>
                <QuestionnaireChoice value="summary">요약만</QuestionnaireChoice>
                <QuestionnaireChoice value="files">요약과 변경 파일</QuestionnaireChoice>
                <QuestionnaireChoice value="review">전체 리뷰 인계</QuestionnaireChoice>
              </QuestionnaireChoices>
              <QuestionnaireError />
            </CardContent>
          </QuestionnaireItem>
          <CardFooter>
            <QuestionnaireActions className="w-full">
              <QuestionnairePrevious>이전</QuestionnairePrevious>
              <QuestionnaireNext>다음</QuestionnaireNext>
              <QuestionnaireSubmit>작업 만들기</QuestionnaireSubmit>
            </QuestionnaireActions>
          </CardFooter>
        </Card>
      </Questionnaire>
      {view}
    </div>
  )
}

export function InDialog() {
  const [open, setOpen] = React.useState(false)
  const [result, setResult] = React.useState<string | null>(null)

  return (
    <div className="flex flex-col items-center gap-3">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger render={<Button variant="outline" />}>질문 열기</DialogTrigger>
        <DialogContent>
          <Questionnaire
            defaultItem="scope"
            items={[{ name: "scope", required: true }, { name: "tests", required: true }]}
            onSubmit={(e) => {
              e.preventDefault()
              const fd = new FormData(e.currentTarget)
              setResult(`scope: ${fd.get("scope")} · tests: ${fd.get("tests")}`)
              setOpen(false)
            }}
          >
            <QuestionnaireItem name="scope" required>
              <DialogHeader>
                <QuestionnaireProgress />
                <QuestionnaireTitle render={<DialogTitle />}>어떤 파일까지 손대도 되나요?</QuestionnaireTitle>
                <QuestionnaireDescription render={<DialogDescription />}>에이전트가 고칠 수 있는 범위를 고르세요.</QuestionnaireDescription>
              </DialogHeader>
              <QuestionnaireChoices>
                <QuestionnaireChoice value="component">컴포넌트만</QuestionnaireChoice>
                <QuestionnaireChoice value="feature">기능 폴더 전체</QuestionnaireChoice>
                <QuestionnaireChoice value="any">관련 파일 전부</QuestionnaireChoice>
              </QuestionnaireChoices>
              <QuestionnaireError />
            </QuestionnaireItem>
            <QuestionnaireItem name="tests" required>
              <DialogHeader>
                <QuestionnaireProgress />
                <QuestionnaireTitle render={<DialogTitle />}>검증은 얼마나 필요한가요?</QuestionnaireTitle>
                <QuestionnaireDescription render={<DialogDescription />}>인계 전에 돌릴 검사를 고르세요.</QuestionnaireDescription>
              </DialogHeader>
              <QuestionnaireChoices>
                <QuestionnaireChoice value="targeted">관련 테스트만</QuestionnaireChoice>
                <QuestionnaireChoice value="package">패키지 테스트</QuestionnaireChoice>
                <QuestionnaireChoice value="full">전체 검증</QuestionnaireChoice>
              </QuestionnaireChoices>
              <QuestionnaireError />
            </QuestionnaireItem>
            <DialogFooter>
              <DialogClose render={<Button type="button" variant="outline" />}>취소</DialogClose>
              <QuestionnaireActions>
                <QuestionnairePrevious>이전</QuestionnairePrevious>
                <QuestionnaireNext>다음</QuestionnaireNext>
                <QuestionnaireSubmit>답변 보내기</QuestionnaireSubmit>
              </QuestionnaireActions>
            </DialogFooter>
          </Questionnaire>
        </DialogContent>
      </Dialog>
      {result && (
        <p className="text-sm text-muted-foreground" role="status" data-testid="result">
          제출 결과 → {result}
        </p>
      )}
    </div>
  )
}
