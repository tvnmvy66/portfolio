'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/Card"
import { Avatar, AvatarImage, AvatarFallback } from '@/components/Avatar'
import Orb from '@/components/Orb'
import { Button } from "@/components/Button"
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/favicon.ico';
    link.download = 'favicon.ico';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
    <div className="bg-white mx-auto p-0 dark:bg-gray-900 w-[95vw] mb-10">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-5 w-full">
        <div className='md:col-span-3 h-[90vh] md:h-[60vh] w-full'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className="flex flex-col md:flex-row m-auto mt-10 h-[60vh] md:h-[35vh] max-w-[90vw]"
            >
            <motion.button
              whileHover={{ scale: 1.1 }}
              aria-label="User menu"
              className='h-60 w-60 mx-auto md:h-50 md:w-50 mt-5 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900 transition duration-150'
              >
              <Avatar className="h-60 w-60 md:h-50 md:w-50">
                <AvatarImage src="https://github.com/tvnmvy66.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </motion.button>
          <div className='mx-auto mt-5'>
            <p className='text-4xl text-center md:text-5xl'>Tanmay Dongare</p>
            <p className='text-md text-center md:text-xl pt-2'>FullStack Dev | Gen AI</p>
            <p className='text-center text-sm md:p-8 pt-4'>🌟 Third-Year BCA Student | 💻 Aspiring MERN Developer | 🎨 Expert in HTML & CSS | 🚀 Dedicated to crafting striking, responsive web applications</p>
            <div className='flex justify-center gap-7 md:gap-14 mt-5 md:mt-0'>
              <Link href="/jarvis">
                  <Button className='px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900 transition duration-150'>Try Jarvis 
                  <Image
                      src="./arrow.svg"     // For public folder images
                      alt="downlod icon - redirects to tanmays resume"       // Always add alt for accessibility & SEO
                      width={17}             // Required
                      height={17}             // Optional: loads image ASAP
                  />
                </Button>
              </Link>
              <Button onClick={handleDownload} className='px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900 transition duration-150'>Download Resume 
                <Image
                    src="./arrow.svg"     // For public folder images
                    alt="downlod icon - redirects to tanmays resume"       // Always add alt for accessibility & SEO
                    width={17}             // Required
                    height={17}             // Optional: loads image ASAP
                />
              </Button>
            </div>
          </div>
          </motion.div>
          <img className="w-120 mx-auto mt-16 md:mt-2 md:w-160" src="https://ghchart.rshah.org/tvnmvy66" alt="GitHub Contributions Chart"></img>
        </div>
        <div className='md:col-span-3 hidden md:flex  w-full'>
          <div className='h-114 w-114 mx-auto'>
            <Orb
              hoverIntensity={0.5}  
              rotateOnHover={true}
              hue={10}
              forceHoverState={false}
              />
          </div>
        </div>
        <div className='md:col-span-2 w-full'>
          <Card className="w-full md:h-[28vh]">
          <CardHeader>
          <CardTitle className='text-xl md:text-2xl'>FullStack Developer</CardTitle>
          <CardDescription>HTML, CSS, JavaScript, React, NextJs</CardDescription>
          </CardHeader>
          <CardContent>
           I specialize in building seamless user experiences with a strong foundation in HTML, CSS, JavaScript, and React. My backend expertise includes leveraging Node.js, Next.js, and Python (FastAPI) to create robust server-side applications.
          </CardContent>
          </Card>
        </div>
        <div className='md:col-span-2 w-full'>
          <Card className="w-full md:h-[28vh]">
          <CardHeader>
          <CardTitle className='text-xl md:text-2xl'>Generative AI</CardTitle>
          <CardDescription>Python, JavaScript</CardDescription>
          </CardHeader>
          <CardContent>
            My passion for AI drives me to explore innovative solutions using Python and JavaScript. I have extensive experience in utilizing cutting-edge tools like QdrantDB (for vector storage) and Neo4j (for knowledge graphs), complemented by frameworks like LangChain, LangGraph, and Langfuse.
          </CardContent>
          </Card>
        </div>
        <div className='md:col-span-2 w-full'>
          <Card className="w-full md:h-[28vh]">
          <CardHeader>
          <CardTitle className='text-xl md:text-2xl'>Development Tools</CardTitle>
          <CardDescription>Docker, Redis, Kafka</CardDescription>
          </CardHeader>
          <CardContent>
            Proficient in Docker for streamlined containerization and CI/CD, Redis for low-latency caching, and Kafka for building scalable, event-driven systems.Experienced in integrating these tools to boost performance, reliability, and real-time processing in microservice architectures.
          </CardContent>
          </Card></div>
      </div>
      </div>
    </>
  );
}
