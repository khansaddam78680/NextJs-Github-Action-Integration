import type { Metadata } from 'next';
import AchievementsContent from '../components/sections/AchievementsContent';

export const metadata: Metadata = {
  title: 'Achievements',
  description:
    'Certifications, awards, professional milestones, and leadership recognitions achieved by John Doe.',
};

export default function AchievementsPage() {
  return <AchievementsContent />;
}
