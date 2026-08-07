import { useState } from 'react'
import { AnimatedSection } from '../components/AnimatedSection'
import { SectionWrapper } from '../components/SectionWrapper'
import { newsItems } from '../data/news'

type NewsBoard = 'publications' | 'seminars'

export function NewsSection() {
  const [activeBoard, setActiveBoard] = useState<NewsBoard>('publications')
  const sortedNews = [...newsItems].sort((a, b) => b.date.localeCompare(a.date))
  const seminarNews = sortedNews.filter((item) => item.category === 'Seminar')
  const publicationNews = sortedNews.filter((item) => item.category !== 'Seminar')

  return (
    <SectionWrapper id="news" index="07" title="News" eyebrow="Lab updates" tone="soft">
      <div>
        <div className="mb-10 overflow-x-auto border-b border-[#CBD5E1]">
          <div className="flex min-w-max gap-7" role="tablist" aria-label="News boards">
            <button
              type="button"
              role="tab"
              id="publications-tab"
              aria-controls="news-board-panel"
              aria-selected={activeBoard === 'publications'}
              className={`relative shrink-0 pb-3 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#94A3B8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F1F5F9] ${
                activeBoard === 'publications' ? 'text-[#1F2937]' : 'text-[#94A3B8] hover:text-[#475569]'
              }`}
              onClick={() => setActiveBoard('publications')}
            >
              Awards &amp; Publications
              <span
                className={`absolute inset-x-0 bottom-0 h-0.5 bg-[#475569] transition-transform duration-300 ${
                  activeBoard === 'publications' ? 'scale-x-100' : 'scale-x-0'
                }`}
                aria-hidden="true"
              />
            </button>
            <button
              type="button"
              role="tab"
              id="seminars-tab"
              aria-controls="news-board-panel"
              aria-selected={activeBoard === 'seminars'}
              className={`relative shrink-0 pb-3 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#94A3B8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F1F5F9] ${
                activeBoard === 'seminars' ? 'text-[#1F2937]' : 'text-[#94A3B8] hover:text-[#475569]'
              }`}
              onClick={() => setActiveBoard('seminars')}
            >
              Seminar Board
              <span
                className={`absolute inset-x-0 bottom-0 h-0.5 bg-[#475569] transition-transform duration-300 ${
                  activeBoard === 'seminars' ? 'scale-x-100' : 'scale-x-0'
                }`}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        <AnimatedSection key={activeBoard}>
          <section id="news-board-panel" role="tabpanel" aria-labelledby={`${activeBoard}-tab`}>
            <div className="mb-8 max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#94A3B8]">News Board</p>
              <h3 id={`${activeBoard}-board-title`} className="mt-3 text-2xl font-semibold text-[#1F2937]">
                {activeBoard === 'publications' ? 'Awards & Publications' : 'Seminar Board'}
              </h3>
              <p className="mt-2 text-sm leading-7 text-[#64748B]">
                {activeBoard === 'publications'
                  ? 'Paper acceptances, publications, and awards.'
                  : 'Seminar schedules and announcements.'}
              </p>
            </div>

            {activeBoard === 'publications' ? (
              <div className="relative border-t border-[#CBD5E1]">
                <span className="absolute bottom-8 left-[0.36rem] top-8 w-px bg-[#CBD5E1]" aria-hidden="true" />
                {publicationNews.map((item) => (
                  <AnimatedSection key={item.id}>
                    <article className="relative grid gap-4 border-b border-[#E2E8F0] py-7 pl-9 sm:grid-cols-[150px_1fr]">
                      <span className="absolute left-0 top-8 h-3 w-3 rounded-full border-2 border-[#F1F5F9] bg-[#64748B]" aria-hidden="true" />
                      <div>
                        <p className="text-sm font-medium text-[#475569]">{item.date}</p>
                        <p className="mt-2 text-xs text-[#94A3B8]">{item.category}</p>
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-[#1F2937]">{item.title}</h4>
                        <p className="mt-2 text-sm leading-7 text-[#64748B]">{item.description}</p>
                      </div>
                    </article>
                  </AnimatedSection>
                ))}
              </div>
            ) : (
              <div className="border-t border-[#CBD5E1]">
                {seminarNews.length > 0 ? seminarNews.map((item) => (
                  <AnimatedSection key={item.id}>
                    <article className="border-b border-[#E2E8F0] py-7">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="text-sm font-medium text-[#475569]">{item.date}</p>
                        <p className="text-xs text-[#94A3B8]">{item.category}</p>
                      </div>
                      <h4 className="mt-4 text-base font-semibold text-[#1F2937]">{item.title}</h4>
                      <p className="mt-2 text-sm leading-7 text-[#64748B]">{item.description}</p>
                      {item.seminarPresentations && item.seminarPresentations.length > 0 && (
                        <div className="mt-7 grid gap-5 border-t border-[#E2E8F0] pt-6 lg:grid-cols-2">
                          {item.seminarPresentations.map((presentation) => (
                            <div className="surface-card interactive-card overflow-hidden" key={presentation.id}>
                              <div className="aspect-video overflow-hidden border-b border-[#E2E8F0] bg-[#F8FAFC]">
                                <img
                                  src={`${import.meta.env.BASE_URL}${presentation.image}`}
                                  alt={`${presentation.title} presentation preview`}
                                  className="h-full w-full object-cover"
                                  loading="lazy"
                                />
                              </div>
                              <div className="p-5 sm:p-6">
                                <p className="text-xs font-medium text-[#64748B]">{presentation.presenter}</p>
                                <h5 className="mt-2 text-base font-semibold text-[#1F2937]">{presentation.title}</h5>
                                <p className="mt-3 text-sm leading-7 text-[#64748B]">{presentation.summary}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </article>
                  </AnimatedSection>
                )) : (
                  <div className="border-b border-[#E2E8F0] py-10">
                    <p className="text-sm font-medium text-[#475569]">No seminar announcements yet.</p>
                    <p className="mt-2 text-sm leading-7 text-[#64748B]">Seminar information will be posted here.</p>
                  </div>
                )}
              </div>
            )}
          </section>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  )
}
