import type { SkillCategory, Project, Achievement, WorkExperience, CareerEvent, Stat } from './types';

// intentional type error to fail CI
const _typeCheckFail: number = "this should be a number";

export const personalInfo = {
  name: 'John Doe',
  title: 'Full Stack Developer',
  email: 'johndoe@example.com',
  github: 'https://github.com/your-github',
  linkedin: 'https://linkedin.com/in/your-profile',
  location: 'New York, NY, USA',
  summary:
    'Experienced Full Stack Developer with expertise in modern web development, cloud technologies, database design, and DevOps practices. Passionate about building scalable applications, clean architecture, and delivering high-quality software solutions.',
};

export const stats: Stat[] = [
  { value: '5+', label: 'Years Experience', icon: 'work' },
  { value: '20+', label: 'Projects Completed', icon: 'code' },
  { value: '25+', label: 'Technologies Used', icon: 'devices' },
  { value: '3+', label: 'Certifications', icon: 'verified' },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Backend Development',
    color: '#1565C0',
    skills: [
      { name: '.NET', level: 90 },
      { name: 'ASP.NET Core', level: 88 },
      { name: 'C#', level: 92 },
      { name: 'Python', level: 75 },
      { name: 'REST APIs', level: 95 },
      { name: 'Microservices', level: 80 },
    ],
  },
  {
    category: 'Frontend Development',
    color: '#00897B',
    skills: [
      { name: 'React.js', level: 88 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 87 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'Material UI', level: 85 },
    ],
  },
  {
    category: 'Databases',
    color: '#6A1B9A',
    skills: [
      { name: 'SQL Server', level: 88 },
      { name: 'MySQL', level: 82 },
      { name: 'MongoDB', level: 78 },
    ],
  },
  {
    category: 'Cloud Technologies',
    color: '#E65100',
    skills: [
      { name: 'AWS', level: 80 },
      { name: 'Microsoft Azure', level: 70 },
    ],
  },
  {
    category: 'DevOps & CI/CD',
    color: '#2E7D32',
    skills: [
      { name: 'GitHub Actions', level: 85 },
      { name: 'Jenkins', level: 78 },
      { name: 'CI/CD', level: 85 },
      { name: 'Docker', level: 72 },
    ],
  },
  {
    category: 'Development Tools',
    color: '#AD1457',
    skills: [
      { name: 'GitHub', level: 95 },
      { name: 'Jira', level: 88 },
      { name: 'Agile / Scrum', level: 90 },
      { name: 'Visual Studio', level: 92 },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Enterprise Management System',
    description:
      'A comprehensive enterprise resource planning system with modules for HR, Finance, and Operations, built with .NET Core and deployed on Azure.',
    technologies: ['.NET', 'ASP.NET Core', 'SQL Server', 'Azure', 'React', 'C#'],
    githubUrl: 'https://github.com/your-github/enterprise-management',
    liveUrl: 'https://demo.example.com/enterprise',
    category: 'Backend',
    features: [
      'Role-based access control',
      'Real-time dashboards',
      'Azure AD integration',
      'REST API backend',
      'Audit logging',
    ],
    gradient: 'linear-gradient(135deg, #1565C0 0%, #0288D1 100%)',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce solution with product catalog, cart, payments, and admin dashboard built with Next.js and MongoDB.',
    technologies: ['Next.js', 'React', 'MongoDB', 'TypeScript', 'Node.js'],
    githubUrl: 'https://github.com/your-github/ecommerce-platform',
    liveUrl: 'https://demo.example.com/ecommerce',
    category: 'Full Stack',
    features: [
      'Product catalog with filters',
      'Shopping cart & checkout',
      'Payment gateway integration',
      'Admin dashboard',
      'Order tracking',
    ],
    gradient: 'linear-gradient(135deg, #00897B 0%, #26C6DA 100%)',
  },
  {
    id: 3,
    title: 'Inventory Management System',
    description:
      'A robust inventory tracking solution for warehouse operations with real-time updates, barcode scanning, and reporting features.',
    technologies: ['ASP.NET Core', 'C#', 'MySQL', 'React', 'SignalR'],
    githubUrl: 'https://github.com/your-github/inventory-system',
    liveUrl: 'https://demo.example.com/inventory',
    category: 'Backend',
    features: [
      'Real-time stock tracking',
      'Barcode scanner integration',
      'Automated reorder alerts',
      'Multi-warehouse support',
      'Export reports (PDF/Excel)',
    ],
    gradient: 'linear-gradient(135deg, #6A1B9A 0%, #AB47BC 100%)',
  },
  {
    id: 4,
    title: 'DevOps Automation Dashboard',
    description:
      'A centralized DevOps dashboard that aggregates CI/CD pipeline status, deployment metrics, and infrastructure health from Jenkins and GitHub Actions.',
    technologies: ['Jenkins', 'GitHub Actions', 'Python', 'React', 'Docker'],
    githubUrl: 'https://github.com/your-github/devops-dashboard',
    liveUrl: 'https://demo.example.com/devops',
    category: 'DevOps',
    features: [
      'Pipeline status aggregation',
      'Deployment history tracking',
      'Slack/email notifications',
      'Custom alert thresholds',
      'Infrastructure health metrics',
    ],
    gradient: 'linear-gradient(135deg, #2E7D32 0%, #66BB6A 100%)',
  },
  {
    id: 5,
    title: 'Cloud Monitoring Solution',
    description:
      'An AWS-native cloud monitoring platform that provides real-time insights into resource utilization, costs, and performance with automated alerting.',
    technologies: ['AWS', 'Python', 'Lambda', 'CloudWatch', 'React', 'TypeScript'],
    githubUrl: 'https://github.com/your-github/cloud-monitor',
    liveUrl: 'https://demo.example.com/cloud-monitor',
    category: 'Cloud',
    features: [
      'Multi-region monitoring',
      'Cost optimization insights',
      'Automated incident response',
      'Custom CloudWatch dashboards',
      'SNS notification integration',
    ],
    gradient: 'linear-gradient(135deg, #E65100 0%, #FFA726 100%)',
  },
  {
    id: 6,
    title: 'Project Tracking Portal',
    description:
      'An Agile project management portal with sprint planning, task tracking, burndown charts, and team collaboration features inspired by modern PM tools.',
    technologies: ['React', '.NET', 'SQL Server', 'TypeScript', 'SignalR'],
    githubUrl: 'https://github.com/your-github/project-tracker',
    liveUrl: 'https://demo.example.com/project-tracker',
    category: 'Full Stack',
    features: [
      'Sprint board with drag & drop',
      'Burndown & velocity charts',
      'Real-time collaboration',
      'Time tracking',
      'Automated status reports',
    ],
    gradient: 'linear-gradient(135deg, #AD1457 0%, #F06292 100%)',
  },
];

export const achievements: Achievement[] = [
  {
    id: 1,
    title: 'AWS Cloud Fundamentals',
    description: 'Certified in core AWS services including EC2, S3, Lambda, RDS, and CloudFormation with hands-on project experience.',
    category: 'Certification',
    year: '2023',
  },
  {
    id: 2,
    title: 'Azure Fundamentals (AZ-900)',
    description: 'Microsoft certified in Azure cloud concepts, core services, security, privacy, compliance, and pricing.',
    category: 'Certification',
    year: '2022',
  },
  {
    id: 3,
    title: '100+ Successful Deployments',
    description: 'Achieved over 100 zero-downtime production deployments using CI/CD pipelines, automated testing, and blue-green deployment strategies.',
    category: 'Milestone',
    year: '2024',
  },
  {
    id: 4,
    title: '20+ Enterprise Projects Delivered',
    description: 'Successfully delivered more than 20 enterprise-scale projects on time and within budget across various industries.',
    category: 'Milestone',
    year: '2024',
  },
  {
    id: 5,
    title: 'CI/CD Automation Lead',
    description: 'Designed and implemented CI/CD pipelines that reduced deployment time by 70% and increased release frequency from monthly to weekly.',
    category: 'Contribution',
    year: '2023',
  },
  {
    id: 6,
    title: 'Team Leadership Recognition',
    description: 'Recognized for outstanding technical leadership, mentoring junior developers, and driving adoption of best practices across the engineering team.',
    category: 'Leadership',
    year: '2024',
  },
  {
    id: 7,
    title: 'Open Source Contributor',
    description: 'Active contributor to several open source .NET and React projects with merged pull requests and community engagement.',
    category: 'Contribution',
    year: '2023',
  },
  {
    id: 8,
    title: 'Best Innovation Award',
    description: 'Awarded for developing an internal automation tool that saved the team 20+ hours per week through intelligent workflow automation.',
    category: 'Award',
    year: '2022',
  },
];

export const workExperiences: WorkExperience[] = [
  {
    id: 1,
    company: 'Tech Innovations Corp',
    role: 'Senior Full Stack Developer',
    startDate: 'January 2022',
    endDate: 'Present',
    location: 'New York, NY',
    responsibilities: [
      'Architect and develop enterprise-scale web applications using .NET Core and React',
      'Lead a team of 5 developers, conducting code reviews and providing technical mentorship',
      'Design and implement microservices architecture with RESTful APIs',
      'Establish CI/CD pipelines using GitHub Actions and Jenkins, reducing deployment time by 70%',
      'Collaborate with product and design teams to deliver features aligned with business goals',
      'Ensure application security, performance optimization, and scalability',
    ],
    technologies: ['.NET Core', 'React', 'TypeScript', 'SQL Server', 'Azure', 'GitHub Actions', 'Docker'],
    accomplishments: [
      'Reduced API response time by 45% through caching strategies and query optimization',
      'Introduced automated testing that increased code coverage from 30% to 85%',
      'Migrated legacy monolith to microservices, improving system reliability to 99.9% uptime',
      'Led migration of 3 enterprise applications to Azure cloud infrastructure',
    ],
  },
  {
    id: 2,
    company: 'Digital Solutions Ltd',
    role: 'Full Stack Developer',
    startDate: 'March 2019',
    endDate: 'December 2021',
    location: 'Boston, MA',
    responsibilities: [
      'Developed and maintained full-stack web applications using .NET and React',
      'Built and consumed REST APIs for integration with third-party services',
      'Designed database schemas and optimized queries for SQL Server and MySQL',
      'Implemented responsive UI designs using Material UI and CSS3',
      'Participated in Agile sprints, daily standups, and sprint retrospectives',
      'Wrote unit and integration tests using xUnit and Jest',
    ],
    technologies: ['ASP.NET Core', 'React', 'JavaScript', 'SQL Server', 'MySQL', 'Jenkins', 'Jira'],
    accomplishments: [
      'Delivered e-commerce platform serving 10,000+ daily users',
      'Reduced database query execution time by 60% through indexing and query optimization',
      'Introduced component library that accelerated frontend development by 30%',
      'Mentored 2 junior developers who were both promoted within a year',
    ],
  },
  {
    id: 3,
    company: 'StartupTech Solutions',
    role: 'Junior .NET Developer',
    startDate: 'June 2017',
    endDate: 'February 2019',
    location: 'Chicago, IL',
    responsibilities: [
      'Developed backend services and APIs using C# and ASP.NET',
      'Built internal tools and utilities to automate manual business processes',
      'Maintained and enhanced existing web applications',
      'Wrote SQL queries and stored procedures for SQL Server databases',
      'Participated in code reviews and pair programming sessions',
    ],
    technologies: ['C#', 'ASP.NET', 'SQL Server', 'JavaScript', 'HTML5', 'CSS3'],
    accomplishments: [
      'Developed internal HR automation tool that reduced manual data entry by 80%',
      'Fixed critical production bug that was causing data loss, preventing significant financial impact',
      'Completed .NET Core migration ahead of schedule',
    ],
  },
];

export const careerTimeline: CareerEvent[] = [
  {
    year: '2013',
    title: 'Computer Science Degree',
    description: 'Graduated with a Bachelor\'s degree in Computer Science, specializing in Software Engineering and Distributed Systems.',
    type: 'education',
  },
  {
    year: '2017',
    title: 'Started Professional Career',
    description: 'Joined StartupTech Solutions as a Junior .NET Developer, beginning journey in enterprise software development.',
    type: 'work',
  },
  {
    year: '2019',
    title: 'Promoted to Full Stack Developer',
    description: 'Joined Digital Solutions Ltd as a Full Stack Developer, expanding skills to include modern frontend technologies.',
    type: 'work',
  },
  {
    year: '2021',
    title: 'Led First Enterprise Project',
    description: 'Successfully led a team to deliver a major enterprise e-commerce platform serving thousands of users daily.',
    type: 'achievement',
  },
  {
    year: '2022',
    title: 'Senior Full Stack Developer',
    description: 'Promoted to Senior Full Stack Developer at Tech Innovations Corp, leading architectural decisions and team development.',
    type: 'work',
  },
  {
    year: '2023',
    title: 'Cloud Certifications',
    description: 'Obtained AWS Cloud Fundamentals certification, expanding expertise into cloud architecture and DevOps practices.',
    type: 'achievement',
  },
  {
    year: '2024',
    title: 'Architecture & Leadership',
    description: 'Expanded role to include solution architecture design, cloud migration strategies, and cross-team technical leadership.',
    type: 'achievement',
  },
];
