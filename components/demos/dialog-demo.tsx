"use client"

import { DirectionProvider } from "@base-ui/react/direction-provider"

import { Button } from "@/components/ui/button"
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
import { Input } from "@/components/ui/input"

const longText =
  "이 문단은 스크롤 동작을 확인하기 위한 예시 글입니다. 내용이 길어지면 창 전체가 아니라 안쪽 영역만 스크롤됩니다. 제목과 설명은 위에 고정된 채로 남아 있어 지금 어떤 창을 보고 있는지 놓치지 않습니다."

export function Basic() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>창 열기</DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>프로필 수정</DialogTitle>
          <DialogDescription>
            프로필 정보를 바꾼 뒤 저장 버튼을 누르세요.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="dialog-name" className="text-sm font-medium">
              이름
            </label>
            <Input id="dialog-name" defaultValue="홍길동" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="dialog-username" className="text-sm font-medium">
              아이디
            </label>
            <Input id="dialog-username" defaultValue="@gildong" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>취소</DialogClose>
          <Button>저장</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export function CustomCloseButton() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>공유</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>링크 공유</DialogTitle>
          <DialogDescription>
            이 링크를 가진 사람은 누구나 볼 수 있습니다.
          </DialogDescription>
        </DialogHeader>
        <Input defaultValue="https://ui.shadcn.com/docs/installation" readOnly />
        <DialogFooter className="sm:justify-start">
          <DialogClose render={<Button />}>닫기</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export function NoCloseButton() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>닫기 버튼 없음</DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>닫기 버튼 없음</DialogTitle>
          <DialogDescription>
            오른쪽 위 X 버튼이 없습니다. 바깥을 누르거나 Esc 키로 닫습니다.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export function StickyFooter() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>고정 푸터</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>고정 푸터</DialogTitle>
          <DialogDescription>
            내용이 스크롤되는 동안에도 아래 버튼 영역은 그대로 보입니다.
          </DialogDescription>
        </DialogHeader>
        <div className="no-scrollbar -mx-4 max-h-[50vh] overflow-y-auto px-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <p key={index} className="mb-4 leading-normal">
              {longText}
            </p>
          ))}
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>닫기</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export function ScrollableContent() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>스크롤 내용</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>스크롤 내용</DialogTitle>
          <DialogDescription>내용이 길면 창 안쪽만 스크롤됩니다.</DialogDescription>
        </DialogHeader>
        <div className="no-scrollbar -mx-4 max-h-[50vh] overflow-y-auto px-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <p key={index} className="mb-4 leading-normal">
              {longText}
            </p>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function Rtl() {
  return (
    <div dir="rtl" className="flex flex-col items-center gap-3">
      <DirectionProvider direction="rtl">
        <Dialog>
          <DialogTrigger render={<Button variant="outline" />}>فتح الحوار</DialogTrigger>
          <DialogContent className="sm:max-w-sm" dir="rtl">
            <DialogHeader>
              <DialogTitle>تعديل الملف الشخصي</DialogTitle>
              <DialogDescription>
                قم بإجراء تغييرات على ملفك الشخصي هنا. انقر فوق حفظ عند الانتهاء.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="dialog-rtl-name" className="text-sm font-medium">
                  الاسم
                </label>
                <Input id="dialog-rtl-name" defaultValue="Pedro Duarte" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="dialog-rtl-username" className="text-sm font-medium">
                  اسم المستخدم
                </label>
                <Input id="dialog-rtl-username" defaultValue="@peduarte" />
              </div>
            </div>
            <DialogFooter>
              <DialogClose render={<Button variant="outline" />}>إلغاء</DialogClose>
              <Button>حفظ التغييرات</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </DirectionProvider>
      <p className="text-xs text-muted-foreground">
        제목·버튼·닫기 아이콘 위치가 오른쪽에서 왼쪽으로 뒤집힙니다.
      </p>
    </div>
  )
}
