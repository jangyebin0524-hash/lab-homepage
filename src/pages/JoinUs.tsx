import { ItemCard } from "@/components/ItemCard";
import { SectionPlaceholder } from "@/components/SectionPlaceholder";
import { joinFaqs, joinOpenings } from "@/data/join";

export function JoinUs() {
  return (
    <div className="space-y-4">
      <SectionPlaceholder
        title="Recruitment opportunities"
        description="TODO: Content will be added here."
        isEmpty={joinOpenings.length === 0}
        emptyTitle="Recruitment opportunities"
        emptyDescription="TODO: Content will be added here."
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
          description="TODO: Content will be added here."
          emptyTitle="How to apply"
          emptyDescription="TODO: Content will be added here."
        />
        <SectionPlaceholder
          title="Frequently asked questions"
          description="TODO: Content will be added here."
          isEmpty={joinFaqs.length === 0}
          emptyTitle="Frequently asked questions"
          emptyDescription="TODO: Content will be added here."
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



