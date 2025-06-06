'use client';
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/Card"
import Link from "next/link";

export default function Page() {
  return (
    <>
    <h1 className="text-4xl mt-14 md:mt-10 flex justify-center font-bold">Blogs</h1>
    <div className='grid grid-cols-3 gap-6 text-center w-[90vw] mt-10 md:mt-10 mx-auto mb-10 '>
      <div className='col-span-3 md:col-span-1 h-40 w-full '>
          <Link href='/'>
          <Card className="w-full h-full">
            <CardHeader>
            <CardTitle className='text-xl md:text-2xl'>Blog-1</CardTitle>
            </CardHeader>
            <CardContent>
              Will share one soon ...
            </CardContent>
          </Card>
          </Link>
        </div>
      </div>
    </>
  );
}
