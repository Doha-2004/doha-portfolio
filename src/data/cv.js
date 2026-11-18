// All content comes from Doha's CV. Edit here only.
export const profile = {
  name: 'Doha Emad',
  title: 'Junior Front-End Developer',
  stack: 'React.js',
  location: 'Assiut, Egypt',
  email: 'doha.emad204@gmail.com',
  phone: '+20 121 043 3982',
  github: 'https://github.com/Doha-2004',
  linkedin: 'https://linkedin.com/in/doha-emad-843b452b0',
  intro:
    'I build responsive React interfaces and connect them to REST and ASP.NET Core APIs. Computer and Information Science graduate, Assiut University 2026.',
  roles: ['React interfaces', 'REST API integration', 'Responsive layouts', 'Reusable components'],
}

export const about = {
  heading: 'Front-end craft, with the full stack in sight.',
  paragraphs: [
    'I build responsive web applications with React.js, JavaScript (ES6+), HTML5 and CSS3. My work centres on component-based UI, state management with React Hooks and Context API, routing with React Router, and REST API integration, including front-end integration with ASP.NET Core APIs.',
    'My front-end work spans four projects: Logeen Academy Platform, Jana Delivery, Kassha Trucks and My Little House. I am open to on-site and remote Junior Front-End Developer opportunities, and I want to grow toward full-stack development with ASP.NET Core.',
  ],
  stats: [
    { value: '3', label: 'React projects deployed on Vercel' },
    { value: '4', label: 'front-end platform projects' },
    { value: '2026', label: 'graduated, Assiut University' },
  ],
  teaching: 'Alongside development, I teach programming fundamentals to children at Logeen Academy using Scratch and Python.',
}

export const skills = [
  { name: 'Front-End', items: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Responsive Web Design'] },
  { name: 'React Ecosystem', items: ['React Hooks', 'Context API', 'Props & State', 'React Router', 'Component-Based Architecture', 'Reusable Components', 'Vite', 'Recharts'] },
  { name: 'API & Data', items: ['RESTful APIs', 'ASP.NET Core API Integration', 'Server-Side Pagination', 'JSON', 'Async/Await', 'Error Handling', 'Loading States', 'LocalStorage', 'CRUD Operations'] },
  { name: 'UI/UX', items: ['UI/UX Principles', 'Figma', 'Dark/Light Mode'] },
  { name: 'Authentication', items: ['User Sign-In', 'Password Reset by Email'] },
  { name: 'Tools & Workflow', items: ['Git', 'GitHub', 'npm', 'VS Code', 'Vercel', 'ChatGPT', 'Claude Code'] },
  { name: 'Additional', items: ['C#', '.NET 9', 'OOP', 'xUnit', 'SQL Server', 'Java', 'C', 'C++'] },
]

export const experience = [
  {
    role: 'Programming Instructor',
    org: 'Logeen Academy, Logeen Software & Digital Marketing',
    when: '2025 – Present',
    points: ['Taught programming fundamentals to children using Scratch and Python.', 'Taught HTML and CSS to selected student groups.'],
    tech: [],
  },
  {
    role: 'Front-End Developer',
    org: 'Logeen Academy Platform',
    when: 'Front-end project',
    points: ['Built front-end interfaces for the Logeen Academy online learning platform with HTML, CSS, JavaScript and Bootstrap, and later React.js.'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React.js'],
  },
  {
    role: 'Front-End Developer',
    org: 'Jana Delivery, ride-hailing platform',
    when: 'Front-end project',
    points: [
      'Built front-end interfaces for a ride-hailing platform with three separate panels: passenger, driver and admin.',
      'Admin dashboard screens for trip, passenger, driver and earnings statistics, a live map of available drivers, reports, invoices, ratings, discount coupons, payment settings and notifications.',
      'Passenger and driver interfaces for map-based trip requests, in-app chat and calling, driver tracking, trip acceptance, ratings, payments, trip history and notifications.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  },
  {
    role: 'Front-End Developer',
    org: 'Kassha Trucks',
    when: 'Front-end project',
    points: ['Developed the front end of the Kassha Trucks web platform.'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  },
  {
    role: 'Front-End Developer',
    org: 'My Little House',
    when: 'Front-end project',
    points: ['Developed the front end of the My Little House e-commerce website for handmade materials and tools.'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  },
]

export const projects = [
  {
    name: 'Career Quest',
    kind: 'Job application tracker',
    featured: true,
    icon: 'trophy',
    desc: 'A responsive, gamified job-tracking app built from reusable components. State lives in Context API and React Hooks, navigation uses React Router, and Recharts powers the statistics.',
    features: [
      'Seven core features: add, edit, delete, search, filter, sort and favorite',
      'Interview scheduler and an application timeline from submission to offer',
      'Client-side storage with LocalStorage, including JSON import and export',
    ],
    tech: ['React.js', 'React Router', 'Context API', 'Tailwind CSS', 'Recharts', 'LocalStorage'],
    live: 'https://career-quest-new.vercel.app',
    github: 'https://github.com/Doha-2004/career-quest-new',
  },
  {
    name: 'SkillShelf',
    kind: 'Training platform front end',
    featured: true,
    icon: 'book',
    desc: 'A React.js front end that consumes the SkillShelf Training API, deployed on Vercel.',
    features: ['Article browsing with server-side pagination', 'Save articles for later', 'User sign-in and password reset by email'],
    tech: ['React.js', 'REST APIs', 'Vercel'],
    live: 'https://skill-shelf-xi.vercel.app/articles',
    github: 'https://github.com/Doha-2004/SkillShelf',
  },
  {
    name: 'Guessly',
    kind: 'Interactive number guessing game',
    featured: true,
    icon: 'dice',
    desc: 'An interactive number-guessing game with a responsive interface, deployed on Vercel.',
    features: ['RESTful APIs for game functionality and user data, with loading and error states', 'Authentication features and page navigation', 'Reusable UI components and managed state'],
    tech: ['React.js', 'JavaScript (ES6+)', 'Vite', 'React Router', 'REST APIs'],
    live: 'https://guessly-three.vercel.app',
    github: 'https://github.com/Doha-2004/Guessing-Task',
  },
  {
    name: 'Jana Delivery',
    kind: 'Ride-hailing platform, three panels',
    featured: false,
    icon: 'car',
    desc: 'Front-end for a ride-hailing platform with passenger, driver and admin panels, including a live map of available drivers and map-based trip requests.',
    features: ['Admin statistics, reports, invoices, coupons and notifications', 'In-app chat and calling, driver tracking and trip history'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  },
  {
    name: 'MarketBridge OOP ERP',
    kind: 'Console application',
    featured: false,
    icon: 'boxes',
    desc: 'An object-oriented console ERP that imports marketplace orders into a unified order model.',
    features: ['Order lifecycle, stock reservation, returns and refunds, duplicate detection and an audit trail', 'Interface-based polymorphism, dependency injection and role-based permissions for four user roles, verified with xUnit tests'],
    tech: ['C#', '.NET 9', 'xUnit'],
    github: 'https://github.com/Doha-2004/MarketBridge_OOP_ERP',
  },
]

export const education = {
  degree: 'Bachelor of Computer and Information Science',
  focus: 'Specialization: Information Systems',
  school: 'Assiut University, Assiut, Egypt',
  year: '2026',
  gpa: '3.14',
  showGpa: true,
  languages: [{ name: 'English', level: 'B2 (Upper-Intermediate)' }],
}
