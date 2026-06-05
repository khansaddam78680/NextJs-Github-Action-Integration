import type { Metadata } from 'next';
import HomeContent from './components/sections/HomeContent';

export const metadata: Metadata = {
  title: 'John Doe | Full Stack Developer',
  description:
    'Welcome to the portfolio of John Doe — Full Stack Developer with expertise in .NET, React, cloud technologies, and DevOps.',
};

export default function HomePage() {
  return <HomeContent />;
}
