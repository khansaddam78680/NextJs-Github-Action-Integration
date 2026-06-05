export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  color: string;
  skills: Skill[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  category: string;
  features: string[];
  gradient: string;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  category: 'Certification' | 'Award' | 'Milestone' | 'Contribution' | 'Leadership';
  year: string;
}

export interface WorkExperience {
  id: number;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
  accomplishments: string[];
}

export interface CareerEvent {
  year: string;
  title: string;
  description: string;
  type: 'education' | 'work' | 'achievement';
}

export interface Stat {
  value: string;
  label: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}