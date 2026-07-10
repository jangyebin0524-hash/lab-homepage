import { ItemCard } from "@/components/ItemCard";
import { PlaceholderCard } from "@/components/PlaceholderCard";
import { SectionPlaceholder } from "@/components/SectionPlaceholder";
import { newsItems } from "@/data/news";
import { homeHighlights, siteInfo } from "@/data/siteInfo";

export function Home() {
  const hasResearchOverview = Boolean(siteInfo.summary || siteInfo.keywords.length > 0);

  return (
    <div className="space-y-4">
      <SectionPlaceholder
        title="Welcome to the lab"
        description="We study how people and intelligent systems can collaborate through natural, multimodal experiences."
        isEmpty={false}
        contentClassName="grid gap-4 lg:grid-cols-[1fr_1fr_1.2fr]"
        className="shadow-soft"
      >
        <PlaceholderCard
          title={siteInfo.labName}
          description={siteInfo.affiliation}
        />
        <PlaceholderCard
          title="What we build"
          description={siteInfo.shortDescription}
        />
        {siteInfo.heroImageUrl ? (
          <img
            src={siteInfo.heroImageUrl}
            alt="Lab members and research setup"
            className="aspect-video w-full rounded-md border border-slate-200 object-cover"
          />
        ) : (
          <PlaceholderCard
            title="Research in motion"
            description="A snapshot of our prototypes, deployments, and collaborative projects."
          />
        )}
      </SectionPlaceholder>

      <div className="grid gap-4 lg:grid-cols-2">
        <SectionPlaceholder
          title="Research overview"
          description="A short look at the themes guiding our work and the questions we explore."
          isEmpty={!hasResearchOverview}
          emptyTitle="Research overview"
          emptyDescription="Add a summary of the lab's research themes and focus areas."
        >
          <div className="space-y-4">
            {siteInfo.summary ? (
              <p className="text-sm leading-6 text-slate-700">{siteInfo.summary}</p>
            ) : null}
            {siteInfo.keywords.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {siteInfo.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </SectionPlaceholder>

        <SectionPlaceholder
          title="Recent updates"
          description="Recent research highlights, announcements, and community activity."
          isEmpty={newsItems.length === 0 && homeHighlights.length === 0}
          emptyTitle="Recent updates"
          emptyDescription="Add new highlights or news items to keep the homepage current."
          contentClassName="space-y-3"
        >
          {[...homeHighlights, ...newsItems].map((item) => (
            <ItemCard
              key={item.id}
              title={item.title}
              description={"summary" in item ? item.summary : item.description}
              meta={"date" in item ? item.date : undefined}
              links={"links" in item ? item.links : undefined}
            />
          ))}
        </SectionPlaceholder>
      </div>

      <SectionPlaceholder
        title="Quick links"
        description="Jump directly to the sections that matter most for visitors and collaborators."
        isEmpty={siteInfo.quickLinks.length === 0}
        emptyTitle="Quick links"
        emptyDescription="Add links to open positions, publications, or contact details."
        contentClassName="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {siteInfo.quickLinks.map((link) => (
          <ItemCard key={`${link.label}-${link.href}`} title={link.label} links={[link]} />
        ))}
      </SectionPlaceholder>
    </div>
  );
}



