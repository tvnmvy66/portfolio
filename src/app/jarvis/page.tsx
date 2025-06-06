'use client';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import Orb from '@/components/Orb';

// Type definitions
interface SpeechRecognitionEvent {
  resultIndex: number;
  results: {
    length: number;
    [key: number]: {
      [key: number]: {
        transcript: string;
      };
      isFinal: boolean;
    };
  };
}

interface SpeechRecognitionErrorEvent {
  error: string;
  message: string;
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
}

interface WebSocketResponse {
  text: string;
  audio_url: string;
}

declare global {
  interface Window {
    webkitSpeechRecognition: new () => SpeechRecognition;
    SpeechRecognition: new () => SpeechRecognition;
  }
}

export default function Page() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [responseText, setResponseText] = useState('');
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const socketRef = useRef<WebSocket | null>(null);

  // Memoized function to handle WebSocket messages
  const handleWebSocketMessage = useCallback((event: MessageEvent) => {
    try {
      const data: WebSocketResponse = JSON.parse(event.data);
      console.log('🎧 From Jarvis:', data);

      setResponseText(data.text);

      // Play the audio response
      if (audioRef.current) {
        audioRef.current.src = `https://jarvis-p6to.onrender.com${data.audio_url}`;
        audioRef.current.play().catch((error) => {
          console.error('Audio play failed:', error);
        });
      }
    } catch (error) {
      console.error('Failed to parse WebSocket message:', error);
    }
  }, []);

  // Memoized function to handle speech recognition results
  const handleSpeechResult = useCallback((event: SpeechRecognitionEvent) => {
    let finalTranscript = '';
    for (let i = event.resultIndex; i < event.results.length; i++) {
      finalTranscript += event.results[i][0].transcript;
    }
    setTranscript(finalTranscript);

    if (event.results[event.results.length - 1].isFinal) {
      socketRef.current?.send(finalTranscript);
    }
  }, []);

  // Memoized function to handle speech recognition errors
  const handleSpeechError = useCallback((error: SpeechRecognitionErrorEvent) => {
    console.error('Speech error:', error);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Initialize Speech Recognition
    const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    if (!recognitionRef.current && SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onresult = handleSpeechResult;
      recognition.onerror = handleSpeechError;

      recognitionRef.current = recognition;
    }

    // Setup WebSocket
    const socket = new WebSocket('wss://jarvis-p6to.onrender.com/ws');
    socketRef.current = socket;

    socket.onopen = () => {
      console.log('✅ WebSocket connected');
    };

    socket.onmessage = handleWebSocketMessage;

    socket.onclose = () => {
      console.warn('WebSocket closed');
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    // Cleanup function
    return () => {
      if (recognitionRef.current && listening) {
        try {
          recognitionRef.current.stop();
        } catch (error) {
          console.error('Error stopping speech recognition:', error);
        }
      }
      socket.close();
    };
  }, [handleWebSocketMessage, handleSpeechResult, handleSpeechError, listening]);

  const toggleListening = useCallback(() => {
    if (!recognitionRef.current) return;
    
    try {
      if (!listening) {
        recognitionRef.current.start();
        setListening(true);
      } else {
        recognitionRef.current.stop();
        setListening(false);
      }
    } catch (error) {
      console.error('Error toggling speech recognition:', error);
    }
  }, [listening]);

  const handleUnmute = useCallback(() => {
    if (audioRef.current && isMuted) {
      audioRef.current.muted = false;
      audioRef.current.play().catch((error) => {
        console.error('Audio play failed:', error);
      });
      setIsMuted(false);
    }
  }, [isMuted]);

  const handleAudioPlay = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const handleAudioPause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  return (
    <div className="w-full h-screen pt-44 md:pt-20 cursor-pointer">
      <div 
        onClick={handleUnmute} 
        className="h-50 w-50 md:h-114 md:w-114 m-auto"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleUnmute();
          }
        }}
      >
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

      <audio 
        ref={audioRef} 
        onPlay={handleAudioPlay} 
        onPause={handleAudioPause}
      />

      <div className="flex flex-col items-center justify-center mt-20 text-center px-4">
        <button
          onClick={toggleListening}
          className={`px-6 py-3 rounded-full text-white font-semibold transition duration-300 ${
            listening ? 'bg-red-500' : 'bg-blue-500'
          }`}
        >
          {listening ? 'Stop Listening' : 'Start Listening'}
        </button>

        <div className="mt-4 text-gray-600">
          {transcript || '🎤 Speak something...'}
        </div>
        <div className="mt-4 text-green-800 font-semibold">
          {responseText}
        </div>
      </div>
    </div>
  );
}