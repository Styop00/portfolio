export interface Project {
  slug: string
  name: string
  /** One-line description used on cards and as the case-study subtitle. */
  tagline: string
  /** Longer, search-friendly summary used for meta descriptions. */
  metaDescription: string
  liveUrl: string
  displayUrl: string
  screenshot: string
  screenshotAlt: string
  /** A section further down the live site — used in the case-study gallery. */
  screenshotDetail: string
  screenshotDetailAlt: string
  /** The same site at a phone viewport. */
  screenshotMobile: string
  screenshotMobileAlt: string
  /** Engagement context — kept to what is confirmed, no invented employers or dates. */
  role: string
  period: string
  context: string
  overview: string[]
  contributions: string[]
  stack: string[]
  highlights: { label: string; value: string }[]
}

export const projects: Project[] = [
  {
    slug: 'bookera',
    name: 'Bookera',
    tagline:
      'Multi-tenant appointment and booking platform for beauty, wellness, sports, medical and education businesses.',
    metaDescription:
      'Case study: Bookera (formerly LineMe) — a multi-tenant appointment and booking platform. Architecting the multi-tenant core, the Next.js SSR/SSG front end, a multi-gateway payment module and a reusable Ant Design component library.',
    liveUrl: 'https://bookera.am',
    displayUrl: 'bookera.am',
    screenshot: '/images/projects/bookera.webp',
    screenshotAlt: 'Screenshot of the Bookera online booking platform homepage',
    screenshotDetail: '/images/projects/bookera-detail.webp',
    screenshotDetailAlt: 'Screenshot of a content section further down the Bookera website',
    screenshotMobile: '/images/projects/bookera-mobile.webp',
    screenshotMobileAlt: 'The Bookera website shown at a mobile screen size',
    role: 'Full-Stack Developer — LineMe (now Bookera)',
    period: '12/2024 — 12/2025',
    context: 'Employed role',
    overview: [
      'Bookera — launched as LineMe — is a multi-tenant appointment and booking platform for service businesses: beauty and wellness studios, barbershops, sports and fitness clubs, medical practices, education providers and event organisers. Each tenant gets its own booking page and dashboard on shared infrastructure.',
      'The product covers 24/7 online booking, staff and shift management, a client database with no-show tracking, automated SMS and email reminders, multi-location support and inventory tracking. It integrates with Google Calendar, Outlook, Stripe, Instagram and Facebook so bookings and payments flow into the tools businesses already use.'
    ],
    contributions: [
      'Architected the multi-tenant platform and the centralized user-management system behind it.',
      'Built the Next.js front end using SSR and SSG, which measurably improved load times and Core Web Vitals.',
      'Integrated third-party messaging and notification services powering the automated reminder flow.',
      'Built a secure payment module that supports multiple payment gateways.',
      'Designed a reusable Ant Design component library shared across the product surface.'
    ],
    stack: [
      'Laravel',
      'Next.js',
      'React',
      'Ant Design',
      'Chart.js',
      'REST APIs',
      'PostgreSQL',
      'Stripe'
    ],
    highlights: [
      { label: 'Architecture', value: 'Multi-tenant core with centralized user management' },
      { label: 'Performance', value: 'SSR/SSG front end tuned for Core Web Vitals' },
      { label: 'Payments', value: 'One module, multiple gateways' },
      { label: 'Design system', value: 'Reusable Ant Design component library' }
    ],
  },
  {
    slug: 'tournik',
    name: 'Tournik',
    tagline:
      'Integrated sports-operations ERP for federations, leagues, clubs and event organisers.',
    metaDescription:
      'Case study: Tournik.io — an integrated ERP for sports operations covering competitions, memberships, ticketing, venues and accreditation. Building Laravel back-end features, the Nuxt.js front end, the REST APIs between them and the CI/CD pipelines.',
    liveUrl: 'https://tournik.io',
    displayUrl: 'tournik.io',
    screenshot: '/images/projects/tournik.webp',
    screenshotAlt: 'Screenshot of the Tournik sports operations platform homepage',
    screenshotDetail: '/images/projects/tournik-detail.webp',
    screenshotDetailAlt: 'Screenshot of a content section further down the Tournik website',
    screenshotMobile: '/images/projects/tournik-mobile.webp',
    screenshotMobileAlt: 'The Tournik website shown at a mobile screen size',
    role: 'Full-Stack Developer — Tournik.io',
    period: '01/2026 — Present',
    context: 'Employed role',
    overview: [
      'Tournik is an integrated ERP for sports operations. Instead of stitching together separate tools, federations, leagues, clubs and event organisers run competition scheduling, memberships, ticketing, venue operations and staff/media accreditation from a single core.',
      'The platform layers AI-assisted scheduling and reporting on top of that core, and connects to venue hardware — scanners, turnstiles and cameras — so accreditation and access control work against the same data as the rest of the operation.'
    ],
    contributions: [
      'Build features across the Laravel back end and the Nuxt.js front end.',
      'Design and maintain the REST APIs that connect the two.',
      'Own the CI/CD pipelines that automate the deployment process.'
    ],
    stack: ['Laravel', 'PHP', 'Nuxt.js', 'Vue', 'TypeScript', 'REST APIs', 'MySQL', 'CI/CD'],
    highlights: [
      { label: 'Scope', value: 'Competitions, memberships, ticketing, venues, accreditation' },
      { label: 'Stack', value: 'Laravel API + Nuxt.js front end' },
      { label: 'Integrations', value: 'Scanners, turnstiles and camera hardware' },
      { label: 'Delivery', value: 'Automated CI/CD pipelines' }
    ],
  },
  {
    slug: 'openpadel',
    name: 'OpenPadel AI',
    tagline:
      'AI-assisted API integration marketplace connecting racquet-sport booking platforms, clubs and federations.',
    metaDescription:
      'Case study: OpenPadel.io — an AI-assisted API integration marketplace for padel, tennis and pickleball. Built end to end: front end, back end, webhook-based data sync, CI/CD, deployment and server configuration.',
    liveUrl: 'https://openpadel.io',
    displayUrl: 'openpadel.io',
    screenshot: '/images/projects/openpadel.webp',
    screenshotAlt: 'Screenshot of the OpenPadel AI integration marketplace homepage',
    screenshotDetail: '/images/projects/openpadel-detail.webp',
    screenshotDetailAlt: 'Screenshot of a content section further down the OpenPadel AI website',
    screenshotMobile: '/images/projects/openpadel-mobile.webp',
    screenshotMobileAlt: 'The OpenPadel AI website shown at a mobile screen size',
    role: 'Full-stack engineer — independent build',
    period: 'Freelance engagement',
    context: 'Independent build',
    overview: [
      'OpenPadel AI is an API integration marketplace for racquet sports. Booking platforms, clubs and federations across padel, tennis and pickleball list what they can exchange, find counterparties, and connect through standardized connectors instead of commissioning bespoke integrations.',
      'AI-assisted API mapping compresses integrations that would normally take 6–12 months of custom work. Once connected, data stays in sync in real time over webhooks, with governance and audit tooling on top so every partner can see what is being shared.'
    ],
    contributions: [
      'Built the entire product end to end — front end, back end and the API/data-sync layer.',
      'Implemented the webhook-driven real-time synchronisation between connected partners.',
      'Set up the CI/CD pipelines, the deployment process and the server configuration.'
    ],
    stack: ['Next.js', 'Vue', 'TypeScript', 'Node.js', 'REST APIs', 'Webhooks', 'PostgreSQL', 'CI/CD'],
    highlights: [
      { label: 'Ownership', value: 'Sole engineer, from first commit to production' },
      { label: 'Core idea', value: 'Standardized connectors replace bespoke integrations' },
      { label: 'Sync', value: 'Real-time, webhook-based data exchange' },
      { label: 'Ops', value: 'CI/CD, deployment and server configuration' }
    ],
  },
  {
    slug: 'bioprinthub',
    name: 'BioPrintHub',
    tagline:
      'Open repository and collaboration hub for 3D bioprinting research, with DOI-backed citation.',
    metaDescription:
      'Case study: BioPrintHub.com — an open repository for 3D bioprinting research with 1,240+ validated models, multi-format file processing, DOI assignment and citation-gated downloads. Built end to end including CI/CD, deployment and server configuration.',
    liveUrl: 'https://bioprinthub.com',
    displayUrl: 'bioprinthub.com',
    screenshot: '/images/projects/bioprinthub.webp',
    screenshotAlt: 'Screenshot of the BioPrintHub 3D bioprinting repository homepage',
    screenshotDetail: '/images/projects/bioprinthub-detail.webp',
    screenshotDetailAlt: 'Screenshot of a content section further down the BioPrintHub website',
    screenshotMobile: '/images/projects/bioprinthub-mobile.webp',
    screenshotMobileAlt: 'The BioPrintHub website shown at a mobile screen size',
    role: 'Full-stack engineer — independent build',
    period: 'Freelance engagement',
    context: 'Independent build',
    overview: [
      'BioPrintHub is an open repository and collaboration hub for 3D bioprinting research. It hosts 1,240+ validated models, each published with the files a lab actually needs to reproduce the work — STL geometry, GCODE and PDF protocols.',
      'Every model gets a DOI so the authors receive academic credit, and citation is mandatory before download, which makes reuse traceable. The platform is built by Black Drop Biomedical with EU NextGenerationEU funding.'
    ],
    contributions: [
      'Built the platform end to end — front end, back end and data model.',
      'Implemented the multi-format file upload and processing pipeline for STL, GCODE and PDF assets.',
      'Built the DOI-assignment flow and the citation-gated download path that enforces attribution.',
      'Set up the CI/CD pipelines, the deployment process and the server configuration.'
    ],
    stack: [
      'Nuxt.js',
      'Vue',
      'Laravel',
      'Filament',
      'TypeScript',
      'Node.js',
      'REST APIs',
      'PostgreSQL',
      'File processing',
      'CI/CD'
    ],
    highlights: [
      { label: 'Catalogue', value: '1,240+ validated, downloadable models' },
      { label: 'Files', value: 'STL, GCODE and PDF processing pipeline' },
      { label: 'Credit', value: 'DOI assignment with citation-gated downloads' },
      { label: 'Backing', value: 'Black Drop Biomedical, EU NextGenerationEU funding' }
    ],
  },
  {
    slug: 'leo-baghdasaryan',
    name: 'Leo Baghdasaryan',
    tagline:
      'Portfolio and lead-generation site for a film composer and music producer.',
    metaDescription:
      'Case study: leobaghdasaryan.com — a Nuxt.js portfolio and lead-generation site for a film composer and music producer, with service pages, a project showcase and a five-step client process. Built end to end including CI/CD and deployment.',
    liveUrl: 'https://leobaghdasaryan.com',
    displayUrl: 'leobaghdasaryan.com',
    screenshot: '/images/projects/leo-baghdasaryan.webp',
    screenshotAlt:
      'Screenshot of the Leo Baghdasaryan film composer portfolio website homepage',
    screenshotDetail: '/images/projects/leo-baghdasaryan-detail.webp',
    screenshotDetailAlt:
      'Screenshot of a content section further down the Leo Baghdasaryan website',
    screenshotMobile: '/images/projects/leo-baghdasaryan-mobile.webp',
    screenshotMobileAlt: 'The Leo Baghdasaryan website shown at a mobile screen size',
    role: 'Full-stack engineer — independent build',
    period: 'Freelance engagement',
    context: 'Independent build',
    overview: [
      'A portfolio and lead-generation site for a film composer and music producer. It presents the services on offer — film scoring, sound design and production — alongside a project showcase, a five-step client process and studio information.',
      'The brief was as much commercial as visual: the site has to sell. Every section funnels toward a booking enquiry, and the dark, cinematic treatment matches the work it is presenting.'
    ],
    contributions: [
      'Built the full Nuxt.js site — components, portfolio and content sections.',
      'Implemented the responsive dark-themed design across every breakpoint.',
      'Set up the CI/CD pipelines, the deployment process and the server configuration.'
    ],
    stack: ['Nuxt.js', 'Vue', 'Laravel', 'Filament', 'TypeScript', 'Tailwind CSS', 'CI/CD'],
    highlights: [
      { label: 'Goal', value: 'Portfolio that converts visitors into booking enquiries' },
      { label: 'Content', value: 'Services, showcase, five-step process, studio' },
      { label: 'Design', value: 'Cinematic dark theme, fully responsive' },
      { label: 'Ops', value: 'CI/CD, deployment and server configuration' }
    ],
  }
]

export function findProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

/** Previous/next case study, wrapping around the list. */
export function projectNeighbours(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug)
  if (index === -1) return { previous: undefined, next: undefined }
  return {
    previous: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length]
  }
}
