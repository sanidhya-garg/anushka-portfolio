'use client';

import { useState } from 'react';

interface NavbarProps {
  activePage: 'home' | 'works' | 'contact';
}

export default function Navbar({ activePage }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [worksDropdown, setWorksDropdown] = useState(false);

  return (
    <>
      {/* Crystal Navbar - Desktop */}
      <nav className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 px-8 py-4 bg-black/40 backdrop-blur-xl rounded-full border border-white/40 shadow-2xl shadow-red-500/20">
        <div className="flex items-center gap-8 text-base">
          <a href="/" className={`relative ${activePage === 'home' ? 'text-red-400' : 'text-white hover:text-red-400'} hover:scale-110 active:scale-95 transition-all duration-300 font-medium group`}>
            <span className="relative z-10">Home</span>
            <span className="absolute inset-0 bg-linear-to-r from-red-500/0 via-red-500/20 to-red-500/0 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
          
          <div 
            className="relative"
            onMouseEnter={() => setWorksDropdown(true)}
            onMouseLeave={() => setWorksDropdown(false)}
          >
            <a href="/works" className={`relative ${activePage === 'works' ? 'text-red-400' : 'text-white hover:text-red-400'} hover:scale-110 active:scale-95 transition-all duration-300 font-medium group`}>
              <span className="relative z-10">Works</span>
              <span className="absolute inset-0 bg-linear-to-r from-red-500/0 via-red-500/20 to-red-500/0 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
            
            {/* Dropdown Menu */}
            {worksDropdown && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[900px]">
                <div className="bg-white/95 backdrop-blur-xl rounded-3xl border border-gray-200 shadow-2xl p-8">
                <div className="grid grid-cols-3 gap-6">
                  <a href="/works/TedX" className="group relative overflow-hidden rounded-xl border border-gray-200 hover:border-red-400 transition-all duration-300 hover:shadow-xl">
                    <div className="relative h-56">
                      <img src="/assets/Tedx/3.jpg" alt="TEDx" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="text-white font-bold text-xl mb-1 drop-shadow-lg">TEDx</h3>
                        <p className="text-white/90 text-sm drop-shadow-md">Event Design & Branding</p>
                      </div>
                      <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </a>
                  
                  <a href="/works/BECon24" className="group relative overflow-hidden rounded-xl border border-gray-200 hover:border-red-400 transition-all duration-300 hover:shadow-xl">
                    <div className="relative h-56">
                      <img src="/assets/BECon24/background.jpg" alt="BECon24" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="text-white font-bold text-xl mb-1 drop-shadow-lg">BECon24</h3>
                        <p className="text-white/90 text-sm drop-shadow-md">Conference Branding</p>
                      </div>
                      <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </a>
                  
                  <a href="/works/BHM" className="group relative overflow-hidden rounded-xl border border-gray-200 hover:border-red-400 transition-all duration-300 hover:shadow-xl">
                    <div className="relative h-56">
                      <img src="/assets/BHM/1.jpg" alt="BHM" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="text-white font-bold text-xl mb-1 drop-shadow-lg">BHM</h3>
                        <p className="text-white/90 text-sm drop-shadow-md">Brand Identity</p>
                      </div>
                      <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
                </div>
              </div>
            )}
          </div>
          
          <a href="/contact" className={`relative ${activePage === 'contact' ? 'text-red-400' : 'text-white hover:text-red-400'} hover:scale-110 active:scale-95 transition-all duration-300 font-medium group`}>
            <span className="relative z-10">Contact</span>
            <span className="absolute inset-0 bg-linear-to-r from-red-500/0 via-red-500/20 to-red-500/0 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden fixed top-4 right-4 z-50 p-3 bg-black/40 backdrop-blur-xl rounded-full border border-white/40 shadow-lg"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span className={`w-full h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-full h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-full h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </button>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 right-0 h-screen w-64 bg-black/95 backdrop-blur-xl border-l border-white/20 z-40 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col gap-6 pt-20 px-8">
          <a href="/" onClick={() => setMenuOpen(false)} className={`${activePage === 'home' ? 'text-red-400' : 'text-white hover:text-red-400'} text-lg font-medium transition-colors`}>
            Home
          </a>
          <a href="/works" onClick={() => setMenuOpen(false)} className={`${activePage === 'works' ? 'text-red-400' : 'text-white hover:text-red-400'} text-lg font-medium transition-colors`}>
            Works
          </a>
          <div className="flex flex-col gap-3 pl-4 border-l-2 border-white/20">
            <a href="/works/TedX" onClick={() => setMenuOpen(false)} className="text-white/80 hover:text-red-400 text-base transition-colors">
              TEDx
            </a>
            <a href="/works/BECon24" onClick={() => setMenuOpen(false)} className="text-white/80 hover:text-red-400 text-base transition-colors">
              BECon24
            </a>
            <a href="/works/BHM" onClick={() => setMenuOpen(false)} className="text-white/80 hover:text-red-400 text-base transition-colors">
              BHM
            </a>
          </div>
          <a href="/contact" onClick={() => setMenuOpen(false)} className={`${activePage === 'contact' ? 'text-red-400' : 'text-white hover:text-red-400'} text-lg font-medium transition-colors`}>
            Contact
          </a>
        </div>
      </div>
    </>
  );
}
