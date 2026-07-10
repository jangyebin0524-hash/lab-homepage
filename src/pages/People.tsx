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
        description="TODO: Content will be added here."
        isEmpty={professor.length === 0}
        emptyTitle="Principal investigator"
        emptyDescription="TODO: Content will be added here."
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
          description="TODO: Content will be added here."
          isEmpty={graduateStudents.length === 0}
          emptyTitle="Graduate students"
          emptyDescription="TODO: Content will be added here."
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
          description="TODO: Content will be added here."
          isEmpty={undergraduateResearchers.length === 0}
          emptyTitle="Undergraduate researchers"
          emptyDescription="TODO: Content will be added here."
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
          description="TODO: Content will be added here."
          isEmpty={alumni.length === 0}
          emptyTitle="Alumni"
          emptyDescription="TODO: Content will be added here."
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




