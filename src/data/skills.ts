export interface Skill {
  name: string
  depth: 'primary' | 'strong' | 'supporting'
  whatItIs: string
  howIUseIt: string
  inMyWork: string
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export const skillData: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      {
        name: "Vue 3",
        depth: "primary",
        whatItIs: "A progressive JavaScript framework for building user interfaces through composable, reactive components.",
        howIUseIt: "I use Vue 3 to structure applications into reusable components, manage state across complex interfaces, and build responsive product experiences with TypeScript.",
        inMyWork: "Core framework for Lexaro's browser extension frontend and Stacck's SaaS interface. I've built complete product frontends from Figma designs using Vue 3's composition API."
      },
      {
        name: "TypeScript",
        depth: "primary",
        whatItIs: "A typed superset of JavaScript that adds static type checking to catch errors before they reach production.",
        howIUseIt: "I write TypeScript across all my projects to enforce type safety, improve code maintainability, and catch bugs early in development.",
        inMyWork: "Used throughout Lexaro and Stacck for frontend logic, shared utilities, and API interactions. TypeScript helps me manage complexity as projects grow."
      },
      {
        name: "JavaScript",
        depth: "primary",
        whatItIs: "The core language of web development, enabling interactive and dynamic behavior in browsers and servers.",
        howIUseIt: "I use modern JavaScript (ES2024+) for everything from DOM manipulation to API integrations, often paired with TypeScript for larger projects.",
        inMyWork: "Foundation of all my web development work. Every frontend interaction, API call, and browser extension feature runs on JavaScript."
      },
      {
        name: "Vite",
        depth: "strong",
        whatItIs: "A fast build tool and development server that provides instant hot module replacement and optimized production builds.",
        howIUseIt: "I use Vite as my primary build tool for Vue 3 and TypeScript projects, taking advantage of its fast development server and efficient bundling.",
        inMyWork: "Build tool for both Lexaro and Stacck. Vite's speed lets me iterate quickly during development and produces optimized production bundles."
      },
      {
        name: "Tailwind CSS",
        depth: "strong",
        whatItIs: "A utility-first CSS framework that enables rapid UI development through composable class names.",
        howIUseIt: "I use Tailwind CSS to style components quickly while maintaining design consistency across projects. I customize the design tokens to match each project's brand.",
        inMyWork: "Primary styling solution for Lexaro, Stacck, and this portfolio. Tailwind's utility classes let me implement designs from Figma efficiently."
      }
    ]
  },
  {
    title: "Backend & Data",
    skills: [
      {
        name: "Node.js",
        depth: "strong",
        whatItIs: "A JavaScript runtime that enables building server-side applications and APIs using the same language as the frontend.",
        howIUseIt: "I use Node.js to build REST APIs, handle authentication flows, and create backend services that power my web applications.",
        inMyWork: "Backend runtime for Stacck's API layer. I've built server-side logic for user authentication, data processing, and API endpoints."
      },
      {
        name: "Express",
        depth: "strong",
        whatItIs: "A minimal Node.js web framework that provides routing, middleware, and HTTP utilities for building APIs.",
        howIUseIt: "I use Express to define API routes, middleware chains, and server-side logic for my Node.js applications.",
        inMyWork: "API framework for Stacck's backend services. Express handles routing, request validation, and middleware integration."
      },
      {
        name: "MongoDB",
        depth: "strong",
        whatItIs: "A NoSQL document database that stores data in flexible JSON-like documents, making it easy to work with JavaScript applications.",
        howIUseIt: "I use MongoDB with Mongoose to define schemas, query data, and manage persistent state for my applications.",
        inMyWork: "Primary database for Stacck's data layer. MongoDB stores user data, application state, and product configurations."
      },
      {
        name: "REST APIs",
        depth: "strong",
        whatItIs: "An architectural style for designing networked applications using standard HTTP methods and stateless communication.",
        howIUseIt: "I design and consume REST APIs for client-server communication, following standard conventions for endpoints, status codes, and data formats.",
        inMyWork: "Communication layer between Lexaro's frontend and backend services, and between Stacck's client and server."
      }
    ]
  },
  {
    title: "Browser & Extensions",
    skills: [
      {
        name: "Chrome Extension APIs",
        depth: "primary",
        whatItIs: "The set of APIs provided by Chrome for building browser extensions that interact with web pages, tabs, and browser features.",
        howIUseIt: "I use Chrome Extension APIs to build extensions that interact with web content, manage browser state, and provide custom user experiences.",
        inMyWork: "Core technology for Lexaro. I've built a complete browser extension using Manifest V3 APIs for wallet management and dApp interaction."
      },
      {
        name: "Manifest V3",
        depth: "primary",
        whatItIs: "The latest extension platform for Chrome extensions, emphasizing security, performance, and maintainability.",
        howIUseIt: "I structure extensions using Manifest V3's service worker architecture, content scripts, and permissions model.",
        inMyWork: "Lexaro is built on Manifest V3, using service workers for background logic and content scripts for web page interaction."
      },
      {
        name: "Playwright",
        depth: "supporting",
        whatItIs: "A browser automation library for testing web applications across multiple browsers with reliable selectors and assertions.",
        howIUseIt: "I use Playwright for browser automation tasks, testing, and building tools that interact with web pages programmatically.",
        inMyWork: "Used in the job agent system for automated browser interactions and in testing workflows for web applications."
      }
    ]
  },
  {
    title: "Product & Design",
    skills: [
      {
        name: "Figma",
        depth: "primary",
        whatItIs: "A collaborative interface design tool for creating wireframes, prototypes, and design systems.",
        howIUseIt: "I design interfaces in Figma before writing code, creating component specifications, design tokens, and visual prototypes.",
        inMyWork: "Design tool for Lexaro and Stacck. I create design systems in Figma that translate directly into Vue components and Tailwind classes."
      },
      {
        name: "Product Design",
        depth: "primary",
        whatItIs: "The process of identifying user problems and designing solutions that are usable, feasible, and valuable.",
        howIUseIt: "I approach every project by understanding the user problem first, then designing the solution before engineering it.",
        inMyWork: "I've designed and built Lexaro and Stacck from concept to deployment, handling the full product lifecycle from ideation to shipping."
      },
      {
        name: "UI/UX Design",
        depth: "strong",
        whatItIs: "The practice of designing interfaces that are visually clear, intuitive to use, and pleasant to interact with.",
        howIUseIt: "I focus on clean layouts, consistent typography, proper spacing, and micro-interactions that make interfaces feel polished.",
        inMyWork: "Applied across all my projects. I care about the small details — hover states, transitions, responsive behavior, and visual hierarchy."
      }
    ]
  },
  {
    title: "Tools & Infrastructure",
    skills: [
      {
        name: "Git",
        depth: "strong",
        whatItIs: "A distributed version control system for tracking changes in code and coordinating work across developers.",
        howIUseIt: "I use Git for version control, branching strategies, and managing code changes across all my projects.",
        inMyWork: "All my projects are version-controlled with Git. I use GitHub for collaboration and code review workflows."
      },
      {
        name: "GitHub",
        depth: "strong",
        whatItIs: "A platform for hosting Git repositories, managing issues, and collaborating on software projects.",
        howIUseIt: "I host my projects on GitHub, manage issues and documentation, and use it as my public developer profile.",
        inMyWork: "All public projects are on GitHub. I use it for version control, project management, and showcasing my work."
      },
      {
        name: "Docker",
        depth: "supporting",
        whatItIs: "A containerization platform for packaging applications with their dependencies into portable, consistent environments.",
        howIUseIt: "I use Docker to containerize applications for consistent development environments and deployment configurations.",
        inMyWork: "Used for local development environments and deployment configurations where containerization provides consistency."
      },
      {
        name: "Vercel",
        depth: "strong",
        whatItIs: "A cloud platform for deploying and hosting web applications with automatic builds and global edge distribution.",
        howIUseIt: "I deploy frontend applications and full-stack projects to Vercel for fast, reliable hosting with automatic deployments.",
        inMyWork: "Primary deployment platform for Stacck and other web applications. Vercel handles builds, deployments, and global distribution."
      },
      {
        name: "Render",
        depth: "supporting",
        whatItIs: "A cloud platform for deploying web services, databases, and static sites with automatic scaling.",
        howIUseIt: "I use Render for backend services and APIs that need persistent hosting outside of serverless functions.",
        inMyWork: "Backend hosting for services that require persistent processes or database connections."
      }
    ]
  }
]