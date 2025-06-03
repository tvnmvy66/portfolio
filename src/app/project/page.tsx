'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar"
import GooeyNav from '@/components/Menu'

export default function Page() {
  return (
    <>
    <div className="bg-white mx-auto p-0 dark:bg-gray-900 w-full">
        <div className="grid grid-cols-2 md:grid-cols-8 gap-4 h-[15vh] w-full">
          <div className='bg-blue-500 order-2 md:order-1 md:col-span-2' >
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
          </div>
          <div className='bg-blue-500 order-1 md:order-1 col-span-2 md:col-span-4'>

            <div className="p-0 m-0" >
                <GooeyNav 
                  items={[
                    { label: "Home", href: "/" },
                    { label: "Project", href: "/project" },
                    { label: "Blogs", href: "/blog" },
                    { label: "Stack", href: "#" },
                    { label: "Contact", href: "/contact" }
                  ]}
                  initialActiveIndex={0}
                  // 🌈 Easy particle colors - just pass the colors you want!
                  particleColors={[
                    "#ff6b6b", // Red
                    "#4ecdc4", // Teal
                    "#45b7d1", // Blue
                    "#96ceb4", // Green
                    "#ffeaa7", // Yellow
                    "#dda0dd", // Purple
                  ]}
                  
                  
                  backgroundColor="black"  // Dark blue background
                  textColor="white"        // Light gray text
                  activeTextColor="black"  // Dark text when active
                />
              </div>

          </div>
          <div className='bg-blue-500 order-3 md:order-1 md:col-span-2'>
            <Avatar className="h-12 w-12">
              <AvatarImage src="https://github.com/tvnmvy66.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
    </div>
    </>
  );
}
