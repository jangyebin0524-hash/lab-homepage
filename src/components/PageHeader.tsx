type PageHeaderProps = {
  title: string;
  eyebrow?: string;
  description?: string;
};

export function PageHeader({
  title,
  eyebrow = "TODO",
  description = "TODO: Content will be added here.",
}: PageHeaderProps) {
  return (
    <header className="mb-6 border-b border-slate-200 pb-5 sm:mb-8 sm:pb-6">
      <p className="text-xs font-semibold uppercase tracking-normal text-slate-500">
        {eyebrow}
      </p>
      <div className="mt-2 max-w-3xl space-y-2">
        <h1 className="text-2xl font-semibold tracking-normal text-slate-950 sm:text-3xl">
          {title}
        </h1>
        <p className="text-sm leading-6 text-slate-500">{description}</p>
      </div>
    </header>
  );
}



