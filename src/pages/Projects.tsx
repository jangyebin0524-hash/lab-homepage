import { ItemCard } from "@/components/ItemCard";
import { SectionPlaceholder } from "@/components/SectionPlaceholder";
import { fundingInformation, projectTimeline, projects } from "@/data/projects";

export function Projects() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <SectionPlaceholder
        title="Current and recent projects"
        description="Selected lab initiatives that show the breadth of our applied research."
        isEmpty={projects.length === 0}
        emptyTitle="Current and recent projects"
        emptyDescription="Add active or completed projects to tell the story of the group's work."
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
        description="The grants and sponsorship that support our research programs."
        isEmpty={fundingInformation.length === 0}
        emptyTitle="Funding information"
        emptyDescription="Add external support and funding partners to highlight the lab's resources."
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
        description="A timeline of major launches, improvements, and public-facing achievements."
        isEmpty={projectTimeline.length === 0}
        emptyTitle="Milestones"
        emptyDescription="Add key milestones to show the lab's growth and accomplishments."
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


