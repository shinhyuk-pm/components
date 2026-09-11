import { cn } from "@/lib/utils";

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div data-slot="table-wrapper" className="w-full overflow-x-auto">
      <table
        data-slot="table"
        className={cn("w-full border-collapse text-left text-sm", className)}
        {...props}
      />
    </div>
  );
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "token-border border-x-0 border-t-0 px-(--t3-pad-3) py-(--t3-pad-2) font-medium text-(--t2-muted) text-xs",
        className,
      )}
      {...props}
    />
  );
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return <tr data-slot="table-row" className={cn(className)} {...props} />;
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "token-border border-x-0 border-t-0 px-(--t3-pad-3) py-(--t3-pad-3) text-(--t2-text)",
        className,
      )}
      {...props}
    />
  );
}

export { Table, TableCell, TableHead, TableRow };
