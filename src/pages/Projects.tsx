import { ItemCard } from "@/components/ItemCard";
import { SectionPlaceholder } from "@/components/SectionPlaceholder";
import { fundingInformation, projectTimeline, projects } from "@/data/projects";

export function Projects() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <SectionPlaceholder
        title="Current and recent projects"
        description="TODO: Content will be added here."
        isEmpty={projects.length === 0}
        emptyTitle="Current and recent projects"
        emptyDescription="TODO: Content will be added here."
        contentClassName="grid gap-4"
      >
        {projects.map((project) => (
          <ItemCard
            key={project.id}
            title={project.title}
            description={project.summary}
            eyebrow={project.status}
            meta={[project.period, project.sponsor].filter(Boolean).join(" / ")}
            links={project.links}
          />
        ))}
      </SectionPlaceholder>

      <SectionPlaceholder
        title="Funding information"
        description="TODO: Content will be added here."
        isEmpty={fundingInformation.length === 0}
        emptyTitle="Funding information"
        emptyDescription="TODO: Content will be added here."
        contentClassName="grid gap-4"
      >
        {fundingInformation.map((funding) => (
          <ItemCard
            key={funding.id}
            title={funding.title}
            description={funding.description}
            meta={funding.period}
          />
        ))}
      </SectionPlaceholder>

      <SectionPlaceholder
        title="Milestones"
        description="TODO: Content will be added here."
        isEmpty={projectTimeline.length === 0}
        emptyTitle="Milestones"
        emptyDescription="TODO: Content will be added here."
        contentClassName="grid gap-4 lg:col-span-2"
        className="lg:col-span-2"
      >
        {projectTimeline.map((timelineItem) => (
          <ItemCard
            key={timelineItem.id}
            title={timelineItem.title}
            description={timelineItem.description}
            meta={timelineItem.date}
          />
        ))}
      </SectionPlaceholder>
    </div>
  );
}



