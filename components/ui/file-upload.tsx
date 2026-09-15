"use client"

import * as React from "react"
import { cn } from "cn"
import { UploadCloudIcon } from "lucide-react"

type FileUploadProps = Omit<
  React.ComponentProps<"div">,
  "onChange" | "onDrop"
> & {
  accept?: string
  multiple?: boolean
  disabled?: boolean
  /** 고른 파일이 바뀔 때마다 부릅니다. */
  onFilesChange?: (files: File[]) => void
}

function FileUpload({
  className,
  accept,
  multiple,
  disabled,
  onFilesChange,
  children,
  ...props
}: FileUploadProps) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [over, setOver] = React.useState(false)

  const emit = (list: FileList | null) => {
    if (!list || list.length === 0) return
    onFilesChange?.(Array.from(list))
  }

  return (
    <div
      data-slot="file-upload"
      data-dragover={over || undefined}
      data-disabled={disabled || undefined}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      onClick={() => !disabled && inputRef.current?.click()}
      onKeyDown={(e) => {
        if (disabled) return
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          inputRef.current?.click()
        }
      }}
      onDragOver={(e) => {
        if (disabled) return
        e.preventDefault()
        setOver(true)
      }}
      onDragLeave={() => setOver(false)}
      onDrop={(e) => {
        if (disabled) return
        e.preventDefault()
        setOver(false)
        emit(e.dataTransfer.files)
      }}
      className={cn(
        "flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-input bg-transparent px-6 py-8 text-center transition-colors outline-none hover:bg-accent/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 data-dragover:border-ring data-dragover:bg-accent/60 data-disabled:pointer-events-none data-disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children ?? (
        <>
          <FileUploadIcon />
          <FileUploadTitle>여기에 파일을 끌어다 놓으세요</FileUploadTitle>
          <FileUploadDescription>
            또는 눌러서 파일을 고릅니다
          </FileUploadDescription>
        </>
      )}
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        className="sr-only"
        onChange={(e) => {
          emit(e.target.files)
          e.target.value = ""
        }}
      />
    </div>
  )
}

function FileUploadIcon({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="file-upload-icon"
      aria-hidden="true"
      className={cn(
        "flex size-9 items-center justify-center rounded-lg bg-muted text-muted-foreground [&_svg:not([class*='size-'])]:size-4.5",
        className
      )}
      {...props}
    >
      {props.children ?? <UploadCloudIcon />}
    </div>
  )
}

function FileUploadTitle({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="file-upload-title"
      className={cn("text-sm font-medium", className)}
      {...props}
    />
  )
}

function FileUploadDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="file-upload-description"
      className={cn("text-xs text-muted-foreground", className)}
      {...props}
    />
  )
}

export { FileUpload, FileUploadIcon, FileUploadTitle, FileUploadDescription }
