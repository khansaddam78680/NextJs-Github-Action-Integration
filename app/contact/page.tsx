import type { Metadata } from 'next';
import ContactContent from '../components/sections/ContactContent';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with John Doe — send a message, connect on GitHub or LinkedIn, or reach out via email.',
};

export default function ContactPage() {
  return <ContactContent />;
}
