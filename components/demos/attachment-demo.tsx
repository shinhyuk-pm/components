"use client"

import { FileTextIcon, ImageIcon, TriangleAlertIcon, XIcon } from "lucide-react"

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
  AttachmentTrigger,
} from "@/components/ui/attachment"
import { Spinner } from "@/components/ui/spinner"

export function Basic() {
  return (
    <Attachment className="w-full max-w-sm">
      <AttachmentMedia>
        <FileTextIcon />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>매출-대시보드.pdf</AttachmentTitle>
        <AttachmentDescription>PDF · 2.4 MB</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction aria-label="첨부 제거">
          <XIcon />
        </AttachmentAction>
      </AttachmentActions>
    </Attachment>
  )
}

export function States() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Attachment state="uploading" className="w-full">
        <AttachmentMedia>
          <Spinner />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>발표자료.pptx</AttachmentTitle>
          <AttachmentDescription>업로드 중 · 42%</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Attachment state="error" className="w-full">
        <AttachmentMedia>
          <TriangleAlertIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>영상.mov</AttachmentTitle>
          <AttachmentDescription>용량이 너무 큽니다 (최대 100 MB)</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Attachment state="idle" className="w-full">
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>여기에 파일을 놓으세요</AttachmentTitle>
          <AttachmentDescription>또는 눈러서 선택</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
    </div>
  )
}

export function Sizes() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      {(["default", "sm", "xs"] as const).map((size) => (
        <Attachment key={size} size={size} className="w-full">
          <AttachmentMedia>
            <FileTextIcon />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>계약서.pdf</AttachmentTitle>
            <AttachmentDescription>size = {size}</AttachmentDescription>
          </AttachmentContent>
        </Attachment>
      ))}
    </div>
  )
}

export function Vertical() {
  return (
    <div className="flex gap-3">
      {["표지.png", "본문.png", "부록.png"].map((name) => (
        <Attachment key={name} orientation="vertical">
          <AttachmentMedia>
            <ImageIcon />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>{name}</AttachmentTitle>
            <AttachmentDescription>PNG</AttachmentDescription>
          </AttachmentContent>
        </Attachment>
      ))}
    </div>
  )
}

export function Group() {
  return (
    <AttachmentGroup className="w-full max-w-md">
      {["기획서.docx", "예산.xlsx", "일정.pdf", "참고자료.zip"].map((name) => (
        <Attachment key={name}>
          <AttachmentMedia>
            <FileTextIcon />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>{name}</AttachmentTitle>
            <AttachmentDescription>1.2 MB</AttachmentDescription>
          </AttachmentContent>
        </Attachment>
      ))}
    </AttachmentGroup>
  )
}

export function Clickable() {
  return (
    <Attachment className="w-full max-w-sm">
      <AttachmentTrigger render={<a href="#" aria-label="매출-대시보드.pdf 열기" />} />
      <AttachmentMedia>
        <FileTextIcon />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>매출-대시보드.pdf</AttachmentTitle>
        <AttachmentDescription>눌러서 열기</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction aria-label="첨부 제거">
          <XIcon />
        </AttachmentAction>
      </AttachmentActions>
    </Attachment>
  )
}
