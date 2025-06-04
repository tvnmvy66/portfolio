"use client";

// components/Footer.tsx
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar"
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <>
        <div className=' text-black pt-4 md:flex md:justify-center'>
            <div className="grid grid-cols-4 gap-2 md:gap-1 mx-5 text-center md:w-80">
                <div className="col-span-4 h-10">
                    <div className='flex justify-center items-center'>
                        <Avatar className="h-10 w-10 md:h-9 md:w-9">
                            <AvatarImage src="https://github.com/tvnmvy66.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p className='text-lg md:text-lg pl-2'>Tanmay Dongare</p>
                    </div>
                </div>
                <div className="col-span-2 md:col-span-1 h-8">
                    <Link href="/">
                        Home
                    </Link>
                </div>
                <div className="col-span-2 md:col-span-1 h-8">
                    <Link href="/project">
                        Project
                    </Link>
                </div>
                <div className="col-span-2 md:col-span-1 h-8">
                    <Link href="/blog">
                        Blog
                    </Link>
                </div>
                <div className="col-span-2 md:col-span-1 h-8">
                    <Link href="/contact">
                        Contact
                    </Link>
                </div>
                <div className="col-span-4 h-10 flex justify-center items-center list-none">
                    <li>⚓</li>
                    <li>⚓</li>
                    <li>⚓</li>
                    <li>⚓</li>
                </div>
            </div>
        </div>
    </>
  );
};

export default Footer;
