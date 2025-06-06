"use client";

// components/Footer.tsx
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar"
import Link from 'next/link';
import Image from 'next/image';

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
                    <div className="col-span-4 h-15 flex justify-center items-center list-none gap-4">
                        <li><Link href="https://x.com/tvnmvy_"><Image
                            src="./twitter.svg"     // For public folder images
                            alt="github icon - redirects to tanmays github page"       // Always add alt for accessibility & SEO
                            width={20}             // Required
                            height={20}             // Optional: loads image ASAP
                        /></Link></li>
                        <li><Link href="mailto:tanmay9987@gmail.com?subject=Hello%20Tanmay&body=I%20want%20to%20connect%20with%20you!"><Image
                            src="./mail.svg"     // For public folder images
                            alt="github icon - redirects to tanmays github page"       // Always add alt for accessibility & SEO
                            width={20}             // Required
                            height={20}             // Optional: loads image ASAP
                        /></Link></li>
                        <li><Link href="https://www.linkedin.com/in/tanmay-dongare"><Image
                            src="./linkedin.svg"     // For public folder images
                            alt="github icon - redirects to tanmays github page"       // Always add alt for accessibility & SEO
                            width={20}             // Required
                            height={20}             // Optional: loads image ASAP
                        /></Link></li>
                        <li><Link href="https://github.com/tvnmvy66"><Image
                            src="./github.svg"     // For public folder images
                            alt="github icon - redirects to tanmays github page"       // Always add alt for accessibility & SEO
                            width={20}             // Required
                            height={20}             // Optional: loads image ASAP
                        /></Link></li>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
