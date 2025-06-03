"use client";

// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar"
import GooeyNav from '@/components/Menu'

const Navbar: React.FC = () => {
  const pathname = usePathname(); // current path for active link
  console.log(pathname);
  return (
    <nav className="absolute top-0  left-0 w-full px-6 border-none flex items-center justify-between bg-transparent border-b border-white/20 text-white">
      
      {/* Left: Logo */}
      <Link
        href="/"
        className="flex justify-center gap-1 text-4xl font-bold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-150"
        aria-label="Home"
      >
        <motion.button
          whileHover={{ scale: 1.4 }}
          className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900 transition duration-150"
          aria-label="User menu"
        >
          <Avatar className="h-12 w-12">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        </motion.button>
        .DEV
      </Link>

      {/* Center: Navigation Links */}
      

      <Avatar className="h-12 w-12">
          <AvatarImage src="https://github.com/tvnmvy66.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    </nav>

  );
};

export default Navbar;
