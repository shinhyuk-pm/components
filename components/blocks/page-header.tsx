import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { HeaderSpec } from "@/lib/screen-spec";

/**
 * 계약: 제목 1개, 설명 1개(선택), 배지 1개(선택), 액션 N개(선택).
 */
function PageHeader({ title, description, badge, actions }: HeaderSpec) {
  return (
    <header data-slot="page-header" className="flex flex-col gap-(--t3-pad-2)">
      <div className="flex flex-wrap items-center gap-(--t3-pad-2)">
        <h1 data-slot="page-header-title" className="heading-font font-medium text-xl">
          {title}
        </h1>
        {badge ? <Badge>{badge}</Badge> : null}
        {actions?.length ? (
          <div data-slot="page-header-actions" className="ml-auto flex gap-(--t3-pad-2)">
            {actions.map((a) => (
              <Button key={a.label} variant={a.emphasis ?? "primary"} size="sm">
                {a.label}
              </Button>
            ))}
          </div>
        ) : null}
      </div>
      {description ? (
        <p data-slot="page-header-description" className="text-(--t2-muted) text-sm">
          {description}
        </p>
      ) : null}
    </header>
  );
}

export { PageHeader };
