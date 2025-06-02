'use client';
import React from 'react';
import { motion } from 'framer-motion';
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/Card"
import { Avatar, AvatarImage, AvatarFallback } from '@/components/Avatar'
import { TypeAnimation } from 'react-type-animation';
import Orb from '@/components/Orb'

export default function Page() {
  return (
    <>
    <div className="flex">
      <main className="flex flex-col max-w-140">
        <div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="flex w-[40vw]"
          >
          <Avatar className="h-45 w-45 ml-10">
            <AvatarImage src="https://github.com/tvnmvy66.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        <div className='ml-10 text-4xl flex flex-col pt-5 gap-2 items-center'>
          <p className=' text-4xl'>Tanmay Dongare</p>
          <p className=' text-xl'>FullStack Dev | Gen AI</p>
          <p className='text-sm'>🌟 Third-Year BCA Student | 💻 Intermediate MERN Developer | 🎨 Proficient in HTML & CSS | 🚀 Passionate about building sleek, responsive web applications | 📚</p>
        </div>
        </motion.div>
      </div>
      <div className='w-150 pl-10 pt-10'>
        <img src="https://ghchart.rshah.org/tvnmvy66" alt="GitHub Contributions Chart"></img>
      </div>
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
      </div>
      </main>
      <div className='w-full h-[600px] p-0 m-0 relative'>
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={10}
            forceHoverState={false}
          />
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
          </Card> */}