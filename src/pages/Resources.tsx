import { ItemCard } from "@/components/ItemCard";
import { SectionPlaceholder } from "@/components/SectionPlaceholder";
import { resources } from "@/data/resources";

export function Resources() {
  const usefulLinks = resources.filter((resource) => resource.category === "link");
  const documents = resources.filter((resource) => resource.category === "document");
  const externalResources = resources.filter(
    (resource) => resource.category !== "link" && resource.category !== "document",
  );

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <SectionPlaceholder
          title="Useful links"
          description="Links to helpful resources for collaborators and visitors."
          isEmpty={usefulLinks.length === 0}
          emptyTitle="Useful links"
          emptyDescription="Add links to teaching materials, partner pages, or related communities."
          contentClassName="grid gap-4"
        >
          {usefulLinks.map((resource) => (
            <ItemCard
              key={resource.id}
              title={resource.title}
              description={resource.description}
              links={resource.links}
            />
          ))}
        </SectionPlaceholder>

        <SectionPlaceholder
          title="Documents"
          description="Reference materials and lab documentation that visitors can browse."
          isEmpty={documents.length === 0}
          emptyTitle="Documents"
          emptyDescription="Add documents such as methods guides, reports, or reading lists."
          contentClassName="grid gap-4"
        >
          {documents.map((resource) => (
            <ItemCard
              key={resource.id}
              title={resource.title}
              description={resource.description}
              links={resource.links}
            />
          ))}
        </SectionPlaceholder>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <SectionPlaceholder
          title="External resources"
          description="Related datasets, demos, and partner resources."
          isEmpty={externalResources.length === 0}
          emptyTitle="External resources"
          emptyDescription="Add community tools, datasets, or external references here."
          contentClassName="grid gap-4"
        >
          {externalResources.map((resource) => (
            <ItemCard
              key={resource.id}
              title={resource.title}
              description={resource.description}
              eyebrow={resource.category}
              links={resource.links}
            />
          ))}
        </SectionPlaceholder>

        <SectionPlaceholder
          title="Resource categories"
          description="A compact overview of how the lab organizes internal resources."
          emptyTitle="Resource categories"
          emptyDescription="Add a short explanation of categories, tags, or archive structure."
        />
      </div>
    </div>
  );
}
