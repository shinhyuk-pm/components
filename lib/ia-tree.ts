/**
 * IA 트리
 *
 * 기획 산출물의 목차다. 이 트리가 곧 화면의 내비게이션 구조가 된다.
 * 사이드바와 현재 위치 표시는 여기서 기계적으로 파생되므로
 * AI가 판단할 여지가 없다. 판단이 없으면 결과가 흔들리지 않는다.
 */

export type IaNode = {
  id: string;
  title: string;
  /** 잎 노드에만 있다. 화면 명세의 archetype 과 연결된다. */
  archetype?: string;
  children?: IaNode[];
};

export type IaTree = {
  product: string;
  nodes: IaNode[];
};

export function validateIaTree(input: unknown): { ok: boolean; errors: string[]; tree?: IaTree } {
  const errors: string[] = [];
  if (typeof input !== "object" || input === null || Array.isArray(input)) {
    return { ok: false, errors: ["IA 트리는 객체여야 합니다."] };
  }
  const t = input as Record<string, unknown>;
  if (typeof t.product !== "string" || t.product.trim() === "") {
    errors.push("product 는 비어 있지 않은 문자열이어야 합니다.");
  }
  if (!Array.isArray(t.nodes) || t.nodes.length === 0) {
    errors.push("nodes 는 최소 1개가 필요합니다.");
    return { ok: false, errors };
  }

  const seen = new Set<string>();
  const walk = (nodes: unknown[], path: string) => {
    nodes.forEach((n, i) => {
      if (typeof n !== "object" || n === null) {
        errors.push(`${path}[${i}] 가 객체가 아닙니다.`);
        return;
      }
      const node = n as Record<string, unknown>;
      if (typeof node.id !== "string" || node.id.trim() === "") {
        errors.push(`${path}[${i}].id 가 없습니다.`);
      } else if (seen.has(node.id)) {
        errors.push(`id "${node.id}" 가 중복됩니다.`);
      } else {
        seen.add(node.id);
      }
      if (typeof node.title !== "string" || node.title.trim() === "") {
        errors.push(`${path}[${i}].title 이 없습니다.`);
      }
      if (node.children !== undefined) {
        if (!Array.isArray(node.children)) {
          errors.push(`${path}[${i}].children 은 배열이어야 합니다.`);
        } else {
          walk(node.children, `${path}[${i}].children`);
        }
      }
    });
  };
  walk(t.nodes, "nodes");

  return errors.length > 0
    ? { ok: false, errors }
    : { ok: true, errors: [], tree: input as IaTree };
}

/** 잎 노드만 모은다. 화면 명세가 필요한 대상이다. */
export function leafNodes(tree: IaTree): IaNode[] {
  const out: IaNode[] = [];
  const walk = (nodes: IaNode[]) => {
    for (const n of nodes) {
      if (n.children?.length) walk(n.children);
      else out.push(n);
    }
  };
  walk(tree.nodes);
  return out;
}

/** 특정 노드까지의 경로. 현재 위치 표시에 쓴다. */
export function pathTo(tree: IaTree, id: string): IaNode[] {
  const found: IaNode[] = [];
  const walk = (nodes: IaNode[], trail: IaNode[]): boolean => {
    for (const n of nodes) {
      const next = [...trail, n];
      if (n.id === id) {
        found.push(...next);
        return true;
      }
      if (n.children?.length && walk(n.children, next)) return true;
    }
    return false;
  };
  walk(tree.nodes, []);
  return found;
}
