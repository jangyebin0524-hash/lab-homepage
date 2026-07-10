import { ItemCard } from "@/components/ItemCard";
import { SectionPlaceholder } from "@/components/SectionPlaceholder";
import {
  relatedPublications,
  researchDiagram,
  researchKeywords,
  researchTopics,
} from "@/data/research";

export function Research() {
  const hasDiagram = Boolean(researchDiagram.imageUrl || researchDiagram.description);

  return (
    <div className="space-y-4">
      <SectionPlaceholder
        title="Research areas"
        description="TODO: Content will be added here."
        isEmpty={researchTopics.length === 0}
        emptyTitle="Research areas"
        emptyDescription="TODO: Content will be added here."
        contentClassName="grid gap-4 lg:grid-cols-3"
      >
        {researchTopics.map((topic) => (
          <ItemCard
            key={topic.id}
            title={topic.title}
            description={topic.summary}
            tags={topic.keywords}
            links={topic.links}
          />
        ))}
      </SectionPlaceholder>
      <div className="grid gap-4 lg:grid-cols-2">
        <SectionPlaceholder
          title="Research keywords"
          description="TODO: Content will be added here."
          isEmpty={researchKeywords.length === 0}
          emptyTitle="Research keywords"
          emptyDescription="TODO: Content will be added here."
        >
          <div className="flex flex-wrap gap-2">
            {researchKeywords.map((keyword) => (
              <span
                key={keyword}
                className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700"
              >
                {keyword}
              </span>
            ))}
          </div>
        </SectionPlaceholder>
        <SectionPlaceholder
          title="Research overview image"
          description="TODO: Content will be added here."
          isEmpty={!hasDiagram}
          emptyTitle="Research overview image"
          emptyDescription="TODO: Content will be added here."
        >
          <div className="space-y-4">
            {researchDiagram.imageUrl ? (
              <img
                src={researchDiagram.imageUrl}
                alt={researchDiagram.altText}
                className="aspect-video w-full rounded-md border border-slate-200 object-cover"
              />
            ) : null}
            {researchDiagram.description ? (
              <p className="text-sm leading-6 text-slate-700">{researchDiagram.description}</p>
            ) : null}
          </div>
        </SectionPlaceholder>
      </div>
      <SectionPlaceholder
        title="Related publications"
        description="TODO: Content will be added here."
        isEmpty={relatedPublications.length === 0}
        emptyTitle="Related publications"
        emptyDescription="TODO: Content will be added here."
        contentClassName="grid gap-4 lg:grid-cols-2"
      >
        {relatedPublications.map((publication) => (
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
  );
}




