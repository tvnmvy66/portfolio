'use client';
import React from 'react';
import { Input } from "@/components/input"
import { Button } from "@/components/Button"
import { Textarea } from "@/components/Textarea"


export default function Page() {
const [status, setStatus] = React.useState("Share");

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sharing...");

    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("email"),
      message: formData.get("message")
    };

    try {
      const res = await fetch("https://jarvis-p6to.onrender.com/contact", {
        method: "POST",
        mode: "cors", // Make CORS intention clear
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("Shared!");
    } catch (err) {
      console.error(err);
      setStatus("Failed to send 😓");
    }
  };

  return (
    <>
    <h1 className="text-4xl mt-14 md:mt-10 flex justify-center font-bold">Contact</h1>
    <p className="text-sm mt-5 md:mt-10 flex justify-center font-bold">{status} your Message</p>
    <form onSubmit={handleSubmit} className='w-[80vw] md:w-[33vw] mx-auto flex flex-col gap-4 mt-5 mb-47'>
      <Input name="email" type="email" required placeholder="Email" />
      <Textarea name="message" required minLength={10} maxLength={200} placeholder="Type your message here." />
      <Button>Send message!</Button>
    </form>
    </>
  );
}
