"use client";

// components/Navbar.tsx

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'VWorld', href: '/vworld' },
];

const Navbar: React.FC = () => {
  const pathname = usePathname(); // current path for active link

  return (
    <nav className="relative bg-white dark:bg-gray-900 shadow-md px-6 py-3 flex items-center justify-between">
      {/* Left: Logo */}
      <Link
        href="/"
        className="text-xl font-bold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-150"
        aria-label="Home"
      >
        .DEV
      </Link>

      {/* Center: Navigation Links */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-1 bg-gray-100 dark:bg-white rounded-full p-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                href={item.href}
                key={item.name}
                aria-current={isActive ? 'page' : undefined}
                className={
                  `relative px-4 py-2 rounded-full transition duration-150 ease-in-out focus:outline-none ` +
                  `${isActive ? 'bg-white dark:bg-gray-300 font-semibold' : 'hover:bg-white dark:hover:bg-gray-200'} ` +
                  `text-gray-700 dark:text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ` +
                  `focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900`
                }
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Right: Search and Avatar */}
      <div className="flex items-center space-x-4">
        {/* Search Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="flex items-center px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900 transition duration-150"
          aria-label="Search"
        >
          <MagnifyingGlassIcon className="w-5 h-5 mr-2" />
          <span>Search</span>
        </motion.button>

        {/* Avatar/Icon */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900 transition duration-150"
          aria-label="User menu"
        >
          <UserCircleIcon className="w-6 h-6 text-gray-500 dark:text-gray-300" />
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;
