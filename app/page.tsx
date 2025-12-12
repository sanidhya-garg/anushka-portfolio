'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from './components/Navbar';

export default function Home() {
  const lastSectionRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Auto-navigation removed - users can navigate manually via navbar

  return (
    <div className="min-h-screen bg-black">
      <Navbar activePage="home" />

      {/* Landing Video */}
      <div className="relative w-full md:h-screen h-auto overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full md:h-full md:object-cover h-auto object-contain"
        >
          <source src="/assets/Cover/Landing.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Introduction Video */}
      <div className="relative w-full md:h-screen h-auto overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full md:h-full md:object-cover h-auto object-contain"
        >
          <source src="/assets/Cover/Introduction.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Education Video */}
      <div className="relative w-full md:h-screen h-auto overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full md:h-full md:object-cover h-auto object-contain"
        >
          <source src="/assets/Cover/education.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Personal Skills Video */}
      <div ref={lastSectionRef} className="relative w-full md:h-screen h-auto overflow-hidden bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full md:h-full md:object-cover h-auto object-contain"
          onError={(e) => console.error('Video failed to load:', e)}
        >
          <source src="/assets/Cover/personal skills.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Footer */}
        <div className="absolute bottom-4 w-full text-center z-10">
          <p className="text-white/80 text-sm md:text-base drop-shadow-lg">Made with ❤️ by Anushka</p>
        </div>
      </div>
    </div>
  );
}
