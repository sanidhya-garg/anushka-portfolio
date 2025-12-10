'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from './components/Navbar';

export default function Home() {
  const lastSectionRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When the last section is fully visible, navigate to works
          if (entry.isIntersecting && entry.intersectionRatio > 0.8) {
            setTimeout(() => {
              router.push('/works');
            }, 500);
          }
        });
      },
      { threshold: 0.8 }
    );

    if (lastSectionRef.current) {
      observer.observe(lastSectionRef.current);
    }

    return () => observer.disconnect();
  }, [router]);

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
      <div ref={lastSectionRef} className="relative w-full md:h-screen h-auto overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full md:h-full md:object-cover h-auto object-contain"
        >
          <source src="/assets/Cover/personal skills.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
