import type { Metadata } from 'next';
import ExperienceContent from '../components/sections/ExperienceContent';

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'John Doe\'s professional work history — roles, responsibilities, technologies, and accomplishments across multiple companies.',
};

export default function ExperiencePage() {
  return <ExperienceContent />;
}
