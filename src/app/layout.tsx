import type { Metadata } from 'next';
import { Sora, Syncopate, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const sora = Sora({ subsets: ['latin'], variable: '--font-sora', display: 'swap' });
const syncopate = Syncopate({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-syncopate', display: 'swap' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://alokkumarsahu.in'),
  title: {
    default: 'Alok Kumar Sahu — Software Engineer · AI Builder · Full Stack Developer',
    template: '%s · Alok Kumar Sahu',
  },
  description:
    'Cinematic portfolio of Alok Kumar Sahu — building scalable web experiences and exploring the power of AI. B.Tech CSE, VSSUT.',
  keywords: [
    'Alok Kumar Sahu', 'Software Engineer', 'AI Builder', 'Full Stack Developer',
    'Next.js', 'Rust', 'Three.js', 'VSSUT', 'Portfolio',
  ],
  authors: [{ name: 'Alok Kumar Sahu', url: 'https://alokkumarsahu.in' }],
  openGraph: {
    type: 'website',
    title: 'Alok Kumar Sahu — Cinematic Developer Portfolio',
    description: 'Building Scalable Web Experiences & Exploring the Power of AI.',
    url: 'https://alokkumarsahu.in',
    siteName: 'Alok Kumar Sahu',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@alok_chintu',
    title: 'Alok Kumar Sahu — Cinematic Developer Portfolio',
    description: 'Building Scalable Web Experiences & Exploring the Power of AI.',
  },
  icons: { icon: '/favicon.svg', shortcut: '/favicon.svg' },
};

export const viewport = {
  themeColor: '#020308',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${sora.variable} ${syncopate.variable} ${jetbrains.variable}`}>
      <body className='bg-bg text-white font-sans bg-animated bg-noise antialiased'>
        {children}
      </body>
    </html>
  );
}