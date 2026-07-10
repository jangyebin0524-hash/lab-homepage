import { CircleDashed } from "lucide-react";

import { cn } from "@/lib/utils";

type PlaceholderCardProps = {
  title?: string;
  description?: string;
  className?: string;
};

export function PlaceholderCard({
  title = "TODO / Placeholder",
  description = "TODO: Content will be added here.",
  className,
}: PlaceholderCardProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-32 flex-col justify-center overflow-hidden rounded-md border border-dashed border-slate-200 bg-slate-50/80 px-4 py-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] transition-colors hover:bg-white",
        "before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-slate-200 before:to-transparent",
        className,
      )}
    >
      <CircleDashed className="mx-auto mb-3 h-5 w-5 text-slate-500" aria-hidden="true" />
      <p className="text-sm font-semibold text-slate-700">{title}</p>
      <p className="mx-auto mt-1 max-w-md text-sm leading-6 text-slate-500">{description}</p>
    </div>
  );
}



