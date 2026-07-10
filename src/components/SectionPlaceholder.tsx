import type { ReactNode } from "react";

import { PlaceholderCard } from "@/components/PlaceholderCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type SectionPlaceholderProps = {
  title: string;
  description: string;
  isEmpty?: boolean;
  emptyTitle?: string;
  emptyDescription?: string;
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function SectionPlaceholder({
  title,
  description,
  isEmpty = true,
  emptyTitle = "More content coming soon",
  emptyDescription = "Add richer content here as the lab profile grows.",
  children,
  className,
  contentClassName,
}: SectionPlaceholderProps) {
  return (
    <Card
      className={cn(
        "h-full overflow-hidden border-slate-200 bg-white shadow-[0_10px_28px_rgba(15,23,42,0.05)]",
        className,
      )}
    >
      <CardHeader className="space-y-2 border-b border-slate-200/70 bg-gradient-to-b from-white to-slate-50/70 p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-blue-900" aria-hidden="true" />
          <CardTitle className="text-base font-semibold leading-6 text-slate-950">
            {title}
          </CardTitle>
        </div>
        <CardDescription className="text-sm leading-6 text-slate-500">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className={cn("px-5 pb-5 pt-5 sm:px-6 sm:pb-6", contentClassName)}>
        {isEmpty ? (
          <PlaceholderCard title={emptyTitle} description={emptyDescription} />
        ) : (
          children
        )}
      </CardContent>
    </Card>
  );
}





