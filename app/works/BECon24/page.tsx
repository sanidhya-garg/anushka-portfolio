'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';

export default function BECon24() {
  useEffect(() => {
    document.title = 'BECon24 | Anushka Portfolio';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activePage="works" />

      {/* Top section with navbar and video */}
      <div 
        className="h-screen flex flex-col overflow-hidden bg-cover bg-center bg-no-repeat pt-0"
        style={{ backgroundImage: "url('/assets/BECon24/background.jpg')" }}
      >
        {/* Navbar with crystal/glass effect and white line underneath */}
        <nav className="bg-white/10 backdrop-blur-md border-b border-white/30 shadow-sm">
          <div className="px-8 py-4 flex justify-center items-center">
            <Image
              src="/assets/BECon24/logo.svg"
              alt="BECon24 Logo"
              width={150}
              height={50}
              className="h-12 w-auto"
            />
          </div>
        </nav>

        {/* Video section - fills remaining height */}
        <div className="flex-1 relative flex items-center justify-center bg-black">
          <video
            className="w-full h-full"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/assets/BECon24/movie.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* About section with background */}
      <div 
        className="min-h-screen bg-cover bg-center bg-no-repeat px-8 md:px-16 lg:px-24 pt-20"
        style={{ backgroundImage: "url('/assets/BECon24/background.jpg')" }}
      >
        <div className="max-w-6xl mb-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
            About BECon'24
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white/95 leading-relaxed max-w-5xl font-light">
            BECon'24 is the flagship Business and Entrepreneurship Conclave of IIT Delhi, bringing together 
            visionaries, innovators, and industry leaders to celebrate the spirit of entrepreneurship. 
            This premier event serves as a dynamic platform for aspiring entrepreneurs to connect, learn, 
            and transform their ideas into reality, fostering innovation and business excellence.
          </p>
        </div>
        
        {/* Instagram Grid - first row */}
        <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto pb-3">
          {[1, 2, 3].map((i) => (
            <div 
              key={i} 
              className="aspect-square bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden"
            >
              <Image
                src={`/assets/BECon24/grid/${i}.png`}
                alt={`BECon24 Gallery ${i}`}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Grid continuation section */}
      <div className="px-8 md:px-16 lg:px-24 pt-3 pb-20" style={{ backgroundColor: '#023756' }}>
        {/* Second row - at the junction */}
        <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto mb-6">
          <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
            <Image
              src="/assets/BECon24/grid/4.jpg"
              alt="BECon24 Gallery 4"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-lg overflow-hidden flex items-center justify-center">
            <span className="text-white/50 text-xl">Coming Soon</span>
          </div>
          <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-lg overflow-hidden flex items-center justify-center">
            <span className="text-white/50 text-xl">Coming Soon</span>
          </div>
        </div>
        
        {/* Third row */}
        <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
            <Image
              src="/assets/BECon24/grid/7.png"
              alt="BECon24 Gallery 7"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
            <Image
              src="/assets/BECon24/grid/8.png"
              alt="BECon24 Gallery 8"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-lg overflow-hidden flex items-center justify-center">
            <span className="text-white/50 text-xl">Coming Soon</span>
          </div>
        </div>
      </div>

      {/* New section with background */}
      <div 
        className="min-h-screen bg-cover bg-center bg-no-repeat px-8 md:px-16 lg:px-24 py-20"
        style={{ backgroundImage: "url('/assets/BECon24/background.jpg')" }}
      >
        {/* Content for new section */}
      </div>

      {/* Solid color section */}
      <div className="min-h-screen px-8 md:px-16 lg:px-24 py-20" style={{ backgroundColor: '#023756' }}>
        {/* Content for solid color section */}
      </div>
    </div>
  );
}
