import {
  BriefcaseBusiness,
  Contact,
  Database,
  FileText,
  Home,
  Info,
  Microscope,
  Newspaper,
  UserPlus,
  Users,
  type LucideIcon,
} from "lucide-react";

export type PageKey =
  | "home"
  | "about"
  | "research"
  | "people"
  | "publications"
  | "projects"
  | "news"
  | "join-us"
  | "contact"
  | "resources";

export type NavigationItem = {
  key: PageKey;
  label: string;
  icon: LucideIcon;
};

export const navigationItems: NavigationItem[] = [
  { key: "home", label: "Home", icon: Home },
  { key: "about", label: "About", icon: Info },
  { key: "research", label: "Research", icon: Microscope },
  { key: "people", label: "People", icon: Users },
  { key: "publications", label: "Publications", icon: FileText },
  { key: "projects", label: "Projects", icon: BriefcaseBusiness },
  { key: "news", label: "News", icon: Newspaper },
  { key: "join-us", label: "Join Us", icon: UserPlus },
  { key: "contact", label: "Contact", icon: Contact },
  { key: "resources", label: "Resources", icon: Database },
];

