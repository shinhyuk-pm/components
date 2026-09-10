import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * 클래스 병합. 컴포넌트는 전달받은 className을 덮어쓰지 않고 항상 이 함수로 합친다.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
