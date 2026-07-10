import { useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navigationItems, type PageKey } from "@/data/navigation";
import { siteInfo } from "@/data/siteInfo";
import { cn } from "@/lib/utils";

type SidebarProps = {
  activePage: PageKey;
  onNavigate: (page: PageKey) => void;
};

export function Sidebar({ activePage, onNavigate }: SidebarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleNavigate = (page: PageKey) => {
    onNavigate(page);
    setIsMobileOpen(false);
  };

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 flex-col border-r border-slate-200 bg-white md:flex">
        <SidebarHeader />
        <nav className="flex-1 space-y-1 px-4 py-4" aria-label="Primary navigation">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.key === activePage;

            return (
              <button
                key={item.key}
                type="button"
                onClick={() => handleNavigate(item.key)}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "group flex h-11 w-full items-center justify-between rounded-md border px-3 text-left text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300",
                  isActive
                    ? "border-blue-900 bg-blue-900 font-semibold text-white shadow-sm"
                    : "border-transparent text-slate-700 hover:border-slate-200 hover:bg-slate-50 hover:text-blue-950",
                )}
              >
                <span className="flex min-w-0 items-center gap-3">
                  <Icon
                    className={cn(
                      "h-4 w-4 shrink-0",
                      isActive ? "text-white" : "text-slate-500 group-hover:text-blue-950",
                    )}
                    aria-hidden="true"
                  />
                  <span className="truncate">{item.label}</span>
                </span>
                <ChevronRight
                  className={cn(
                    "h-4 w-4 shrink-0 opacity-0 transition-opacity",
                    isActive && "opacity-100",
                  )}
                  aria-hidden="true"
                />
              </button>
            );
          })}
        </nav>
        <div className="border-t border-slate-200 p-4">
          <div className="rounded-md bg-slate-50 p-3 text-xs leading-5 text-slate-500">
            TODO: Content will be added here.
          </div>
        </div>
      </aside>

      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur md:hidden">
        <div className="min-w-0">
          <SidebarHeader compact />
        </div>
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label="Open navigation menu"
          aria-expanded={isMobileOpen}
          onClick={() => setIsMobileOpen(true)}
          className="shrink-0 border-slate-200 bg-white text-slate-950 hover:bg-slate-50"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </Button>
      </div>

      {isMobileOpen ? (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-blue-950/40"
            aria-label="Close navigation menu"
            onClick={() => setIsMobileOpen(false)}
          />
          <aside className="relative flex h-full w-80 max-w-[86vw] flex-col border-r border-slate-200 bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
              <SidebarHeader compact />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label="Close navigation menu"
                onClick={() => setIsMobileOpen(false)}
                className="text-slate-700"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </Button>
            </div>
            <nav className="flex-1 space-y-1 px-4 py-4" aria-label="Mobile navigation">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = item.key === activePage;

                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => handleNavigate(item.key)}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "group flex h-11 w-full items-center justify-between rounded-md border px-3 text-left text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300",
                      isActive
                        ? "border-blue-900 bg-blue-900 font-semibold text-white shadow-sm"
                        : "border-transparent text-slate-700 hover:border-slate-200 hover:bg-slate-50 hover:text-blue-950",
                    )}
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <Icon
                        className={cn(
                          "h-4 w-4 shrink-0",
                          isActive ? "text-white" : "text-slate-500 group-hover:text-blue-950",
                        )}
                        aria-hidden="true"
                      />
                      <span className="truncate">{item.label}</span>
                    </span>
                    <ChevronRight
                      className={cn(
                        "h-4 w-4 shrink-0 opacity-0 transition-opacity",
                        isActive && "opacity-100",
                      )}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </nav>
            <div className="border-t border-slate-200 p-4">
              <div className="rounded-md bg-slate-50 p-3 text-xs leading-5 text-slate-500">
                TODO: Content will be added here.
              </div>
            </div>
          </aside>
        </div>
      ) : null}
    </>
  );
}

function SidebarHeader({ compact = false }: { compact?: boolean }) {
  const title = siteInfo.labName || "Lab Name Placeholder";
  const subtitle = siteInfo.affiliation || "TODO: Content will be added here.";

  return (
    <div className={cn("border-b border-slate-200 px-5 py-5", compact && "border-b-0 p-0")}>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-blue-900 text-[10px] font-semibold text-white">
          TODO
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-slate-950">{title}</p>
          <p className="truncate text-xs text-slate-500">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}



