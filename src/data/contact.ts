import type { ContactItem, LocationInfo } from "@/types/content";

export const contactItems: ContactItem[] = [
  {
    id: "contact-1",
    label: "Lab Office",
    value: "Room 417, Engineering Hall",
  },
  {
    id: "contact-2",
    label: "Email",
    value: "media-lab@example.edu",
    href: "mailto:media-lab@example.edu",
  },
  {
    id: "contact-3",
    label: "Visit",
    value: "Open for collaboration meetings every Wednesday afternoon",
  },
];

export const locationInfo: LocationInfo = {
  address: "123 Innovation Drive, Cambridge, MA 02139",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Cambridge%20MA&output=embed",
};

