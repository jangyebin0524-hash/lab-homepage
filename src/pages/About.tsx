import { SectionPlaceholder } from "@/components/SectionPlaceholder";
import { aboutContent } from "@/data/siteInfo";

export function About() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <SectionPlaceholder
        title="Lab overview"
        description="The lab's mission, values, and approach to research collaboration."
        isEmpty={!aboutContent.labOverview}
        emptyTitle="Lab overview"
        emptyDescription="Describe the lab's mission and how the team works together."
      >
        <p className="text-sm leading-6 text-slate-700">{aboutContent.labOverview}</p>
      </SectionPlaceholder>
      <SectionPlaceholder
        title="Research vision"
        description="The long-term goals that guide our work in intelligent systems."
        isEmpty={!aboutContent.researchVision}
        emptyTitle="Research vision"
        emptyDescription="Summarize the lab's future research direction and design principles."
      >
        <p className="text-sm leading-6 text-slate-700">{aboutContent.researchVision}</p>
      </SectionPlaceholder>
      <SectionPlaceholder
        title="Professor introduction"
        description="A short note about the lab lead and research interests."
        isEmpty={!aboutContent.professorIntroduction}
        emptyTitle="Professor introduction"
        emptyDescription="Add a short biography or leadership statement here."
      >
        <p className="text-sm leading-6 text-slate-700">{aboutContent.professorIntroduction}</p>
      </SectionPlaceholder>
      <SectionPlaceholder
        title="Affiliation"
        description="The institution and academic community that supports the lab."
        isEmpty={!aboutContent.affiliationPlaceholder}
        emptyTitle="Affiliation"
        emptyDescription="Add the school, department, or partner institution here."
      >
        <p className="text-sm leading-6 text-slate-700">{aboutContent.affiliationPlaceholder}</p>
      </SectionPlaceholder>
    </div>
  );
}



