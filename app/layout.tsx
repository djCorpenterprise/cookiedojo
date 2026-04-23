import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cookie Dojo | Boutique Handcrafted Treats — Jacksonville, FL',
  description:
    'Cookie Dojo creates boutique handcrafted treats in Jacksonville, FL. Chocolate-dipped strawberries, cookies, rice crispy treats, candy sushi, and custom branded desserts for corporate gifting, weddings, and events.',
  keywords: [
    'cookie dojo',
    'jacksonville bakery',
    'custom cookies',
    'chocolate covered strawberries jacksonville',
    'corporate gifting jacksonville',
    'wedding desserts jacksonville',
    'rice crispy treats',
    'candy sushi',
  ],
  openGraph: {
    title: 'Cookie Dojo — Boutique Handcrafted Treats',
    description:
      'Handcrafted boutique treats, corporate gifting, and custom branded desserts from Jacksonville, FL.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
