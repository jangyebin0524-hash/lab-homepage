# Media Lab Homepage Reproduction Specification

## 1. Purpose

This document is the source-of-truth specification for reproducing the current
research lab homepage. The site is a pre-data-entry skeleton and must preserve
the current layout, visual identity, interactions, animations, responsive
behavior, empty-data policy, and GitHub Pages deployment setup.

## 2. Non-Negotiable Rules

- Use one vertically scrolling page.
- Keep all 11 sections and URL hashes.
- Do not add a router, backend, login, admin page, board, database, or API.
- Never invent a lab name, university, professor, member, publication,
  project, email, address, phone number, result, or external URL.
- Unfilled content must use Placeholder, TODO, Content will be added here, or
  추후 업데이트 예정입니다.
- Keep all structured data files empty until real data is supplied.
- Do not add moving backgrounds, looping ECG effects, particles, marquee, 3D,
  or WebGL.
- Do not use red, pink, purple, beige, olive, or neon colors.
- Preserve prefers-reduced-motion behavior.

## 3. Technology

Use the existing package versions in package.json.

- Vite 5
- React 18
- TypeScript 5.6
- Tailwind CSS 3.4
- shadcn/ui-compatible primitives
- lucide-react
- clsx, tailwind-merge, and class-variance-authority

Animation must use CSS transitions, CSS keyframes, and IntersectionObserver.
Do not add an animation library.

Required commands:

- Development: npm run dev
- Production build: npm run build
- Build preview: npm run preview
- Lint: npm run lint

The build script is:

    tsc -p tsconfig.app.json && vite build

## 4. URL and Deployment

Vite base path:

    /lab-homepage/

Local URL:

    http://127.0.0.1:5173/lab-homepage/#home

GitHub Pages deployment is defined in .github/workflows/deploy.yml.

- Trigger on push to main and manual workflow dispatch.
- Use Node.js 20.
- Install with npm ci.
- Build with npm run build.
- Upload the dist directory.
- Use official GitHub Pages actions.
- If the repository name changes, update the base path in vite.config.ts.

## 5. Information Architecture

Navigation is managed only in src/data/navigation.ts.

| Index | Label | Section ID | Hash |
| --- | --- | --- | --- |
| 01 | Home | home | #home |
| 02 | About | about | #about |
| 03 | Research | research | #research |
| 04 | People | people | #people |
| 05 | Publications | publications | #publications |
| 06 | Projects | projects | #projects |
| 07 | News | news | #news |
| 08 | Gallery | gallery | #gallery |
| 09 | Join Us | join-us | #join-us |
| 10 | Contact | contact | #contact |
| 11 | Resources | resources | #resources |

Each menu item uses a lucide icon and the SectionId TypeScript union.

## 6. Layout

### Desktop

- Breakpoint: md and above.
- Fixed left sidebar width: 288px using w-72.
- Main content offset: md:ml-72.
- Sidebar fills the viewport height.
- Section background bands span the full remaining page width.
- Section inner content is centered with max-w-7xl.
- Inner horizontal padding is px-4, sm:px-6, md:px-8.
- Section vertical padding is py-14, sm:py-16, lg:py-20.

### Mobile

- Hide the desktop sidebar below md.
- Show a sticky 64px top header.
- The menu button opens a left drawer.
- Drawer width is w-80 with max-w-[86vw].
- Clicking the dark overlay or pressing Escape closes the drawer.
- Selecting a menu item closes the drawer automatically.
- Use scroll-mt-16 so the sticky header does not cover section titles.
- At 390px width there must be no horizontal overflow.

## 7. Visual Direction

The design concept is Medical Intelligence Interface.

It should suggest medical data, AI, digital healthcare, medical imaging,
research IT systems, and the connection between people and data. It must feel
academic, quiet, technical, and professional, not like a hospital promotion or
consumer healthcare advertisement.

### Palette

| Role | Value |
| --- | --- |
| Primary text | slate-950 |
| Body text | slate-600 |
| Secondary text | slate-500 |
| Navy | blue-950 |
| Soft blue | blue-50 |
| Cyan accent | cyan-700 |
| Cyan borders | cyan-100 and cyan-200 |
| Teal accent | teal-500 and teal-600 |
| Neutral backgrounds | slate-50 and slate-100 |
| Cards | white |
| Standard borders | slate-200 |

Important custom CSS colors:

- Cyan dark: rgb(14 116 144)
- Cyan medium: rgb(8 145 178)
- Teal: rgb(13 148 136)
- Cyan light: rgb(165 243 252)
- Shadow: rgb(15 23 42 / 0.09)

### Typography and Shape

- Font: Inter followed by the system sans-serif stack.
- Section titles: text-2xl, sm:text-3xl, font-semibold, slate-950.
- Panel headings: text-base or text-lg.
- Body text: text-sm with line-height 6 or 7.
- Metadata: text-xs, font-semibold, uppercase.
- No negative letter spacing.
- Card radius: rounded-lg, 8px.
- Default card shadow: shadow-sm.
- Pills are reserved for compact metadata badges.

## 8. Section Backgrounds

SectionWrapper.tsx owns the section tone mapping.

| Section | Background |
| --- | --- |
| Home | medical-home-band |
| About | white |
| Research | blue-50 at 55 percent opacity |
| People | white |
| Publications | slate-100 at 70 percent opacity |
| Projects | white |
| News | blue-50 at 45 percent opacity |
| Gallery | white |
| Join Us | very light cyan-to-blue gradient |
| Contact | white |
| Resources | slate-100 at 70 percent opacity |

Every section has a static bottom divider:

- Thin cyan-to-teal gradient line.
- Transparent at both ends.
- Two small data-node dots.
- No animation.

## 9. Medical Visual Components

All reusable medical visuals live in src/components/MedicalVisuals.tsx.

### MedicalBackdrop

- Home only.
- White-to-blue-gray 135-degree gradient.
- Static 32px grid with approximately 5.5 percent line opacity.
- Grid fades horizontally with a mask.
- One low-opacity lucide Activity ECG symbol.
- Four static 7px data nodes.
- Two faint static connection lines.
- pointer-events-none and aria-hidden.

### MedicalDataFlow

- Used in About.
- White technical panel with cyan border.
- Header label: Medical Data Flow.
- Three modules:
  - Data Input Placeholder
  - Analysis Placeholder
  - Output Placeholder
- Static connector line on desktop.
- Lower technical canvas with grid, ECG icon, two nodes, and the text
  Medical data flow diagram Placeholder.

### MedicalImagingPlaceholder

- Very light slate background.
- Static 18px cyan grid.
- ScanLine icon.
- Label: Medical image placeholder.
- Never use real X-ray, MRI, CT, or patient images.

### DiagnosticPanel

- Header: AI System Placeholder.
- One static teal status dot.
- Three modules:
  - Input Placeholder
  - Process Placeholder
  - Result Placeholder
- Use abstract bars only.
- Never show invented numbers, predictions, percentages, or results.

### Medical Record Card

- Use a 3px cyan-to-teal stripe on the left.
- Use small labels and separated placeholder fields.
- Apply to Home affiliation, People profile, Publications introduction, and
  Contact.

## 10. Common Component Contracts

### Layout.tsx

- Own the fixed sidebar and main content offset.
- Do not constrain all section backgrounds inside one max-width wrapper.

### SectionWrapper.tsx

- Own section ID, index, title, tone, spacing, medical divider, and centered
  content.
- Render MedicalBackdrop only for Home.
- Wrap inner content with AnimatedSection.

### PlaceholderCard.tsx

Required anatomy:

1. Cyan icon square.
2. Small Placeholder badge with a teal dot.
3. Thin divider.
4. TODO label.
5. Placeholder title.
6. Placeholder description.

Default description:

    추후 내용이 추가될 예정입니다.

### EmptyState.tsx

- Dashed cyan border.
- Very faint 24px grid.
- Inbox icon.
- Title such as 추후 업데이트 예정입니다.
- Description: TODO: Content will be added here.

### Sidebar.tsx

- White translucent background.
- Active item: blue-950 background, white text, cyan icon.
- Inactive item: slate text with faint cyan hover background.
- Active arrow transitions into view.
- Header uses a generic Activity symbol, never an invented lab logo.
- Visible title stays Lab Name Placeholder.

## 11. Section Content

### Home

- Recruitment banner links to #join-us.
- Eyebrow: Medical Intelligence Interface.
- Korean and English lab name placeholders.
- Medical-record affiliation card.
- Six Research Interest cards.
- Icon order: Activity, Brain, Database, Monitor, Network, ScanLine.
- Titles: Research Area 01 through Research Area 06.
- Quick Links: Research, People, Publications, Join Us.

### About

- Two columns on desktop and one column on mobile.
- Left: Mission, Vision, and Approach placeholder cards.
- Right: MedicalDataFlow.

### Research

- Three placeholder cards with Brain, Activity, and Database icons.
- Below them: Medical Imaging Placeholder and Diagnostic Panel.
- Do not name real research areas.

### People

- Principal Investigator section with medical ID-style card.
- Portrait placeholder uses a technical grid and UserRound icon.
- Fields: Name, Title, Affiliation, Email, Location, Research, Links.
- Details: Career History, Education, Projects, Educational Activities.
- Groups: Current Members, Graduate Students, Undergraduate Researchers,
  Alumni.
- Keep the people data array empty.

### Publications

- Medical research-record introduction card.
- Field badges: Title, Authors, Venue, Year, Research Area, Links, Korean
  Summary, English Summary.
- Year groups for 2026 and 2025.
- Patent and External Links placeholders.
- Keep the publications array empty.

### Projects

- Placeholder cards for ongoing, completed, and related-results areas.
- Diagnostic Panel below the cards.
- Keep the projects array empty.

### News

- Category placeholder cards.
- Latest News area uses a faint cyan timeline border.
- Show EmptyState when there are no items.
- Future items sort newest first.
- Keep newsItems empty.

### Gallery

- Three-column desktop image grid.
- Card media ratio: 4:3.
- Use technical imaging grid and ScanLine.
- Add a very low-opacity hover overlay.
- Never add actual photos.
- Keep the gallery array empty.

### Join Us

- Light cyan and blue background.
- Cards for target, field, application method, and FAQ.
- Do not imply recruitment is currently open.

### Contact

- Navy-to-slate contact interface panel.
- Heading: Contact information Placeholder.
- Cards for email, phone, location, map, inquiry type, and related links.
- Never add actual contact information.

### Resources

- Cards for research materials, datasets, code repositories, learning
  resources, templates, and external resources.
- Keep the resources array empty.

## 12. Animation

Do not change these values unless a later design revision explicitly requests
it.

### Smooth Scroll

- Set scroll-behavior to smooth on html.
- Menu click calls scrollIntoView with block set to start.
- Use automatic scrolling when reduced motion is enabled.

### Section Fade-Up

- Component: src/components/AnimatedSection.tsx.
- Hook: src/hooks/useInView.ts.
- Initial opacity: 0.
- Initial translation: 16px downward.
- Visible opacity: 1.
- Visible translation: 0.
- Duration: 650ms.
- Easing: ease-out.
- Intersection threshold: 0.12.
- Root margin: 0px 0px -8% 0px.
- Animate only once, then unobserve the section.

### Home Stagger

- Translation: 4px.
- Duration: 600ms.
- Easing: ease-out.
- Delays: 0, 120, 240, 360, 480, and 600ms.

### Card Hover

- Apply only to devices with hover and a fine pointer.
- Move upward by 2px.
- Duration: 220ms.
- Change border to soft cyan.
- Shadow: 0 14px 34px rgb(15 23 42 / 0.09).
- Never scale cards.

### Sidebar Active State

- Duration: 200ms.
- Transition color, background, border, shadow, arrow opacity, and arrow
  translation.

### Empty State

- Fade only, with no movement.
- Duration: 500ms.
- Delay: 140ms.

### Reduced Motion

When prefers-reduced-motion is reduce:

- Disable animations.
- Force opacity to 1.
- Remove transforms.
- Set transition duration to 0.01ms.
- Use automatic scrolling.
- Keep every navigation feature working.

## 13. Scroll Spy and Hash Behavior

Use src/hooks/useActiveSection.ts.

- Observe all 11 sections with IntersectionObserver.
- Thresholds range from 0 to 1 in 0.05 steps.
- Choose the section with the greatest visible intersection height.
- A menu click sets the active section, updates the hash, and scrolls.
- Manual scrolling updates the active menu and replaces the hash.
- Refreshing or navigating history scrolls to the hash section.
- Invalid or missing hashes fall back to Home.

## 14. Data Contracts

Keep the types in src/types/content.ts and preserve these data files:

- src/data/siteInfo.ts
- src/data/research.ts
- src/data/people.ts
- src/data/publications.ts
- src/data/projects.ts
- src/data/news.ts
- src/data/gallery.ts
- src/data/resources.ts
- src/data/contact.ts
- src/data/join.ts

Rules:

- Collections remain empty arrays.
- Site and location values remain empty strings.
- Do not use example URLs.
- Structural placeholder slots may render while arrays are empty.
- Future content entry should require adding data objects, not rewriting the
  page layout.

## 15. Accessibility

- Sections use aria-labelledby.
- Decorative medical graphics use aria-hidden.
- Icon-only buttons have Korean aria-label values.
- Active navigation uses aria-current set to location.
- Mobile menu reports aria-expanded and aria-controls.
- Keyboard focus has a visible cyan focus ring.
- Text contrast takes priority over decoration.
- Patterns remain low-opacity.

## 16. Responsive Acceptance Criteria

At 1440 by 1000:

- Fixed 288px sidebar is visible.
- Main section bands fill the remaining width.
- Home research cards form three columns.
- About uses two columns.
- Research technical panels use two columns.

At 390 by 844:

- Sticky mobile header is visible.
- No horizontal overflow.
- Cards stack when required.
- Menu opens, closes, and auto-closes after selection.
- Target section top is offset by 64px.
- Patterns do not obscure text.
- Animation does not alter layout dimensions.

## 17. Required Structure

    src/
      components/
        AnimatedSection.tsx
        EmptyState.tsx
        Layout.tsx
        MedicalVisuals.tsx
        PlaceholderCard.tsx
        RecruitmentBanner.tsx
        SectionWrapper.tsx
        Sidebar.tsx
      data/
        contact.ts
        gallery.ts
        join.ts
        navigation.ts
        news.ts
        people.ts
        projects.ts
        publications.ts
        research.ts
        resources.ts
        siteInfo.ts
      hooks/
        useActiveSection.ts
        useInView.ts
      sections/
        HomeSection.tsx
        AboutSection.tsx
        ResearchSection.tsx
        PeopleSection.tsx
        PublicationsSection.tsx
        ProjectsSection.tsx
        NewsSection.tsx
        GallerySection.tsx
        JoinUsSection.tsx
        ContactSection.tsx
        ResourcesSection.tsx
      App.tsx
      index.css
      main.tsx
      types/content.ts

## 18. Validation Checklist

1. Run npm ci or npm install.
2. Run npm run build.
3. Confirm dist is generated.
4. Confirm all 11 sections render in order.
5. Confirm every sidebar link reaches its section.
6. Confirm the URL hash and active menu stay synchronized.
7. Refresh at #publications and verify the correct section is reached.
8. Confirm section fade-up runs once.
9. Confirm Home stagger and card hover remain subtle.
10. Confirm reduced-motion behavior.
11. Confirm mobile menu behavior at 390px.
12. Confirm there is no horizontal overflow.
13. Confirm the browser console has no warnings or errors.
14. Confirm all real-data arrays are empty.
15. Confirm no real or fabricated lab data was introduced.
16. Run git diff --check.

## 19. Definition of Complete

The reproduction is complete only when:

- Desktop and mobile hierarchy match this specification.
- Medical IT identity is visible but secondary to readability.
- All decorative graphics are static.
- Navigation, hashes, scroll spy, and animations work.
- TypeScript and Vite build without errors.
- GitHub Pages configuration remains valid.
- The homepage contains placeholders only.
