'use client';
import React from 'react';

export default function Page() {
  return (
    <>
    <div className="bg-white mx-auto p-0 dark:bg-gray-900 w-[95vw]">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 w-full">
          <div className='bg-blue-500 md:col-span-3 h-[90vh] w-full'>01</div>
          <div className='bg-blue-500 md:col-span-3 hidden md:flex h-[90vh] w-full'>02</div>
          <div className='bg-blue-500 md:col-span-2 h-50 w-full'>FullStack</div>
          <div className='bg-blue-500 md:col-span-2 h-50 w-full'>GenAI</div>
          <div className='bg-blue-500 md:col-span-2 h-50 w-full'>Tools</div>
        </div>
    </div>
    </>
  );
}
