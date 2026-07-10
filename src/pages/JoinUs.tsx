import { ItemCard } from "@/components/ItemCard";
import { SectionPlaceholder } from "@/components/SectionPlaceholder";
import { joinFaqs, joinOpenings } from "@/data/join";

export function JoinUs() {
  return (
    <div className="space-y-4">
      <SectionPlaceholder
        title="Recruitment opportunities"
        description="Current openings and the kinds of people we are hoping to welcome."
        isEmpty={joinOpenings.length === 0}
        emptyTitle="Recruitment opportunities"
        emptyDescription="Add current openings and qualifications here."
        contentClassName="grid gap-4 lg:grid-cols-2"
      >
        {joinOpenings.map((opening) => (
          <ItemCard
            key={opening.id}
            title={opening.title}
            description={opening.description}
            tags={opening.requirements}
          />
        ))}
      </SectionPlaceholder>

      <div className="grid gap-4 lg:grid-cols-2">
        <SectionPlaceholder
          title="How to apply"
          description="A simple overview of the application steps and materials we request."
          emptyTitle="How to apply"
          emptyDescription="Add your application instructions and contact details here."
        />
        <SectionPlaceholder
          title="Frequently asked questions"
          description="Common questions for prospective students and collaborators."
          isEmpty={joinFaqs.length === 0}
          emptyTitle="Frequently asked questions"
          emptyDescription="Add FAQs for the application process or lab expectations."
          contentClassName="grid gap-4"
        >
          {joinFaqs.map((faq) => (
            <ItemCard key={faq.id} title={faq.question} description={faq.answer} />
          ))}
        </SectionPlaceholder>
      </div>
    </div>
  );
}


