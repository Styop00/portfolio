export const site = {
  name: 'Stepan Hambardzumyan',
  title: 'Full-Stack Developer',
  // Includes the /portfolio subpath the site is actually deployed under
  // (a GitHub Pages project site, not a root Styop00.github.io user site).
  url: 'https://styop00.github.io/portfolio',
  location: 'Yerevan, Armenia',
  tagline:
    'I build scalable web platforms end to end — Laravel and Node on the back, Vue, Nuxt and Next on the front, and the CI/CD that ships them.',
  summary:
    'Full-Stack Developer with 4+ years building scalable, production web applications — from multi-tenant SaaS platforms to sports-operations ERPs and research repositories.',
  email: 'stepanhambardzumyan00@gmail.com',
  phone: '+374 98 825960',
  phoneHref: '+37498825960',
  github: 'https://github.com/Styop00',
  githubHandle: 'Styop00',
  linkedin: 'https://www.linkedin.com/in/stepan-hambardzumyan-7a9a79258',
  linkedinHandle: 'stepan-hambardzumyan',
  telegram: 'https://t.me/Styop_H',
  telegramHandle: '@Styop_H'
} as const

export const stats = [
  { value: '4+', label: 'Years building for production' },
  { value: '5', label: 'Platforms shipped end to end' },
  { value: '+30%', label: 'User satisfaction lifted' },
  { value: '3', label: 'Engineering teams' }
] as const

export const skillGroups = [
  {
    title: 'Languages & Frameworks',
    items: [
      'PHP',
      'Laravel',
      'JavaScript',
      'TypeScript',
      'Vue',
      'Nuxt.js',
      'React',
      'Next.js',
      'Node.js',
      'Nest.js',
      'Livewire'
    ]
  },
  {
    title: 'Data & APIs',
    items: ['REST APIs', 'PostgreSQL', 'MySQL', 'Redis']
  },
  {
    title: 'UI & Styling',
    items: ['Tailwind CSS', 'Ant Design', 'Vuetify', 'Bootstrap']
  },
  {
    title: 'Tooling',
    items: ['CI/CD', 'GitHub Actions', 'Ionic', 'Capacitor', 'OOP']
  }
] as const

export const experience = [
  {
    company: 'Tournik.io',
    role: 'Full Stack Developer',
    period: '01/2026 — Present',
    current: true,
    points: [
      'Build web applications with Laravel on the back end and Nuxt.js on the front end.',
      'Design and maintain the REST APIs that connect the front end to the back end.',
      'Own the CI/CD pipelines that automate the deployment process.'
    ]
  },
  {
    company: 'LineMe (now Bookera)',
    role: 'Full Stack Developer',
    period: '12/2024 — 12/2025',
    current: false,
    points: [
      'Architected a multi-tenant booking platform and its centralized user-management system.',
      'Built the Next.js front end with SSR/SSG, improving load times and Core Web Vitals.',
      'Integrated third-party messaging and notification services for automated client reminders.',
      'Built a secure payment module supporting multiple gateways.',
      'Designed a reusable Ant Design component library used across the product.'
    ]
  },
  {
    company: 'CodeIdea LLC',
    role: 'Full Stack Developer',
    period: '07/2022 — Present',
    current: true,
    points: [
      'Develop web applications with Laravel, Vue and React, plus the REST APIs behind them.',
      'Integrate third-party APIs and optimise MySQL and PostgreSQL databases.',
      'Built a custom Chrome extension and cross-platform mobile apps with Ionic and Capacitor.',
      'Set up GitHub Actions CI/CD pipelines for automated build and deployment.'
    ]
  }
] as const

export const languages = [
  { name: 'Armenian', level: 'Native' },
  { name: 'English', level: 'Advanced' },
  { name: 'Russian', level: 'Proficient' }
] as const

export const softSkills = [
  'Problem solving',
  'Detail-oriented',
  'Critical thinking',
  'Self-learning',
  'Leadership',
  'Business analytics'
] as const
