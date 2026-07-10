import type { ReactNode } from "react";

import { SectionPlaceholder } from "@/components/SectionPlaceholder";

type DataSectionProps = {
  title: string;
  description: string;
  isEmpty: boolean;
  emptyTitle: string;
  emptyDescription: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function DataSection({
  title,
  description,
  isEmpty,
  emptyTitle,
  emptyDescription,
  children,
  className,
  contentClassName,
}: DataSectionProps) {
  return (
    <SectionPlaceholder
      title={title}
      description={description}
      isEmpty={isEmpty}
      emptyTitle={emptyTitle}
      emptyDescription={emptyDescription}
      className={className}
      contentClassName={contentClassName}
    >
      {children}
    </SectionPlaceholder>
  );
}

