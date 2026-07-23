import { AnimatedSection } from '../components/AnimatedSection'
import { SectionWrapper } from '../components/SectionWrapper'
import { newsItems } from '../data/news'

const newsSlots = ['01', '02', '03']

export function NewsSection() {
  const sortedNews = [...newsItems].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <SectionWrapper id="news" index="07" title="News" eyebrow="Updates" tone="soft">
      <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm sm:p-7">
        <div className="mb-7 border-l-2 border-[#6F93A6] pl-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6F93A6]">Lab Timeline</p>
          <p className="mt-2 text-sm leading-7 text-[#64748B]">연구실 소식과 활동 내용이 추후 업데이트 예정입니다.</p>
        </div>

        <div className="relative space-y-5">
          <span className="absolute left-[0.68rem] top-2 h-[calc(100%-1rem)] w-px bg-[#CBD5E1]" aria-hidden="true" />
          {sortedNews.length === 0 && newsSlots.map((slot) => (
            <AnimatedSection key={slot}>
              <article className="interactive-card relative grid gap-4 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 pl-10 shadow-sm sm:grid-cols-[140px_1fr]">
                <span className="absolute left-2 top-6 h-3 w-3 rounded-full border-2 border-white bg-[#6F93A6] shadow-sm" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold text-[#64748B]">Date Placeholder</p>
                  <p className="mt-2 inline-flex rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#0F3A5C]">Category Placeholder</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#1F2937]">Title Placeholder</h3>
                  <p className="mt-2 text-sm leading-6 text-[#64748B]">Short Description Placeholder. 추후 업데이트 예정입니다.</p>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
