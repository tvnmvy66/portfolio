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
// import { TypeAnimation } from 'react-type-animation';
import Orb from '@/components/Orb'

export default function Page() {
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
          </div>
          </motion.div>
          <img className="w-120 mx-auto pt-7 md:pt-2 md:w-160" src="https://ghchart.rshah.org/tvnmvy66" alt="GitHub Contributions Chart"></img>
        </div>
        <div className='md:col-span-3 hidden md:flex h-[60vh] w-full'>
          <div className='h-114 w-114 m-auto'>
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
          <CardDescription>Docker,redis,Kafka</CardDescription>
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
{/* <Card className="mt-10 p-auto w-130">
          <CardHeader>
          <div className="w-40 h-40 mb-5 bg-gray-300 m-auto dark:bg-gray-600 rounded-full" />
          <CardTitle>Tanmay Dongare</CardTitle>
          <CardDescription>Full Stack Developer | AI Enthusiast</CardDescription>
          </CardHeader>
          <CardContent>
          Hello! I&apos;m Tanmay Dongare, a full-stack developer proficient in HTML, CSS, JavaScript, and React for frontend, and experienced in backend development using Node.js, Next.js, and Python (FastAPI). I work with databases such as MongoDB and PostgreSQL, and have a passion for GenAI, leveraging tools like QdrantDB (for vector storage) and Neo4j (for knowledge graphs) with frameworks such as LangChain, LangGraph, and Langfuse.
          </CardContent>
          </Card> 
          
          
          <div className='w-150 pl-10 pt-10 '>
        <TypeAnimation
          style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
          sequence={[
            `Hello! I&apos;m Tanmay Dongare, a full-stack developer proficient in HTML, CSS, JavaScript, and React for frontend, and experienced in backend development using Node.js, Next.js, and Python (FastAPI). I work with databases such as MongoDB and PostgreSQL, and have a passion for GenAI, leveraging tools like QdrantDB (for vector storage) and Neo4j (for knowledge graphs) with frameworks such as LangChain, LangGraph, and Langfuse.`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
            1000,
            '',
          ]}
          repeat={Infinity}
        />
      </div>*/}