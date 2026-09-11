/**
 * 가짜 데이터 생성기
 *
 * 화면 명세에 표 내용을 일일이 적으면 명세가 길어지고 AI가 지어낸 값이 섞인다.
 * 열 이름만 주면 그럴듯한 값을 만들어낸다.
 *
 * 같은 열 이름과 같은 줄 번호면 항상 같은 값이 나온다. 무작위성이 없으므로
 * 화면을 다시 그려도 표 내용이 바뀌지 않는다.
 */

const NAMES = ["김서연", "박도윤", "이하은", "정민재", "최지우", "한수빈", "오세진", "윤가람"];
const ORGS = ["운영팀", "마케팅팀", "개발팀", "고객지원팀", "재무팀"];
const STATUSES = ["활성", "대기", "보류", "완료", "휴면"];
const GRADES = ["VIP", "일반", "신규", "휴면"];
const PRODUCTS = ["스탠다드 플랜", "프로 플랜", "엔터프라이즈", "체험판"];

type Kind =
  | "name"
  | "email"
  | "date"
  | "money"
  | "percent"
  | "count"
  | "status"
  | "grade"
  | "org"
  | "product"
  | "text";

function detect(column: string): Kind {
  const c = column.replace(/\s/g, "");
  if (/이름|담당자|작성자|고객명|성명/.test(c)) return "name";
  if (/이메일|메일|email/i.test(c)) return "email";
  if (/일자|날짜|일시|가입일|등록일|기간|만료/.test(c)) return "date";
  if (/금액|매출|결제|가격|비용|원/.test(c)) return "money";
  if (/율|률|퍼센트|%/.test(c)) return "percent";
  if (/수량|건수|개수|횟수|재고/.test(c)) return "count";
  if (/상태|진행/.test(c)) return "status";
  if (/등급|레벨/.test(c)) return "grade";
  if (/부서|소속|팀|조직/.test(c)) return "org";
  if (/상품|플랜|제품|서비스/.test(c)) return "product";
  return "text";
}

/** 열 이름과 줄 번호로부터 항상 같은 숫자를 만든다. */
function seed(column: string, row: number) {
  let hash = row * 2654435761;
  for (let i = 0; i < column.length; i += 1) {
    hash = (hash * 31 + column.charCodeAt(i)) >>> 0;
  }
  return hash >>> 0;
}

function pick<T>(list: T[], s: number) {
  return list[s % list.length];
}

export function mockCell(column: string, row: number): string {
  const s = seed(column, row);
  switch (detect(column)) {
    case "name":
      return pick(NAMES, s);
    case "email": {
      const handles = ["seoyeon", "doyun", "haeun", "minjae", "jiwoo", "subin", "sejin", "garam"];
      return `${pick(handles, s)}@example.com`;
    }
    case "date": {
      const month = (s % 9) + 1;
      const day = (s % 27) + 1;
      return `2026-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    }
    case "money":
      return `₩${((s % 900) * 1000 + 12000).toLocaleString("ko-KR")}`;
    case "percent":
      return `${((s % 900) / 10).toFixed(1)}%`;
    case "count":
      return String((s % 480) + 3);
    case "status":
      return pick(STATUSES, s);
    case "grade":
      return pick(GRADES, s);
    case "org":
      return pick(ORGS, s);
    case "product":
      return pick(PRODUCTS, s);
    default:
      return `${column} ${(s % 90) + 10}`;
  }
}

export function mockRows(columns: string[], count: number): string[][] {
  return Array.from({ length: count }, (_, row) => columns.map((c) => mockCell(c, row)));
}
