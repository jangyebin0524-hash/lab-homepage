import { ItemCard } from "@/components/ItemCard";
import { SectionPlaceholder } from "@/components/SectionPlaceholder";
import { announcements, mediaItems, newsItems, recentUpdates } from "@/data/news";

export function News() {
  return (
    <div className="space-y-4">
      <SectionPlaceholder
        title="News and highlights"
        description="TODO: Content will be added here."
        isEmpty={newsItems.length === 0}
        emptyTitle="News and highlights"
        emptyDescription="TODO: Content will be added here."
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
          description="TODO: Content will be added here."
          isEmpty={announcements.length === 0}
          emptyTitle="Announcements"
          emptyDescription="TODO: Content will be added here."
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
          description="TODO: Content will be added here."
          isEmpty={recentUpdates.length === 0}
          emptyTitle="Recent updates"
          emptyDescription="TODO: Content will be added here."
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
        description="TODO: Content will be added here."
        isEmpty={mediaItems.length === 0}
        emptyTitle="Media highlights"
        emptyDescription="TODO: Content will be added here."
        contentClassName="grid gap-4 lg:grid-cols-3"
      >
        {mediaItems.map((item) => (
          <ItemCard key={item.id} title={item.title} description={item.description} />
        ))}
      </SectionPlaceholder>
    </div>
  );
}

