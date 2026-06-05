import type { Metadata } from 'next';
import AboutContent from '../components/sections/AboutContent';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about John Doe — his professional journey, technical expertise, core strengths, and values as a Full Stack Developer.',
};

export default function AboutPage() {
  return <AboutContent />;
}
