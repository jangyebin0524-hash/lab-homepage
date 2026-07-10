import { ItemCard } from "@/components/ItemCard";
import { SectionPlaceholder } from "@/components/SectionPlaceholder";
import { announcements, mediaItems, newsItems, recentUpdates } from "@/data/news";

export function News() {
  return (
    <div className="space-y-4">
      <SectionPlaceholder
        title="News and highlights"
        description="Recent stories, publications, and lab milestones."
        isEmpty={newsItems.length === 0}
        emptyTitle="News and highlights"
        emptyDescription="Add recent stories and announcements to keep the news page fresh."
        contentClassName="space-y-3"
      >
        {newsItems.map((item) => (
          <ItemCard
            key={item.id}
            title={item.title}
            description={item.summary}
            meta={item.date}
            links={item.links}
          />
        ))}
      </SectionPlaceholder>

      <div className="grid gap-4 lg:grid-cols-2">
        <SectionPlaceholder
          title="Announcements"
          description="Important notices and upcoming opportunities for the community."
          isEmpty={announcements.length === 0}
          emptyTitle="Announcements"
          emptyDescription="Add notices, calls, or community updates here."
          contentClassName="space-y-3"
        >
          {announcements.map((item) => (
            <ItemCard
              key={item.id}
              title={item.title}
              description={item.summary}
              meta={item.date}
              links={item.links}
            />
          ))}
        </SectionPlaceholder>

        <SectionPlaceholder
          title="Recent updates"
          description="Short updates from ongoing work and day-to-day progress."
          isEmpty={recentUpdates.length === 0}
          emptyTitle="Recent updates"
          emptyDescription="Add short study notes, wins, or progress updates."
          contentClassName="space-y-3"
        >
          {recentUpdates.map((item) => (
            <ItemCard
              key={item.id}
              title={item.title}
              description={item.summary}
              meta={item.date}
              links={item.links}
            />
          ))}
        </SectionPlaceholder>
      </div>

      <SectionPlaceholder
        title="Media highlights"
        description="A place for demos, workshop snapshots, and other visual content."
        isEmpty={mediaItems.length === 0}
        emptyTitle="Media highlights"
        emptyDescription="Add media items such as reels, photos, or demo summaries."
        contentClassName="grid gap-4 lg:grid-cols-3"
      >
        {mediaItems.map((item) => (
          <ItemCard key={item.id} title={item.title} description={item.description} />
        ))}
      </SectionPlaceholder>
    </div>
  );
}
