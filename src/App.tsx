import { Layout } from './components/Layout'
import { contact } from './data/contact'
import { siteInfo } from './data/siteInfo'
import { useActiveSection } from './hooks/useActiveSection'
import { AboutSection } from './sections/AboutSection'
import { ContactSection } from './sections/ContactSection'
import { GallerySection } from './sections/GallerySection'
import { HomeSection } from './sections/HomeSection'
import { JoinUsSection } from './sections/JoinUsSection'
import { NewsSection } from './sections/NewsSection'
import { PeopleSection } from './sections/PeopleSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { PublicationsSection } from './sections/PublicationsSection'
import { ResearchSection } from './sections/ResearchSection'
import { ResourcesSection } from './sections/ResourcesSection'

export default function App() {
  const { activeSection, selectSection } = useActiveSection()

  const activeContent = (() => {
    switch (activeSection) {
      case 'home':
        return <HomeSection onNavigate={selectSection} />
      case 'about':
        return <AboutSection />
      case 'research':
        return <ResearchSection />
      case 'people':
        return <PeopleSection />
      case 'publications':
        return <PublicationsSection />
      case 'projects':
        return <ProjectsSection />
      case 'news':
        return <NewsSection />
      case 'gallery':
        return <GallerySection />
      case 'join-us':
        return <JoinUsSection onContact={() => selectSection('contact')} />
      case 'contact':
        return <ContactSection />
      case 'resources':
        return <ResourcesSection />
    }
  })()

  return (
    <Layout activeSection={activeSection} onNavigate={selectSection}>
      <div key={activeSection} role="tabpanel" aria-label={`${activeSection} section content`}>
        {activeContent}
      </div>
      <footer className="border-t border-[#E2E8F0] bg-[#F8FAFC] px-4 py-8 text-center text-xs text-[#64748B] sm:px-6 md:px-8">
        <p>{siteInfo.lab.en} · {siteInfo.university.en}</p>
        <p className="mt-2 text-[#94A3B8]">
          <a className="email-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#64748B]" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          <span aria-hidden="true"> · </span>
          <a className="email-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#64748B]" href={`tel:${contact.phone}`}>
            Tel. {contact.phone}
          </a>
        </p>
        <p className="mt-2 text-[#94A3B8]">© 2026 {siteInfo.lab.en}. All rights reserved.</p>
      </footer>
    </Layout>
  )
}
