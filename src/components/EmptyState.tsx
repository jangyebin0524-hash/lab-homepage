import { Inbox } from 'lucide-react'

interface EmptyStateProps {
  title?: string
}

export function EmptyState({ title = '추후 업데이트 예정입니다.' }: EmptyStateProps) {
  return (
    <div className="empty-state rounded-2xl border border-dashed border-[#DADADA] bg-white px-6 py-10 text-center">
      <span className="mx-auto grid h-10 w-10 place-items-center rounded-xl border border-[#E2E2E2] bg-[#F2F2F2] text-[#333333]">
        <Inbox size={18} aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-base font-semibold text-[#222222]">{title}</h3>
      <p className="mt-2 text-sm text-[#666666]">TODO · Content will be added here.</p>
    </div>
  )
}
