import { ItemCard } from "@/components/ItemCard";
import { SectionPlaceholder } from "@/components/SectionPlaceholder";
import { people } from "@/data/people";

export function People() {
  const professor = people.filter((person) => person.group === "professor");
  const graduateStudents = people.filter((person) => person.group === "graduate");
  const undergraduateResearchers = people.filter((person) => person.group === "undergraduate");
  const alumni = people.filter((person) => person.group === "alumni");

  return (
    <div className="space-y-4">
      <SectionPlaceholder
        title="Principal investigator"
        description="The faculty lead and research direction for the lab."
        isEmpty={professor.length === 0}
        emptyTitle="Principal investigator"
        emptyDescription="Add the faculty lead or PI profile here."
        contentClassName="grid gap-4 md:grid-cols-2"
      >
        {professor.map((person) => (
          <ItemCard
            key={person.id}
            title={person.name}
            eyebrow={person.role}
            description={person.bio}
            meta={person.email}
            tags={person.interests}
            links={person.links}
          />
        ))}
      </SectionPlaceholder>
      <div className="grid gap-4 lg:grid-cols-2">
        <SectionPlaceholder
          title="Graduate students"
          description="Current doctoral researchers working across the lab's core themes."
          isEmpty={graduateStudents.length === 0}
          emptyTitle="Graduate students"
          emptyDescription="Add current graduate students to introduce the team."
          contentClassName="grid gap-4"
        >
          {graduateStudents.map((person) => (
            <ItemCard
              key={person.id}
              title={person.name}
              eyebrow={person.role}
              description={person.bio}
              meta={person.email}
              tags={person.interests}
              links={person.links}
            />
          ))}
        </SectionPlaceholder>
        <SectionPlaceholder
          title="Undergraduate researchers"
          description="Undergraduate contributors who support prototyping, design, and studies."
          isEmpty={undergraduateResearchers.length === 0}
          emptyTitle="Undergraduate researchers"
          emptyDescription="Add current undergraduate contributors to show the lab's student community."
          contentClassName="grid gap-4"
        >
          {undergraduateResearchers.map((person) => (
            <ItemCard
              key={person.id}
              title={person.name}
              eyebrow={person.role}
              description={person.bio}
              meta={person.email}
              tags={person.interests}
              links={person.links}
            />
          ))}
        </SectionPlaceholder>
        <SectionPlaceholder
          title="Alumni"
          description="Past members who helped shape the lab's early work."
          isEmpty={alumni.length === 0}
          emptyTitle="Alumni"
          emptyDescription="Add former members and their current roles."
          contentClassName="grid gap-4"
        >
          {alumni.map((person) => (
            <ItemCard
              key={person.id}
              title={person.name}
              eyebrow={person.role}
              description={person.bio}
              meta={person.email}
              tags={person.interests}
              links={person.links}
            />
          ))}
        </SectionPlaceholder>
      </div>
    </div>
  );
}



