import { SectionPlaceholder } from "@/components/SectionPlaceholder";
import { aboutContent } from "@/data/siteInfo";

export function About() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <SectionPlaceholder
        title="Lab overview"
        description="TODO: Content will be added here."
        isEmpty={!aboutContent.labOverview}
        emptyTitle="Lab overview"
        emptyDescription="TODO: Content will be added here."
      >
        <p className="text-sm leading-6 text-slate-700">{aboutContent.labOverview}</p>
      </SectionPlaceholder>
      <SectionPlaceholder
        title="Research vision"
        description="TODO: Content will be added here."
        isEmpty={!aboutContent.researchVision}
        emptyTitle="Research vision"
        emptyDescription="TODO: Content will be added here."
      >
        <p className="text-sm leading-6 text-slate-700">{aboutContent.researchVision}</p>
      </SectionPlaceholder>
      <SectionPlaceholder
        title="Professor introduction"
        description="TODO: Content will be added here."
        isEmpty={!aboutContent.professorIntroduction}
        emptyTitle="Professor introduction"
        emptyDescription="TODO: Content will be added here."
      >
        <p className="text-sm leading-6 text-slate-700">{aboutContent.professorIntroduction}</p>
      </SectionPlaceholder>
      <SectionPlaceholder
        title="Affiliation"
        description="TODO: Content will be added here."
        isEmpty={!aboutContent.affiliationPlaceholder}
        emptyTitle="Affiliation"
        emptyDescription="TODO: Content will be added here."
      >
        <p className="text-sm leading-6 text-slate-700">{aboutContent.affiliationPlaceholder}</p>
      </SectionPlaceholder>
    </div>
  );
}




