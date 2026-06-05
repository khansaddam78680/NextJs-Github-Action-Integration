import type { Metadata } from 'next';
import ProjectsContent from '../components/sections/ProjectsContent';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Browse John Doe\'s portfolio of projects — enterprise systems, web platforms, cloud solutions, and DevOps tools.',
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
