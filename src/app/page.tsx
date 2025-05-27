'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <main className="container mx-auto px-4 py-16 flex flex-col md:flex-row md:justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="md:w-1/2 text-center md:text-left space-y-4"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Tanmay Dongare
          </h1>
          <p className="text-xl font-medium text-gray-700 dark:text-gray-300">
            Full Stack Developer | AI Enthusiast
          </p>
          <p className="text-base text-gray-600 dark:text-gray-400">
            Hello! I'm Tanmay Dongare, a full-stack developer proficient in HTML, CSS, JavaScript, and React for frontend, and experienced in backend development using Node.js, Next.js, and Python (FastAPI). I work with databases such as MongoDB and PostgreSQL, and have a passion for GenAI, leveraging tools like QdrantDB (for vector storage) and Neo4j (for knowledge graphs) with frameworks such as LangChain, LangGraph, and Langfuse. I'm also comfortable with containerization and caching technologies like Docker, Redis, and Mem0.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
        >
          <div className="w-48 h-48 bg-gray-300 dark:bg-gray-600 rounded-full" />
        </motion.div>
      </main>
    </div>
  );
}
