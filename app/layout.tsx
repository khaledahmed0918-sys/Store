import type { Metadata } from 'next';
import { Inter, Cairo } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/components/language-provider';
import { ErrorBoundary } from '@/components/error-boundary';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const cairo = Cairo({ subsets: ['arabic', 'latin'], variable: '--font-cairo' });

export const metadata: Metadata = {
  title: 'Soon Store',
  description: 'All in Soon Store',
  icons: {
    icon: 'https://i.postimg.cc/HLzmwQxz/IMG-9248.png',
  },
};

import { GlobalErrorLogger } from '@/components/global-error-logger';
import { BackgroundElements } from '@/components/background-elements';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${inter.variable} ${cairo.variable} overflow-x-hidden relative`}>
        <GlobalErrorLogger />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <BackgroundElements />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

