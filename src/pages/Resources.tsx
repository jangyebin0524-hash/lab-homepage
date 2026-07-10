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
          description="TODO: Content will be added here."
          isEmpty={usefulLinks.length === 0}
          emptyTitle="Useful links"
          emptyDescription="TODO: Content will be added here."
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
          description="TODO: Content will be added here."
          isEmpty={documents.length === 0}
          emptyTitle="Documents"
          emptyDescription="TODO: Content will be added here."
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
          description="TODO: Content will be added here."
          isEmpty={externalResources.length === 0}
          emptyTitle="External resources"
          emptyDescription="TODO: Content will be added here."
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
          description="TODO: Content will be added here."
          emptyTitle="Resource categories"
          emptyDescription="TODO: Content will be added here."
        />
      </div>
    </div>
  );
}

