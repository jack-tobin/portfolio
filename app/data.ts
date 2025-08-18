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
    description: 'Visual analytics of sovereign bond curves',
    link: 'https://yield-curves-app.onrender.com',
    id: 'yield_curves',
    github: 'https://github.com/jack-tobin/yield-curves',
    stack: ['Django', 'Python', 'QuantLib', 'PostgreSQL'],
  },
  {
    name: 'MVGARCH',
    description: 'Python library for multivariate GARCH time series analysis',
    link: null,
    github: 'https://github.com/jack-tobin/mvgarch',
    stack: ['Python'],
    id: 'mvgarch',
  },
  {
    name: 'ETL Portfolio',
    description: 'Python library for expected tail loss portfolio optimization',
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
  },
]

enum SkillCategory {
  PROGRAMMING = 'Languages',
  BACKEND = 'Backend frameworks',
  FRONTEND = 'Frontend frameworks',
  DATA_ENGINEERING = 'Data engineering',
  DATABASES = 'Databases and storage',
  CLOUD = 'Cloud and infrastructure',
  DEVOPS = 'Devops',
  ARCHITECTURE = 'Architecture',
  OS = 'Operating systems',
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
    name: 'PyArrow',
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
  {
    name: 'Data lakes',
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

  // OS
  {
    name: 'Linux (Ubuntu 22.04, RHEL)',
    category: SkillCategory.OS,
  },
  {
    name: 'macOS',
    category: SkillCategory.OS,
  },
  {
    name: 'Windows 10/11',
    category: SkillCategory.OS,
  },

  // DevOps & CI/CD
  {
    name: 'GitLab CI/CD',
    category: SkillCategory.DEVOPS,
  },
  {
    name: 'Github Actions',
    category: SkillCategory.DEVOPS,
  },
  {
    name: 'Grafana',
    category: SkillCategory.DEVOPS,
  },
  {
    name: 'AWS CloudWatch',
    category: SkillCategory.DEVOPS,
  },
  {
    name: 'Jira',
    category: SkillCategory.DEVOPS,
  },
  {
    name: 'Agile',
    category: SkillCategory.DEVOPS,
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
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Qube Research & Technologies',
    title: 'Treasury Trader',
    location: 'London, UK',
    start: 'August 2025',
    end: 'Present',
    link: 'https://www.qube-rt.com/',
    id: 'qrt',
    description:
      "QRT is a global quantitative asset management firm.",
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
      'PrismFP is a global financial derivatives brokerage focusing on short-term interest rate and fixed income futures and options. PrismFP Analytics is the analytics engine behind that brokerage. In my role I researched and deployed quantitative financial models, built ETL data pipelines in Airflow, and maintained pricing libraries for exchange and OTC derivatives, all in a highly scalable cloud and microservice based infrastructure',
    stack: [
      'Python',
      'AWS Cloud',
      'PostgreSQL',
      'Flask/FastAPI',
      'Docker',
      'Kubernetes',
      'Linux',
    ],
  },
  {
    company: 'Fiduciary Trust International',
    title: 'Research Associate - Quantitative & Risk Analytics',
    location: 'Boston, US',
    start: 'June 2018',
    end: 'June 2021',
    link: 'https://www.fiduciarytrust.com/',
    id: 'fti',
    description:
      "Fiduciary Trust is a global ultra-high net worth investment advisor. In this role I supported the firm's Research and Portfolio management teams by building and automating investment analysis tools in Excel/VBA, scaling simulation and portfolio optimization tools in R/Shiny, and researching capital market expectations and building model portfolios as part of the annual asset allocation refresh",
    stack: ['Python', 'R/Shiny', 'Excel/VBA', 'Windows Server'],
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/jack-tobin',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/tobin-jack/',
  },
]

export const EMAIL = 'jamesjacksontobin@gmail.com'
