import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Aurora from '@/components/Aurora';
  

export const metadata: Metadata = {
  title: 'Tanmay - Portfolio',
  description: 'A portfolio website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-black text-gray-900 dark:text-white">
        <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
