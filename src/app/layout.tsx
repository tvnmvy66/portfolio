import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Aurora from '@/components/Aurora';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Tanmay Dongare',
  description: 'A software developer portfolio website of Tanmay Dongare ',
  // icons:'/logo.svg'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className='className="bg-white dark:bg-black text-gray-900 dark:text-white"'>
          <div className='absolute w-full hidden md:flex '>
            <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
            />
          </div>
          <Navbar/>
        </div>
        {children}
        <div>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
