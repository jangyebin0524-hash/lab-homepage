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
        description="Peer-reviewed work that reflects the lab's long-form research contributions."
        isEmpty={journalPapers.length === 0}
        emptyTitle="Journal papers"
        emptyDescription="Add recent journal publications to feature archival work."
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
        description="Selected conference publications that highlight recent and upcoming work."
        isEmpty={conferencePapers.length === 0}
        emptyTitle="Conference papers"
        emptyDescription="Add conference presentations or proceedings to highlight current research."
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
          description="Use this space to group or browse publications by publication year."
          emptyTitle="Year filter"
          emptyDescription="Add a filter or timeline component once the publication list grows."
        />
        <SectionPlaceholder
          title="Paper links"
          description="Direct links for the papers and supplementary resources featured here."
          isEmpty={papersWithLinks.length === 0}
          emptyTitle="Paper links"
          emptyDescription="Add links to PDF previews, slides, or related resources."
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


