"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { IaNode, IaTree } from "@/lib/ia-tree";
import { pathTo } from "@/lib/ia-tree";

/**
 * 앱 셸
 *
 * IA 트리에서 사이드바와 현재 위치를 기계적으로 만든다.
 * 여기에는 AI의 판단이 들어가지 않는다.
 */

function NavItem({
  node,
  activeId,
  depth,
  onSelect,
}: {
  node: IaNode;
  activeId: string;
  depth: number;
  onSelect: (id: string) => void;
}) {
  const isGroup = Boolean(node.children?.length);

  if (isGroup) {
    return (
      <div data-slot="nav-group" className="flex flex-col gap-(--t3-pad-1)">
        <p className="px-(--t3-pad-2) pt-(--t3-pad-2) text-(--t2-muted) text-xs">{node.title}</p>
        {node.children?.map((child) => (
          <NavItem
            key={child.id}
            node={child}
            activeId={activeId}
            depth={depth + 1}
            onSelect={onSelect}
          />
        ))}
      </div>
    );
  }

  return (
    <Button
      data-slot="nav-item"
      variant={node.id === activeId ? "primary" : "ghost"}
      size="sm"
      className="justify-start"
      onClick={() => onSelect(node.id)}
    >
      {node.title}
    </Button>
  );
}

export function AppShell({
  tree,
  activeId,
  onSelect,
  children,
}: {
  tree: IaTree;
  activeId: string;
  onSelect: (id: string) => void;
  children: React.ReactNode;
}) {
  const trail = pathTo(tree, activeId);

  return (
    <div data-slot="app-shell" className="grid gap-(--t3-pad-4) md:grid-cols-[minmax(0,12rem)_1fr]">
      <nav
        data-slot="app-shell-nav"
        className="flex h-fit flex-col gap-(--t3-pad-1) md:sticky md:top-(--t3-pad-4)"
      >
        <p className="heading-font px-(--t3-pad-2) font-medium text-sm">{tree.product}</p>
        <Separator />
        {tree.nodes.map((node) => (
          <NavItem key={node.id} node={node} activeId={activeId} depth={0} onSelect={onSelect} />
        ))}
      </nav>

      <div data-slot="app-shell-content" className="flex min-w-0 flex-col gap-(--t3-pad-4)">
        {trail.length > 0 ? (
          <div
            data-slot="breadcrumb"
            className="flex flex-wrap items-center gap-(--t3-pad-1) text-(--t2-muted) text-xs"
          >
            {trail.map((node, i) => (
              <span key={node.id} className="flex items-center gap-(--t3-pad-1)">
                {i > 0 ? <ChevronRight className="size-3" /> : null}
                {node.title}
              </span>
            ))}
          </div>
        ) : null}
        {children}
      </div>
    </div>
  );
}
