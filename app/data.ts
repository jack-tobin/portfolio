import { WorkExperience } from '@/components/work-experience'
import { Project } from '@/components/projects'
import { Education } from '@/components/education'

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Yield Curves',
    description: 'Visual analytics of sovereign bond curves.',
    link: 'https://yield-curves-app.onrender.com',
    id: 'yield_curves',
    github: 'https://github.com/jack-tobin/yield-curves',
    stack: ['Django', 'Python', 'QuantLib', 'PostgreSQL'],
  },
  {
    name: 'MVGARCH',
    description: 'Python library for multivariate GARCH time series analysis.',
    link: null,
    github: 'https://github.com/jack-tobin/mvgarch',
    stack: ['Python'],
    id: 'mvgarch',
  },
  {
    name: 'ETL Portfolio',
    description:
      'Python library for expected-tail-loss portfolio optimization.',
    link: null,
    github: 'https://github.com/jack-tobin/etlportfolio',
    stack: ['Python'],
    id: 'etlportfolio',
  },
]

export const EDUCATION: Education[] = [
  {
    university: "King's Business School, King's College London",
    location: 'London, UK',
    degree: 'Master of Science in Economics and Finance',
    grade: 'Pass with Distinction (GPA: 79/100)',
    start: 'September 2021',
    end: 'September 2022',
    link: 'https://www.kcl.ac.uk/',
    id: 'kcl',
    description:
      'Developed and implemented trading strategies using machine learning algorithms.',
  },
  {
    university: 'Northeastern University',
    location: 'Boston, US',
    degree: 'Bachelor of Arts in Economics',
    grade: 'magna cum laude (GPA: 3.8/4.0)',
    start: 'September 2013',
    end: 'May 2018',
    link: 'https://www.northeastern.edu/',
    id: 'northeastern',
    description:
      'Developed and implemented trading strategies using machine learning algorithms.',
  },
]

enum SkillCategory {
  PROGRAMMING = 'Programming languages',
  BACKEND = 'Backend',
  FRONTEND = 'Frontend',
  DATA_ENGINEERING = 'Data engineering',
  DATABASES = 'Databases and storage',
  CLOUD = 'Cloud and infrastructure',
  DEVOPS = 'Devops',
  MONITORING = 'Observability',
  PROJECT_MANAGEMENT = 'Project management',
  ARCHITECTURE = 'Architecture',
}

type Skill = {
  name: string
  category: SkillCategory
}

export const SKILLS: Skill[] = [
  // Programming Languages
  {
    name: 'Python',
    category: SkillCategory.PROGRAMMING,
  },
  {
    name: 'JavaScript/TypeScript',
    category: SkillCategory.PROGRAMMING,
  },
  {
    name: 'Rust',
    category: SkillCategory.PROGRAMMING,
  },
  {
    name: 'C/C++',
    category: SkillCategory.PROGRAMMING,
  },
  {
    name: 'Cython',
    category: SkillCategory.PROGRAMMING,
  },
  {
    name: 'Bash/Fish',
    category: SkillCategory.PROGRAMMING,
  },

  // Backend Development & APIs
  {
    name: 'Flask',
    category: SkillCategory.BACKEND,
  },
  {
    name: 'FastAPI',
    category: SkillCategory.BACKEND,
  },
  {
    name: 'Django',
    category: SkillCategory.BACKEND,
  },

  // Frontend Development
  {
    name: 'Next.js',
    category: SkillCategory.FRONTEND,
  },
  {
    name: 'React',
    category: SkillCategory.FRONTEND,
  },
  {
    name: 'TailwindCSS',
    category: SkillCategory.FRONTEND,
  },

  // Data Engineering & Processing
  {
    name: 'Apache Airflow',
    category: SkillCategory.DATA_ENGINEERING,
  },
  {
    name: 'Pandas',
    category: SkillCategory.DATA_ENGINEERING,
  },
  {
    name: 'NumPy',
    category: SkillCategory.DATA_ENGINEERING,
  },
  {
    name: 'Polars',
    category: SkillCategory.DATA_ENGINEERING,
  },
  {
    name: 'PyIceberg',
    category: SkillCategory.DATA_ENGINEERING,
  },
  {
    name: 'ETL pipelines',
    category: SkillCategory.DATA_ENGINEERING,
  },

  // Databases & Storage
  {
    name: 'PostgreSQL',
    category: SkillCategory.DATABASES,
  },
  {
    name: 'Apache Iceberg',
    category: SkillCategory.DATABASES,
  },
  {
    name: 'S3',
    category: SkillCategory.DATABASES,
  },
  {
    name: 'RDS',
    category: SkillCategory.DATABASES,
  },

  // Cloud & Infrastructure
  {
    name: 'AWS Cloud',
    category: SkillCategory.CLOUD,
  },
  {
    name: 'Kubernetes',
    category: SkillCategory.CLOUD,
  },
  {
    name: 'Docker',
    category: SkillCategory.CLOUD,
  },
  {
    name: 'Linux (Ubuntu 22.04)',
    category: SkillCategory.CLOUD,
  },

  // DevOps & CI/CD
  {
    name: 'GitLab CI/CD',
    category: SkillCategory.DEVOPS,
  },

  // Monitoring & Observability
  {
    name: 'Grafana',
    category: SkillCategory.MONITORING,
  },
  {
    name: 'AWS CloudWatch',
    category: SkillCategory.MONITORING,
  },

  // Project Management & Collaboration
  {
    name: 'Jira',
    category: SkillCategory.PROJECT_MANAGEMENT,
  },
  {
    name: 'Agile',
    category: SkillCategory.PROJECT_MANAGEMENT,
  },

  // Architecture & Design
  {
    name: 'Distributed systems',
    category: SkillCategory.ARCHITECTURE,
  },
  {
    name: 'Microservices',
    category: SkillCategory.ARCHITECTURE,
  },
  {
    name: 'Data lakes',
    category: SkillCategory.ARCHITECTURE,
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Qube Research & Technologies',
    title: 'Treasury Trader [Upcoming]',
    location: 'London, UK',
    start: 'August 2025',
    end: 'Present',
    link: 'https://www.qube-rt.com/',
    id: 'qrt',
    description:
      "Develop and implement technological solutions to support the firm's cash and collateral management effort.",
    stack: ['Python'],
  },
  {
    company: 'PrismFP Analytics',
    title: 'Quantitative Developer',
    location: 'London, UK',
    start: 'October 2022',
    end: 'August 2025',
    link: 'https://www.prismfp.com/',
    id: 'prism',
    description:
      'Build and deploy options and futures calibration models, maintain REST APIs, develop data pipelines.',
    stack: ['Python', 'AWS Cloud', 'Flask', 'Docker', 'Kubernetes', 'Linux'],
  },
  {
    company: 'Fiduciary Trust International',
    title: 'Research Associate - Quantitative & Risk Analytics',
    location: 'Boston, US',
    start: 'June 2018',
    end: 'June 2021',
    link: 'https://www.fiduciarytrust.com/',
    id: 'fti',
    description: 'Built investment analysis models using Python, VBA and R.',
    stack: ['Python', 'R', 'VBA', 'Windows Server'],
  },
]

export const BLOG_POSTS: BlogPost[] = []

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/jack-tobin',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ibelick',
  },
]

export const EMAIL = 'jamesjacksontobin@gmail.com'
