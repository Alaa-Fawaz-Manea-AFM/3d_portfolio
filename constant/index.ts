import {
  web,
  css,
  html,
  nest,
  mysql,
  react,
  redux,
  nextjs,
  mobile,
  Nodejs,
  prisma,
  creator,
  MongoDb,
  express,
  postgres,
  Mongoose,
  firebase,
  Nike_img,
  sequelize,
  javascript,
  TypeScript,
  tailwindcss,
  Home_Netflix,
  Center_Masr_img,
  Home_e_commerce,
  Home_social_Media,
  projectHoobank_img,
  git,
  github,
} from "@/public/assets";

export const navLinks = [
  {
    id: "#about",
    title: "About",
  },
  {
    id: "#work",
    title: "Work",
  },
  {
    id: "#contact",
    title: "Contact",
  },
];

// const services = [
//   {
//     title: "Web Developer",
//     icon: web,
//   },
//   {
//     title: "React Developer",
//     icon: mobile,
//   },
//   {
//     title: "Content Creator",
//     icon: creator,
//   },
//   {
//     title: "Next Developer",
//     icon: mobile,
//   },
// ];

const services = [
  {
    title: "Full Stack Development",
    icon: web,
    desc: "Building end-to-end scalable web applications using Next.js, NestJS, and robust TypeScript architectures.",
  },
  {
    title: "Backend & WS Architecture",
    icon: web,
    desc: "Designing high-performance APIs and integrated real-time WebSockets solutions for dynamic, instant communication.",
  },
  {
    title: "Database Optimization",
    icon: creator,
    desc: "Crafting efficient relational schemas via Prisma ORM and PostgreSQL, reducing query latency by 15%.",
  },
  {
    title: "Responsive Web Design",
    icon: mobile,
    desc: "Creating pixel-perfect, fluid user interfaces applying modern layouts and premium standards with TailwindCSS.",
  },
];

const skills = [
  "Next.js",
  "NestJS",
  "TypeScript",
  "Prisma ORM",
  "PostgreSQL",
  "WebSockets",
  "TailwindCSS",
  "Redux Toolkit",
];

const technologies = [
  { name: "HTML 5", icon: html, category: "frontend" },
  { name: "CSS 3", icon: css, category: "frontend" },
  { name: "JavaScript", icon: javascript, category: "frontend" },
  { name: "TypeScript", icon: TypeScript, category: "frontend" },
  { name: "React JS", icon: react, category: "frontend" },
  { name: "Redux Toolkit", icon: redux, category: "frontend" },
  { name: "Tailwind CSS", icon: tailwindcss, category: "frontend" },
  { name: "Next.js", icon: nextjs, category: "frontend" },

  { name: "Node.js", icon: Nodejs, category: "backend" },
  { name: "Express.js", icon: express, category: "backend" },
  { name: "NestJS", icon: nest, category: "backend" },
  { name: "Prisma ORM", icon: prisma, category: "backend" },
  { name: "Sequelize", icon: sequelize, category: "backend" },
  { name: "Mongoose", icon: Mongoose, category: "backend" },
  { name: "MongoDB", icon: MongoDb, category: "backend" },
  { name: "PostgreSQL", icon: postgres, category: "backend" },
  { name: "MySQL", icon: mysql, category: "backend" },
  { name: "Firebase", icon: firebase, category: "backend" },
  { name: "Git", icon: git, category: "backend" },
  { name: "Github", icon: github, category: "backend" },
];

const projects = [
  {
    name: "GRADUATION PROJECT: Center Masr",
    description: [
      " Developed a full-stack system managing educational workflows, handling interactions for 3+ distinct user roles (centers, teachers,students)",
      "Engineered an integrated real-time chat application using WebSockets (WS) to enable instant, bi-directional communication between users.",
      "Designed a complex relational database schema via Prisma and PostgreSQL, reducing query latency by 15% through optimized indexing.",
    ],
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "NestJS",
        color: "purple-text-gradient",
      },
      {
        name: "WebSockets (WS)",
        color: "green-text-gradient",
      },
      {
        name: "Prisma & Postgres",
        color: "pink-text-gradient",
      },
    ],
    image: Center_Masr_img,
    source_github_link: "https://github.com/3M-mahmoud/Graduation_project",
    source_web_link: "https://center-masr.vercel.app/",
  },
  {
    name: "Social Media App - Full Stack",
    description: [
      "Engineered a full-stack social platform with real-time connections, dynamic feeds, and secure JWT authentication.",
      "Built a robust NestJS backend and optimized relational database schemas utilizing Prisma ORM and PostgreSQL",
    ],
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "NestJS",
        color: "purple-text-gradient",
      },
      {
        name: "Prisma & Postgres",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: Home_social_Media,
    source_github_link:
      "https://github.com/Alaa-Fawaz-Manea-AFM/social-media-back-end-nestjs-prisma-postgress",
    source_web_link: "https://social-media-app-iota-ebon.vercel.app/",
  },
  {
    name: "E-Commerce Enterprise",
    description: [
      "Developed an advanced e-commerce application with full shopping flows, dynamic catalogs, and custom filtering, boosting rendering speed by 25% via NextJS.",
      "Leveraged Prisma ORM for efficient relational queries, significantly enhancing database retrieval speeds.",
    ],
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "NestJS",
        color: "purple-text-gradient",
      },
      {
        name: "Prisma & Postgres",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: Home_e_commerce,
    source_github_link:
      "https://github.com/Alaa-Fawaz-Manea-AFM/e-commerce-back-end-nestjs-prisma-postgress/settings",
    source_web_link: "https://e-commerce-umber-omega.vercel.app/",
  },
  {
    name: "Net_Flix Stream",
    description: [
      "Built a premium video streaming app replicating core Netflix functionalities and pixel-perfect responsive layouts.",
      "Architected a secure PostgreSQL data model via Prisma to handle watch histories, user watchlists, and categories.",
    ],
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "NestJS",
        color: "purple-text-gradient",
      },
      {
        name: "Prisma & Postgres",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: Home_Netflix,
    source_github_link:
      "https://github.com/Alaa-Fawaz-Manea-AFM/Net-Flix-Clone-back-end-nestjs-prisma-postgress",
    source_web_link: "https://net-flix-three.vercel.app/",
  },
  {
    name: "Nike",
    description: [
      "A pixel-perfect, highly reactive client-side storefront clone of the official Nike application. Engineered with modern clean-code standards and highly interactive UI components to deliver a fluid shopping experience across all responsive layout breakpoints using premium Web design principles.",
    ],
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "purple-text-gradient",
      },
    ],
    image: Nike_img,
    source_github_link: "https://github.com/Alaa-Fawaz-Manea-AFM/Nike-clone",
    source_web_link: "https://nike-clone-ruddy.vercel.app/",
  },
  {
    name: "projectHoobank",
    description: [
      "A modern digital banking landing portal showcasing highly corporate layouts and rich micro-interactions. Built with strict structural modularity and reusable frontend components, optimizing asset loading times and guaranteeing seamless cross-device performance.",
    ],
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "purple-text-gradient",
      },
    ],
    image: projectHoobank_img,
    source_github_link:
      "https://github.com/Alaa-Fawaz-Manea-AFM/projectHoobank",
    source_web_link: "https://project-hoobank-gamma.vercel.app/",
  },
];
export { services, technologies, projects, skills };
