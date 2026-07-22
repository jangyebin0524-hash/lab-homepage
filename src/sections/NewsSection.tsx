import { SectionWrapper } from '../components/SectionWrapper'
import { newsItems } from '../data/news'

const newsSlots = ['01', '02', '03']

export function NewsSection() {
  const sortedNews = [...newsItems].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <SectionWrapper id="news" index="07" title="News" eyebrow="Updates" tone="soft">
      <div className="overflow-hidden rounded-2xl border border-[#E2E2E2] bg-white shadow-sm">
        <div className="grid grid-cols-[90px_100px_1fr] gap-4 border-b border-[#E2E2E2] bg-[#F2F2F2] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#666666] sm:grid-cols-[130px_140px_1fr]">
          <span>Date</span>
          <span>Category</span>
          <span>Title</span>
        </div>
        {sortedNews.length === 0 && newsSlots.map((slot) => (
          <article className="interactive-card grid gap-3 border-b border-[#E2E2E2] px-5 py-6 last:border-b-0 sm:grid-cols-[130px_140px_1fr] sm:gap-4" key={slot}>
            <p className="text-xs font-medium text-[#666666]">Date Placeholder</p>
            <p className="text-xs font-semibold uppercase text-[#333333]">Category Placeholder</p>
            <div>
              <h3 className="text-sm font-semibold text-[#222222]">Title Placeholder</h3>
              <p className="mt-2 text-sm leading-6 text-[#666666]">Short description Placeholder. 추후 업데이트 예정입니다.</p>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}
