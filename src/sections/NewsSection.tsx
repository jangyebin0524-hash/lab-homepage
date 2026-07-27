import { AnimatedSection } from '../components/AnimatedSection'
import { SectionWrapper } from '../components/SectionWrapper'
import { newsItems } from '../data/news'

const newsSlots = ['01', '02', '03']

export function NewsSection() {
  const sortedNews = [...newsItems].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <SectionWrapper id="news" index="07" title="News" eyebrow="Lab updates" tone="soft">
      <div>
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-medium text-[#475569]">Lab Timeline</p>
          <p className="mt-2 text-sm leading-7 text-[#64748B]">연구실 소식과 활동 내용이 추후 업데이트 예정입니다.</p>
        </div>

        <div className="relative border-t border-[#CBD5E1]">
          <span className="absolute bottom-8 left-[0.36rem] top-8 w-px bg-[#CBD5E1]" aria-hidden="true" />
          {sortedNews.length > 0 ? sortedNews.map((item) => (
            <AnimatedSection key={item.id}>
              <article className="relative grid gap-4 border-b border-[#E2E8F0] py-7 pl-9 sm:grid-cols-[150px_1fr]">
                <span className="absolute left-0 top-8 h-3 w-3 rounded-full border-2 border-[#F1F5F9] bg-[#64748B]" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-[#475569]">{item.date}</p>
                  <p className="mt-2 text-xs text-[#94A3B8]">{item.category}</p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#1F2937]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#64748B]">{item.description}</p>
                </div>
              </article>
            </AnimatedSection>
          )) : newsSlots.map((slot) => (
            <AnimatedSection key={slot}>
              <article className="relative grid gap-4 border-b border-[#E2E8F0] py-7 pl-9 sm:grid-cols-[150px_1fr]">
                <span className="absolute left-0 top-8 h-3 w-3 rounded-full border-2 border-[#F1F5F9] bg-[#64748B]" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-[#475569]">Date Placeholder</p>
                  <p className="mt-2 text-xs text-[#94A3B8]">Category Placeholder</p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#1F2937]">Title Placeholder</h3>
                  <p className="mt-2 text-sm leading-7 text-[#64748B]">Short Description Placeholder. 추후 업데이트 예정입니다.</p>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
