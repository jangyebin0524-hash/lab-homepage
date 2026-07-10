import { PageHeader } from "@/components/PageHeader";
import { Sidebar } from "@/components/Sidebar";
import { navigationItems, type PageKey } from "@/data/navigation";

type LayoutProps = {
  activePage: PageKey;
  onNavigate: (page: PageKey) => void;
  children: React.ReactNode;
};

export function Layout({ activePage, onNavigate, children }: LayoutProps) {
  const activeItem = navigationItems.find((item) => item.key === activePage);

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar activePage={activePage} onNavigate={onNavigate} />
      <main className="md:ml-72">
        <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-6 sm:px-6 md:px-8 md:py-8">
          <PageHeader
            title={activeItem?.label ?? "Home"}
            description="TODO: Content will be added here."
          />
          {children}
        </div>
      </main>
    </div>
  );
}


