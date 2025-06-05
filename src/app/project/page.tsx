"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/Card"
import Link from "next/link";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
};

export default function Page() {

  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/tvnmvy66/repos`);
        if (!res.ok) throw new Error("GitHub API error");
        const data = await res.json();
        setRepos(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) return <p>Loading Projects</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
    <div className="text-4xl mt-14 md:mt-10 flex justify-center font-bold">Projects</div>
    <div className='grid grid-cols-3 gap-6 text-center w-[90vw] mt-10 md:mt-10 mx-auto mb-10 '>
      {repos.map((repo) => (
      <div key={repo.name} className='col-span-3 md:col-span-1 h-40 w-full '>
        <Link href={repo.html_url}>
        <Card className="w-full h-full">
          <CardHeader>
          <CardTitle className='text-xl md:text-2xl'>{repo.name}</CardTitle>
          {/* <CardDescription>HTML, CSS, JavaScript, React, NextJs</CardDescription> */}
          </CardHeader>
          <CardContent>
            {repo.description}
          </CardContent>
        </Card>
        </Link>
      </div>
      ))}
    </div>
    </>
  );
}
