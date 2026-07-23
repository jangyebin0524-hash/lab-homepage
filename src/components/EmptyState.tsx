import { Inbox } from 'lucide-react'

interface EmptyStateProps {
  title?: string
}

export function EmptyState({ title = '추후 업데이트 예정입니다.' }: EmptyStateProps) {
  return (
    <div className="empty-state rounded-2xl border border-dashed border-[#CBD5E1] bg-white px-6 py-10 text-center">
      <span className="mx-auto grid h-10 w-10 place-items-center rounded-xl border border-[#CBD5E1] bg-[#EAF3F8] text-[#0F3A5C]">
        <Inbox size={18} aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-base font-semibold text-[#1F2937]">{title}</h3>
      <p className="mt-2 text-sm text-[#64748B]">TODO · Content will be added here.</p>
    </div>
  )
}
