import { CircleDashed } from "lucide-react";

import { cn } from "@/lib/utils";

type EmptyStateProps = {
  title: string;
  description: string;
  className?: string;
};

export function EmptyState({ title, description, className }: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex min-h-28 flex-col items-center justify-center rounded-md border border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center",
        className,
      )}
    >
      <CircleDashed className="mb-3 h-5 w-5 text-slate-500" aria-hidden="true" />
      <p className="text-sm font-semibold text-slate-700">{title}</p>
      <p className="mt-1 max-w-md text-sm leading-6 text-slate-500">{description}</p>
    </div>
  );
}


