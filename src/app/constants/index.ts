export interface ProjectItem {
  title: string;
  subtitle: string;
  category: "AI & ML" | "Full Stack" | "Mobile & Web";
  content: string;
  tech: string[];
  image?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  duration: string;
  location: string;
  type: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string;
  location: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level?: string }[];
}

export const PersonalData = {
  name: "Chalana Shehara",
  title: "Associate Software Engineer",
  tagline: "Building resilient enterprise backends, scalable cloud systems, and intelligent AI workflows.",
  about: `Associate Software Engineer with around 2 years of industry experience, specializing in developing and deploying enterprise applications, cloud-based data solutions, and AI-driven workflows. Hands-on experience with .NET, React, Angular, KnockoutJS, Node.js, Python, SQL Server, PostgreSQL, Azure, and Azure Synapse Analytics. Experienced in production deployments, CI/CD, DevSecOps practices, SonarQube, Docker, Kubernetes, and various Azure services.`,
  phone: "+94 71 560 5887",
  email: "chalanashehara19@gmail.com",
  location: "Kandy, Sri Lanka",
  github: "https://github.com/Chalana-98",
  linkedin: "https://www.linkedin.com/in/chalana-shehara/",
  whatsapp: "https://wa.me/94715605887",
  resumeUrl: "https://drive.google.com/file/d/1Q13hgVR0essG4vWY1jVOM4I4SSSJmGKj/view?usp=drive_link",
  stats: [
    { label: "Industry Experience", value: "2 Years" },
    { label: "Production Deployments", value: "Enterprise" },
    { label: "AI Workflows & Data", value: "LangChain & Synapse" },
    { label: "Core Tech Stack", value: ".NET • React • Azure" },
  ],
};

export const Experiences: ExperienceItem[] = [
  {
    role: "Associate Software Engineer",
    company: "Expernetic Pvt Ltd",
    period: "2024 - Present",
    duration: "2 Years Experience",
    location: "Sri Lanka",
    type: "Intern → Associate",
    highlights: [
      "Progressed from Intern to Associate Software Engineer, driving enterprise application development and production deployments.",
      "Engineered scalable full-stack applications with ASP.NET Core, .NET Core, React, and TypeScript following Clean Architecture and CQRS patterns.",
      "Built AI-based workflows and automation using LangChain and Microsoft Agent Framework.",
      "Designed, deployed, and managed production Azure Synapse Analytics pipelines for enterprise data synchronization.",
      "Implemented microservices communication using Dapr and high-throughput data access layers using Dapper ORM and Microsoft SQL Server.",
      "Containerized applications using Docker, orchestrated deployments with Kubernetes, and architected CI/CD pipelines via GitHub Actions and Azure DevOps with SonarQube DevSecOps.",
      "Collaborated actively in Agile teams, contributing to architecture discussions, code reviews, and production release cycles.",
    ],
    technologies: [
      ".NET Core",
      "ASP.NET Core",
      "React",
      "TypeScript",
      "Python",
      "LangChain",
      "Azure Synapse",
      "Dapr",
      "Docker",
      "Kubernetes",
      "MSSQL",
      "CI/CD",
      "SonarQube",
    ],
  },
];

export const ProjectsData: ProjectItem[] = [
  {
    title: "Sinhala Songs Classifier",
    subtitle: "Final Year Research Project • Machine Learning",
    category: "AI & ML",
    featured: true,
    content:
      "Final Year Research Project on automated Sinhala song classification. Employs scikit-learn library for ML modeling (RandomForestClassifier, evaluation metrics). Data processing handled with pandas & NumPy; feature visualization conducted with Matplotlib & Seaborn.",
    tech: ["Python", "scikit-learn", "RandomForest", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    github: "https://github.com/Chalana-98",
  },
  {
    title: "Medi Care",
    subtitle: "Centralized Patient Details System",
    category: "Full Stack",
    featured: true,
    content:
      "Centralized, responsive healthcare management web application for patient records, clinical history tracking, and hospital workflow automation. Built using Angular frontend and ASP.NET Core backend with Clean Architecture.",
    tech: ["Angular", "ASP.NET Core", "SQL Server", "C#", "Clean Architecture"],
    image: "/Med.png",
    github: "https://github.com/Chalana-98",
  },
  {
    title: "Personal Portfolio v2",
    subtitle: "Modern Next.js 13 • Glassmorphic Motion UI",
    category: "Mobile & Web",
    featured: true,
    content:
      "State-of-the-art developer portfolio featuring dark glassmorphism, Framer Motion interactive cards, responsive layouts, dynamic filtering, and optimized typography.",
    tech: ["Next.js 13", "TypeScript", "Tailwind CSS", "Framer Motion", "React Icons"],
    image: "/port.png",
    github: "https://github.com/Chalana-98/portfolio",
  },
  {
    title: "Tiny Care",
    subtitle: "Pediatric Wellness Mobile Application",
    category: "Mobile & Web",
    featured: false,
    content:
      "Comprehensive mobile application for infant healthcare monitoring, immunization tracking, and parental guidance with modern UI.",
    tech: ["Flutter", "Dart", "Laravel API", "MySQL"],
    image: "/Tiny.png",
    github: "https://github.com/Chalana-98",
  },
  {
    title: "Doctor Appointment App",
    subtitle: "Clinical Scheduling Platform",
    category: "Mobile & Web",
    featured: false,
    content:
      "Patient-clinician booking app enabling schedule discovery, real-time appointment booking, and automated notifications backed by Laravel.",
    tech: ["Flutter", "Laravel", "REST APIs", "MySQL"],
    image: "/Docpng.png",
    github: "https://github.com/Chalana-98",
  },
  {
    title: "Sri Go",
    subtitle: "Island Travel Guide & Discovery App",
    category: "Mobile & Web",
    featured: false,
    content:
      "Comprehensive travel assistant application featuring location-based discovery, Google Maps integration, and real-time cloud data sync.",
    tech: ["Flutter", "Firebase", "Google Maps API", "Cloud Firestore"],
    image: "/Sripng.png",
    github: "https://github.com/Chalana-98",
  },
];

export const SkillCategories: SkillCategory[] = [
  {
    title: "Backend & Cloud Architecture",
    skills: [
      { name: ".NET / .NET Core" },
      { name: "ASP.NET Core" },
      { name: "Microsoft Azure" },
      { name: "Azure Synapse Analytics" },
      { name: "Dapr" },
      { name: "Clean Architecture & CQRS" },
      { name: "Node.js" },
      { name: "Microservices" },
    ],
  },
  {
    title: "AI & Data Engineering",
    skills: [
      { name: "Agentic AI" },
      { name: "LangChain" },
      { name: "Microsoft Agent Framework" },
      { name: "Python" },
      { name: "scikit-learn" },
      { name: "Data Pipelines (Synapse)" },
      { name: "Pandas & NumPy" },
      { name: "Matplotlib & Seaborn" },
    ],
  },
  {
    title: "Frontend Engineering",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Angular" },
      { name: "Tailwind CSS" },
      { name: "KnockoutJS" },
      { name: "Framer Motion" },
    ],
  },
  {
    title: "DevOps, Containers & Databases",
    skills: [
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "CI/CD Pipelines" },
      { name: "GitHub Actions" },
      { name: "Azure DevOps" },
      { name: "SonarQube & DevSecOps" },
      { name: "Microsoft SQL Server" },
      { name: "PostgreSQL" },
      { name: "Dapper ORM" },
      { name: "SignalR" },
    ],
  },
];

export const EducationList: EducationItem[] = [
  {
    degree: "B.Sc (Hons) in Computing & Information Systems",
    institution: "Sabaragamuwa University of Sri Lanka",
    period: "2020 (October) - 2025 (May)",
    location: "Belihuloya, Sri Lanka",
    details:
      "Successfully completed all academic requirements in the Department of Computing and Information Systems, Faculty of Computing. Focused on Enterprise Software Engineering, Distributed Systems, Cloud Computing, and Machine Learning.",
  },
  {
    degree: "Primary & Secondary Education",
    institution: "Vidyartha College, Kandy",
    period: "2009 - 2018",
    location: "Kandy, Sri Lanka",
    details:
      "G.C.E. Advanced Level in Physical Science / Mathematics. Active member of academic clubs, serving as Former Vice President of the Astronomical Society.",
  },
];

export const CertificationsList = [
  {
    title: "Python for Data Science, AI & Development",
    issuer: "Coursera / IBM",
    credentialUrl: "https://github.com/Chalana-98",
    highlight: "Covers Python programming for ML, data structures, data analysis, and AI application foundations.",
  },
  {
    title: ".NET Fundamentals: Concepts, APIs, and Libraries in the .NET Framework",
    issuer: "Professional Training",
    credentialUrl: "https://github.com/Chalana-98",
    highlight: "In-depth mastery of .NET runtime, C# object architecture, asynchronous paradigms, and framework APIs.",
  },
];

export const ExtracurricularList = [
  {
    role: "Finalist Team Leader | Developer",
    organization: "Madhack Hackathon (2021) • UCSC",
    desc: "Led a competitive engineering team developing algorithmic problem solutions in the prestigious national university hackathon.",
  },
  {
    role: "Former Vice President",
    organization: "Astronomical Society • Vidyartha College, Kandy",
    desc: "Organized regional science exhibitions, student observation camps, and technical workshops.",
  },
  {
    role: "Former Active Member",
    organization: "IEEE Student Branch • Sabaragamuwa University of Sri Lanka",
    desc: "Participated in organizing technical seminars, IEEE workshops, and collaborative tech events.",
  },
  {
    role: "Former Active Member",
    organization: "Society of Computer Science (SOCS) • SUSL",
    desc: "Supported department computing initiatives, tech talks, and open-source sessions.",
  },
];

export const ReferencesList = [
  {
    name: "Prof. B.T.G.S Kumara",
    title: "Professor in Computer Science",
    organization: "Faculty of Computing, Sabaragamuwa University of Sri Lanka",
    contact: "+94 71 443 1192",
    email: "kumara@appsc.sab.ac.lk",
  },
  {
    name: "Ms. Piyumi Perera",
    title: "Technical Lead",
    organization: "Expernetic (Pvt) Ltd",
    contact: "+94 77 111 9066",
    email: "piyumi@expernetic.com",
  },
];

export const SoftSkills = [
  "Leadership & Teamwork",
  "Effective Technical Communication",
  "Flexibility & Fast Learning Curve",
  "Critical Decision Making & Problem Solving",
  "Clean Code & Architectural Rigor",
];

export const Interests = [
  "System & Cloud Architecture",
  "Agentic AI & LLM Automation",
  "UI/UX Designing",
  "Nature Photography",
  "Traveling & Cultural Exploration",
  "Emerging Tech Ecosystems",
];