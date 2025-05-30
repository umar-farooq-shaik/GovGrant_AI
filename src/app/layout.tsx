
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google'; // Using Inter as per suggestion, Geist is also fine
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toaster } from "@/components/ui/toaster"; // For notifications
import { APP_NAME, APP_DESCRIPTION } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  keywords: ['government grants', 'subsidies', 'welfare schemes', 'AI grant finder', 'financial aid'],
  authors: [{ name: 'GovGrant AI Team' }],
  creator: 'GovGrant AI Team',
  // Add more metadata as needed, e.g., openGraph, twitter
  openGraph: {
    title: APP_NAME,
    description: APP_DESCRIPTION,
    type: 'website',
    locale: 'en_US',
    // url: 'YOUR_APP_URL', // Replace with actual URL
    // siteName: APP_NAME,
    // images: [ // Add a default OG image
    //   {
    //     url: 'YOUR_OG_IMAGE_URL',
    //     width: 1200,
    //     height: 630,
    //     alt: APP_NAME,
    //   },
    // ],
  },
};

export const viewport: Viewport = {
  themeColor: '#3F51B5', // Primary color
  // colorScheme: 'light', // If you want to force light mode
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
