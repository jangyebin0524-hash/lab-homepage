import { useEffect, useState } from "react";

import { Layout } from "@/components/Layout";
import type { PageKey } from "@/data/navigation";
import { About } from "@/pages/About";
import { Contact } from "@/pages/Contact";
import { Home } from "@/pages/Home";
import { JoinUs } from "@/pages/JoinUs";
import { News } from "@/pages/News";
import { People } from "@/pages/People";
import { Projects } from "@/pages/Projects";
import { Publications } from "@/pages/Publications";
import { Research } from "@/pages/Research";
import { Resources } from "@/pages/Resources";

const pageComponents: Record<PageKey, React.ComponentType> = {
  home: Home,
  about: About,
  research: Research,
  people: People,
  publications: Publications,
  projects: Projects,
  news: News,
  "join-us": JoinUs,
  contact: Contact,
  resources: Resources,
};

function getPageFromHash(): PageKey {
  if (typeof window === "undefined") {
    return "home";
  }

  const hash = window.location.hash.replace("#", "");
  return hash in pageComponents ? (hash as PageKey) : "home";
}

export default function App() {
  const [activePage, setActivePage] = useState<PageKey>(getPageFromHash);
  const ActivePage = pageComponents[activePage];

  useEffect(() => {
    const handleHashChange = () => {
      setActivePage(getPageFromHash());
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavigate = (page: PageKey) => {
    setActivePage(page);
    window.history.pushState(null, "", `#${page}`);
  };

  return (
    <Layout activePage={activePage} onNavigate={handleNavigate}>
      <ActivePage />
    </Layout>
  );
}

