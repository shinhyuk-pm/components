/**
 * 차단 장치 시연용 파일입니다. 병합하지 않습니다.
 *
 * 아래 컴포넌트는 디자인 값을 코드에 직접 갖고 있습니다.
 * 이런 코드가 들어오면 스킨을 바꿔도 이 부분만 그대로 남아
 * "컴포넌트를 건드리지 않고 디자인을 교체한다"가 깨집니다.
 */

export function BrokenCard() {
  return (
    <div className="rounded-lg border-2 bg-blue-500 shadow-md">
      <span style={{ color: "#3B82F6" }}>하드코딩된 색상</span>
    </div>
  );
}
