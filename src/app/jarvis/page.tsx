'use client';
import React, { useEffect, useRef, useState } from 'react';
import Orb from '@/components/Orb';

export default function Page() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = true; // start muted to allow autoplay
      audio.play().catch(() => {
        // Autoplay might fail if user hasn't interacted yet, ignore for now
      });
    }
  }, []);

  const handleUnmute = () => {
    if (audioRef.current && isMuted) {
      audioRef.current.muted = false;
      audioRef.current.play();
      setIsMuted(true);
    }
  };

  return (
    <div className="w-full h-screen pt-44 md:pt-20 cursor-pointer">
      <div onClick={handleUnmute} className="h-50 w-50 md:h-114 md:w-114 m-auto">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={10}
          forceHoverState={false}
        />
        <p className="text-sm mt-5 md:mt-10 flex justify-center font-bold">
          Jarvis will soon be available
        </p>
      </div>
      <audio ref={audioRef} src="./hello.mp3" />
    </div>
  );
}
