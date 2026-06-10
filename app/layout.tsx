import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import ThemeRegistry from './components/ThemeRegistry';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'John Doe | Full Stack Developer',
    template: '%s | John Doe',
  },
  description:
    'Experienced Full Stack Developer specializing in .NET, React, cloud technologies, and DevOps. Building scalable, high-quality software solutions.',
  keywords: [
    'Full Stack Developer',
    '.NET',
    'React',
    'Next.js',
    'TypeScript',
    'AWS',
    'Azure',
    'C#',
    'ASP.NET Core',
    'Software Engineer',
  ],
  authors: [{ name: 'John Doe' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'John Doe | Full Stack Developer',
    description:
      'Experienced Full Stack Developer specializing in .NET, React, cloud technologies, and DevOps.',
    siteName: 'John Doe Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Doe | Full Stack Developer',
    description:
      'Experienced Full Stack Developer specializing in .NET, React, cloud technologies, and DevOps.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeRegistry>
            <Navbar />
            <main style={{ minHeight: '100vh' }}>{children}</main>
            <Footer />
            <ScrollToTop />
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
