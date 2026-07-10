import { ItemCard } from "@/components/ItemCard";
import { SectionPlaceholder } from "@/components/SectionPlaceholder";
import { contactItems, locationInfo } from "@/data/contact";
import { siteInfo } from "@/data/siteInfo";

export function Contact() {
  const hasEmail = Boolean(siteInfo.email) || contactItems.length > 0;
  const hasLocation = Boolean(locationInfo.address || siteInfo.address);
  const hasMap = Boolean(locationInfo.mapEmbedUrl);
  const externalLinks = contactItems.filter((item) => item.href);

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <SectionPlaceholder
          title="Contact details"
          description="The best ways to reach the lab for collaboration or general inquiries."
          isEmpty={!hasEmail}
          emptyTitle="Contact details"
          emptyDescription="Add email, office hours, or a contact form here."
          contentClassName="grid gap-4"
        >
          {siteInfo.email ? <ItemCard title="Email" description={siteInfo.email} /> : null}
          {contactItems.map((item) => (
            <ItemCard
              key={item.id}
              title={item.label}
              description={item.value}
              links={item.href ? [{ label: item.label, href: item.href }] : undefined}
            />
          ))}
        </SectionPlaceholder>

        <SectionPlaceholder
          title="Visit the lab"
          description="A quick overview of the lab's physical location and visiting information."
          isEmpty={!hasLocation}
          emptyTitle="Visit the lab"
          emptyDescription="Add location details or visiting instructions here."
        >
          <p className="text-sm leading-6 text-slate-700">
            {locationInfo.address || siteInfo.address}
          </p>
        </SectionPlaceholder>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <SectionPlaceholder
          title="Map"
          description="An embedded map to help visitors find the lab."
          isEmpty={!hasMap}
          emptyTitle="Map"
          emptyDescription="Add a map link or embed once the location is finalized."
        >
          <iframe
            src={locationInfo.mapEmbedUrl}
            title="Location map"
            className="aspect-video w-full rounded-md border border-slate-200"
            loading="lazy"
          />
        </SectionPlaceholder>

        <SectionPlaceholder
          title="External links"
          description="Useful links for office, collaboration, or follow-up contact."
          isEmpty={externalLinks.length === 0}
          emptyTitle="External links"
          emptyDescription="Add links to calendar invites, office hours, or partner pages."
          contentClassName="grid gap-4"
        >
          {externalLinks.map((item) => (
            <ItemCard
              key={item.id}
              title={item.label}
              description={item.value}
              links={item.href ? [{ label: item.label, href: item.href }] : undefined}
            />
          ))}
        </SectionPlaceholder>
      </div>

      <SectionPlaceholder
        title="Notes for visitors"
        description="Additional context for scheduling meetings or planning a visit."
        emptyTitle="Notes for visitors"
        emptyDescription="Add practical notes such as meeting availability or visitor guidelines."
      />
    </div>
  );
}
