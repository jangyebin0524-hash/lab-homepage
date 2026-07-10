import { ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { LinkItem } from "@/types/content";

type ItemCardProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  meta?: string;
  tags?: string[];
  links?: LinkItem[];
  className?: string;
};

export function ItemCard({
  title,
  description,
  eyebrow,
  meta,
  tags = [],
  links = [],
  className,
}: ItemCardProps) {
  return (
    <Card className={cn("h-full border-slate-200 bg-white shadow-none", className)}>
      <CardContent className="space-y-4 p-4">
        <div className="space-y-2">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-normal text-slate-500">
              {eyebrow}
            </p>
          ) : null}
          <div className="space-y-1">
            <h3 className="text-sm font-semibold leading-6 text-slate-950">{title}</h3>
            {meta ? <p className="text-xs text-slate-500">{meta}</p> : null}
          </div>
          {description ? (
            <p className="text-sm leading-6 text-slate-700">{description}</p>
          ) : null}
        </div>

        {tags.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-medium text-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        {links.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {links.map((link) => (
              <a
                key={`${link.label}-${link.href}`}
                href={link.href}
                className="inline-flex items-center gap-1 rounded-md border border-slate-200 px-2 py-1 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50"
              >
                {link.label}
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </a>
            ))}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}


