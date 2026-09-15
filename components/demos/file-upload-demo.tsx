"use client"

import * as React from "react"
import { FileSpreadsheetIcon, ImageIcon, XIcon } from "lucide-react"

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentTitle,
} from "@/components/ui/attachment"
import { Button } from "@/components/ui/button"
import {
  FileUpload,
  FileUploadDescription,
  FileUploadIcon,
  FileUploadTitle,
} from "@/components/ui/file-upload"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const kb = (n: number) => `${Math.max(1, Math.round(n / 1024))}KB`

export function Basic() {
  return <FileUpload className="w-full max-w-sm" />
}

export function Accept() {
  return (
    <FileUpload className="w-full max-w-sm" accept="image/*" multiple>
      <FileUploadIcon>
        <ImageIcon />
      </FileUploadIcon>
      <FileUploadTitle>이미지를 끌어다 놓으세요</FileUploadTitle>
      <FileUploadDescription>
        JPG·PNG·GIF, 한 장에 5MB 이하 · 여러 장 가능
      </FileUploadDescription>
    </FileUpload>
  )
}

export function WithList() {
  const [files, setFiles] = React.useState<File[]>([])

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <FileUpload
        multiple
        onFilesChange={(next) => setFiles((prev) => [...prev, ...next])}
      />
      {files.length > 0 ? (
        <div className="flex flex-col gap-2">
          {files.map((file, i) => (
            <Attachment key={`${file.name}-${i}`}>
              <AttachmentContent>
                <AttachmentTitle>{file.name}</AttachmentTitle>
                <AttachmentDescription>{kb(file.size)}</AttachmentDescription>
              </AttachmentContent>
              <AttachmentActions>
                <AttachmentAction
                  aria-label={`${file.name} 지우기`}
                  onClick={() =>
                    setFiles((prev) => prev.filter((_, idx) => idx !== i))
                  }
                >
                  <XIcon />
                </AttachmentAction>
              </AttachmentActions>
            </Attachment>
          ))}
        </div>
      ) : (
        <p className="text-xs text-muted-foreground">
          아직 고른 파일이 없습니다. 위에 끌어다 놓거나 눌러서 고르세요.
        </p>
      )}
    </div>
  )
}

export function Excel() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <FileUpload accept=".xlsx,.xls,.csv">
        <FileUploadIcon>
          <FileSpreadsheetIcon />
        </FileUploadIcon>
        <FileUploadTitle>명부 엑셀 파일을 올리세요</FileUploadTitle>
        <FileUploadDescription>
          XLSX·CSV · 양식을 먼저 내려받아 채워 주세요
        </FileUploadDescription>
      </FileUpload>
      <div className="flex justify-between gap-2">
        <Button variant="outline" size="sm">
          양식 내려받기
        </Button>
        <Button size="sm">업로드</Button>
      </div>
    </div>
  )
}

export function Errors() {
  const rows = [
    {
      line: 3,
      column: "주민등록번호",
      value: "90010-1123456",
      reason: "자릿수가 맞지 않습니다",
    },
    {
      line: 7,
      column: "이메일",
      value: "hanbit(at)example",
      reason: "형식이 올바르지 않습니다",
    },
    {
      line: 12,
      column: "사번",
      value: "2024001",
      reason: "이미 등록된 사번입니다",
    },
  ]

  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
      <div className="rounded-lg border border-destructive/40 bg-destructive/5 px-3 py-2 text-sm text-destructive">
        30줄 가운데 3줄을 등록하지 못했습니다. 아래 내용을 고쳐 다시 올려
        주세요.
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-16">줄</TableHead>
            <TableHead className="w-32">항목</TableHead>
            <TableHead>입력값</TableHead>
            <TableHead>사유</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((r) => (
            <TableRow key={r.line}>
              <TableCell className="tabular-nums">{r.line}</TableCell>
              <TableCell>{r.column}</TableCell>
              <TableCell className="text-destructive">{r.value}</TableCell>
              <TableCell className="text-muted-foreground">
                {r.reason}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export function Disabled() {
  return (
    <FileUpload className="w-full max-w-sm" disabled>
      <FileUploadIcon />
      <FileUploadTitle>지금은 올릴 수 없습니다</FileUploadTitle>
      <FileUploadDescription>
        심사가 끝난 뒤에는 파일을 바꿀 수 없습니다.
      </FileUploadDescription>
    </FileUpload>
  )
}
