"use client"

import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"

export default function ButtonGroupDemo() {
  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button variant="outline">왼쪽</Button>
        <Button variant="outline">가운데</Button>
        <Button variant="outline">오른쪽</Button>
      </ButtonGroup>
      <ButtonGroup>
        <ButtonGroupText>정렬</ButtonGroupText>
        <ButtonGroupSeparator />
        <Button variant="outline">최신순</Button>
        <Button variant="outline">인기순</Button>
      </ButtonGroup>
    </div>
  )
}
