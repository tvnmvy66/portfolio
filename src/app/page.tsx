'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/Card"
import Aurora from '@/components/Aurora';

export default function Page() {
  return (
    <>
    <div className="absolute m-0 bg-white dark:bg-gray-900 min-h-screen">
      <main className="container m-0 mx-auto px-4 flex flex-col md:flex-row md:justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="md:w-1/2 m-0 text-center md:text-left "
        >
        <Card className="mt-10 p-auto w-130">
          <CardHeader>
            <div className="w-40 h-40 mb-5 bg-gray-300 m-auto dark:bg-gray-600 rounded-full" />
            <CardTitle>Tanmay Dongare</CardTitle>
            <CardDescription>Full Stack Developer | AI Enthusiast</CardDescription>
          </CardHeader>
          <CardContent>
            Hello! I&apos;m Tanmay Dongare, a full-stack developer proficient in HTML, CSS, JavaScript, and React for frontend, and experienced in backend development using Node.js, Next.js, and Python (FastAPI). I work with databases such as MongoDB and PostgreSQL, and have a passion for GenAI, leveraging tools like QdrantDB (for vector storage) and Neo4j (for knowledge graphs) with frameworks such as LangChain, LangGraph, and Langfuse.
          </CardContent>
        </Card>
        </motion.div>
      </main>
    </div>
    </>
  );
}
