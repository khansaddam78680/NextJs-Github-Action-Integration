import type { Metadata } from 'next';
import SkillsContent from '../components/sections/SkillsContent';

export const metadata: Metadata = {
  title: 'Skills',
  description:
    'Explore John Doe\'s technical skills across Backend, Frontend, Databases, Cloud, DevOps, and Development Tools.',
};

export default function SkillsPage() {
  return <SkillsContent />;
}
