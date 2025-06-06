'use client';
import React, { useEffect, useRef, useState } from 'react';
import Orb from '@/components/Orb';

export default function Page() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [responseText, setResponseText] = useState('');
  const recognitionRef = useRef<any>(null);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    if (!recognitionRef.current && SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onresult = (event: any) => {
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          finalTranscript += event.results[i][0].transcript;
        }
        setTranscript(finalTranscript);

        if (event.results[event.results.length - 1].isFinal) {
          socketRef.current?.send(finalTranscript);
        }
      };

      recognition.onerror = (e: any) => {
        console.error('Speech error:', e);
      };

      recognitionRef.current = recognition;
    }

    // Setup WebSocket
    socketRef.current = new WebSocket('wss://jarvis-p6to.onrender.com/ws');

    socketRef.current.onopen = () => {
      console.log('✅ WebSocket connected');
    };

    socketRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log('🎧 From Jarvis:', data);

      setResponseText(data.text);

      // Play the audio response
      if (audioRef.current) {
        audioRef.current.src = `https://jarvis-p6to.onrender.com${data.audio_url}`;
        audioRef.current.play();
      }
    };

    socketRef.current.onclose = () => {
      console.warn('WebSocket closed');
    };

    socketRef.current.onerror = (e) => {
      console.error('WebSocket error:', e);
    };

    return () => {
      socketRef.current?.close();
    };
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) return;
    if (!listening) {
      recognitionRef.current.start();
      setListening(true);
    } else {
      recognitionRef.current.stop();
      setListening(false);
    }
  };

  const handleUnmute = () => {
    if (audioRef.current && isMuted) {
      audioRef.current.muted = false;
      audioRef.current.play();
      setIsMuted(false);
    }
  };

  return (
    <div className="w-full h-screen pt-44 md:pt-20 cursor-pointer">
      <div onClick={handleUnmute} className="h-50 w-50 md:h-114 md:w-114 m-auto">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={10}
          forceHoverState={isPlaying}
        />
        <p className="text-sm mt-5 md:mt-10 flex justify-center font-bold">
          On testing but ... Jarvis will soon be available
        </p>
      </div>

      <audio ref={audioRef} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} />

      <div className="flex flex-col items-center justify-center mt-20 text-center px-4">
        <button
          onClick={toggleListening}
          className={`px-6 py-3 rounded-full text-white font-semibold transition duration-300 ${
            listening ? 'bg-red-500' : 'bg-blue-500'
          }`}
        >
          {listening ? 'Stop Listening' : 'Start Listening'}
        </button>

        <div className="mt-4 text-gray-600">{transcript || '🎤 Speak something...'}</div>
        <div className="mt-4 text-green-800 font-semibold">{responseText}</div>
      </div>
    </div>
  );
}
