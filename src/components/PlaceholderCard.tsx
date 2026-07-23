import type { LucideIcon } from 'lucide-react'
import { cn } from '../lib/utils'

interface PlaceholderCardProps {
  icon: LucideIcon
  title: string
  description?: string
  className?: string
  eyebrow?: string
}

export function PlaceholderCard({
  icon: Icon,
  title,
  description = '추후 내용이 추가될 예정입니다.',
  className,
  eyebrow = 'TODO',
}: PlaceholderCardProps) {
  return (
    <article className={cn('interactive-card rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm', className)}>
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-[#CBD5E1] bg-[#EAF3F8] text-[#0F3A5C]">
          <Icon size={17} aria-hidden="true" />
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#94A3B8]">
          Placeholder
        </span>
      </div>
      <div className="my-5 h-px bg-[#E2E8F0]" />
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#6F93A6]">{eyebrow}</p>
      <h3 className="mt-2 text-lg font-semibold text-[#1F2937]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#64748B]">{description}</p>
    </article>
  )
}
