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
          description="TODO: Content will be added here."
          isEmpty={!hasEmail}
          emptyTitle="Contact details"
          emptyDescription="TODO: Content will be added here."
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
          description="TODO: Content will be added here."
          isEmpty={!hasLocation}
          emptyTitle="Visit the lab"
          emptyDescription="TODO: Content will be added here."
        >
          <p className="text-sm leading-6 text-slate-700">
            {locationInfo.address || siteInfo.address}
          </p>
        </SectionPlaceholder>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <SectionPlaceholder
          title="Map"
          description="TODO: Content will be added here."
          isEmpty={!hasMap}
          emptyTitle="Map"
          emptyDescription="TODO: Content will be added here."
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
          description="TODO: Content will be added here."
          isEmpty={externalLinks.length === 0}
          emptyTitle="External links"
          emptyDescription="TODO: Content will be added here."
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
        description="TODO: Content will be added here."
        emptyTitle="Notes for visitors"
        emptyDescription="TODO: Content will be added here."
      />
    </div>
  );
}

