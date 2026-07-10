import { ItemCard } from "@/components/ItemCard";
import { SectionPlaceholder } from "@/components/SectionPlaceholder";
import { publications } from "@/data/publications";

export function Publications() {
  const journalPapers = publications.filter((publication) => publication.category === "journal");
  const conferencePapers = publications.filter(
    (publication) => publication.category === "conference",
  );
  const papersWithLinks = publications.filter((publication) => publication.links?.length);

  return (
    <div className="space-y-4">
      <SectionPlaceholder
        title="Journal papers"
        description="TODO: Content will be added here."
        isEmpty={journalPapers.length === 0}
        emptyTitle="Journal papers"
        emptyDescription="TODO: Content will be added here."
        contentClassName="grid gap-4 lg:grid-cols-2"
      >
        {journalPapers.map((publication) => (
          <ItemCard
            key={publication.id}
            title={publication.title}
            description={publication.authors.join(", ")}
            meta={[publication.venue, publication.year].filter(Boolean).join(" / ")}
            links={publication.links}
          />
        ))}
      </SectionPlaceholder>

      <SectionPlaceholder
        title="Conference papers"
        description="TODO: Content will be added here."
        isEmpty={conferencePapers.length === 0}
        emptyTitle="Conference papers"
        emptyDescription="TODO: Content will be added here."
        contentClassName="space-y-3"
      >
        {conferencePapers.map((publication) => (
          <ItemCard
            key={publication.id}
            title={publication.title}
            description={publication.authors.join(", ")}
            meta={[publication.venue, publication.year].filter(Boolean).join(" / ")}
            links={publication.links}
          />
        ))}
      </SectionPlaceholder>

      <div className="grid gap-4 lg:grid-cols-2">
        <SectionPlaceholder
          title="Year filter"
          description="TODO: Content will be added here."
          emptyTitle="Year filter"
          emptyDescription="TODO: Content will be added here."
        />
        <SectionPlaceholder
          title="Paper links"
          description="TODO: Content will be added here."
          isEmpty={papersWithLinks.length === 0}
          emptyTitle="Paper links"
          emptyDescription="TODO: Content will be added here."
          contentClassName="space-y-3"
        >
          {papersWithLinks.map((publication) => (
            <ItemCard
              key={publication.id}
              title={publication.title}
              description={publication.authors.join(", ")}
              meta={[publication.venue, publication.year].filter(Boolean).join(" / ")}
              links={publication.links}
            />
          ))}
        </SectionPlaceholder>
      </div>
    </div>
  );
}



