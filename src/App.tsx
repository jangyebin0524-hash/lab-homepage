import { Layout } from './components/Layout'
import { SectionTabs } from './components/SectionTabs'
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
    <Layout onNavigate={selectSection}>
      <SectionTabs activeSection={activeSection} onSelect={selectSection} />
      <div key={activeSection} role="tabpanel" aria-labelledby={`${activeSection}-tab`}>
        {activeContent}
      </div>
      <footer className="border-t border-[#E2E2E2] bg-[#F7F7F7] px-4 py-8 text-center text-xs text-[#666666] sm:px-6 md:px-8">
        <p>Lab Name Placeholder · Content will be added here.</p>
      </footer>
    </Layout>
  )
}
